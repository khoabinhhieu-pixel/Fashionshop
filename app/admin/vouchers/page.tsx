import { prisma } from "@/lib/prisma";
import { formatVND } from "@/lib/format";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/Button";
import VoucherActiveToggle from "@/components/admin/VoucherActiveToggle";
import DeleteVoucherButton from "@/components/admin/DeleteVoucherButton";

export default async function AdminVouchersPage() {
  const vouchers = await prisma.voucher.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel text="Quản lý voucher" />
            <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              {vouchers.length} voucher
            </h1>
          </div>
          <ButtonLink href="/admin/vouchers/new" variant="solid">
            Thêm voucher
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        {vouchers.length === 0 ? (
          <p className="text-sm text-fg-muted">Chưa có voucher nào.</p>
        ) : (
          <ul className="divide-y divide-border border-y border-border">
            {vouchers.map((voucher) => (
              <li
                key={voucher.id}
                className="flex flex-wrap items-center justify-between gap-4 py-4"
              >
                <div className="min-w-0">
                  <p className="text-sm text-fg">{voucher.code}</p>
                  <p className="mt-1 text-xs text-fg-muted">
                    {voucher.type === "PERCENT"
                      ? `Giảm ${voucher.value}%`
                      : `Giảm ${formatVND(voucher.value)}`}
                    {voucher.minOrderTotal > 0
                      ? ` · Đơn tối thiểu ${formatVND(voucher.minOrderTotal)}`
                      : ""}
                    {voucher.expiresAt
                      ? ` · HSD ${new Date(voucher.expiresAt).toLocaleDateString("vi-VN")}`
                      : ""}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <VoucherActiveToggle id={voucher.id} active={voucher.active} />
                  <DeleteVoucherButton id={voucher.id} code={voucher.code} />
                </div>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
    </div>
  );
}
