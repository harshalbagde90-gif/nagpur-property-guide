import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_NUMBER = "919876543210";

const properties = [
  {
    id: 1,
    area: "Wardha Road",
    locality: "Near MIHAN & Airport",
    priceRange: "₹18L – ₹35L",
    tags: ["Investment", "RERA Approved"],
    highlight: "High Growth Corridor",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    appreciation: "+12% YoY",
  },
  {
    id: 2,
    area: "Manish Nagar",
    locality: "Central Nagpur",
    priceRange: "₹25L – ₹45L",
    tags: ["Residential", "Ready for Registry"],
    highlight: "Prime Location",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    appreciation: "+10% YoY",
  },
  {
    id: 3,
    area: "Besa-Pipla",
    locality: "IT Park Vicinity",
    priceRange: "₹15L – ₹28L",
    tags: ["Investment", "Township"],
    highlight: "Emerging Hub",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    appreciation: "+15% YoY",
  },
  {
    id: 4,
    area: "Butibori",
    locality: "Industrial Belt",
    priceRange: "₹12L – ₹22L",
    tags: ["Commercial", "Investment"],
    highlight: "Industrial Growth",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    appreciation: "+8% YoY",
  },
];

export const PropertyCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handlePropertyEnquiry = (area: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in property at ${area}. Please share more details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/30" id="properties" ref={ref}>
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
            FEATURED PROPERTIES
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Driving Results
            <br />
            Through Tailored Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hand-picked verified plots and projects in prime Nagpur localities.
            Each property is personally inspected for clear titles and genuine value.
          </p>
        </motion.div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/50 hover:border-accent/50 hover:shadow-xl transition-all duration-300 bg-card">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.area}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hero/80 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                    {property.highlight}
                  </Badge>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-xl font-bold text-hero-foreground">{property.area}</h3>
                    <div className="flex items-center gap-1 text-hero-foreground/80 text-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {property.locality}
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 space-y-4">
                  {/* Price & Appreciation */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-foreground">
                      {property.priceRange}
                    </div>
                    <div className="flex items-center gap-1 text-success text-sm font-medium">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {property.appreciation}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {property.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full group/btn"
                    onClick={() => handlePropertyEnquiry(property.area)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12"
        >
          Looking for something specific? We have access to 50+ verified projects across Nagpur.
        </motion.p>
      </div>
    </section>
  );
};
