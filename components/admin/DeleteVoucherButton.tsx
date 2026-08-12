"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteVoucherAction } from "@/lib/actions/vouchers";

export default function DeleteVoucherButton({
  id,
  code,
}: {
  id: string;
  code: string;
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    if (!window.confirm(`Xoá mã "${code}"? Hành động này không thể hoàn tác.`)) {
      return;
    }
    setPending(true);
    const result = await deleteVoucherAction(id);
    setPending(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    router.refresh();
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleDelete}
        disabled={pending}
        className="text-xs text-fg-muted transition-colors hover:text-fg"
      >
        {pending ? "Đang xoá..." : "Xoá"}
      </button>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
