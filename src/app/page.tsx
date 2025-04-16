"use client";

import {
  BenefitsSection,
  BlogSection,
  ClassScheduleSection,
  FAQSection,
  HeroSection,
  HistorySection,
  LocationSection,
  PricingSection,
  ProgressionSection,
  QuotesSection,
  StartTodaySection,
  StatsSection,
  TestimonialVideoSection
} from "@/components/sections";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    toast({
      title: "Bem-vindo!",
      description: "Explore nossos planos e junte-se à família Clube da Luta.",
    });
  }, []);

  return (
    <div className="container mx-auto py-12 px-5">
      <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <TestimonialVideoSection />
      <ProgressionSection />
      <StartTodaySection />
      <PricingSection />
      <ClassScheduleSection />
      <BlogSection />
      <FAQSection />
      <LocationSection />
      <HistorySection />
      <QuotesSection />
    </div>
  );
}
