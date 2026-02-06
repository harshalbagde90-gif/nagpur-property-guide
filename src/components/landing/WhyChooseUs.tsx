import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, MapPinned, Heart, TrendingUp, Users, Shield } from "lucide-react";

const differentiators = [
  {
    icon: Bot,
    title: "AI-Powered Follow-ups",
    description: "Never miss a message. Smart automated responses ensure you get timely updates 24/7.",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: MapPinned,
    title: "Local Nagpur Presence",
    description: "We live and work here. Deep knowledge of every locality, builder, and market trend.",
    color: "bg-green-600/10 text-green-600",
  },
  {
    icon: Heart,
    title: "Honest Guidance",
    description: "No fake urgency or inflated promises. We share realistic expectations, always.",
    color: "bg-accent/20 text-accent",
  },
  {
    icon: TrendingUp,
    title: "Resale Perspective",
    description: "We help you think about exit value, not just purchase. Long-term investment mindset.",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Users,
    title: "Trusted by 100+ Families",
    description: "Growing community of satisfied property owners across Maharashtra.",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Shield,
    title: "Registry Verified",
    description: "Every property is legally verified. Clear titles, no encumbrances, complete peace of mind.",
    color: "bg-primary/20 text-primary",
  },
];

export const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-hero text-hero-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <span className="w-8 h-px bg-accent" />
            WHAT SETS US APART
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Work With Us?
          </h2>
          <p className="text-hero-muted max-w-xl mx-auto text-lg">
            We're not a property portal. We're your dedicated local expert who
            personally guides you through the entire journey.
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-hero-foreground/5 border border-hero-foreground/10 hover:border-accent/50 hover:bg-hero-foreground/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-hero-foreground text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-hero-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
