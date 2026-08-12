"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { SHIPPING_FEE, ORDER_STATUS_FLOW } from "@/lib/constants";
import { requireAdmin } from "@/lib/auth/require-admin";
import { computeVoucherDiscount } from "@/lib/actions/vouchers";
import type { ActionResult } from "@/lib/actions/auth";

const shippingSchema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập họ tên"),
  phone: z.string().trim().min(1, "Vui lòng nhập số điện thoại"),
  email: z.string().trim().email("Email không hợp lệ"),
  address: z.string().trim().min(1, "Vui lòng nhập địa chỉ"),
  city: z.string().trim().min(1, "Vui lòng nhập tỉnh/thành phố"),
  zip: z.string().trim().optional(),
});

const placeOrderSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string(),
        quantity: z.number().int().min(1),
        size: z.string().optional().default(""),
      }),
    )
    .min(1, "Giỏ hàng đang trống"),
  shipping: shippingSchema,
  paymentMethod: z.enum(["cod", "bank", "card", "wallet", "qr"]),
  voucherCode: z.string().trim().optional(),
});

export type PlaceOrderResult =
  | { success: true; orderNumber: string }
  | { success: false; error: string };

function generateOrderNumber() {
  return `FS${Math.floor(100000 + Math.random() * 900000)}`;
}

function isUniqueConstraintError(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === "P2002"
  );
}

export async function placeOrderAction(input: {
  items: { id: string; quantity: number; size?: string }[];
  shipping: {
    name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    zip?: string;
  };
  paymentMethod: string;
  voucherCode?: string;
}): Promise<PlaceOrderResult> {
  const session = await auth();
  if (!session?.user) {
    return { success: false, error: "Vui lòng đăng nhập để đặt hàng" };
  }
  const userId = session.user.id;

  const parsed = placeOrderSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ",
    };
  }

  const productIds = parsed.data.items.map((item) => item.id);
  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
  });
  const productMap = new Map(products.map((p) => [p.id, p]));

  let subtotal = 0;
  const orderItemsData: {
    productId: string;
    name: string;
    price: number;
    tone: number;
    size: string;
    quantity: number;
  }[] = [];

  for (const item of parsed.data.items) {
    const product = productMap.get(item.id);
    if (!product) {
      return { success: false, error: "Một số sản phẩm không còn tồn tại" };
    }
    const size = item.size ?? "";
    if (product.sizes.length > 0 && !product.sizes.includes(size)) {
      return {
        success: false,
        error: `Vui lòng chọn size hợp lệ cho "${product.name}"`,
      };
    }
    subtotal += product.price * item.quantity;
    orderItemsData.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      tone: product.tone,
      size: product.sizes.length > 0 ? size : "",
      quantity: item.quantity,
    });
  }

  let discountAmount = 0;
  let voucherCode: string | null = null;
  if (parsed.data.voucherCode) {
    const voucherResult = await computeVoucherDiscount(
      parsed.data.voucherCode,
      subtotal,
    );
    if (!voucherResult.success) {
      return { success: false, error: voucherResult.error };
    }
    discountAmount = voucherResult.discountAmount;
    voucherCode = voucherResult.code;
  }

  const shippingFee = SHIPPING_FEE;
  const total = Math.max(0, subtotal + shippingFee - discountAmount);
  const paymentMethodEnum = parsed.data.paymentMethod.toUpperCase() as
    | "COD"
    | "BANK"
    | "CARD"
    | "WALLET"
    | "QR";

  try {
    const orderNumber = await prisma.$transaction(async (tx) => {
      if (paymentMethodEnum === "WALLET") {
        const updated = await tx.user.updateMany({
          where: { id: userId, walletBalance: { gte: total } },
          data: { walletBalance: { decrement: total } },
        });
        if (updated.count === 0) {
          throw new Error("INSUFFICIENT_BALANCE");
        }
      }

      const quantityByProductId = new Map<string, number>();
      for (const item of orderItemsData) {
        quantityByProductId.set(
          item.productId,
          (quantityByProductId.get(item.productId) ?? 0) + item.quantity,
        );
      }
      for (const [productId, qty] of quantityByProductId) {
        const updatedStock = await tx.product.updateMany({
          where: { id: productId, stock: { gte: qty } },
          data: { stock: { decrement: qty } },
        });
        if (updatedStock.count === 0) {
          throw new Error(`OUT_OF_STOCK:${productId}`);
        }
      }

      let createdOrderNumber: string | null = null;
      let createdOrderId: string | null = null;

      for (let attempt = 0; attempt < 5 && !createdOrderNumber; attempt += 1) {
        const candidate = generateOrderNumber();
        try {
          const order = await tx.order.create({
            data: {
              orderNumber: candidate,
              userId,
              name: parsed.data.shipping.name,
              phone: parsed.data.shipping.phone,
              email: parsed.data.shipping.email,
              address: parsed.data.shipping.address,
              city: parsed.data.shipping.city,
              zip: parsed.data.shipping.zip || null,
              paymentMethod: paymentMethodEnum,
              subtotal,
              shippingFee,
              voucherCode,
              discountAmount,
              total,
              items: { create: orderItemsData },
            },
          });
          createdOrderNumber = order.orderNumber;
          createdOrderId = order.id;
        } catch (error) {
          if (isUniqueConstraintError(error)) continue;
          throw error;
        }
      }

      if (!createdOrderNumber || !createdOrderId) {
        throw new Error("Không thể tạo mã đơn hàng, vui lòng thử lại.");
      }

      if (paymentMethodEnum === "WALLET") {
        const user = await tx.user.findUniqueOrThrow({
          where: { id: userId },
        });
        await tx.walletTransaction.create({
          data: {
            userId,
            type: "ORDER_PAYMENT",
            amount: -total,
            balanceAfter: user.walletBalance,
            orderId: createdOrderId,
            description: `Thanh toán đơn hàng #${createdOrderNumber}`,
          },
        });
      }

      return createdOrderNumber;
    });

    return { success: true, orderNumber };
  } catch (error) {
    if (error instanceof Error && error.message === "INSUFFICIENT_BALANCE") {
      return {
        success: false,
        error: "Số dư ví không đủ để thanh toán đơn hàng này",
      };
    }
    if (error instanceof Error && error.message.startsWith("OUT_OF_STOCK:")) {
      const productId = error.message.slice("OUT_OF_STOCK:".length);
      const name = productMap.get(productId)?.name ?? "Sản phẩm";
      return {
        success: false,
        error: `"${name}" hiện không đủ số lượng tồn kho. Vui lòng giảm số lượng hoặc xoá khỏi giỏ hàng.`,
      };
    }
    throw error;
  }
}

