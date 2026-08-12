import "server-only";
import { prisma } from "@/lib/prisma";
import type { Product } from "@/lib/data/products";

export async function getFeaturedProducts(limit = 8): Promise<Product[]> {
  const topSellers = await prisma.orderItem.groupBy({
    by: ["productId"],
    _count: { productId: true },
    orderBy: { _count: { productId: "desc" } },
    take: limit,
  });
  const topIds = topSellers.map((row) => row.productId);

  const products = await prisma.product.findMany({ where: { id: { in: topIds } } });
  const byId = new Map(products.map((p) => [p.id, p]));
  const ordered = topIds.map((id) => byId.get(id)).filter((p): p is Product => Boolean(p));

  if (ordered.length < limit) {
    const fillers = await prisma.product.findMany({
      where: { id: { notIn: topIds } },
      orderBy: { createdAt: "desc" },
      take: limit - ordered.length,
    });
    ordered.push(...fillers);
  }

  return ordered;
}

export async function getRelatedProducts(
  product: Product,
  limit = 4,
): Promise<Product[]> {
  const orders = await prisma.orderItem.findMany({
    where: { productId: product.id },
    select: { orderId: true },
  });
  const orderIds = orders.map((o) => o.orderId);

  const coPurchased =
    orderIds.length > 0
      ? await prisma.orderItem.groupBy({
          by: ["productId"],
          where: { orderId: { in: orderIds }, productId: { not: product.id } },
          _count: { productId: true },
          orderBy: { _count: { productId: "desc" } },
        })
      : [];

  const sameCategory = await prisma.product.findMany({
    where: { category: product.category, id: { not: product.id } },
    select: { id: true },
  });

  const priceBand = product.price * 0.2;
  const similarPrice = await prisma.product.findMany({
    where: {
      id: { not: product.id },
      price: { gte: product.price - priceBand, lte: product.price + priceBand },
    },
    select: { id: true },
  });

  const orderedIds: string[] = [];
  for (const row of coPurchased) {
    if (!orderedIds.includes(row.productId)) orderedIds.push(row.productId);
  }
  for (const row of sameCategory) {
    if (!orderedIds.includes(row.id)) orderedIds.push(row.id);
  }
  for (const row of similarPrice) {
    if (!orderedIds.includes(row.id)) orderedIds.push(row.id);
  }
  const finalIds = orderedIds.slice(0, limit);

  const products = await prisma.product.findMany({ where: { id: { in: finalIds } } });
  const byId = new Map(products.map((p) => [p.id, p]));
  return finalIds.map((id) => byId.get(id)).filter((p): p is Product => Boolean(p));
}
