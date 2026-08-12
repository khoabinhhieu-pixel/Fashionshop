export const SITE_IMAGE_SLOTS = [
  { key: "hero", label: "Banner đầu trang", tone: 1 },
  { key: "newsletter", label: "Banner đăng ký nhận tin", tone: 3 },
] as const;

export type SiteImageKey = (typeof SITE_IMAGE_SLOTS)[number]["key"];
