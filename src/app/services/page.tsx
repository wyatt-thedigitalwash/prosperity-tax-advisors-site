import type { Metadata } from "next";
import ClosingInvitation from "@/components/ClosingInvitation";

export const metadata: Metadata = {
  title: "Services — Prosperity Tax Advisors",
  description:
    "Tax advisory, client advisory, start-up services, and fractional CFO for business owners and high-income professionals in Tampa. Four disciplines delivered as one integrated practice.",
};

const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

interface ServiceSection {
  number: string;
  name: string;
  tagline: string;
  bg: "light" | "accent";
  bgClass: string;
  paragraphs: string[];
  includes: string[];
}

const services: ServiceSection[] = [
  {
    number: "01",
    name: "Tax Advisory",
    tagline: "Strategy, substantiation, and execution across the tax code.",
    bg: "accent",
    bgClass: "bg-bone",
    paragraphs: [
      "Tax advisory at Prosperity is the opposite of annual tax preparation. Preparation is a backward-looking exercise that documents what already happened. Strategy is a forward-looking exercise that structures what happens next. The difference, for a business owner with a six-figure tax liability, is measured in hundreds of thousands of dollars per year.",
      "Our approach begins with curation. The Internal Revenue Code contains over 70,000 pages and more than 1,500 strategies designed to incentivize specific taxpayer behavior. Most are never applied because most advisors do not know them, do not understand how they interact, or lack the implementation capacity to execute them.",
      "Every strategy we deploy is substantiated before it is activated. That means documentation, citation, and paperwork built into the strategy from day one, not retrofitted at filing time. The result is a tax position that is defensible on its face and a filing that is straightforward when April arrives.",
      "This is not a product. It is a year-round practice. We adjust as income shifts, as entities change, as the code evolves, and as the client's goals move from building to exiting.",
    ],
    includes: [
      "Entity structure optimization across LLCs, S-Corps, C-Corps, and partnerships",
      "Retirement plan design including cash balance, defined benefit, SEP-IRA, and Solo 401(k) strategies",
      "Income timing and acceleration strategies aligned to the tax year",
      "Cost segregation studies and accelerated depreciation planning",
      "Advanced strategies including Augusta Rule, captive insurance, and qualified opportunity zones where applicable",
      "Quarterly reviews with adjustments as circumstances change",
      "Full audit-ready documentation of every strategy deployed",
    ],
  },
  {
    number: "02",
    name: "Client Advisory Services",
    tagline:
      "The books behind the strategy. Monthly, reconciled, and accurate.",
    bg: "light",
    bgClass: "bg-cream",
    paragraphs: [
      "A tax strategy built on inaccurate books is a tax strategy built on guesses. Our Client Advisory Services exist to remove that guesswork. The work is unglamorous by design. Monthly reconciliations, clean financial statements, accurate payroll, and an audit trail that stands up to scrutiny.",
      "We find errors in eighty to ninety percent of new clients\u2019 books. Most are small. Some are significant. A few have, over the course of our work with clients, uncovered fraud, embezzlement, and decades of accounting malpractice. The pattern is consistent. Where the books are not reconciled, the tax return is wrong, and the strategy above it is built on a faulty foundation.",
      "This service also serves a specific subset of our clients exceptionally well. Healthcare practices, mental health groups, and multi-location professional service businesses have accounting needs that generalist bookkeepers rarely meet. We staff these engagements with specialists who understand the specific compliance and revenue recognition patterns of their industries.",
      "The firm offers audit insurance on the financial statements we prepare. That is not marketing language. It is a structural commitment to accuracy, because the alternative is unserviceable at the level of client we work with.",
    ],
    includes: [
      "Monthly bookkeeping and reconciliation across operating, payroll, and reserve accounts",
      "GAAP-aligned financial statements prepared to a defensible standard",
      "Payroll processing, compensation strategy, and owner-distribution modeling",
      "Specialized accounting for healthcare, mental health, and multi-location practices",
      "Forensic review for new clients to identify errors, omissions, and recoverable positions",
      "Audit insurance on financial statements prepared by the firm",
      "Direct coordination with the tax strategy team so the books and the return reflect the same numbers",
    ],
  },
  {
    number: "03",
    name: "Start-Up Business Services",
    tagline: "Foundational setup for new ventures, built for the long term.",
    bg: "accent",
    bgClass: "bg-bone",
    paragraphs: [
      "The first year of a business is the hardest to undo. Entity decisions, accounting systems, compensation structures, and tax elections made in the opening twelve months create constraints that compound over time. Most new owners make these decisions without understanding the downstream implications.",
      "Our Start-Up service exists to compress years of expensive learning into a structured opening engagement. We work with founders on entity selection based on growth trajectory and tax posture, build the accounting system to scale, and put a tax strategy in place from the first quarter of operation.",
      "This is not a package. It is a short engagement designed to set the business on a posture that does not require expensive restructuring in year three or year five. Founders who engage Prosperity at the beginning tend to stay with the firm as their businesses grow, because the foundation was built with growth in mind.",
    ],
    includes: [
      "Entity selection based on revenue model, ownership structure, and long-term goals",
      "Accounting system design and implementation, configured for scale",
      "Payroll setup, compensation strategy, and founder distribution planning",
      "Foundational tax strategy built into the first operating year",
      "Compliance infrastructure across federal, state, and local requirements",
      "Onboarding into the firm\u2019s ongoing advisory framework as the business matures",
    ],
  },
  {
    number: "04",
    name: "Fractional CFO Services",
    tagline:
      "The strategic financial function, without the full-time hire.",
    bg: "light",
    bgClass: "bg-cream",
    paragraphs: [
      "A seven-figure business is too big to run without a CFO and too small to hire one. The gap that opens in this range, typically around five to fifty million in revenue, is where most founders either make avoidable strategic errors or burn out running both the business and its finances. Fractional CFO services are built to close that gap.",
      "Our CFO engagements operate alongside a client\u2019s existing leadership team as an ongoing strategic partner, not a consulting project. We handle forecasting and budgeting, build compensation structures that scale without compressing margin, model expense reduction scenarios, and partner with ownership on long-term decisions, including exit planning.",
      "Because the same firm handles the tax strategy, the bookkeeping, and the CFO function, the financial strategy is coherent across every layer. A decision made in the CFO engagement does not get undone by a misaligned tax position or an inaccurate set of books. The whole picture moves in one direction.",
    ],
    includes: [
      "Monthly financial review and forward-looking forecasting",
      "Annual budgeting and quarterly re-forecasting as the business evolves",
      "Compensation strategy for leadership and scaling teams",
      "Expense reduction modeling and margin optimization",
      "Capital structure planning, debt, equity, and reinvestment strategy",
      "Exit planning including valuation, structuring, and sale preparation",
      "Direct integration with the firm\u2019s tax strategy and accounting teams",
    ],
  },
];

