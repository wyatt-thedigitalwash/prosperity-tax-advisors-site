import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import ClosingInvitation from "@/components/ClosingInvitation";

export const metadata: Metadata = {
  title: "Case studies — Prosperity Tax Advisors",
  description:
    "Five client engagements across construction, healthcare, retail, and consulting. Real savings, real strategies, real numbers. Tampa-based tax strategy and wealth advisory.",
};

const caseStudies = [
  {
    image: "/images/case-studies/roofing-company-tax-strategy.webp",
    imageAlt:
      "A roofing crew at work on a residential build, photographed at dusk.",
    imageCaption: "Case study one. Construction.",
    caseNumber: "Case study 01 of 5",
    industryLabel: "Construction",
    headline:
      "A roofing company moves from a 29.7% effective tax rate to 7.8%.",
    pullQuote:
      "We were paying 22x more than legally required. PTA not only restructured our finances but transformed how we run our business.",
    attribution: "Owner, Roofing Company Engagement.",
    dataRows: [
      { label: "Revenue", value: "~$1.4M" },
      { label: "Tax Paid (Prior Year)", value: "$431,000" },
      { label: "Effective Rate", value: "29.7% \u2192 7.8%" },
      { label: "Annual Savings", value: "$319,762" },
      { label: "20-Year Opportunity Cost", value: "$23.1M" },
    ],
    strategyParagraph:
      "The engagement began with a forensic review that identified significant missed deductions across vehicle and asset planning. From there, the firm deployed a multi-layer entity structure, reallocated ownership of depreciating assets, and introduced strategic investment positions timed against the tax year. The work was substantiated end to end, giving the client a defensible filing position with documentation to match.",
    bg: "accent" as const,
    bgClass: "bg-bone",
  },
  {
    image: "/images/case-studies/healthcare-professional-tax-planning.webp",
    imageAlt:
      "A clinical environment at a healthcare professional's private practice.",
    imageCaption: "Case study two. Healthcare.",
    caseNumber: "Case study 02 of 5",
    industryLabel: "Healthcare",
    headline:
      "A healthcare professional moves from W2 to 1099, cutting their effective tax rate nearly in half.",
    pullQuote:
      "I thought being W2 was the best protection. Prosperity showed me I could be smart, protected, and save hundreds of thousands legally.",
    attribution: "Physician, 1099 Transition Engagement.",
    dataRows: [
      { label: "Situation", value: "W2 to 1099 Transition" },
      { label: "Effective Rate", value: "33.6% \u2192 15.8%" },
      { label: "Annual Savings", value: "$418,107" },
      { label: "20-Year Missed Wealth", value: "$30.2M" },
    ],
    strategyParagraph:
      "The transition from W2 to 1099 opens a meaningful set of planning options that most physicians never explore. The firm structured the new entity to optimize self-employment tax exposure, designed a retirement plan calibrated to the client\u2019s income level, and integrated cash flow planning so the tax savings compounded into an investment position rather than evaporating into higher quarterly payments.",
    bg: "light" as const,
    bgClass: "bg-cream",
  },
  {
    image: "/images/case-studies/furniture-store-tax-savings.webp",
    imageAlt:
      "A furniture showroom with pendant lighting and high ceilings.",
    imageCaption: "Case study three. Retail.",
    caseNumber: "Case study 03 of 5",
    industryLabel: "Retail",
    headline:
      "A furniture retailer\u2019s tax liability drops from $494,000 to $59,000.",
    pullQuote:
      "I had no idea how much I was overpaying. These strategies completely changed my bottom line.",
    attribution: "Owner, Retail Engagement.",
    dataRows: [
      { label: "Revenue", value: "~$10.9M" },
      { label: "Tax Liability", value: "$494,000 \u2192 $59,000" },
      { label: "Annual Savings", value: "$435,373" },
    ],
    strategyParagraph:
      "High retained earnings and passive income exposure had pushed the client into a tax bracket that did not reflect the actual operating posture of the business. The firm deployed a C-Corp layer to restructure retained earnings, introduced energy investment positions aligned to the client\u2019s long-term capital strategy, and built a risk management structure that doubled as a tax efficiency vehicle.",
    bg: "accent" as const,
    bgClass: "bg-bone",
  },
  {
    image: "/images/case-studies/construction-company-tax-reduction.webp",
    imageAlt:
      "A construction site with equipment staged for the morning shift.",
    imageCaption: "Case study four. Construction.",
    caseNumber: "Case study 04 of 5",
    industryLabel: "Construction",
    headline:
      "A construction company reduces its effective tax liability by over 75%.",
    pullQuote:
      "It may not be millions, but to a business our size, every dollar counts. The strategies Prosperity used were things my CPA never told me about.",
    attribution: "Owner, Construction Engagement.",
    dataRows: [
      { label: "Revenue", value: "~$1.03M" },
      { label: "Tax Liability", value: "Reduced by over 75%" },
      { label: "Annual Savings", value: "$172,320" },
      { label: "Wealth Preservation Gain", value: "$7,030 annually" },
    ],
    strategyParagraph:
      "Smaller operators rarely get access to the sophisticated strategies the firm deploys, because most advisory firms will not work at this revenue tier. The engagement proved the approach scales down. The firm deployed targeted energy investments, built a self-funded risk management structure, and introduced advanced gifting strategies that preserved wealth across generations without triggering additional tax exposure.",
    bg: "light" as const,
    bgClass: "bg-cream",
  },
  {
    image: "/images/case-studies/multi-entity-consultant-tax-strategy.webp",
    imageAlt:
      "A contemporary office with layered architectural detail.",
    imageCaption: "Case study five. Consulting.",
    caseNumber: "Case study 05 of 5",
    industryLabel: "Consulting",
    headline:
      "A multi-entity consultant moves from a 41% effective tax rate to 5%.",
    pullQuote:
      "PTA helped me think like the ultra-wealthy, protect my assets, pay less in taxes, and finally have a long-term plan.",
    attribution: "Consultant, Multi-Entity Engagement.",
    dataRows: [
      {
        label: "Structure",
        value: "Travel LLC, Property LLC, Consulting LLC, C-Corp",
      },
      { label: "Effective Rate", value: "41% \u2192 5%" },
      { label: "Annual Savings", value: "$639,734" },
      { label: "20-Year Opportunity Cost", value: "$46.2M" },
    ],
    strategyParagraph:
      "The client\u2019s four-entity structure had been assembled over time without a coordinating strategy, creating liability exposure and disjointed tax treatment across business lines. The firm restructured the entities against a unified asset protection framework, optimized tax treatment at each entity boundary, and introduced advanced strategies that leveraged the structure rather than fought it. The result is a posture that functions as a single integrated wealth system.",
    bg: "accent" as const,
    bgClass: "bg-bone",
  },
];

