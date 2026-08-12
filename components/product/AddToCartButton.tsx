"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/stores/cart-store";
import { useUIStore } from "@/lib/stores/ui-store";
import type { Product } from "@/lib/data/products";

export default function AddToCartButton({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useUIStore((s) => s.openCart);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const outOfStock = product.stock <= 0;
  const hasSizes = product.sizes.length > 0;
  const needsSize = hasSizes && !selectedSize;

  return (
    <div className={className}>
      {hasSizes ? (
        <div className="mb-3 flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSelectedSize(size)}
              className={`tracked-label border px-3 py-1.5 text-[11px] transition-colors ${
                selectedSize === size
                  ? "border-fg text-fg"
                  : "border-border-strong text-fg-muted hover:border-fg hover:text-fg"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      ) : null}
      <Button
        type="button"
        variant="outline"
        disabled={outOfStock || needsSize}
        onClick={() => {
          addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            tone: product.tone,
            size: selectedSize ?? "",
            image: product.images[0],
          });
          openCart();
        }}
        className="w-full"
      >
        {outOfStock
          ? "Hết hàng"
          : needsSize
            ? "Vui lòng chọn size"
            : "Thêm vào giỏ"}
      </Button>
    </div>
  );
}
