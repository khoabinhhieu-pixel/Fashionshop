"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Field from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { updateProfileAction } from "@/lib/actions/account";

type ProfileFormProps = {
  user: {
    fullName: string;
    email: string;
    phone: string | null;
    address: string | null;
  };
};

export default function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter();
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
      result = await updateProfileAction({
        fullName: String(formData.get("fullName") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        address: String(formData.get("address") ?? ""),
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
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Field
        label="Họ và tên"
        name="fullName"
        required
        defaultValue={user.fullName}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        defaultValue={user.email}
      />
      <Field
        label="Số điện thoại"
        name="phone"
        type="tel"
        defaultValue={user.phone ?? ""}
        placeholder="Tuỳ chọn"
      />
      <Field
        label="Địa chỉ mặc định"
        name="address"
        defaultValue={user.address ?? ""}
        placeholder="Tuỳ chọn — dùng để tự điền lúc thanh toán"
      />
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
      {success ? <p className="text-xs text-fg">Đã lưu thay đổi.</p> : null}
      <Button
        type="submit"
        variant="solid"
        disabled={submitting}
        className="w-fit"
      >
        {submitting ? "Đang lưu..." : "Lưu thay đổi"}
      </Button>
    </form>
  );
}
