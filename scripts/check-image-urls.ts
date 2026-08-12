import { SEED_PRODUCTS } from "../prisma/seed-data";

const ALLOWED_HOSTS = [
  "images.pexels.com",
  "images.unsplash.com",
  "cdn.pixabay.com",
  "upload.wikimedia.org",
];

type CheckResult = { url: string; ok: boolean; reason?: string };

async function checkUrl(url: string): Promise<CheckResult> {
  const host = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return null;
    }
  })();
  if (!host || !ALLOWED_HOSTS.includes(host)) {
    return { url, ok: false, reason: `domain không nằm trong allowlist (${host ?? "URL không hợp lệ"})` };
  }

  try {
    let res = await fetch(url, { method: "HEAD" });
    if (!res.ok || res.status === 405) {
      res = await fetch(url, { method: "GET", headers: { Range: "bytes=0-0" } });
    }
    if (!res.ok && res.status !== 206) {
      return { url, ok: false, reason: `HTTP ${res.status}` };
    }
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.startsWith("image/")) {
      return { url, ok: false, reason: `content-type không phải ảnh (${contentType || "không rõ"})` };
    }
    return { url, ok: true };
  } catch (err) {
    return { url, ok: false, reason: err instanceof Error ? err.message : String(err) };
  }
}

async function main() {
  const entries = SEED_PRODUCTS.flatMap((p) =>
    (p.images ?? []).map((url) => ({ productId: p.id, url })),
  );

  const uniqueUrls = [...new Set(entries.map((e) => e.url))];
  const results = new Map<string, CheckResult>();
  const CONCURRENCY = 10;
  let cursor = 0;
  async function worker() {
    while (cursor < uniqueUrls.length) {
      const url = uniqueUrls[cursor++];
      results.set(url, await checkUrl(url));
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const missingImages = SEED_PRODUCTS.filter((p) => !p.images || p.images.length === 0);
  const failuresByProduct = new Map<string, CheckResult[]>();
  for (const { productId, url } of entries) {
    const result = results.get(url)!;
    if (!result.ok) {
      const list = failuresByProduct.get(productId) ?? [];
      list.push(result);
      failuresByProduct.set(productId, list);
    }
  }

  if (missingImages.length > 0) {
    console.log(`\n${missingImages.length} sản phẩm chưa có ảnh nào:`);
    for (const p of missingImages) console.log(`  - ${p.id}`);
  }

  if (failuresByProduct.size > 0) {
    console.log(`\n${failuresByProduct.size} sản phẩm có URL ảnh lỗi:`);
    for (const [productId, fails] of failuresByProduct) {
      console.log(`  - ${productId}:`);
      for (const f of fails) console.log(`      ${f.url} → ${f.reason}`);
    }
  }

  const totalFailed = [...results.values()].filter((r) => !r.ok).length;
  console.log(
    `\nĐã kiểm tra ${uniqueUrls.length} URL ảnh (${SEED_PRODUCTS.length} sản phẩm): ${uniqueUrls.length - totalFailed} OK, ${totalFailed} lỗi.`,
  );

  if (totalFailed > 0 || missingImages.length > 0) {
    process.exit(1);
  }
}

main();
