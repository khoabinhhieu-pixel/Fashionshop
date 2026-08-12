"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { updateOrderStatusAction } from "@/lib/actions/orders";
import { ORDER_STATUS_FLOW, ORDER_STATUS_LABEL } from "@/lib/constants";

export default function OrderStatusForm({
  orderId,
  status,
}: {
  orderId: string;
  status: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(status);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const result = await updateOrderStatusAction(orderId, value);
    setSubmitting(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-end gap-2">
      <div className="flex items-center gap-3">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border-b border-border-strong bg-transparent py-1.5 text-xs text-fg focus:border-fg focus:outline-none"
        >
          {ORDER_STATUS_FLOW.map((s) => (
            <option key={s} value={s} className="bg-bg text-fg">
              {ORDER_STATUS_LABEL[s]}
            </option>
          ))}
        </select>
        <Button
          type="submit"
          variant="outline"
          disabled={submitting || value === status}
        >
          {submitting ? "Đang lưu..." : "Lưu"}
        </Button>
      </div>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </form>
  );
}