function ServiceDetail({ service }: { service: ServiceSection }) {
  return (
    <section data-bg={service.bg} className={`${service.bgClass} py-[80px] md:py-[120px]`}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0">
          {/* Left column: sticky sidebar */}
          <div className="md:w-4/12 md:sticky md:top-24">
            <p className="font-display text-[24px] font-normal text-aubergine">
              {service.number}
            </p>
            <div
              className="mt-2 w-[40px] h-px"
              style={{ backgroundColor: "var(--aubergine)" }}
            />
            <h2 className="heading mt-8">{service.name}</h2>
            <p className="mt-4 text-[18px] font-normal leading-[1.4] text-ink/75 max-w-[300px]">
              {service.tagline}
            </p>
          </div>

          {/* Right column: body content */}
          <div className="md:w-8/12">
            <div className="max-w-[640px]">
              <div className="flex flex-col gap-5">
                {service.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.65] text-ink/85"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* What this includes */}
              <div className="mt-16">
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-plum">
                  What this includes.
                </p>
                <div className="mt-5">
                  {service.includes.map((item, i) => (
                    <div
                      key={i}
                      className="py-4 text-[17px] leading-[1.65] text-ink/85"
                      style={{
                        borderTop: "1px solid rgba(54, 46, 118, 0.15)",
                        ...(i === service.includes.length - 1
                          ? {
                              borderBottom:
                                "1px solid rgba(54, 46, 118, 0.15)",
                            }
                          : {}),
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-cream pt-[180px] pb-[80px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-graphite">
                Services.
              </span>
              <span
                className="block w-[24px] h-px"
                style={{ backgroundColor: "var(--teal)" }}
              />
            </div>

            <h1 className="display max-w-[880px]">
              Four disciplines. One firm. One engagement.
            </h1>

            <p className="mt-8 text-[19px] max-md:text-[17px] leading-[1.5] text-ink/80 max-w-[720px]">
              Most firms operate in silos. A CPA handles compliance. A financial
              planner handles investments. A bookkeeper handles the books. Each
              sees a piece of the picture. Prosperity operates as one integrated
              practice, so strategy, execution, and structure are built together,
              by the same team, against the same client goal.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 2-5: Service Details */}
      {services.map((service) => (
        <ServiceDetail key={service.number} service={service} />
      ))}

      {/* Section 6: How Engagements Work */}
      <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            Engagement model.
          </p>
          <h2 className="heading mt-4">How clients engage the firm.</h2>

          <div className="mt-12 flex flex-col gap-5 max-w-[960px]">
            <p className="text-[18px] leading-[1.65] text-ink/85">
              Every engagement begins with an introduction. A 45-minute
              conversation that establishes whether the firm is the right fit for
              a client's situation. We are selective about who we work with, and
              we expect the same discernment from prospective clients. Fit
              matters more than volume.
            </p>
            <p className="text-[18px] leading-[1.65] text-ink/85">
              Most clients engage in two or more service lines. Tax advisory and
              Client Advisory Services are the most common pairing, because
              strategy without clean books is unserviceable. Clients with
              seven-figure revenue frequently add the Fractional CFO function.
              The engagement scales with the complexity of the situation, and
              pricing is discussed openly during the introduction.
            </p>
          </div>

          <div className="mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="text-[15px] font-medium text-plum transition-colors duration-200 hover:text-teal"
            >
              Schedule an introduction →
            </a>
          </div>
        </div>
      </section>

      {/* Section 7: Closing Invitation */}
      <ClosingInvitation />
    </>
  );
}
