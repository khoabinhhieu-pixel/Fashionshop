import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Reveal from "@/components/ui/Reveal";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const resetToken = token
    ? await prisma.passwordResetToken.findUnique({ where: { token } })
    : null;
  const valid = !!resetToken && resetToken.expiresAt > new Date();

  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center px-5 py-16 md:px-12">
      <Reveal>
        <h1 className="text-3xl font-medium tracking-tight">
          Đặt lại mật khẩu
        </h1>
        {valid ? (
          <>
            <p className="mt-2 text-sm text-fg-muted">
              Nhập mật khẩu mới cho tài khoản của bạn.
            </p>
            <ResetPasswordForm token={token ?? ""} />
          </>
        ) : (
          <>
            <p className="mt-2 text-sm text-fg-muted">
              Liên kết đặt lại mật khẩu không hợp lệ hoặc đã hết hạn.
            </p>
            <Link
              href="/forgot-password"
              className="mt-6 inline-block text-sm text-fg underline underline-offset-4"
            >
              Yêu cầu liên kết mới
            </Link>
          </>
        )}
      </Reveal>
    </div>
  );
}
