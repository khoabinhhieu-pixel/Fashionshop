"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Field from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { requestPasswordResetAction } from "@/lib/actions/auth";

export default function ForgotPasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetUrl, setResetUrl] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setResetUrl(null);
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    let result;
    try {
      result = await requestPasswordResetAction({
        email: String(formData.get("email") ?? ""),
      });
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
    setResetUrl(result.resetUrl);
  }

  if (resetUrl) {
    return (
      <div className="mt-8 flex flex-col gap-4">
        <p className="text-sm text-fg-muted">
          Đây là bản mô phỏng — đồ án chưa nối dịch vụ gửi email thật, nên
          liên kết đặt lại mật khẩu được hiển thị trực tiếp tại đây thay vì
          gửi qua email:
        </p>
        <Link
          href={resetUrl}
          className="break-all text-sm text-fg underline underline-offset-4"
        >
          {resetUrl}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <Field
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        required
        placeholder="ban@email.com"
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
      <Button
        type="submit"
        variant="solid"
        disabled={submitting}
        className="w-full"
      >
        {submitting ? "Đang gửi..." : "Gửi liên kết đặt lại"}
      </Button>
    </form>
  );
}
