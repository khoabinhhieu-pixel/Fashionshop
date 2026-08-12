"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { requireAdmin } from "@/lib/auth/require-admin";
import { prisma } from "@/lib/prisma";
import { formatVND } from "@/lib/format";
import type { ActionResult } from "@/lib/actions/auth";

export type VoucherValidationResult =
  | { success: true; code: string; discountAmount: number }
  | { success: false; error: string };

export async function computeVoucherDiscount(
  rawCode: string,
  subtotal: number,
): Promise<VoucherValidationResult> {
  const code = rawCode.trim().toUpperCase();
  if (!code) {
    return { success: false, error: "Vui lòng nhập mã giảm giá" };
  }

  const voucher = await prisma.voucher.findUnique({ where: { code } });
  if (!voucher || !voucher.active) {
    return { success: false, error: "Mã giảm giá không hợp lệ" };
  }
  if (voucher.expiresAt && voucher.expiresAt < new Date()) {
    return { success: false, error: "Mã giảm giá đã hết hạn" };
  }
  if (subtotal < voucher.minOrderTotal) {
    return {
      success: false,
      error: `Đơn hàng tối thiểu ${formatVND(voucher.minOrderTotal)} để dùng mã này`,
    };
  }

  const rawDiscount =
    voucher.type === "PERCENT"
      ? Math.round((subtotal * voucher.value) / 100)
      : voucher.value;
  const discountAmount = Math.min(rawDiscount, subtotal);

  return { success: true, code: voucher.code, discountAmount };
}

export async function validateVoucherAction(
  code: string,
  subtotal: number,
): Promise<VoucherValidationResult> {
  const session = await auth();
  if (!session?.user) {
    return { success: false, error: "Vui lòng đăng nhập để dùng mã giảm giá" };
  }
  return computeVoucherDiscount(code, subtotal);
}

const voucherSchema = z.object({
  code: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập mã")
    .regex(/^[A-Za-z0-9]+$/, "Mã chỉ gồm chữ và số"),
  type: z.enum(["PERCENT", "FIXED"]),
  value: z.coerce.number().int().min(1, "Giá trị không hợp lệ"),
  minOrderTotal: z.coerce.number().int().min(0).default(0),
  expiresAt: z.string().optional(),
});

export async function createVoucherAction(
  formData: FormData,
): Promise<ActionResult> {
  await requireAdmin();

  const parsed = voucherSchema.safeParse({
    code: String(formData.get("code") ?? ""),
    type: String(formData.get("type") ?? "PERCENT"),
    value: String(formData.get("value") ?? ""),
    minOrderTotal: String(formData.get("minOrderTotal") ?? "0"),
    expiresAt: String(formData.get("expiresAt") ?? "") || undefined,
  });
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ",
    };
  }

  if (parsed.data.type === "PERCENT" && parsed.data.value > 100) {
    return { success: false, error: "Giảm theo % tối đa 100" };
  }

  try {
    await prisma.voucher.create({
      data: {
        code: parsed.data.code.toUpperCase(),
        type: parsed.data.type,
        value: parsed.data.value,
        minOrderTotal: parsed.data.minOrderTotal,
        expiresAt: parsed.data.expiresAt
          ? new Date(parsed.data.expiresAt)
          : null,
      },
    });
  } catch (error) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      (error as { code?: string }).code === "P2002"
    ) {
      return { success: false, error: "Mã giảm giá này đã tồn tại" };
    }
    throw error;
  }

  revalidatePath("/admin/vouchers");
  return { success: true };
}

export async function toggleVoucherActiveAction(
  id: string,
  active: boolean,
): Promise<ActionResult> {
  await requireAdmin();
  await prisma.voucher.update({ where: { id }, data: { active } });
  revalidatePath("/admin/vouchers");
  return { success: true };
}

export async function deleteVoucherAction(id: string): Promise<ActionResult> {
  await requireAdmin();
  await prisma.voucher.delete({ where: { id } });
  revalidatePath("/admin/vouchers");
  return { success: true };
}
