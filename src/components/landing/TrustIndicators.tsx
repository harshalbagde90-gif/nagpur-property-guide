import { Shield, MapPin, Eye, Users } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Registry Verified",
    description: "All projects with clear legal titles",
  },
  {
    icon: MapPin,
    title: "On-Ground Visits",
    description: "Physical or video site inspections",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    description: "No hidden charges, clear documentation",
  },
  {
    icon: Users,
    title: "Out-of-City Support",
    description: "Complete remote buying assistance",
  },
];

export const TrustIndicators = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-4"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
