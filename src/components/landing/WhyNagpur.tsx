import { TrendingUp, Train, Building, IndianRupee, Landmark } from "lucide-react";

const reasons = [
  {
    icon: IndianRupee,
    title: "Affordable Entry Point",
    description:
      "Property prices 40-60% lower than Mumbai/Pune. Get more land for your investment.",
  },
  {
    icon: Train,
    title: "Metro & Infrastructure",
    description:
      "Nagpur Metro operational. Outer Ring Road connecting all zones.",
  },
  {
    icon: Landmark,
    title: "MIHAN & IT Growth",
    description:
      "Multi-modal hub with SEZ, growing IT corridor creating job opportunities.",
  },
  {
    icon: Building,
    title: "Smart City Development",
    description:
      "Government-backed smart city initiatives improving urban infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Long-term Appreciation",
    description:
      "Steady 8-12% annual appreciation in prime areas over the past decade.",
  },
];

export const WhyNagpur = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Invest in Nagpur?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Factual reasons why Nagpur is emerging as a smart investment destination
              in Central India. No hype — just honest insights.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto">
            Note: Past performance is not indicative of future returns. Property
            investment carries risks. We encourage due diligence before any investment decision.
          </p>
        </div>
      </div>
    </section>
  );
};
