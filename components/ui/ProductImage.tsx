import Placeholder from "@/components/ui/Placeholder";

type ProductImageProps = {
  src?: string | null;
  tone: number;
  alt: string;
  className?: string;
};

export default function ProductImage({
  src,
  tone,
  alt,
  className = "",
}: ProductImageProps) {
  if (!src) {
    return <Placeholder tone={tone} className={className} />;
  }

  const hasPosition = /(?:^|\s)(?:absolute|fixed|sticky|static)(?:\s|$)/.test(
    className,
  );

  return (
    // eslint-disable-next-line @next/next/no-img-element -- ảnh do admin dán URL có thể từ bất kỳ domain nào, next/image bắt buộc whitelist từng hostname
    <img
      src={src}
      alt={alt}
      className={`${hasPosition ? "" : "relative"} overflow-hidden object-cover ring-1 ring-inset ring-black/[0.06] ${className}`}
    />
  );
}
