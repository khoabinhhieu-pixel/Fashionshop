import "server-only";
import { prisma } from "@/lib/prisma";

export async function getSiteImages(): Promise<Record<string, string>> {
  const rows = await prisma.siteImage.findMany();
  return Object.fromEntries(
    rows.filter((r) => r.url).map((r) => [r.key, r.url as string]),
  );
}
