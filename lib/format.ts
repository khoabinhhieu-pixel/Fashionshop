const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

export function formatVND(amount: number): string {
  return currencyFormatter.format(amount);
}

export function getDiscountPercent(originalPrice: number, price: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
