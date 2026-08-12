"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Field from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { resetPasswordAction } from "@/lib/actions/auth";

export default function ResetPasswordForm({ token }: { token: string }) {
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
      result = await resetPasswordAction({
        token,
        newPassword: String(formData.get("newPassword") ?? ""),
        confirmPassword: String(formData.get("confirmPassword") ?? ""),
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
    router.push("/login");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <Field
        label="Mật khẩu mới"
        type="password"
        name="newPassword"
        autoComplete="new-password"
        required
        minLength={6}
        placeholder="Tối thiểu 6 ký tự"
      />
      <Field
        label="Nhập lại mật khẩu mới"
        type="password"
        name="confirmPassword"
        autoComplete="new-password"
        required
        minLength={6}
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
      <Button
        type="submit"
        variant="solid"
        disabled={submitting}
        className="w-full"
      >
        {submitting ? "Đang đặt lại..." : "Đặt lại mật khẩu"}
      </Button>
    </form>
  );
}
