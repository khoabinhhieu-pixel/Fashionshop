import "server-only";
import { put, del } from "@vercel/blob";
import crypto from "crypto";
import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";

export const MAX_IMAGES_PER_PRODUCT = 8;
export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
] as const;

const EXT_BY_MIME: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

// Vercel Blob public URLs always end in this suffix — used to tell "ảnh
// do chính hệ thống upload" (an toàn để xoá) khỏi URL admin dán tay từ
// domain khác (không bao giờ được xoá).
const BLOB_HOSTNAME_SUFFIX = ".public.blob.vercel-storage.com";

const LOCAL_UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "products");
const LOCAL_UPLOAD_URL_PREFIX = "/uploads/products/";

// Vercel là môi trường serverless — hệ thống file chỉ tồn tại tạm thời trong
// một lần gọi hàm, ghi vào đĩa sẽ mất ngay sau đó nên bắt buộc phải dùng
// Vercel Blob khi deploy thật. Ở local dev chưa có BLOB_READ_WRITE_TOKEN thì
// tự động lưu tạm vào public/uploads/ để test upload ngay được, không cần
// tạo token; hễ có token (đúng lúc deploy) là quay lại dùng Blob như cũ.
function shouldUseLocalStorage(): boolean {
  return !process.env.BLOB_READ_WRITE_TOKEN;
}

export async function saveUploadedImages(files: File[]): Promise<string[]> {
  if (files.length === 0) return [];

  if (shouldUseLocalStorage()) {
    await mkdir(LOCAL_UPLOAD_DIR, { recursive: true });
    const uploaded: string[] = [];
    for (const file of files) {
      const ext = EXT_BY_MIME[file.type] ?? "jpg";
      const filename = `${crypto.randomUUID()}.${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(path.join(LOCAL_UPLOAD_DIR, filename), buffer);
      uploaded.push(`${LOCAL_UPLOAD_URL_PREFIX}${filename}`);
    }
    return uploaded;
  }

  const uploaded: string[] = [];
  for (const file of files) {
    const ext = EXT_BY_MIME[file.type] ?? "jpg";
    const pathname = `products/${crypto.randomUUID()}.${ext}`;
    const blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: false,
    });
    uploaded.push(blob.url);
  }
  return uploaded;
}

export async function deleteUploadedImages(urls: string[]): Promise<void> {
  const localPaths = urls.filter((url) => url.startsWith(LOCAL_UPLOAD_URL_PREFIX));
  await Promise.all(
    localPaths.map((url) =>
      unlink(path.join(process.cwd(), "public", url)).catch(() => {}),
    ),
  );

  const blobUrls = urls.filter((url) => {
    try {
      return new URL(url).hostname.endsWith(BLOB_HOSTNAME_SUFFIX);
    } catch {
      return false;
    }
  });
  if (blobUrls.length > 0) {
    await del(blobUrls).catch(() => {});
  }
}
