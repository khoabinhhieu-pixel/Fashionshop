import { getSiteImages } from "@/lib/queries/site-images";
import { SITE_IMAGE_SLOTS } from "@/lib/site-images";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SiteImageForm from "@/components/admin/SiteImageForm";

export default async function AdminHomepagePage() {
  const siteImages = await getSiteImages();

  return (
    <div className="mx-auto w-full max-w-(--container-page) px-5 py-16 md:px-10 md:py-24">
      <Reveal>
        <SectionLabel text="Trang chủ" />
        <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
          Quản lý ảnh trang chủ
        </h1>
        <p className="mt-3 max-w-xl text-sm text-fg-muted">
          Tải ảnh thật hoặc dán URL cho từng vị trí trên trang chủ. Vị trí
          chưa có ảnh sẽ hiện màu nền mặc định.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-10 flex flex-col gap-6">
        {SITE_IMAGE_SLOTS.map((slot) => (
          <SiteImageForm
            key={slot.key}
            slotKey={slot.key}
            label={slot.label}
            tone={slot.tone}
            currentUrl={siteImages[slot.key]}
          />
        ))}
      </Reveal>
    </div>
  );
}
