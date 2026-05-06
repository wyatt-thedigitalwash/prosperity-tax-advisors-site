"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Firm", href: "/firm" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

function HamburgerIcon({ open, light }: { open: boolean; light: boolean }) {
  const barColor = light ? "bg-cream" : "bg-ink";
  const transition =
    "transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)";
  return (
    <div className="relative w-[22px] h-[16px]">
      <span
        className={`absolute left-0 h-[1.5px] ${barColor} ${transition} ${
          open
            ? "top-1/2 -translate-y-1/2 rotate-45 w-[22px]"
            : "top-0 w-[22px]"
        }`}
      />
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] ${barColor} ${transition} ${
          open ? "opacity-0 w-0" : "opacity-100 w-[22px]"
        }`}
      />
      <span
        className={`absolute left-0 h-[1.5px] ${barColor} ${transition} ${
          open
            ? "top-1/2 -translate-y-1/2 -rotate-45 w-[22px]"
            : "bottom-0 w-[22px]"
        }`}
      />
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const isOverHero = isHome && !scrolled;

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Track scroll position on home page
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    function onScroll() {
      setScrolled(window.scrollY > 40);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape key closes menu
  useEffect(() => {
    if (!menuOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, closeMenu]);

  const navColor = isOverHero ? "var(--cream)" : "var(--ink)";
  const activeColor = "var(--teal)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color] duration-200"
      style={{
        backgroundColor: isOverHero ? "transparent" : "var(--cream)",
        borderBottom: isOverHero
          ? "1px solid transparent"
          : "1px solid rgba(54, 46, 118, 0.1)",
      }}
    >
      <div className="relative mx-auto max-w-[1280px] h-[72px] flex items-center justify-between px-6 md:px-10">
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" aria-label="Prosperity Tax Advisors home">
            <Image
              src={
                isOverHero
                  ? "/logos/ProsperityTaxAdvisors_LogoWhite.png"
                  : "/logos/ProsperityTaxAdvisors_LogoPurple.png"
              }
              alt="Prosperity Tax Advisors"
              width={240}
              height={48}
              className="h-[52px] md:h-[56px] w-auto"
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop nav links, absolutely centered */}
        <nav
          className="hidden md:flex items-center gap-[36px] absolute left-1/2 -translate-x-1/2"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium tracking-[0] transition-colors duration-200 whitespace-nowrap"
              style={{
                color:
                  pathname === link.href ? activeColor : navColor,
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href)
                  (e.currentTarget as HTMLElement).style.color = activeColor;
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href)
                  (e.currentTarget as HTMLElement).style.color = navColor;
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Schedule button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            className={`inline-block text-[13px] font-medium px-[18px] py-[10px] rounded-[2px] transition-colors duration-200 ${
              isOverHero
                ? "bg-cream/15 text-cream border border-cream/30 hover:bg-cream/25"
                : "bg-plum text-cream hover:bg-aubergine"
            }`}
          >
            Schedule an introduction
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 relative z-[60]"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} light={isOverHero && !menuOpen} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-ink/30 md:hidden transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full bg-cream flex flex-col md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        aria-hidden={!menuOpen}
      >
        {/* Spacer to match header height */}
        <div className="h-[64px] shrink-0" />

        <nav
          className="flex-1 flex flex-col items-center justify-center gap-[48px]"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="font-display text-[36px] font-normal transition-all duration-300"
              style={{
                color:
                  pathname === link.href ? "var(--teal)" : "var(--plum)",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                transitionDelay: menuOpen ? `${100 + i * 40}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div
          className="flex justify-center pb-12 transition-all duration-300"
          style={{
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(12px)",
            transitionDelay: menuOpen
              ? `${100 + navLinks.length * 40}ms`
              : "0ms",
          }}
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
            className="inline-block bg-plum text-cream text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] transition-colors duration-200 hover:bg-aubergine"
          >
            Schedule an introduction
          </a>
        </div>
      </div>
    </header>
  );
}
