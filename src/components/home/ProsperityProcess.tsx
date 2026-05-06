const phases = [
  {
    number: 1,
    name: "Clarity Audit",
    description:
      "A full review of financial reality. We surface inefficiencies, missed deductions, and structural opportunities that rarely make it onto a compliance-only radar.",
  },
  {
    number: 2,
    name: "Custom Wealth Tax Blueprint",
    description:
      "A personalized strategy aligned with income, goals, and business structure. Drawn from over fifteen hundred IRS-approved options, selected for fit.",
  },
  {
    number: 3,
    name: "Entity Engineering",
    description:
      "Legal structure optimization to reduce taxable income, protect assets, and set the stage for long-term wealth decisions.",
  },
  {
    number: 4,
    name: "Empowerment Through Education",
    description:
      "Every strategy is taught before it is executed. Clients remain in control, not dependent.",
  },
  {
    number: 5,
    name: "Execution and Oversight",
    description:
      "Full implementation, quarterly reviews, and audit-ready documentation. The work does not stop at a binder.",
  },
];

export default function ProsperityProcess() {
  return (
    <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row">
          {/* Left spacer column */}
          <div className="hidden md:block md:w-3/12" />

          {/* Right content column */}
          <div className="md:w-8/12">
            <h2 className="heading">The Prosperity Process.</h2>
            <p className="mt-6 text-[18px] text-ink/80 max-w-[560px] leading-[1.5]">
              Five phases, delivered as a single coordinated engagement.
            </p>

            <div className="mt-16 relative">
              {/* Connecting vertical line */}
              <div
                className="absolute left-[12px] top-[24px] bottom-[24px] w-px"
                style={{ backgroundColor: "rgba(54, 46, 118, 0.2)" }}
              />

              <div className="flex flex-col gap-12">
                {phases.map((phase) => (
                  <div key={phase.number} className="relative flex gap-6">
                    {/* Number marker */}
                    <div
                      className="shrink-0 w-[24px] h-[24px] bg-plum rounded-[1px] flex items-center justify-center relative z-10"
                    >
                      <span className="text-[13px] font-semibold text-cream leading-none">
                        {phase.number}
                      </span>
                    </div>

                    {/* Phase content */}
                    <div>
                      <h3 className="font-display text-[24px] font-medium text-plum leading-[1.2] tracking-[-0.01em]">
                        {phase.name}
                      </h3>
                      <p className="mt-3 text-[16px] leading-[1.6] text-ink/80 max-w-[520px]">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
