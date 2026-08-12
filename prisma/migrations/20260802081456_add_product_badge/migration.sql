-- CreateEnum
CREATE TYPE "ProductBadge" AS ENUM ('NONE', 'MOI', 'BAN_CHAY', 'SALE', 'HOT');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "badge" "ProductBadge" NOT NULL DEFAULT 'NONE';
