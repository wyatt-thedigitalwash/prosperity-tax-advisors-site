import Image from "next/image";

interface DuotoneImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function DuotoneImage({
  src,
  alt,
  aspectRatio,
  className = "",
  sizes = "100vw",
  priority = false,
}: DuotoneImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale contrast-[1.1]"
        sizes={sizes}
        priority={priority}
        quality={85}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(54, 46, 118, 0.8)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
