import { requireUser } from "@/lib/auth/require-user";
import { getOrdersForUser } from "@/lib/queries/orders";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import OrderList from "@/components/account/OrderList";

export default async function AccountOrdersPage() {
  const sessionUser = await requireUser("/account/orders");
  const orders = await getOrdersForUser(sessionUser.id, 50);

  return (
    <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <SectionLabel text="Đơn hàng của tôi" />
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          Lịch sử đơn hàng
        </h1>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 max-w-2xl">
        <OrderList orders={orders} />
      </Reveal>
    </div>
  );
}
