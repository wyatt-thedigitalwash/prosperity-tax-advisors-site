import type { Metadata } from "next";
import Image from "next/image";
import ClosingInvitation from "@/components/ClosingInvitation";

export const metadata: Metadata = {
  title: "The firm — Prosperity Tax Advisors",
  description:
    "Credentialed CPAs, forensic accountants, tax attorneys, and wealth advisors serving business owners and high-income professionals from Tampa, Florida.",
};

const leadership = [
  {
    name: "Michael Moffa, AIF, AWMA, CRPC, CEPA",
    role: "Founder and President",
    image: "/images/team/michael-moffa.webp",
    photoPosition: "left" as const,
    bio: [
      "Michael founded Prosperity to bring private-wealth-level tax strategy to business owners and high-income professionals. He began his career in 2004 at Ameriprise Financial and partnered with LPL Financial in 2010 to establish Prosperity Wealth Advisors.",
      "A Forbes brand contributor, Michael has been recognized as a Central Florida Premier Financial Advisor as featured in The Wall Street Journal. He speaks regularly at industry conferences hosted by the Society for Financial Awareness, First Trust, Rochdale Investment Management, and BlackRock.",
      "He holds designations as an Accredited Investment Fiduciary, Accredited Wealth Management Advisor, Chartered Retirement Planning Counselor, and Certified Exit Planning Advisor. Michael and his wife Chelsea live in Tampa with their three children.",
    ],
  },
  {
    name: "Chelsea Moffa",
    role: "Partner and Executive Director",
    image: "/images/team/chelsea-moffa.webp",
    photoPosition: "right" as const,
    bio: [
      "Chelsea leads client experience at Prosperity, ensuring every engagement is intentional, strategic, and built around long-term outcomes. She specializes in translating sophisticated tax concepts into clear, actionable guidance.",
      "Clients value Chelsea's strategic insight, accessibility, and ability to keep the long-term picture visible as circumstances evolve. Her role ensures that the firm's work does not remain theoretical. Strategies are understood, implemented, and revisited as a client's situation changes.",
    ],
  },
  {
    name: "Nick Turner, CPA, CFP",
    role: "Vice President of Tax Advisory Services",
    image: "/images/team/nick-turner.webp",
    photoPosition: "left" as const,
    bio: [
      "Nick leads tax strategy and planning for the firm's diverse client base. A Tampa native, he graduated from Jesuit High School, earned his Bachelor's in Accountancy from Spring Hill College, and completed graduate studies at the University of South Florida.",
      "He became a licensed CPA in 2007 and earned his CFP designation in 2012. Nick is a member of the American Institute of CPAs and the Florida Institute of CPAs.",
      "With nearly two decades of experience, Nick leads the firm's tax strategy engine. His work ensures clients receive proactive, personalized planning that aligns with their long-term financial goals rather than reactive compliance cycles.",
    ],
  },
];

const team = [
  {
    name: "Callie Koenig",
    role: "Chief of Staff",
    image: "/images/team/callie-koenig.webp",
    bio: "Callie drives organizational efficiency and cross-functional alignment across the firm. She previously served as Prosperity's Vice President of Sales, Marketing, and Client Relations, and holds dual degrees in Marketing and Management from the University of Kentucky.",
  },
  {
    name: "Michael Furdock, Esq.",
    role: "Tax Compliance Attorney",
    image: "/images/team/michael-furdock.webp",
    bio: "A licensed Florida attorney and founder of Furdock Law PLLC, Michael specializes in transactional contract law, real estate, business and tax compliance, and the Employee Retention Tax Credit. His partnership with Prosperity provides clients with integrated legal and tax compliance support.",
  },
  {
    name: "Cody Boyd",
    role: "Senior Tax Manager",
    image: "/images/team/cody-boyd.webp",
    bio: "Cody moves clients from reactive filing to proactive strategic planning. An IRS-designated Enrolled Agent, he is authorized to represent clients before the IRS and specializes in multi-entity structuring and long-term tax efficiency.",
  },
  {
    name: "Leah Cerbelli",
    role: "Director of Client Relations",
    image: "/images/team/leah-cerbelli.webp",
    bio: "Leah oversees the full client journey, from onboarding through ongoing engagement. She serves as the internal advocate who coordinates between advisors and operations, ensuring every strategy stays aligned, proactive, and easy to navigate.",
  },
  {
    name: "Sarah Shortridge",
    role: "Director of Business Development",
    image: "/images/team/sarah-shortridge.webp",
    bio: "Sarah is the first strategic partner for new Prosperity relationships. She guides high-net-worth individuals and business owners through early conversations with clarity, discretion, and respect for the stakes involved.",
  },
];

