import { formatVND } from "@/lib/format";
import { getAllOrdersForAdmin } from "@/lib/queries/orders";
import { PAYMENT_METHOD_LABEL } from "@/lib/constants";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import OrderStatusForm from "@/components/admin/OrderStatusForm";

export default async function AdminOrdersPage() {
  const orders = await getAllOrdersForAdmin();

  return (
    <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <SectionLabel text="Quản lý đơn hàng" />
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          {orders.length} đơn hàng
        </h1>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <ul className="divide-y divide-border border-y border-border">
          {orders.map((order) => (
            <li
              key={order.id}
              className="flex flex-wrap items-center justify-between gap-4 py-4"
            >
              <div className="min-w-0">
                <p className="text-sm text-fg">#{order.orderNumber}</p>
                <p className="mt-1 text-xs text-fg-muted">
                  {order.user.fullName} · {order.user.email}
                </p>
                <p className="mt-1 text-xs text-fg-muted">
                  {PAYMENT_METHOD_LABEL[order.paymentMethod] ?? order.paymentMethod} ·{" "}
                  {formatVND(order.total)}
                  {order.discountAmount > 0
                    ? ` (đã giảm ${formatVND(order.discountAmount)} · ${order.voucherCode})`
                    : ""}
                </p>
              </div>
              <OrderStatusForm orderId={order.id} status={order.status} />
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
