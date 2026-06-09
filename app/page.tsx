import { AgentsSection } from "@/components/AgentsSection";
import { CTASection } from "@/components/CTASection";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IndustriesSection } from "@/components/IndustriesSection";
import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-nova-black text-white">
      <Navbar />
      <Hero />
      <FeaturesBar />
      <AgentsSection />
      <IndustriesSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