const testimonialsLeft = [
  {
    quote:
      "I was hesitant about the investment, but they showed me exactly how it pays for itself. Now I\u2019m seeing real ROI, not just peace of mind.",
    name: "Julia I.",
    industry: "Consulting",
  },
  {
    quote:
      "I always thought I had a solid tax guy until Prosperity showed me three missed strategies and more than $16,000 in overpayments. We\u2019re now using that savings to reinvest in equipment and hire new crew.",
    name: "Michael F.",
    industry: "Construction",
  },
  {
    quote:
      "I\u2019m not a finance guy, and Prosperity never made me feel out of the loop. They explained everything in plain English, showed me the numbers, and delivered. That\u2019s what every business owner needs.",
    name: "Daniel P.",
    industry: "Real Estate",
  },
];

const testimonialsRight = [
  {
    quote:
      "Our regular check-ins are packed with insights and updates. I always leave with action steps and new ideas to grow smarter.",
    name: "Jay K.",
    industry: "Wealth Management",
  },
  {
    quote:
      "Running a seven-figure furniture business, taxes were always a huge line item. Prosperity stepped in and restructured everything, from C-Corp planning to risk management. They didn\u2019t just save me money, they changed the way I look at growth.",
    name: "Jesse B.",
    industry: "Flooring Company",
  },
  {
    quote:
      "I\u2019m a doctor managing a growing practice. Prosperity\u2019s team showed me how to structure charitable giving, risk management, and even personal residence expenses to save over $460,000. It\u2019s not just tax planning, it\u2019s wealth building.",
    name: "John M.",
    industry: "Chiropractor",
  },
];

function Testimonial({
  quote,
  name,
  industry,
}: {
  quote: string;
  name: string;
  industry: string;
}) {
  return (
    <div>
      <span
        className="font-display text-[64px] leading-[1] text-aubergine block -mb-4"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p className="font-display italic text-[22px] font-normal leading-[1.4] text-plum">
        {quote}
      </p>
      <p className="mt-5 text-[14px] font-medium text-graphite">
        {name}, {industry}.
      </p>
      <div
        className="mt-1 w-[24px] h-px"
        style={{ backgroundColor: "var(--teal)" }}
      />
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-cream pt-[180px] pb-[80px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-graphite">
                Case studies.
              </span>
              <span
                className="block w-[24px] h-px"
                style={{ backgroundColor: "var(--teal)" }}
              />
            </div>

            <h1 className="display max-w-[880px]">
              Five engagements. $1.9M in annual client savings.
            </h1>

            <p className="mt-8 text-[19px] max-md:text-[17px] leading-[1.5] text-ink/80 max-w-[720px]">
              These are real engagements with real numbers. Industries and
              identifying details have been altered to protect client privacy.
              Everything else, the strategies, the savings, the effective rate
              changes, is exactly as it happened.
            </p>
          </div>
        </div>
      </section>

      {/* Sections 2-6: Case Studies */}
      {caseStudies.map((cs) => (
        <CaseStudy key={cs.caseNumber} {...cs} />
      ))}

      {/* Section 7: Testimonials */}
      <section data-bg="light" className="bg-cream py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            What clients say.
          </p>
          <h2 className="heading mt-4">In their words.</h2>

          <div className="mt-16 flex flex-col md:flex-row gap-16 md:gap-20">
            <div className="md:w-1/2 flex flex-col gap-16">
              {testimonialsLeft.map((t) => (
                <Testimonial key={t.name} {...t} />
              ))}
            </div>
            <div className="md:w-1/2 flex flex-col gap-16">
              {testimonialsRight.map((t) => (
                <Testimonial key={t.name} {...t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Closing Invitation */}
      <ClosingInvitation />
    </>
  );
}