export default function FirmPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-cream pt-[180px] pb-[80px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-graphite">
                The firm.
              </span>
              <span
                className="block w-[24px] h-px"
                style={{ backgroundColor: "var(--teal)" }}
              />
            </div>

            <h1 className="display max-w-[880px]">
              Credentialed practitioners, not one of everything.
            </h1>

            <p className="mt-8 text-[19px] max-md:text-[17px] leading-[1.5] text-ink/80 max-w-[720px]">
              Prosperity was built on a simple premise. A business owner paying
              a six-figure tax bill should not be served by a generalist. They
              should be served by CPAs, forensic accountants, tax attorneys, and
              wealth advisors working as one team, on the same engagement,
              against the same strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Firm Philosophy */}
      <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-0">
            <div className="md:w-5/12">
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
                Philosophy.
              </p>
              <h2 className="heading mt-4">A small firm by design.</h2>
            </div>

            <div className="md:w-7/12">
              <div className="flex flex-col gap-5 max-w-[640px]">
                <p className="text-[18px] leading-[1.65] text-ink/85">
                  Most tax firms have two gears. Year-round silence, then a
                  compressed filing season where returns are processed like
                  freight. Our clients do not operate this way, and their firm
                  should not either.
                </p>
                <p className="text-[18px] leading-[1.65] text-ink/85">
                  We staff every engagement with the specific disciplines the
                  work requires. If a client needs entity engineering, a tax
                  attorney is at the table. If the books need forensic review, a
                  specialist handles it. The work is not delegated to software or
                  offshore labor. It is done by the named professionals on this
                  page.
                </p>
                <p className="text-[18px] leading-[1.65] text-ink/85">
                  Founded by Michael Moffa in 2010, the firm operates on nearly
                  two decades of private wealth management experience applied to
                  the specific problem of business owner taxation. Every strategy
                  is substantiated. Every position is documented. Every client
                  relationship is built to last beyond a single tax year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership */}
      <section data-bg="light" className="bg-cream py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            Leadership.
          </p>
          <h2 className="heading mt-4">The principals.</h2>

          <div className="mt-16 flex flex-col gap-24">
            {leadership.map((person) => {
              const photoCol = (
                <div className="md:w-5/12">
                  <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
              );

              const textCol = (
                <div className="md:w-7/12">
                  <div className="max-w-[560px]">
                    <h3 className="heading">{person.name}</h3>
                    <p className="mt-2 text-[15px] font-medium uppercase tracking-[0.1em] text-aubergine">
                      {person.role}
                    </p>
                    <div className="mt-8 flex flex-col gap-5">
                      {person.bio.map((paragraph, j) => (
                        <p
                          key={j}
                          className="text-[17px] leading-[1.65] text-ink/85"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );

              return (
                <div
                  key={person.name}
                  className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16"
                >
                  {person.photoPosition === "left" ? (
                    <>
                      {photoCol}
                      {textCol}
                    </>
                  ) : (
                    <>
                      {textCol}
                      {photoCol}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            The team.
          </p>
          <h2 className="heading mt-4">The people behind the practice.</h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-x-12 md:gap-y-20">
            {team.map((person) => (
              <div key={person.name}>
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2px]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="subheading">{person.name}</h3>
                  <p className="mt-1 text-[14px] font-medium uppercase tracking-[0.1em] text-aubergine">
                    {person.role}
                  </p>
                  <p className="mt-4 text-[16px] leading-[1.6] text-ink/85">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Closing Invitation */}
      <ClosingInvitation />
    </>
  );
}
