import { MessageSquare, ListChecks, MapPin, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Requirement",
    description:
      "Tell us your budget, preferred location, and purpose (investment/residence) via WhatsApp or form",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Get Expert Shortlist",
    description:
      "Receive a curated list of 3-5 verified properties matching your criteria from our local team",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Site Visit",
    description:
      "Visit in person or through live video call. We handle all logistics and answer every question",
  },
  {
    number: "04",
    icon: FileCheck,
    title: "Documentation & Registry",
    description:
      "Complete support from booking to registry. Transparent process with no hidden surprises",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A simple, transparent 4-step process from enquiry to ownership.
              No confusion, no delays.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute top-24 left-12 right-12 h-0.5 bg-border" />

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step circle */}
                  <div className="relative mx-auto w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
