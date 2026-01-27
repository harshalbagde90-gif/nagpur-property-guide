import { HeroSection } from "@/components/landing/HeroSection";
import { TrustIndicators } from "@/components/landing/TrustIndicators";
import { PropertyCards } from "@/components/landing/PropertyCards";
import { OutOfCitySection } from "@/components/landing/OutOfCitySection";
import { WhyNagpur } from "@/components/landing/WhyNagpur";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { FAQSection } from "@/components/landing/FAQSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { StickyWhatsApp } from "@/components/landing/StickyWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TrustIndicators />
      <PropertyCards />
      <OutOfCitySection />
      <WhyNagpur />
      <ProcessSteps />
      <WhyChooseUs />
      <FAQSection />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;
