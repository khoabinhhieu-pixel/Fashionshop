"use client";

import { useState, type FormEvent } from "react";
import Field from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { changePasswordAction } from "@/lib/actions/account";

export default function ChangePasswordForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);

    let result;
    try {
      result = await changePasswordAction({
        currentPassword: String(formData.get("currentPassword") ?? ""),
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
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Field
        label="Mật khẩu hiện tại"
        type="password"
        name="currentPassword"
        autoComplete="current-password"
        required
      />
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
      {success ? (
        <p className="text-xs text-fg">Đã đổi mật khẩu thành công.</p>
      ) : null}
      <Button
        type="submit"
        variant="outline"
        disabled={submitting}
        className="w-fit"
      >
        {submitting ? "Đang đổi..." : "Đổi mật khẩu"}
      </Button>
    </form>
  );
}
