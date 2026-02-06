import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Send, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919876543210";

const budgetOptions = [
  { value: "10-20", label: "₹10L – ₹20L" },
  { value: "20-35", label: "₹20L – ₹35L" },
  { value: "35-50", label: "₹35L – ₹50L" },
  { value: "50+", label: "₹50L+" },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    isOutOfCity: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.budget) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Basic phone validation for Indian numbers
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast({
        title: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (replace with actual webhook)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thank you for your interest!",
      description: "We'll contact you within 24 hours.",
    });

    setFormData({ name: "", phone: "", budget: "", isOutOfCity: false });
    setIsSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in Nagpur property. Please share details.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-hero text-hero-foreground" id="contact-form" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium">
              <span className="w-8 h-px bg-accent" />
              GET IN TOUCH
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Start Your
              <br />
              <span className="gradient-text">Property Journey?</span>
            </h2>

            <p className="text-hero-muted text-lg leading-relaxed">
              Take the first step towards your Nagpur property investment.
              Fill the form or WhatsApp us directly for instant assistance.
            </p>

            {/* Contact info */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-hero-foreground font-medium">Call or WhatsApp</p>
                  <p className="text-hero-muted text-sm">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-hero-foreground font-medium">Based in Nagpur</p>
                  <p className="text-hero-muted text-sm">Maharashtra, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-hero-foreground font-medium">Response Time</p>
                  <p className="text-hero-muted text-sm">Within 2 hours (9 AM - 9 PM)</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              onClick={handleWhatsAppClick}
              className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us Directly
            </Button>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10 space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-hero-foreground">
                  Your Name *
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-hero-foreground/5 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-muted/50 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-hero-foreground">
                  Mobile Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-hero-foreground/5 border-hero-foreground/20 text-hero-foreground placeholder:text-hero-muted/50 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-hero-foreground">
                  Budget Range *
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger className="bg-hero-foreground/5 border-hero-foreground/20 text-hero-foreground">
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-3">
                <Checkbox
                  id="outOfCity"
                  checked={formData.isOutOfCity}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isOutOfCity: checked as boolean })
                  }
                  className="border-hero-foreground/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <Label htmlFor="outOfCity" className="text-hero-muted text-sm cursor-pointer">
                  I'm based outside Nagpur (Mumbai/Pune/Other)
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Get Free Consultation
                  </>
                )}
              </Button>

              <p className="text-center text-hero-muted text-xs">
                By submitting, you agree to receive property updates via WhatsApp/SMS
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
