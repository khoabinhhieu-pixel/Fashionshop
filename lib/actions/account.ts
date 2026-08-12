"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import type { ActionResult } from "@/lib/actions/auth";

function isErrorCode(error: unknown, code: string): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    (error as { code?: string }).code === code
  );
}

const profileSchema = z.object({
  fullName: z.string().trim().min(1, "Vui lòng nhập họ tên"),
  email: z.string().trim().email("Email không hợp lệ"),
  phone: z.string().trim().optional(),
  address: z.string().trim().optional(),
});

export async function updateProfileAction(input: {
  fullName: string;
  email: string;
  phone?: string;
  address?: string;
}): Promise<ActionResult> {
  const session = await auth();
  if (!session?.user) {
    return { success: false, error: "Vui lòng đăng nhập" };
  }

  const parsed = profileSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ",
    };
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: {
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        address: parsed.data.address || null,
      },
    });
  } catch (error) {
    if (isErrorCode(error, "P2002")) {
      return { success: false, error: "Email này đã được sử dụng." };
    }
    throw error;
  }

  revalidatePath("/account");
  revalidatePath("/account/profile");

  return { success: true };
}

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Vui lòng nhập mật khẩu hiện tại"),
    newPassword: z.string().min(6, "Mật khẩu mới tối thiểu 6 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu nhập lại không khớp",
    path: ["confirmPassword"],
  });

export async function changePasswordAction(input: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}): Promise<ActionResult> {
  const session = await auth();
  if (!session?.user) {
    return { success: false, error: "Vui lòng đăng nhập" };
  }

  const parsed = changePasswordSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Dữ liệu không hợp lệ",
    };
  }

  const user = await prisma.user.findUniqueOrThrow({
    where: { id: session.user.id },
  });

  const valid = await bcrypt.compare(
    parsed.data.currentPassword,
    user.passwordHash,
  );
  if (!valid) {
    return { success: false, error: "Mật khẩu hiện tại không đúng" };
  }

  const passwordHash = await bcrypt.hash(parsed.data.newPassword, 10);
  await prisma.user.update({
    where: { id: session.user.id },
    data: { passwordHash },
  });

  return { success: true };
}
