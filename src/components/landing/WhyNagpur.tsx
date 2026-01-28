import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Train, Building, IndianRupee, Landmark, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: IndianRupee,
    title: "Affordable Entry Point",
    description: "Property prices 40-60% lower than Mumbai/Pune. Get more land for your investment.",
  },
  {
    icon: Train,
    title: "Metro & Infrastructure",
    description: "Nagpur Metro operational. Outer Ring Road connecting all zones.",
  },
  {
    icon: Landmark,
    title: "MIHAN & IT Growth",
    description: "Multi-modal hub with SEZ, growing IT corridor creating job opportunities.",
  },
  {
    icon: Building,
    title: "Smart City Development",
    description: "Government-backed smart city initiatives improving urban infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Long-term Appreciation",
    description: "Steady 8-12% annual appreciation in prime areas over the past decade.",
  },
];

export const WhyNagpur = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-secondary/30" id="why-nagpur" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium">
              <span className="w-8 h-px bg-accent" />
              WHY NAGPUR
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Why Invest in
              <br />
              <span className="gradient-text">Nagpur?</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Factual reasons why Nagpur is emerging as a smart investment destination
              in Central India. No hype — just honest insights backed by data.
            </p>

            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground pt-4">
              *Past performance is not indicative of future returns. Property investment carries risks.
            </p>
          </motion.div>

          {/* Right - Image with CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Nagpur cityscape"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/50 to-transparent" />
              
              {/* CTA Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-hero-foreground mb-2">
                  Ready to Explore?
                </h3>
                <p className="text-hero-muted mb-4">
                  Get personalized property recommendations based on your investment goals.
                </p>
                <Button className="bg-hero-foreground text-hero hover:bg-hero-foreground/90 rounded-full">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
