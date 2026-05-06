import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Firm", href: "/firm" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-plum text-cream">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-0">
          {/* Column 1: Wordmark + positioning */}
          <div className="md:col-span-4">
            <Image
              src="/logos/ProsperityTaxAdvisors_LogoWhite.png"
              alt="Prosperity Tax Advisors"
              width={540}
              height={540}
              className="h-[100px] w-auto"
            />
            <p
              className="mt-6 font-display text-[20px] font-normal leading-[1.3] text-cream max-w-[320px]"
            >
              Strategic tax and wealth advisory for business owners whose
              finances have outgrown their CPA.
            </p>
          </div>

          {/* Column 2: Firm nav */}
          <div className="md:col-span-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-cream/60 mb-5">
              Firm
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-cream transition-colors duration-200 hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Office */}
          <div className="md:col-span-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-cream/60 mb-5">
              Office
            </h4>
            <address className="not-italic text-[15px] text-cream leading-relaxed">
              <p>3410 Henderson Blvd, Suite 200</p>
              <p>Tampa, FL 33609</p>
              <p className="mt-3">
                <a
                  href="tel:813-937-9221"
                  className="transition-colors duration-200 hover:text-teal"
                >
                  813-937-9221
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Connect */}
          <div className="md:col-span-2">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-cream/60 mb-5">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-cream transition-colors duration-200 hover:text-teal"
                    target="_blank"
                    rel="noopener"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-[1280px] px-6 md:px-10"
        style={{ borderTop: "1px solid rgba(250, 247, 240, 0.1)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-4">
          <p className="text-[13px] text-cream/60">
            &copy; 2026 Prosperity Tax Advisors. All rights reserved.
          </p>
          <a
            href="https://thedigitalwash.com"
            target="_blank"
            rel="noopener"
            className="text-[13px] text-cream/60 transition-colors duration-200 hover:text-teal"
          >
            Site by The Digital Wash
          </a>
        </div>
      </div>
    </footer>
  );
}
