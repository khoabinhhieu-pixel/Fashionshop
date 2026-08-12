import "server-only";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@/lib/generated/prisma/client";

export function getProducts(options?: {
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  size?: string;
}) {
  const { gender, minPrice, maxPrice, category, size } = options ?? {};
  const where: Prisma.ProductWhereInput = {};

  if (gender === "nam" || gender === "nu") {
    where.OR = [{ gender }, { gender: "unisex" }];
  }
  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {
      ...(minPrice !== undefined ? { gte: minPrice } : {}),
      ...(maxPrice !== undefined ? { lte: maxPrice } : {}),
    };
  }
  if (category) {
    where.category = category;
  }
  if (size) {
    where.sizes = { has: size };
  }

  return prisma.product.findMany({ where, orderBy: { createdAt: "desc" } });
}

export async function getProductFilterOptions(): Promise<{
  categories: string[];
  sizes: string[];
}> {
  const products = await prisma.product.findMany({
    select: { category: true, sizes: true },
  });
  const categories = [...new Set(products.map((p) => p.category))].sort();
  const sizes = [...new Set(products.flatMap((p) => p.sizes))];
  return { categories, sizes };
}

export function getProductById(id: string) {
  return prisma.product.findUnique({ where: { id } });
}

export function getNewArrivals(limit: number) {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export function searchProducts(query: string, limit = 5) {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
