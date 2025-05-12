import BgGradient from "@/components/common/bg-gradient";
import CTASection from "@/components/hero/cta-section";
import DemoSection from "@/components/hero/demo-section";
import HeroSection from "@/components/hero/hero-section";
import HowItWorksSection from "@/components/hero/how-it-works-section";
import PricingSection from "@/components/hero/pricing-section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative w-full ">
      <BgGradient />
      <div className="flex flex-col">
        <HeroSection />
        <DemoSection />
        <HowItWorksSection />
        <PricingSection />
        <CTASection />
      </div>
    </div>
  );
}
