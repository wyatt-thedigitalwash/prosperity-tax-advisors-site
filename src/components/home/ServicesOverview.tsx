"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    name: "Tax Advisory",
    description:
      "Year-round strategy that identifies, substantiates, and activates IRS-approved tax positions across entity structure, retirement design, timing, and investment.",
  },
  {
    number: "02",
    name: "Client Advisory Services",
    description:
      "Monthly reconciliations, accurate financial statements, and audit insurance. We find errors in eighty to ninety percent of new clients\u2019 books.",
  },
  {
    number: "03",
    name: "Start-Up Business Services",
    description:
      "Foundational accounting and tax infrastructure for new entrepreneurs, with entity selection and compliance built in from day one.",
  },
  {
    number: "04",
    name: "Fractional CFO Services",
    description:
      "Forecasting, team compensation, and exit planning for seven-figure operators, without the overhead of a full-time hire.",
  },
];

export default function ServicesOverview() {
  return (
    <section data-bg="light" className="bg-cream py-[80px] md:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        <h2 className="heading">What we do.</h2>
        <p className="mt-6 text-[18px] text-ink/80 max-w-[640px] leading-[1.5]">
          Four service lines, designed to operate as one integrated practice.
          Most clients engage in two or more.
        </p>

        <div className="mt-16">
          {services.map((service, i) => (
            <Link
              key={service.number}
              href="/services"
              className="group block py-8 md:py-10 px-4 md:px-6 transition-colors duration-200 hover:bg-plum/[0.03]"
              style={{
                borderTop: "1px solid rgba(54, 46, 118, 0.2)",
                ...(i === services.length - 1
                  ? { borderBottom: "1px solid rgba(54, 46, 118, 0.2)" }
                  : {}),
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                <div className="md:w-1/12">
                  <span className="text-[13px] font-semibold tracking-[0.1em] text-aubergine">
                    {service.number}
                  </span>
                </div>
                <div className="md:w-4/12">
                  <h3 className="font-display text-[28px] font-normal text-plum transition-colors duration-200 group-hover:text-teal">
                    {service.name}
                  </h3>
                </div>
                <div className="md:w-7/12">
                  <p className="text-[17px] leading-[1.5] text-ink/80">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex md:justify-end">
          <Link
            href="/services"
            className="text-[15px] font-medium text-plum transition-colors duration-200 hover:text-teal"
          >
            All services →
          </Link>
        </div>
      </div>
    </section>
  );
}
