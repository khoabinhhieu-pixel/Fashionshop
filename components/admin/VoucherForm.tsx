"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Field from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { createVoucherAction } from "@/lib/actions/vouchers";

const TYPES = [
  { value: "PERCENT", label: "Giảm theo % đơn hàng" },
  { value: "FIXED", label: "Giảm số tiền cố định (VNĐ)" },
];

export default function VoucherForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    let result;
    try {
      result = await createVoucherAction(formData);
    } catch {
      setSubmitting(false);
      setError("Đã có lỗi xảy ra, vui lòng thử lại.");
      return;
    }

    setSubmitting(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    router.push("/admin/vouchers");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Field
        label="Mã giảm giá"
        name="code"
        required
        placeholder="CHAO10"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="tracked-label text-[10px] text-fg-muted">
            Loại giảm giá
          </span>
          <select
            name="type"
            defaultValue="PERCENT"
            className="w-full border-b border-border-strong bg-transparent py-2 text-sm text-fg focus:border-fg focus:outline-none"
          >
            {TYPES.map((t) => (
              <option key={t.value} value={t.value} className="bg-bg text-fg">
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <Field
          label="Giá trị (% hoặc VNĐ)"
          type="number"
          name="value"
          required
          min={1}
          placeholder="10"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Đơn tối thiểu (VNĐ, 0 = không giới hạn)"
          type="number"
          name="minOrderTotal"
          min={0}
          step={10000}
          defaultValue={0}
        />
        <Field
          label="Hạn sử dụng (để trống nếu không giới hạn)"
          type="date"
          name="expiresAt"
        />
      </div>
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
      <Button
        type="submit"
        variant="solid"
        disabled={submitting}
        className="w-fit"
      >
        {submitting ? "Đang lưu..." : "Tạo voucher"}
      </Button>
    </form>
  );
}
