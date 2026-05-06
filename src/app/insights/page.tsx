import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "@/lib/posts";
import ClosingInvitation from "@/components/ClosingInvitation";

export const metadata: Metadata = {
  title: "Insights — Prosperity Tax Advisors",
  description:
    "Essays and analysis on tax strategy and wealth from Prosperity Tax Advisors, a Tampa firm serving business owners and high-income professionals.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-cream pt-[180px] pb-[80px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="max-w-[880px]">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-graphite">
                Insights.
              </span>
              <span
                className="block w-[24px] h-px"
                style={{ backgroundColor: "var(--teal)" }}
              />
            </div>

            <h1 className="display max-w-[880px]">
              Perspective on tax strategy, wealth, and the code.
            </h1>

            <p className="mt-8 text-[19px] max-md:text-[17px] leading-[1.5] text-ink/80 max-w-[720px]">
              Essays, media features, and firm analysis on tax strategy,
              legislative change, and the wealth questions that follow. Published
              as warranted, not on a schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Article Feed */}
      <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          {POSTS.map((post, i) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group block py-10 md:py-14"
              style={{
                borderTop: "1px solid rgba(54, 46, 118, 0.15)",
                ...(i === POSTS.length - 1
                  ? { borderBottom: "1px solid rgba(54, 46, 118, 0.15)" }
                  : {}),
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
                {/* Left column */}
                <div className="md:w-3/12">
                  <p className="text-[13px] font-medium uppercase tracking-[0.1em] text-plum">
                    {post.dateDisplay}
                  </p>
                  <p className="mt-3 text-[13px] font-normal text-graphite">
                    {post.readTime}
                  </p>
                  <div
                    className="mt-6 w-[40px] h-px"
                    style={{ backgroundColor: "var(--aubergine)" }}
                  />
                </div>

                {/* Right column */}
                <div className="md:w-9/12">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-aubergine">
                    {post.category}
                  </p>
                  <h2 className="mt-4 font-display text-[28px] md:text-[40px] font-medium text-plum leading-[1.2] tracking-[-0.015em] max-w-[720px] transition-colors duration-200 group-hover:text-teal">
                    {post.title}
                  </h2>
                  <p className="mt-5 text-[17px] leading-[1.55] text-ink/80 max-w-[680px] line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-6 text-[14px] font-medium text-plum transition-colors duration-200 group-hover:text-teal">
                    Read article &rarr;
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 3: Closing Invitation */}
      <ClosingInvitation />
    </>
  );
}
