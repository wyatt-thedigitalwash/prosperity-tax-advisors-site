import Image from "next/image";

export default function TampaSkyline() {
  return (
    <section className="relative w-full h-[280px] md:h-[400px] overflow-hidden">
      <Image
        src="/images/tampa-skyline-bay.webp"
        alt="The Tampa skyline at dusk, photographed from across the bay."
        fill
        className="object-cover object-center grayscale"
        quality={85}
        sizes="100vw"
      />
      {/* Plum duotone overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(54, 46, 118, 0.4)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Caption */}
      <p
        className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[13px] font-medium uppercase tracking-[0.12em] text-cream"
        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
      >
        Tampa, Florida.
      </p>
    </section>
  );
}
