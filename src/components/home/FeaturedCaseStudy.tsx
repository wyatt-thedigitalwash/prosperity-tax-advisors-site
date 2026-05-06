import Link from "next/link";

const dataRows = [
  { label: "Structure", value: "Travel LLC, Property LLC, Consulting LLC, C-Corp" },
  { label: "Effective Rate", value: "41% → 5%" },
  { label: "Annual Savings", value: "$639,734" },
  { label: "20-Year Opportunity Cost", value: "$46.2M" },
];

export default function FeaturedCaseStudy() {
  return (
    <section data-bg="light" className="bg-cream py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
          Case Study Five of Five.
        </p>
        <h2 className="heading mt-6 max-w-[720px]">
          A multi-entity consultant moves from a 41% effective tax rate to 5%.
        </h2>

        <div className="mt-16 flex flex-col md:flex-row gap-16 md:gap-0">
          {/* Left column: pull quote */}
          <div className="md:w-5/12 md:pr-12">
            <div className="relative">
              <span
                className="font-display text-[80px] leading-[1] text-aubergine absolute -top-8 -left-2"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="pt-10">
                <p className="font-display italic text-[32px] font-normal leading-[1.25] text-plum">
                  PTA helped me think like the ultra-wealthy, protect my assets,
                  pay less in taxes, and finally have a long-term plan.
                </p>
              </blockquote>
              <p className="mt-6 text-[14px] font-medium text-graphite">
                Consultant, Multi-Entity Engagement.
              </p>
            </div>
          </div>

          {/* Right column: data block */}
          <div className="md:w-7/12">
            <div>
              {dataRows.map((row, i) => (
                <div
                  key={row.label}
                  className="flex py-5"
                  style={{
                    borderTop: "1px solid rgba(54, 46, 118, 0.15)",
                    ...(i === dataRows.length - 1
                      ? { borderBottom: "1px solid rgba(54, 46, 118, 0.15)" }
                      : {}),
                  }}
                >
                  <div className="w-4/12">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-graphite">
                      {row.label}
                    </span>
                  </div>
                  <div className="w-8/12">
                    <span className="text-[17px] font-medium text-plum">
                      {row.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/case-studies"
                className="text-[15px] font-medium text-plum transition-colors duration-200 hover:text-teal"
              >
                Read all five case studies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
