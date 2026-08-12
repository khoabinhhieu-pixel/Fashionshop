"use client";

import { useState } from "react";
import Link from "next/link";
import Field from "@/components/ui/Field";
import { Button, IconButton } from "@/components/ui/Button";
import { FilterIcon, CloseIcon } from "@/components/ui/Icons";

const GENDER_TABS: { key?: "nam" | "nu"; label: string }[] = [
  { key: undefined, label: "Tất cả" },
  { key: "nu", label: "Nữ" },
  { key: "nam", label: "Nam" },
];

type CurrentFilters = {
  gender?: string;
  category?: string;
  size?: string;
  minPrice?: string;
  maxPrice?: string;
};

type ProductFiltersProps = {
  categories: string[];
  sizes: string[];
  current: CurrentFilters;
};

function buildHref(current: CurrentFilters, overrides: CurrentFilters) {
  const merged = { ...current, ...overrides };
  const sp = new URLSearchParams();
  for (const [key, value] of Object.entries(merged)) {
    if (value) sp.set(key, value);
  }
  const qs = sp.toString();
  return qs ? `/products?${qs}` : "/products";
}

function FilterBody({ categories, sizes, current }: ProductFiltersProps) {
  const hasPriceFilter = Boolean(current.minPrice || current.maxPrice);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="tracked-label mb-3 text-[10px] text-fg-muted">
          Giới tính
        </p>
        <ul className="flex flex-col gap-2">
          {GENDER_TABS.map((tab) => {
            const active = (tab.key ?? "") === (current.gender ?? "");
            return (
              <li key={tab.label}>
                <Link
                  href={buildHref(current, { gender: tab.key })}
                  className={`text-sm transition-colors ${
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <p className="tracked-label mb-3 text-[10px] text-fg-muted">
          Danh mục
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href={buildHref(current, { category: undefined })}
              className={`text-sm transition-colors ${
                !current.category ? "text-fg" : "text-fg-muted hover:text-fg"
              }`}
            >
              Tất cả danh mục
            </Link>
          </li>
          {categories.map((category) => {
            const active = current.category === category;
            return (
              <li key={category}>
                <Link
                  href={buildHref(current, { category })}
                  className={`text-sm transition-colors ${
                    active ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {sizes.length > 0 ? (
        <div>
          <p className="tracked-label mb-3 text-[10px] text-fg-muted">
            Kích cỡ
          </p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href={buildHref(current, { size: undefined })}
                className={`text-sm transition-colors ${
                  !current.size ? "text-fg" : "text-fg-muted hover:text-fg"
                }`}
              >
                Tất cả size
              </Link>
            </li>
            {sizes.map((size) => {
              const active = current.size === size;
              return (
                <li key={size}>
                  <Link
                    href={buildHref(current, { size })}
                    className={`text-sm transition-colors ${
                      active ? "text-fg" : "text-fg-muted hover:text-fg"
                    }`}
                  >
                    {size}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div>
        <p className="tracked-label mb-3 text-[10px] text-fg-muted">
          Khoảng giá
        </p>
        <form method="get" className="flex flex-col gap-3">
          {current.gender ? (
            <input type="hidden" name="gender" value={current.gender} />
          ) : null}
          {current.category ? (
            <input type="hidden" name="category" value={current.category} />
          ) : null}
          {current.size ? (
            <input type="hidden" name="size" value={current.size} />
          ) : null}
          <Field
            label="Giá từ (đ)"
            name="minPrice"
            type="number"
            min={0}
            step={10000}
            defaultValue={current.minPrice}
            placeholder="0"
          />
          <Field
            label="Đến (đ)"
            name="maxPrice"
            type="number"
            min={0}
            step={10000}
            defaultValue={current.maxPrice}
            placeholder="Không giới hạn"
          />
          <Button type="submit" variant="outline" className="w-full">
            Lọc
          </Button>
          {hasPriceFilter ? (
            <Link
              href={buildHref(current, { minPrice: undefined, maxPrice: undefined })}
              className="text-xs text-fg-muted underline underline-offset-4"
            >
              Xoá lọc giá
            </Link>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default function ProductFilters(props: ProductFiltersProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="tracked-label mb-6 flex items-center gap-2 border border-border-strong px-4 py-2.5 text-[11px] text-fg md:hidden"
      >
        <FilterIcon className="h-4 w-4" />
        Bộ lọc
      </button>

      <aside className="hidden md:block">
        <FilterBody {...props} />
      </aside>

      {open ? (
        <>
          <div
            className="fixed inset-0 z-50 bg-fg/40 md:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 flex w-full max-w-xs flex-col overflow-y-auto border-r border-border bg-bg px-6 py-6 md:hidden">
            <div className="mb-6 flex items-center justify-between">
              <span className="tracked-label text-sm">Bộ lọc</span>
              <IconButton
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Đóng bộ lọc"
                className="text-fg-muted hover:text-fg"
              >
                <CloseIcon />
              </IconButton>
            </div>
            <FilterBody {...props} />
          </div>
        </>
      ) : null}
    </>
  );
}
