import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in Nagpur property. Please share details."
);

export const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  const handleBookVisitClick = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-background via-background to-accent/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Your Trusted Nagpur Property Expert
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Invest in{" "}
            <span className="text-primary">Verified Nagpur Properties</span>{" "}
            with Complete Peace of Mind
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Registry-clear plots • On-ground verification • Expert guidance for
            local & out-of-city buyers. No fake promises, just honest property advice.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Details on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={handleBookVisitClick}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Site Visit
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground pt-4">
            Trusted by 100+ families across Maharashtra • Free consultation
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
