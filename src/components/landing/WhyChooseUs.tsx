import { Bot, MapPinned, Heart, TrendingUp, Users } from "lucide-react";

const differentiators = [
  {
    icon: Bot,
    title: "AI-Powered Follow-ups",
    description:
      "Never miss a message. Smart automated responses ensure you get timely updates 24/7.",
  },
  {
    icon: MapPinned,
    title: "Local Nagpur Presence",
    description:
      "We live and work here. Deep knowledge of every locality, builder, and market trend.",
  },
  {
    icon: Heart,
    title: "Honest Guidance",
    description:
      "No fake urgency or inflated promises. We share realistic expectations, always.",
  },
  {
    icon: TrendingUp,
    title: "Resale Perspective",
    description:
      "We help you think about exit value, not just purchase. Long-term investment mindset.",
  },
  {
    icon: Users,
    title: "Trusted by 100+ Families",
    description:
      "Growing community of satisfied property owners across Maharashtra.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're not a property portal. We're your dedicated local expert who
              personally guides you through the entire journey.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
