import { MessageCircle, Video, FileText, Building2 } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "WhatsApp Consultations",
    description:
      "Discuss your requirements, budget, and preferences anytime via WhatsApp",
  },
  {
    icon: Video,
    title: "Live Video Site Visits",
    description:
      "Watch properties in real-time via video call from Mumbai, Pune, or anywhere",
  },
  {
    icon: FileText,
    title: "Document Guidance",
    description:
      "Complete support with legal verification, paperwork, and due diligence",
  },
  {
    icon: Building2,
    title: "Registry Coordination",
    description:
      "Seamless end-to-end support including registry and possession",
  },
];

export const OutOfCitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-accent text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
              For Mumbai, Pune & NRI Investors
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Buy Property in Nagpur —{" "}
              <span className="text-primary">Even If You're Not Here</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We act as your trusted eyes and ears on the ground. Invest confidently
              from anywhere in India or abroad with our complete remote support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border/50 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <div className="mt-10 text-center p-6 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-foreground font-medium">
              "Many of our clients have purchased property in Nagpur without a
              single physical visit — with complete peace of mind."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
