"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth/require-admin";
import { prisma } from "@/lib/prisma";
import { SITE_IMAGE_SLOTS } from "@/lib/site-images";
import type { ActionResult } from "@/lib/actions/auth";
import {
  saveUploadedImages,
  deleteUploadedImages,
  MAX_IMAGE_BYTES,
  ACCEPTED_IMAGE_TYPES,
} from "@/lib/storage/product-images";

const imageFileSchema = z
  .instanceof(File)
  .refine((f) => f.size <= MAX_IMAGE_BYTES, "Ảnh tối đa 5MB")
  .refine(
    (f) =>
      ACCEPTED_IMAGE_TYPES.includes(
        f.type as (typeof ACCEPTED_IMAGE_TYPES)[number],
      ),
    "Chỉ chấp nhận ảnh JPG, PNG, WEBP hoặc GIF",
  );

const imageUrlSchema = z.string().trim().url("URL ảnh không hợp lệ");

export async function updateSiteImageAction(
  key: string,
  formData: FormData,
): Promise<ActionResult> {
  await requireAdmin();

  const slot = SITE_IMAGE_SLOTS.find((s) => s.key === key);
  if (!slot) {
    return { success: false, error: "Vị trí ảnh không hợp lệ" };
  }

  const file = formData.get("image");
  const rawUrl = String(formData.get("imageUrl") ?? "").trim();
  const clear = formData.get("clear") === "1";

  let newUrl: string | null = null;

  if (file instanceof File && file.size > 0) {
    const parsed = imageFileSchema.safeParse(file);
    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0]?.message ?? "Ảnh không hợp lệ",
      };
    }
    const [uploaded] = await saveUploadedImages([file]);
    newUrl = uploaded;
  } else if (rawUrl) {
    const parsed = imageUrlSchema.safeParse(rawUrl);
    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.issues[0]?.message ?? "URL ảnh không hợp lệ",
      };
    }
    newUrl = parsed.data;
  } else if (!clear) {
    return { success: false, error: "Vui lòng chọn ảnh hoặc dán URL" };
  }

  const existing = await prisma.siteImage.findUnique({ where: { key } });

  await prisma.siteImage.upsert({
    where: { key },
    create: { key, url: newUrl },
    update: { url: newUrl },
  });

  if (existing?.url) {
    await deleteUploadedImages([existing.url]);
  }

  revalidatePath("/");
  revalidatePath("/admin/homepage");

  return { success: true };
}
