import { useState } from "react";
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
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919876543210";

const budgetOptions = [
  { value: "10-20", label: "₹10L – ₹20L" },
  { value: "20-35", label: "₹20L – ₹35L" },
  { value: "35-50", label: "₹35L – ₹50L" },
  { value: "50+", label: "₹50L+" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    budget: "",
    outOfCity: false,
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in Nagpur property. Please share details."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || formData.name.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (max 100 characters)",
        variant: "destructive",
      });
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian mobile number",
        variant: "destructive",
      });
      return;
    }

    if (!formData.budget) {
      toast({
        title: "Budget Required",
        description: "Please select your budget range",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (webhook-ready structure)
    try {
      // This is where you'd send to your webhook
      console.log("Form submission (webhook-ready):", {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        budget: formData.budget,
        outOfCity: formData.outOfCity,
        timestamp: new Date().toISOString(),
        source: window.location.origin,
      });

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      toast({
        title: "Enquiry Submitted!",
        description: "We'll contact you within 2 hours on WhatsApp.",
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us on WhatsApp directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5" id="contact-form">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Take the First Step?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Share your details and get personalized property recommendations.
              No spam, just genuine guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Form */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We've received your enquiry. Expect a call on WhatsApp within
                    2 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", phone: "", budget: "", outOfCity: false });
                    }}
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">WhatsApp Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/[^0-9]/g, "").slice(0, 10),
                        })
                      }
                      maxLength={10}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger>
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

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="outOfCity"
                      checked={formData.outOfCity}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, outOfCity: checked as boolean })
                      }
                    />
                    <Label htmlFor="outOfCity" className="text-sm font-normal cursor-pointer">
                      I'm calling from outside Nagpur (Mumbai/Pune/Other)
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-6 text-base"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Submitting..." : "Get Property Recommendations"}
                  </Button>
                </form>
              )}
            </div>

            {/* WhatsApp Alternative */}
            <div className="flex flex-col justify-center items-center text-center p-8 bg-whatsapp/10 rounded-2xl border border-whatsapp/20">
              <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-whatsapp-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Prefer WhatsApp?
              </h3>
              <p className="text-muted-foreground mb-6">
                Skip the form and start chatting directly. Get instant responses
                and personalized property options.
              </p>
              <Button
                size="lg"
                className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-8 py-6 text-lg shadow-md"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp Now
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Response within 30 minutes during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
