import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-5 py-16 md:px-12">
      <Reveal>
        <h1 className="text-3xl font-medium tracking-tight">Quên mật khẩu</h1>
        <p className="mt-2 text-sm text-fg-muted">
          Nhập email đã đăng ký, mình sẽ tạo liên kết đặt lại mật khẩu cho
          bạn.
        </p>
        <ForgotPasswordForm />
        <p className="mt-6 text-sm text-fg-muted">
          <Link
            href="/login"
            className="text-fg underline underline-offset-4"
          >
            Quay lại đăng nhập
          </Link>
        </p>
      </Reveal>
    </div>
  );
}
