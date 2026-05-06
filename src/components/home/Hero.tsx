import Link from "next/link";
import Image from "next/image";

const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

const stats = [
  { number: "$12.6M", caption: "Savings identified in 2024" },
  { number: "80 years", caption: "Combined experience" },
  {
    number: "4 disciplines",
    caption: "CPAs, attorneys, forensic accountants, wealth advisors",
  },
];

export default function Hero() {
  return (
    <section
      data-bg="dark"
      data-hero
      className="relative overflow-hidden"
      style={{ minHeight: "100dvh", backgroundColor: "#141228" }}
    >
      {/* Background image */}
      <Image
        src="/images/hero/tampa-skyline-hero.webp"
        alt="Tampa skyline at dusk viewed across Hillsborough Bay"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        placeholder="empty"
      />

      {/* Gradient overlay: left-to-right on md+, top-to-bottom on mobile */}
      <div
        className="absolute inset-0 z-[1] hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(20, 18, 40, 0.92), rgba(20, 18, 40, 0.55))",
        }}
      />
      <div
        className="absolute inset-0 z-[1] md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(20, 18, 40, 0.85), rgba(20, 18, 40, 0.55))",
        }}
      />

      {/* Text content */}
      <div
        className="relative z-[2] mx-auto max-w-[1280px] px-6 md:px-10 flex flex-col pt-[72px]"
        style={{ minHeight: "100dvh" }}
      >
        {/* Main content area, centered in remaining space above the stat strip */}
        <div className="flex-1 flex flex-col justify-center pb-6">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <span
              className="text-[13px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "rgba(250, 247, 240, 0.65)" }}
            >
              Tampa, Florida
            </span>
            <span
              className="block w-[24px] h-px"
              style={{ backgroundColor: "var(--teal)" }}
            />
          </div>

          <h1 className="display max-w-[640px] !text-cream">
            Tax strategy, built for outliers.
          </h1>

          <div className="mt-8 flex flex-col gap-4 max-w-full md:max-w-[55%] lg:max-w-[55%]">
            <p
              className="text-[19px] max-md:text-[17px] leading-[1.5]"
              style={{ color: "rgba(250, 247, 240, 0.85)" }}
            >
              Strategic tax and wealth advisory for business owners and
              high-income professionals whose finances have outgrown their
              CPA.
            </p>
            <p
              className="text-[19px] max-md:text-[17px] leading-[1.5]"
              style={{ color: "rgba(250, 247, 240, 0.85)" }}
            >
              Prosperity is a Tampa firm of CPAs, forensic accountants, tax
              attorneys, and wealth advisors. We reduce lifetime tax liability
              through strategy, structure, and substantiation. Not
              preparation. Not filing. Strategy.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="inline-block text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] transition-opacity duration-200 hover:opacity-90 text-center"
              style={{ backgroundColor: "#FAF7F0", color: "#2D2860" }}
            >
              Schedule an introduction
            </a>
            <Link
              href="/case-studies"
              className="inline-block text-cream text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] bg-transparent transition-colors duration-200 text-center border border-cream/70 hover:border-cream"
            >
              Read the case studies
            </Link>
          </div>
        </div>

        {/* Stat strip pinned to bottom, desktop only */}
        <div
          className="hidden lg:block shrink-0 py-6 md:py-7"
          style={{ borderTop: "1px solid rgba(250, 247, 240, 0.15)" }}
        >
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.number}>
                <p className="font-display text-[28px] sm:text-[32px] md:text-[36px] leading-[1] text-cream">
                  {stat.number}
                </p>
                <p
                  className="mt-2 text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em]"
                  style={{ color: "rgba(250, 247, 240, 0.65)" }}
                >
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for stat strip area */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{
          height: "160px",
          background:
            "linear-gradient(to bottom, rgba(20, 18, 40, 0.0), rgba(20, 18, 40, 0.75))",
        }}
      />
    </section>
  );
}
