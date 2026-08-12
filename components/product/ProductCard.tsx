import Link from "next/link";
import ProductImage from "@/components/ui/ProductImage";
import AddToCartButton from "@/components/product/AddToCartButton";
import { ButtonLink } from "@/components/ui/Button";
import { formatVND, getDiscountPercent } from "@/lib/format";
import { PRODUCT_BADGE_LABEL, PRODUCT_BADGE_CLASS } from "@/lib/constants";
import type { Product } from "@/lib/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const onSale =
    product.originalPrice != null && product.originalPrice > product.price;
  const showManualBadge =
    product.badge !== "NONE" && !(product.badge === "SALE" && onSale);

  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden">
          <ProductImage
            src={product.images[0]}
            tone={product.tone}
            alt={product.name}
            className="absolute inset-0"
          />
          <ProductImage
            src={product.images[1] ?? product.images[0]}
            tone={product.tone + 1}
            alt={product.name}
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <span className="tracked-label absolute right-3 top-3 rounded-sm bg-bg/70 px-2 py-1 text-[9px] text-fg-muted">
            {product.category}
          </span>
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            {onSale ? (
              <span
                className={`tracked-label w-fit rounded-sm px-2 py-1 text-[9px] ${PRODUCT_BADGE_CLASS.SALE}`}
              >
                -{getDiscountPercent(product.originalPrice!, product.price)}%
              </span>
            ) : null}
            {showManualBadge ? (
              <span
                className={`tracked-label w-fit rounded-sm px-2 py-1 text-[9px] ${PRODUCT_BADGE_CLASS[product.badge]}`}
              >
                {PRODUCT_BADGE_LABEL[product.badge]}
              </span>
            ) : null}
            {product.stock <= 0 ? (
              <span className="tracked-label w-fit rounded-sm bg-bg/70 px-2 py-1 text-[9px] text-red-500">
                Hết hàng
              </span>
            ) : null}
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-2">
          <h3 className="text-sm text-fg">{product.name}</h3>
          {onSale ? (
            <span className="flex items-baseline gap-1.5">
              <span className="text-xs text-fg-muted line-through">
                {formatVND(product.originalPrice!)}
              </span>
              <span className="text-sm text-red-600">
                {formatVND(product.price)}
              </span>
            </span>
          ) : (
            <span className="text-sm text-fg-muted">
              {formatVND(product.price)}
            </span>
          )}
        </div>
      </Link>
      {product.sizes.length > 0 ? (
        <ButtonLink
          href={`/products/${product.id}`}
          variant="outline"
          className="mt-3 w-full"
        >
          Thêm vào giỏ
        </ButtonLink>
      ) : (
        <AddToCartButton product={product} className="mt-3 w-full" />
      )}
    </div>
  );
}
