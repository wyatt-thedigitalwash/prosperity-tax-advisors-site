import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ClosingInvitation from "@/components/ClosingInvitation";

export const metadata: Metadata = {
  title: "Contact — Prosperity Tax Advisors",
  description:
    "Contact Prosperity Tax Advisors in Tampa, Florida. Schedule an introduction or send a message. We respond within one business day.",
};

const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-cream pt-[180px] pb-[80px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-graphite">
                Contact.
              </span>
              <span
                className="block w-[24px] h-px"
                style={{ backgroundColor: "var(--teal)" }}
              />
            </div>

            <h1 className="display max-w-[880px]">
              Two ways to start a conversation.
            </h1>

            <p className="mt-8 text-[19px] max-md:text-[17px] leading-[1.5] text-ink/80 max-w-[720px]">
              Serious prospects can schedule an introduction directly. For
              everyone else, a short message is the best way to begin. We
              respond within one business day during the week, and we read
              everything ourselves.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Two Pathways */}
      <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-start gap-16 md:gap-0">
            {/* Left column: Contact form */}
            <div className="md:w-6/12 md:pr-16">
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
                Send a message.
              </p>
              <h2 className="subheading mt-4">
                Tell us about your situation.
              </h2>
              <p className="mt-8 text-[16px] leading-[1.5] text-ink/80 max-w-[440px]">
                Share as much or as little as you like. Revenue range, tax
                complexity, what you are hoping to solve. The more context you
                provide, the more useful our response will be.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            {/* Right column: Booking pathway */}
            <div
              className="md:w-6/12 md:pl-16 md:border-l"
              style={{ borderColor: "rgba(54, 46, 118, 0.15)" }}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
                Schedule directly.
              </p>
              <h2 className="subheading mt-4">
                Book a 45-minute introduction.
              </h2>
              <div className="mt-8 flex flex-col gap-4 max-w-[440px]">
                <p className="text-[16px] leading-[1.5] text-ink/80">
                  For prospects who are ready to explore whether the firm is the
                  right fit. A single 45-minute conversation, conducted by phone
                  or video, with a senior member of the team.
                </p>
                <p className="text-[16px] leading-[1.5] text-ink/80">
                  There is no pre-call intake form. We will ask you about your
                  situation during the call itself. If the fit is right, we will
                  discuss next steps. If not, you will still leave the
                  conversation with useful perspective.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-plum text-cream text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] transition-colors duration-200 hover:bg-aubergine"
                >
                  Schedule an introduction
                </a>
              </div>
              <p className="mt-8 text-[13px] text-graphite max-w-[300px]">
                Introductions are complimentary. There is no charge and no
                obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Office Info */}
      <section data-bg="light" className="bg-cream py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            The firm.
          </p>
          <h2 className="heading mt-4">The Tampa office.</h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Office */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-graphite">
                Office.
              </p>
              <div className="mt-3">
                <p className="font-display text-[24px] font-normal text-plum leading-[1.4]">
                  3410 Henderson Blvd, Suite 200
                </p>
                <p className="font-display text-[24px] font-normal text-plum leading-[1.4]">
                  Tampa, FL 33609
                </p>
              </div>
            </div>

            {/* Direct line */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-graphite">
                Direct line.
              </p>
              <div className="mt-3">
                <a
                  href="tel:813-937-9221"
                  className="font-display text-[24px] font-normal text-plum transition-colors duration-200 hover:text-teal"
                >
                  813-937-9221
                </a>
                <p className="mt-2 text-[14px] text-ink/75">
                  Business hours only. Weekdays, 9am to 5pm Eastern.
                </p>
              </div>
            </div>

            {/* Parking */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-graphite">
                Parking and access.
              </p>
              <p className="mt-3 font-display text-[18px] font-normal text-plum leading-[1.5]">
                Complimentary visitor parking on site. Suite 200 is accessed via
                the main lobby elevators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Tampa Skyline */}
      <section className="relative w-full h-[240px] md:h-[320px] overflow-hidden">
        <Image
          src="/images/tampa-skyline-bay.webp"
          alt="The Tampa skyline at dusk, photographed from across the bay."
          fill
          className="object-cover object-center grayscale"
          quality={85}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(54, 46, 118, 0.4)",
            mixBlendMode: "multiply",
          }}
        />
        <p
          className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[13px] font-medium uppercase tracking-[0.12em] text-cream"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
        >
          3410 Henderson Blvd, Tampa.
        </p>
      </section>

      {/* Section 5: Closing Invitation */}
      <ClosingInvitation />
    </>
  );
}
