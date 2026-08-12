export const SHIPPING_FEE = 30000;

export const ORDER_STATUS_LABEL: Record<string, string> = {
  PLACED: "Đã đặt hàng",
  PROCESSING: "Đang xử lý",
  SHIPPING: "Đang giao hàng",
  DELIVERED: "Đã giao hàng",
  CANCELLED: "Đã huỷ",
};

export const ORDER_STATUS_FLOW = [
  "PLACED",
  "PROCESSING",
  "SHIPPING",
  "DELIVERED",
  "CANCELLED",
] as const;

export const PAYMENT_METHOD_LABEL: Record<string, string> = {
  COD: "Thanh toán khi nhận hàng (COD)",
  BANK: "Chuyển khoản ngân hàng",
  CARD: "Thẻ tín dụng / ghi nợ",
  WALLET: "Ví Fashion Shop",
  QR: "Quét mã QR",
};

export const PRODUCT_BADGE_LABEL: Record<string, string> = {
  NONE: "Không có nhãn",
  MOI: "Mới",
  BAN_CHAY: "Bán chạy",
  SALE: "Giảm giá",
  HOT: "Hot",
};

export const PRODUCT_BADGE_CLASS: Record<string, string> = {
  MOI: "bg-blue-50 text-blue-600",
  BAN_CHAY: "bg-emerald-50 text-emerald-600",
  SALE: "bg-red-50 text-red-600",
  HOT: "bg-orange-50 text-orange-600",
};
