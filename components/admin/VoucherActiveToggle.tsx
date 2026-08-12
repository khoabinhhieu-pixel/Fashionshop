"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toggleVoucherActiveAction } from "@/lib/actions/vouchers";

export default function VoucherActiveToggle({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function handleToggle() {
    setPending(true);
    await toggleVoucherActiveAction(id, !active);
    setPending(false);
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={pending}
      className={`tracked-label border px-2 py-1 text-[10px] transition-colors ${
        active
          ? "border-fg text-fg"
          : "border-border-strong text-fg-muted hover:text-fg"
      }`}
    >
      {active ? "Đang bật" : "Đang tắt"}
    </button>
  );
}
