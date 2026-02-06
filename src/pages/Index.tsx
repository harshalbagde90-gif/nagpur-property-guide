import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { AboutSection } from "@/components/landing/AboutSection";
import { PropertyCards } from "@/components/landing/PropertyCards";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { WhyNagpur } from "@/components/landing/WhyNagpur";
import { MarketOverview } from "@/components/landing/MarketOverview";
import { ProcessSteps } from "@/components/landing/ProcessSteps";
import { OutOfCitySection } from "@/components/landing/OutOfCitySection";
import { FAQSection } from "@/components/landing/FAQSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { StickyWhatsApp } from "@/components/landing/StickyWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <AboutSection />
      <PropertyCards />
      <WhyChooseUs />
      <TestimonialsSection />
      <WhyNagpur />
      <MarketOverview />
      <ProcessSteps />
      <OutOfCitySection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;
