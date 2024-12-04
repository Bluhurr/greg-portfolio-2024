"use client";

import LandingSection from "@/components/page-sections/LandingSection";
import PortfolioSection from "@/components/page-sections/PortfolioSection";
import WorkSection from "@/components/page-sections/WorkSection";
import ContactSection from "@/components/page-sections/ContactSection";

export default function Home() {
  return (
    <div className="flex items-center flex-col relative w-full justify-center z-0">
      <LandingSection></LandingSection>
      <PortfolioSection></PortfolioSection>
      <WorkSection></WorkSection>
      <ContactSection></ContactSection>
    </div>
  );
}
