import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import Reveal from "@/components/ui/Reveal";
import { getProductFilterOptions, getProducts } from "@/lib/queries/products";

const TITLES: Record<string, string> = {
  nam: "Thời trang Nam",
  nu: "Thời trang Nữ",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{
    gender?: string;
    minPrice?: string;
    maxPrice?: string;
    category?: string;
    size?: string;
  }>;
}) {
  const {
    gender,
    minPrice: minPriceRaw,
    maxPrice: maxPriceRaw,
    category,
    size,
  } = await searchParams;
  const minPrice = minPriceRaw ? Number(minPriceRaw) : undefined;
  const maxPrice = maxPriceRaw ? Number(maxPriceRaw) : undefined;
  const [{ categories, sizes }, products] = await Promise.all([
    getProductFilterOptions(),
    getProducts({
      gender,
      category,
      size,
      minPrice: Number.isNaN(minPrice) ? undefined : minPrice,
      maxPrice: Number.isNaN(maxPrice) ? undefined : maxPrice,
    }),
  ]);
  const title = (gender && TITLES[gender]) || "Tất cả sản phẩm";

  return (
    <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <span className="tracked-label text-[11px] text-fg-muted">
          Cửa hàng
        </span>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">
            {title}
          </h1>
          <p className="text-xs text-fg-muted">{products.length} sản phẩm</p>
        </div>
      </Reveal>

      <div className="mt-10 md:grid md:grid-cols-[240px_1fr] md:gap-10">
        <ProductFilters
          categories={categories}
          sizes={sizes}
          current={{
            gender,
            category,
            size,
            minPrice: minPriceRaw,
            maxPrice: maxPriceRaw,
          }}
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={Math.min(i * 0.05, 0.3)}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
