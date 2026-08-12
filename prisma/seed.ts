import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../lib/generated/prisma/client";
import { SEED_PRODUCTS, SEED_TESTIMONIALS } from "./seed-data";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  for (const product of SEED_PRODUCTS) {
    await prisma.product.upsert({
      where: { id: product.id },
      create: product,
      update: product,
    });
  }
  console.log(`Seeded ${SEED_PRODUCTS.length} products`);

  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({ data: SEED_TESTIMONIALS });
  console.log(`Seeded ${SEED_TESTIMONIALS.length} testimonials`);

  const DEMO_VOUCHERS = [
    { code: "CHAO10", type: "PERCENT" as const, value: 10, minOrderTotal: 0 },
    {
      code: "GIAM50K",
      type: "FIXED" as const,
      value: 50000,
      minOrderTotal: 300000,
    },
  ];
  for (const voucher of DEMO_VOUCHERS) {
    await prisma.voucher.upsert({
      where: { code: voucher.code },
      create: voucher,
      update: voucher,
    });
  }
  console.log(`Seeded ${DEMO_VOUCHERS.length} vouchers`);

  const demoPasswordHash = await bcrypt.hash("Demo123456", 10);
  const demoUser = await prisma.user.upsert({
    where: { email: "demo@fashionshop.vn" },
    update: {},
    create: {
      fullName: "Khách Demo",
      email: "demo@fashionshop.vn",
      passwordHash: demoPasswordHash,
      role: "CUSTOMER",
    },
  });

  const existingTopup = await prisma.walletTransaction.findFirst({
    where: { userId: demoUser.id, type: "TOPUP" },
  });
  if (!existingTopup) {
    const topupAmount = 1000000;
    await prisma.$transaction([
      prisma.user.update({
        where: { id: demoUser.id },
        data: { walletBalance: { increment: topupAmount } },
      }),
      prisma.walletTransaction.create({
        data: {
          userId: demoUser.id,
          type: "TOPUP",
          amount: topupAmount,
          balanceAfter: topupAmount,
          description: "Nạp tiền vào ví (seed demo)",
        },
      }),
    ]);
  }
  console.log("Seeded demo customer: demo@fashionshop.vn / Demo123456");

  const adminPasswordHash = await bcrypt.hash("Admin123456", 10);
  await prisma.user.upsert({
    where: { email: "admin@fashionshop.vn" },
    update: { role: "ADMIN" },
    create: {
      fullName: "Quản trị viên",
      email: "admin@fashionshop.vn",
      passwordHash: adminPasswordHash,
      role: "ADMIN",
    },
  });
  console.log("Seeded admin: admin@fashionshop.vn / Admin123456");

  // ===================== Dữ liệu khách hàng & lịch sử mua hàng =====================

  const SEED_CUSTOMERS = [
    { fullName: "Nguyễn Thị Hồng Nhung", email: "hong.nhung@fashionshop.vn", phone: "0901234501", address: "12 Nguyễn Trãi, Q.1", city: "TP. Hồ Chí Minh" },
    { fullName: "Trần Văn Đức", email: "van.duc@fashionshop.vn", phone: "0901234502", address: "45 Lê Lợi", city: "Hà Nội" },
    { fullName: "Lê Thị Mỹ Duyên", email: "my.duyen@fashionshop.vn", phone: "0901234503", address: "78 Trần Phú", city: "Đà Nẵng" },
    { fullName: "Phạm Quốc Bảo", email: "quoc.bao@fashionshop.vn", phone: "0901234504", address: "23 Hai Bà Trưng", city: "TP. Hồ Chí Minh" },
    { fullName: "Hoàng Thị Kim Ngân", email: "kim.ngan@fashionshop.vn", phone: "0901234505", address: "56 Nguyễn Huệ", city: "Cần Thơ" },
    { fullName: "Vũ Minh Tuấn", email: "minh.tuan@fashionshop.vn", phone: "0901234506", address: "89 Điện Biên Phủ", city: "Hà Nội" },
    { fullName: "Đặng Thị Thanh Thảo", email: "thanh.thao@fashionshop.vn", phone: "0901234507", address: "34 Lý Thường Kiệt", city: "Hải Phòng" },
    { fullName: "Bùi Anh Khoa", email: "anh.khoa@fashionshop.vn", phone: "0901234508", address: "67 Phan Đình Phùng", city: "TP. Hồ Chí Minh" },
    { fullName: "Đỗ Thị Ngọc Ánh", email: "ngoc.anh@fashionshop.vn", phone: "0901234509", address: "90 Trường Chinh", city: "Đà Nẵng" },
    { fullName: "Ngô Văn Phát", email: "van.phat@fashionshop.vn", phone: "0901234510", address: "15 Cách Mạng Tháng 8", city: "TP. Hồ Chí Minh" },
  ];

  const buyers = [
    { id: demoUser.id, fullName: demoUser.fullName, email: demoUser.email, phone: "0909999999", address: "1 Nguyễn Văn Linh", city: "TP. Hồ Chí Minh" },
  ];
  for (const c of SEED_CUSTOMERS) {
    const user = await prisma.user.upsert({
      where: { email: c.email },
      update: {},
      create: {
        fullName: c.fullName,
        email: c.email,
        passwordHash: demoPasswordHash,
        role: "CUSTOMER",
        phone: c.phone,
        address: c.address,
      },
    });
    buyers.push({ id: user.id, fullName: c.fullName, email: c.email, phone: c.phone, address: c.address, city: c.city });
  }
  console.log(`Seeded ${SEED_CUSTOMERS.length} khách hàng cho dữ liệu mua hàng`);

  const allProducts = await prisma.product.findMany();

  function randomInt(min: number, max: number): number {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  function pickRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function pickStatus(): "PLACED" | "PROCESSING" | "SHIPPING" | "DELIVERED" | "CANCELLED" {
    const r = Math.random();
    if (r < 0.55) return "DELIVERED";
    if (r < 0.7) return "SHIPPING";
    if (r < 0.8) return "PROCESSING";
    if (r < 0.95) return "PLACED";
    return "CANCELLED";
  }

  const ORDER_COUNT = 80;
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  let createdOrders = 0;

  for (let i = 1; i <= ORDER_COUNT; i++) {
    const orderNumber = `SEED${String(i).padStart(4, "0")}`;
    const existing = await prisma.order.findUnique({ where: { orderNumber } });
    if (existing) continue;

    const buyer = pickRandom(buyers);
    const itemCount = randomInt(1, 4);
    const chosenProducts = new Set<string>();
    while (chosenProducts.size < itemCount && chosenProducts.size < allProducts.length) {
      chosenProducts.add(pickRandom(allProducts).id);
    }

    const items = [...chosenProducts].map((productId) => {
      const product = allProducts.find((p) => p.id === productId)!;
      const quantity = randomInt(1, 3);
      const size = product.sizes.length > 0 ? pickRandom(product.sizes) : "";
      return {
        productId: product.id,
        name: product.name,
        price: product.price,
        tone: product.tone,
        size,
        quantity,
      };
    });

    const subtotal = items.reduce((sum, it) => sum + it.price * it.quantity, 0);

    let voucherCode: string | null = null;
    let discountAmount = 0;
    if (Math.random() < 0.2) {
      if (Math.random() < 0.5) {
        voucherCode = "CHAO10";
        discountAmount = Math.round(subtotal * 0.1);
      } else if (subtotal >= 300000) {
        voucherCode = "GIAM50K";
        discountAmount = 50000;
      }
    }

    const shippingFee = 30000;
    const total = Math.max(0, subtotal + shippingFee - discountAmount);
    const paymentMethod = pickRandom(["COD", "BANK", "CARD", "QR"] as const);
    const status = pickStatus();
    const daysAgo = randomInt(1, 150);
    const createdAt = new Date(Date.now() - daysAgo * MS_PER_DAY);

    await prisma.order.create({
      data: {
        orderNumber,
        userId: buyer.id,
        name: buyer.fullName,
        phone: buyer.phone,
        email: buyer.email,
        address: buyer.address,
        city: buyer.city,
        paymentMethod,
        subtotal,
        shippingFee,
        voucherCode,
        discountAmount,
        total,
        status,
        createdAt,
        items: { create: items },
      },
    });
    createdOrders++;
  }
  console.log(`Seeded ${createdOrders} đơn hàng mới (tổng cộng hướng tới ${ORDER_COUNT} đơn dữ liệu mua hàng)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
