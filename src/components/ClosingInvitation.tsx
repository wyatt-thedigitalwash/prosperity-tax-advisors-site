const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

export default function ClosingInvitation() {
  return (
    <section data-bg="dark" className="bg-plum">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-[80px] md:py-[120px]">
        <div className="flex flex-col md:flex-row gap-16 md:gap-0">
          {/* Left column */}
          <div className="md:w-8/12">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-teal">
              Schedule an introduction.
            </p>
            <h2 className="heading mt-6 !text-cream max-w-[640px]">
              If you are already paying a six-figure tax bill, there is almost
              certainly a better way.
            </h2>
            <p className="mt-8 text-[18px] leading-[1.6] text-cream/85 max-w-[540px]">
              A 45-minute conversation is enough to know whether the firm is
              the right fit for your situation. No obligation. No generic
              assessment.
            </p>
          </div>

          {/* Right column */}
          <div className="md:w-4/12">
            <div>
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-cream/60">
                Direct line.
              </p>
              <a
                href="tel:813-937-9221"
                className="block mt-3 font-display text-[36px] font-normal text-cream transition-colors duration-200 hover:text-teal"
              >
                813-937-9221
              </a>
            </div>

            <div className="mt-6">
              <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-cream/60">
                Office.
              </p>
              <p className="mt-3 text-[17px] leading-[1.5] text-cream">
                3410 Henderson Blvd, Suite 200
                <br />
                Tampa, FL 33609
              </p>
            </div>

            <div className="mt-8">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="block w-full text-center bg-cream text-plum text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] transition-colors duration-200 hover:bg-teal hover:text-plum"
              >
                Schedule an introduction
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
