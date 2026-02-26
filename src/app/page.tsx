"use client";

import {
  BenefitsSection,
  ClassScheduleSection,
  FAQSection,
  GallerySection,
  HeroSection,
  HistorySection,
  NewsSection,
  PricingSection,
  ProgressionSection,
  QuotesSection,
  StartTodaySection,
  TestimonialVideoSection
} from "@/components/sections";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    toast({
      title: "Bem-vindo!",
      description: "Explore nossos planos e junte-se à família Complexo do Alemão.",
    });
  }, []);

  return (
    <div className="container mx-auto py-12 px-5">
      <HeroSection />
      <HistorySection />
      <NewsSection />
      <BenefitsSection />
      <TestimonialVideoSection />
      <ProgressionSection />
      <StartTodaySection />
      <PricingSection />
      <ClassScheduleSection />
      <GallerySection />
      <QuotesSection />
      <FAQSection />
    </div>
  );
}
