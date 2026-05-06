import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TheFirm from "@/components/home/TheFirm";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProsperityProcess from "@/components/home/ProsperityProcess";
import TampaSkyline from "@/components/home/TampaSkyline";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import ClosingInvitation from "@/components/ClosingInvitation";

export const metadata: Metadata = {
  title: "Prosperity Tax Advisors — Strategic tax and wealth advisory in Tampa",
  description:
    "Tax strategy and wealth advisory for business owners in Tampa whose finances have outgrown their CPA. CPAs, forensic accountants, tax attorneys, and wealth advisors under one firm.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TheFirm />
      <ServicesOverview />
      <ProsperityProcess />
      <TampaSkyline />
      <FeaturedCaseStudy />
      <ClosingInvitation />
    </>
  );
}
