import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Search, Video, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description: "Tell us your budget, preferred area, and investment goals via WhatsApp or form.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Get Expert Shortlist",
    description: "Our local team personally verifies and shortlists properties matching your criteria.",
    icon: Search,
  },
  {
    number: "03",
    title: "Site Visit",
    description: "Visit in person or get a detailed video walkthrough with live Q&A session.",
    icon: Video,
  },
  {
    number: "04",
    title: "Documentation & Closure",
    description: "We handle registry verification, documentation, and coordinate the entire closure process.",
    icon: FileCheck,
  },
];

export const ProcessSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background" id="process" ref={ref}>
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
            OUR PROCESS
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Process
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From first inquiry to registry, we guide you through every step with complete transparency.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-border z-0">
                  <ArrowRight className="absolute -right-3 -top-2.5 w-5 h-5 text-accent" />
                </div>
              )}

              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                {/* Step number */}
                <span className="text-5xl font-bold text-accent/20 absolute top-4 right-4">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
