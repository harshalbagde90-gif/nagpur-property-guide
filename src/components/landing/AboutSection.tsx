import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, MapPin } from "lucide-react";

const stats = [
  { value: "100+", label: "Happy Families", icon: Users },
  { value: "50+", label: "Verified Projects", icon: MapPin },
  { value: "15%", label: "Avg. Appreciation", icon: TrendingUp },
];

const features = [
  { title: "Tailored Solutions", active: true },
  { title: "Verified Properties", active: true },
  { title: "Local Expertise", active: true },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Property consultation meeting"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero/60 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-8 bg-card p-4 md:p-6 rounded-xl shadow-xl border border-border"
            >
              <p className="text-muted-foreground text-xs mb-1">Client Trust Generated</p>
              <p className="text-2xl md:text-3xl font-bold text-foreground">₹50 Cr+</p>
              <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full shadow-sm shadow-primary/30" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
              <span className="w-8 h-px bg-primary" />
              ABOUT US
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Built on Insight
              <br />
              & Innovation
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We're not just another property portal. We're your local Nagpur experts who
              personally inspect every property, verify documents, and guide you through
              the entire investment journey — whether you're in Nagpur or anywhere else.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm"
                >
                  <span className="w-2 h-2 bg-primary rounded-full shadow-sm shadow-primary/30" />
                  {feature.title}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
