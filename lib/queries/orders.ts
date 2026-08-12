import "server-only";
import { prisma } from "@/lib/prisma";

export function getOrdersForUser(userId: string, limit = 10) {
  return prisma.order.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: { items: true },
  });
}

export function getOrderByNumberForUser(orderNumber: string, userId: string) {
  return prisma.order.findFirst({
    where: { orderNumber, userId },
    include: { items: true },
  });
}

export function getAllOrdersForAdmin() {
  return prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { items: true, user: { select: { fullName: true, email: true } } },
  });
}