const updateOrderStatusSchema = z.object({
  status: z.enum(ORDER_STATUS_FLOW),
});

export async function updateOrderStatusAction(
  orderId: string,
  status: string,
): Promise<ActionResult> {
  await requireAdmin();

  const parsed = updateOrderStatusSchema.safeParse({ status });
  if (!parsed.success) {
    return { success: false, error: "Trạng thái không hợp lệ" };
  }
  const newStatus = parsed.data.status;

  try {
    await prisma.$transaction(async (tx) => {
      const order = await tx.order.findUniqueOrThrow({
        where: { id: orderId },
        include: { items: true },
      });

      if (order.status === newStatus) return;

      if (newStatus === "CANCELLED" && order.status !== "CANCELLED") {
        for (const item of order.items) {
          await tx.product.update({
            where: { id: item.productId },
            data: { stock: { increment: item.quantity } },
          });
        }
      } else if (order.status === "CANCELLED" && newStatus !== "CANCELLED") {
        for (const item of order.items) {
          const updated = await tx.product.updateMany({
            where: { id: item.productId, stock: { gte: item.quantity } },
            data: { stock: { decrement: item.quantity } },
          });
          if (updated.count === 0) {
            throw new Error(`OUT_OF_STOCK:${item.name}`);
          }
        }
      }

      await tx.order.update({
        where: { id: orderId },
        data: { status: newStatus },
      });
    });
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("OUT_OF_STOCK:")) {
      const name = error.message.slice("OUT_OF_STOCK:".length);
      return {
        success: false,
        error: `"${name}" hiện không đủ tồn kho để khôi phục đơn hàng này.`,
      };
    }
    throw error;
  }

  revalidatePath("/admin/orders");
  revalidatePath("/account/orders");

  return { success: true };
}
