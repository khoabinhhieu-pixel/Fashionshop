-- CreateEnum
CREATE TYPE "VoucherType" AS ENUM ('PERCENT', 'FIXED');

-- AlterEnum
ALTER TYPE "PaymentMethod" ADD VALUE 'QR';

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "discountAmount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "voucherCode" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "color",
ADD COLUMN     "size" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "colors",
ADD COLUMN     "originalPrice" INTEGER,
ADD COLUMN     "sizes" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- CreateTable
CREATE TABLE "Voucher" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "VoucherType" NOT NULL,
    "value" INTEGER NOT NULL,
    "minOrderTotal" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voucher_code_key" ON "Voucher"("code");

