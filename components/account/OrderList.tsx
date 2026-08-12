import { formatVND } from "@/lib/format";
import { ORDER_STATUS_LABEL, PAYMENT_METHOD_LABEL } from "@/lib/constants";

type OrderItemView = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
};

type OrderView = {
  id: string;
  orderNumber: string;
  createdAt: Date;
  status: string;
  paymentMethod: string;
  total: number;
  voucherCode?: string | null;
  discountAmount?: number;
  items: OrderItemView[];
};

export default function OrderList({ orders }: { orders: OrderView[] }) {
  if (orders.length === 0) {
    return <p className="text-sm text-fg-muted">Bạn chưa có đơn hàng nào.</p>;
  }

  return (
    <ul className="flex flex-col gap-6">
      {orders.map((order) => (
        <li key={order.id} className="border border-border p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm text-fg">#{order.orderNumber}</p>
              <p className="mt-1 text-xs text-fg-muted">
                {new Date(order.createdAt).toLocaleString("vi-VN")} ·{" "}
                {PAYMENT_METHOD_LABEL[order.paymentMethod] ?? order.paymentMethod}
              </p>
            </div>
            <span className="tracked-label border border-border-strong px-2 py-1 text-[10px] text-fg">
              {ORDER_STATUS_LABEL[order.status] ?? order.status}
            </span>
          </div>

          <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between text-xs text-fg-muted"
              >
                <span>
                  {item.name}
                  {item.size ? ` (Size: ${item.size})` : ""} × {item.quantity}
                </span>
                <span>{formatVND(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-sm">
            {order.discountAmount && order.discountAmount > 0 ? (
              <div className="flex items-center justify-between text-xs text-fg-muted">
                <span>Giảm giá ({order.voucherCode})</span>
                <span>−{formatVND(order.discountAmount)}</span>
              </div>
            ) : null}
            <div className="flex items-center justify-between">
              <span className="text-fg-muted">Tổng cộng</span>
              <span className="text-fg">{formatVND(order.total)}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
