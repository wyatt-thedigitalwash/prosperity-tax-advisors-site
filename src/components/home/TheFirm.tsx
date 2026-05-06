import Image from "next/image";
import Link from "next/link";

const divider = "1px solid rgba(54, 46, 118, 0.15)";

export default function TheFirm() {
  return (
    <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:gap-16">
          {/* Left column: content */}
          <div className="md:w-6/12 flex flex-col justify-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
              The firm
            </p>

            <h2 className="heading mt-4">A team built for the work.</h2>

            <div className="mt-8 flex flex-col gap-4">
              <p className="text-[18px] leading-[1.6] text-ink/85">
                Prosperity is a hand-selected team of CPAs, forensic accountants,
                tax attorneys, and wealth advisors. We do not use offshore
                assistants, software-only returns, or the one-size template so
                common in the industry.
              </p>
              <p className="text-[18px] leading-[1.6] text-ink/85">
                The firm was founded by Michael Moffa in 2010, built on nearly two
                decades of private wealth management experience. Every client
                engagement is staffed with the specific disciplines the work
                requires, and every strategy is executed and documented in full.
              </p>
            </div>

            {/* Two inline stats */}
            <div className="mt-10 flex flex-col sm:flex-row gap-10 sm:gap-0">
              <div className="sm:pr-10">
                <p className="font-display font-normal text-[44px] md:text-[52px] leading-[1] text-plum">
                  $43.5M
                </p>
                <p className="mt-2 text-[12px] md:text-[13px] font-medium text-graphite leading-[1.35]">
                  Total tax deductions secured
                </p>
              </div>
              <div
                className="sm:pl-10"
                style={{ borderLeft: `${divider}` }}
              >
                {/* TODO: Placeholder stat. Confirm "$80K+" with the client
                    before launch. If they cannot verify a per-client figure,
                    replace with a client count stat such as "200+ Business
                    owners and professionals served" using their actual number. */}
                <p className="font-display font-normal text-[44px] md:text-[52px] leading-[1] text-plum">
                  $80K+
                </p>
                <p className="mt-2 text-[12px] md:text-[13px] font-medium text-graphite leading-[1.35]">
                  Average annual tax savings per client
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/firm"
                className="text-[15px] font-medium text-plum transition-colors duration-200 hover:text-teal"
              >
                Meet the firm →
              </Link>
            </div>
          </div>

          {/* Right column: team photo */}
          <div className="md:w-6/12 mt-12 md:mt-0">
            {/* Mobile: natural aspect ratio image */}
            <div className="md:hidden overflow-hidden rounded-[2px]">
              <Image
                src="/images/team/ProsperityTax_TeamPhoto.jpg"
                alt="The Prosperity Tax Advisors team, photographed at the firm's Tampa office."
                width={1200}
                height={800}
                className="w-full h-auto"
                sizes="100vw"
              />
            </div>
            {/* Desktop: fill container */}
            <div className="hidden md:block relative w-full h-full min-h-[400px] overflow-hidden rounded-[2px]">
              <Image
                src="/images/team/ProsperityTax_TeamPhoto.jpg"
                alt="The Prosperity Tax Advisors team, photographed at the firm's Tampa office."
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
