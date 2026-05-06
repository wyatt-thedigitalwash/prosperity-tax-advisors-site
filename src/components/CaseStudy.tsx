import DuotoneImage from "@/components/DuotoneImage";

interface DataRow {
  label: string;
  value: string;
}

interface CaseStudyProps {
  image: string;
  imageAlt: string;
  imageCaption: string;
  caseNumber: string;
  industryLabel: string;
  headline: string;
  pullQuote: string;
  attribution: string;
  dataRows: DataRow[];
  strategyParagraph: string;
  bg: "light" | "accent";
  bgClass: string;
}

export default function CaseStudy({
  image,
  imageAlt,
  imageCaption,
  caseNumber,
  industryLabel,
  headline,
  pullQuote,
  attribution,
  dataRows,
  strategyParagraph,
  bg,
  bgClass,
}: CaseStudyProps) {
  return (
    <section data-bg={bg} className={bgClass}>
      {/* Part A: Full-bleed duotone image */}
      <div className="relative w-full h-[320px] md:h-[520px]">
        <DuotoneImage
          src={image}
          alt={imageAlt}
          className="w-full h-full"
          priority={false}
        />
        <p
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[13px] font-medium uppercase tracking-[0.12em] text-cream z-10"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
        >
          {imageCaption}
        </p>
      </div>

      {/* Part B: Editorial content */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 pt-14 md:pt-20 pb-[80px] md:pb-[120px]">
        {/* Metadata line */}
        <div className="flex items-center gap-6">
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            {caseNumber}
          </span>
          <span
            className="block w-[40px] h-px"
            style={{ backgroundColor: "var(--aubergine)" }}
          />
          <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-graphite">
            {industryLabel}
          </span>
        </div>

        {/* Headline */}
        <h2
          className="mt-6 font-display text-[36px] md:text-[56px] font-normal leading-[1.15] tracking-[-0.015em] text-plum max-w-[880px]"
        >
          {headline}
        </h2>

        {/* Two-column body */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:items-start gap-16 md:gap-0">
          {/* Left column: pull quote */}
          <div className="md:w-5/12 md:pr-12">
            <div className="relative pl-0">
              <span
                className="font-display text-[80px] leading-[1] text-aubergine block -mb-6 -ml-1"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote>
                <p className="font-display italic text-[28px] font-normal leading-[1.3] text-plum">
                  {pullQuote}
                </p>
              </blockquote>
              <p className="mt-6 text-[14px] font-medium text-graphite">
                {attribution}
              </p>
            </div>
          </div>

          {/* Right column: data + strategy */}
          <div className="md:w-7/12">
            {/* Data block */}
            <div>
              {dataRows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex py-5"
                  style={{
                    borderTop: "1px solid rgba(54, 46, 118, 0.15)",
                    ...(i === dataRows.length - 1
                      ? {
                          borderBottom:
                            "1px solid rgba(54, 46, 118, 0.15)",
                        }
                      : {}),
                  }}
                >
                  <div className="w-4/12 md:w-4/12">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-graphite">
                      {row.label}
                    </span>
                  </div>
                  <div className="w-8/12 md:w-8/12">
                    <span className="text-[17px] font-medium text-plum">
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategy */}
            <div className="mt-10">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-plum">
                Strategy applied.
              </p>
              <p className="mt-4 text-[17px] leading-[1.6] text-ink/85">
                {strategyParagraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
