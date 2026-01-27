import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const properties = [
  {
    id: 1,
    area: "Wardha Road",
    locality: "Near MIHAN & Airport",
    priceRange: "₹18L – ₹35L",
    tags: ["Investment", "RERA Approved"],
    highlight: "High Growth Corridor",
  },
  {
    id: 2,
    area: "Manish Nagar",
    locality: "Central Nagpur",
    priceRange: "₹25L – ₹45L",
    tags: ["Residential", "Ready for Registry"],
    highlight: "Prime Location",
  },
  {
    id: 3,
    area: "Besa-Pipla",
    locality: "IT Park Vicinity",
    priceRange: "₹15L – ₹28L",
    tags: ["Investment", "Township"],
    highlight: "Emerging Hub",
  },
  {
    id: 4,
    area: "Butibori",
    locality: "Industrial Belt",
    priceRange: "₹12L – ₹22L",
    tags: ["Commercial", "Investment"],
    highlight: "Industrial Growth",
  },
];

export const PropertyCards = () => {
  const handlePropertyEnquiry = (area: string) => {
    const message = encodeURIComponent(
      `Hi, I'm interested in property at ${area}. Please share more details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-background" id="properties">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Nagpur Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked verified plots and projects in prime Nagpur localities.
            Each property is personally inspected for clear titles and genuine value.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden"
            >
              {/* Highlight Badge */}
              <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 text-center">
                {property.highlight}
              </div>

              <CardContent className="p-5 space-y-4">
                {/* Area & Location */}
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {property.area}
                  </h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {property.locality}
                  </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-primary">
                  {property.priceRange}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {property.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground"
                  onClick={() => handlePropertyEnquiry(property.area)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  View Details on WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Looking for something specific? We have access to 50+ verified projects across Nagpur.
        </p>
      </div>
    </section>
  );
};
