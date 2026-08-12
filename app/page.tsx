import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ProductImage from "@/components/ui/ProductImage";
import SectionLabel from "@/components/ui/SectionLabel";
import ProductCard from "@/components/product/ProductCard";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ButtonLink, Button } from "@/components/ui/Button";
import { getNewArrivals, getProductFilterOptions } from "@/lib/queries/products";
import { getSiteImages } from "@/lib/queries/site-images";
import { getFeaturedProducts } from "@/lib/queries/recommendations";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default async function Home() {
  const [PRODUCTS, siteImages, FEATURED, { categories }] = await Promise.all([
    getNewArrivals(12),
    getSiteImages(),
    getFeaturedProducts(4),
    getProductFilterOptions(),
  ]);

  return (
    <>
      {/* Hero banner */}
      <Reveal as="section" className="relative">
        <div className="relative h-[42vh] min-h-[280px] w-full md:h-[50vh]">
          <ProductImage
            src={siteImages.hero}
            tone={1}
            alt="Fashion Shop"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-bg/90 via-bg/35 to-transparent" />
          <div className="absolute inset-x-5 bottom-8 md:inset-x-10 md:bottom-12">
            <span className="tracked-label text-[11px] text-fg-muted">
              BST Xuân Hè &apos;26
            </span>
            <h1 className="mt-3 max-w-xl text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Một tủ đồ cho mọi mùa phía trước
            </h1>
            <ButtonLink href="/products" variant="solid" className="mt-6">
              Mua sắm ngay
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      {/* Danh mục nổi bật */}
      <Reveal as="section" className="px-5 py-10 md:px-10">
        <div className="mx-auto max-w-(--container-page)">
          <SectionLabel text="Danh mục nổi bật" />
          <div className="mt-5 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="border border-border-strong px-4 py-2 text-sm text-fg transition-colors hover:bg-fg hover:text-bg"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Best-selling products */}
      <section className="px-5 pb-16 md:px-10">
        <div className="mx-auto max-w-(--container-page)">
          <Reveal>
            <SectionLabel text="Bán chạy nhất" />
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              Sản phẩm bán chạy
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
              Những sản phẩm được khách hàng chọn mua nhiều nhất.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {FEATURED.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main product grid */}
      <section id="new-arrivals" className="px-5 pb-16 md:px-10">
        <div className="mx-auto max-w-(--container-page)">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <SectionLabel text="Tất cả sản phẩm" />
                <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                  Bộ sưu tập mới nhất
                </h2>
              </div>
              <ButtonLink
                href="/products"
                variant="text"
                className="hidden md:flex"
              >
                Xem tất cả
                <ArrowRightIcon />
              </ButtonLink>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.id} delay={Math.min(i * 0.05, 0.3)}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex justify-center">
            <ButtonLink href="/products" variant="outline">
              Xem tất cả sản phẩm
              <ArrowRightIcon />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />

      {/* Newsletter band */}
      <Reveal as="section" className="px-5 pb-24 md:px-10">
        <div className="relative mx-auto max-w-(--container-page) overflow-hidden">
          <ProductImage
            src={siteImages.newsletter}
            tone={3}
            alt="Đăng ký nhận tin"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-bg/55" />
          <div className="relative flex flex-col items-center gap-6 px-6 py-20 text-center md:py-28">
            <SectionLabel text="Đăng ký nhận tin" align="center" />
            <h2 className="max-w-xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Là người đầu tiên biết về bộ sưu tập mới
            </h2>
            <form className="mt-4 flex w-full max-w-sm flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Email của bạn"
                className="w-full border-b border-border-strong bg-transparent px-1 py-2 text-sm text-fg placeholder:text-fg-muted focus:border-fg focus:outline-none"
              />
              <Button type="submit" variant="outline" className="shrink-0">
                Gửi
              </Button>
            </form>
          </div>
        </div>
      </Reveal>
    </>
  );
}
