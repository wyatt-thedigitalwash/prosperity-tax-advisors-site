import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import ClosingInvitation from "@/components/ClosingInvitation";

const BOOKING_URL =
  "https://link.protax.ai/widget/form/Ylq3ANkARykg5ZIaCIkV";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Prosperity Tax Advisors`,
    description: post.excerpt,
  };
}

export default async function InsightPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      {/* Section 1: Post Header */}
      <section data-bg="light" className="bg-cream pt-[120px] md:pt-[180px] pb-[64px] md:pb-[96px]">
        <div className="mx-auto max-w-[760px] px-6 md:px-10">
          <Link
            href="/insights"
            className="text-[14px] font-medium text-graphite transition-colors duration-200 hover:text-plum"
          >
            &larr; Back to Insights
          </Link>

          <div className="mt-10">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
              {post.category}.
            </p>
            <h1 className="mt-5 font-display text-[44px] md:text-[72px] font-normal leading-[1.1] tracking-[-0.02em] text-plum">
              {post.title}
            </h1>
            <p className="mt-8 text-[14px] text-graphite">
              {post.dateDisplay} &middot; {post.readTime}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Post Body */}
      <section data-bg="light" className="bg-cream pb-[80px] md:pb-[120px]">
        <div className="mx-auto max-w-[720px] px-6 md:px-10">
          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Post footer CTA */}
          <div className="mt-24 flex justify-center">
            <div
              className="w-[40px] h-px"
              style={{ backgroundColor: "var(--aubergine)" }}
            />
          </div>

          <div className="mt-16">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
              Work with the firm.
            </p>
            <p className="mt-4 font-display text-[32px] font-medium text-plum leading-[1.2] max-w-[560px]">
              Ready to structure a tax strategy that matches your situation?
            </p>
            <div className="mt-6">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="inline-block bg-plum text-cream text-[14px] font-medium px-[24px] py-[14px] rounded-[2px] transition-colors duration-200 hover:bg-aubergine"
              >
                Schedule an introduction
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Related Insights */}
      <section data-bg="accent" className="bg-bone py-[80px] md:py-[120px]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-aubergine">
            Related reading.
          </p>
          <h2 className="subheading mt-4">More insights from the firm.</h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {related.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/insights/${relatedPost.slug}`}
                className="group block"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-aubergine">
                  {relatedPost.category}
                </p>
                <p className="mt-3 text-[13px] font-medium text-graphite">
                  {relatedPost.dateDisplay}
                </p>
                <h3 className="mt-5 font-display text-[22px] font-medium text-plum leading-[1.2] line-clamp-3 transition-colors duration-200 group-hover:text-teal">
                  {relatedPost.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Closing Invitation */}
      <ClosingInvitation />
    </>
  );
}
