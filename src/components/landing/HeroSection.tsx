import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in Nagpur property. Please share details.");

const features = [
  "Registry Verified",
  "On-Ground Support",
  "Transparent Process",
];

const videos = [
  "/Videos/v 1.mp4",
  "/Videos/v2.mp4",
  "/Videos/v3.mp4",
  "/Videos/v4.mp4"
];

export const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Switch video every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  const handleBookVisitClick = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden font-poppins">
      {/* Video Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videos[currentVideo]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </div>

      {/* 60% Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Subtle Golden Glow for Premium Feel */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-20 z-[1]" />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-hero-foreground/10 border border-hero-foreground/20 text-hero-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Your Trusted Nagpur Property Expert
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-hero-foreground leading-tight"
          >
            Your Partner in{" "}
            <span className="relative">
              <span className="gradient-text">Property</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="absolute -right-8 md:-right-12 top-0"
              >
                🏠
              </motion.span>
            </span>
            <br />
            Investment & Success
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-hero-muted max-w-2xl mx-auto"
          >
            We combine local expertise, verified properties, and transparent process
            to help you invest in Nagpur real estate with complete confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full font-poppins font-bold hover-glow transition-all border-none"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book a Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 rounded-full border-accent text-accent font-poppins font-bold hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_rgba(255,140,66,0.5)] transition-all"
              onClick={handleBookVisitClick}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Properties
            </Button>
          </motion.div>

          {/* Trust features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-hero-muted text-sm">
                <CheckCircle className="w-4 h-4 text-accent" />
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-hero-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-hero-foreground/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
