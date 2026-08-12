import { requireUser } from "@/lib/auth/require-user";
import { prisma } from "@/lib/prisma";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProfileForm from "@/components/account/ProfileForm";
import ChangePasswordForm from "@/components/account/ChangePasswordForm";

export default async function AccountProfilePage() {
  const sessionUser = await requireUser("/account/profile");
  const user = await prisma.user.findUniqueOrThrow({
    where: { id: sessionUser.id },
    select: { fullName: true, email: true, phone: true, address: true },
  });

  return (
    <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <SectionLabel text="Hồ sơ cá nhân" />
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          Thông tin tài khoản
        </h1>
      </Reveal>

      <div className="mt-10 grid max-w-3xl gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="tracked-label text-[11px] text-fg-muted">
            Thông tin cá nhân
          </h2>
          <div className="mt-5">
            <ProfileForm user={user} />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="tracked-label text-[11px] text-fg-muted">
            Đổi mật khẩu
          </h2>
          <div className="mt-5">
            <ChangePasswordForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
