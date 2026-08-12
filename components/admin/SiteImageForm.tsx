"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Field from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import ProductImage from "@/components/ui/ProductImage";
import { updateSiteImageAction } from "@/lib/actions/site-images";

type SiteImageFormProps = {
  slotKey: string;
  label: string;
  tone: number;
  currentUrl?: string;
};

export default function SiteImageForm({
  slotKey,
  label,
  tone,
  currentUrl,
}: SiteImageFormProps) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submitFormData(formData: FormData) {
    setError(null);
    setSubmitting(true);
    let result;
    try {
      result = await updateSiteImageAction(slotKey, formData);
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
    formRef.current?.reset();
    router.refresh();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submitFormData(new FormData(e.currentTarget));
  }

  function handleClear() {
    const formData = new FormData();
    formData.set("clear", "1");
    submitFormData(formData);
  }

  return (
    <div className="flex flex-col gap-4 border border-border p-6 sm:flex-row sm:items-start">
      <ProductImage
        src={currentUrl}
        tone={tone}
        alt={label}
        className="h-32 w-full shrink-0 sm:h-28 sm:w-40"
      />
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col gap-4"
      >
        <p className="tracked-label text-[11px] text-fg-muted">{label}</p>
        <label className="flex flex-col gap-2">
          <span className="tracked-label text-[10px] text-fg-muted">
            Tải ảnh lên (JPG/PNG/WEBP/GIF, tối đa 5MB)
          </span>
          <input
            type="file"
            id={`${slotKey}-image`}
            name="image"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="text-sm text-fg-muted file:mr-4 file:border file:border-border-strong file:bg-transparent file:px-3 file:py-1.5 file:text-xs file:text-fg"
          />
        </label>
        <Field
          label="Hoặc dán URL ảnh"
          id={`${slotKey}-imageUrl`}
          name="imageUrl"
          placeholder="https://..."
        />
        {error ? <p className="text-xs text-red-400">{error}</p> : null}
        <div className="flex flex-wrap gap-3">
          <Button
            type="submit"
            variant="solid"
            disabled={submitting}
            className="w-fit"
          >
            {submitting ? "Đang lưu..." : "Lưu"}
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={submitting || !currentUrl}
            onClick={handleClear}
            className="w-fit"
          >
            Dùng màu mặc định
          </Button>
        </div>
      </form>
    </div>
  );
}
