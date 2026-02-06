import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Video, MessageCircle, FileText, Handshake, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "919876543210";

const services = [
  {
    icon: MessageCircle,
    title: "WhatsApp Consultations",
    description: "Discuss requirements, ask questions, and get instant updates via WhatsApp.",
  },
  {
    icon: Video,
    title: "Live Video Site Visits",
    description: "Real-time video walkthrough of properties with live Q&A. See everything, ask anything.",
  },
  {
    icon: FileText,
    title: "Document Guidance",
    description: "Complete help with RERA verification, title checks, and legal documentation.",
  },
  {
    icon: Handshake,
    title: "Registry Coordination",
    description: "We coordinate the entire registry process. You just need to sign.",
  },
];

export const OutOfCitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm based outside Nagpur and interested in investing. Please share how you can help.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-hero text-hero-foreground overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              FOR OUT-OF-CITY BUYERS
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Buy Property in Nagpur —
              <br />
              <span className="gradient-text">Even If You're Not Here</span>
            </h2>

            <p className="text-hero-muted text-lg leading-relaxed">
              Living in Mumbai, Pune, or anywhere else? We become your eyes and ears on the ground.
              Our complete remote support ensures you invest with confidence, no matter where you are.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-hero-foreground/5 border border-hero-foreground/10"
                >
                  <service.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-hero-foreground text-sm mb-1">
                    {service.title}
                  </h3>
                  <p className="text-hero-muted text-xs leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Connect as NRI/Out-of-City Buyer
            </Button>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Video call consultation"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-hero/60 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 md:left-8 bg-card p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">Live Video Visit</p>
                  <p className="text-muted-foreground text-xs">In Progress...</p>
                </div>
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
