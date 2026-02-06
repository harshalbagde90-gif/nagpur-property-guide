import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "919876543210";

const properties = [
  {
    id: "pyramid-amara",
    area: "Pyramid Amara",
    locality: "Besa, Nagpur",
    priceRange: "₹69.0 L – ₹91.45 L",
    tags: ["High-Rise", "Premium"],
    highlight: "Besa's Tallest Towers",
    image: "/Properties/New%20folder/1.jpeg",
    appreciation: "+10.2% YoY",
    type: "Flat",
    slug: "pyramid-amara",
  },
  {
    id: "wardha-road",
    area: "Wardha Road",
    locality: "Near MIHAN & Airport",
    priceRange: "₹18L – ₹35L",
    tags: ["Investment", "RERA Approved"],
    highlight: "High Growth Corridor",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    appreciation: "+12% YoY",
    type: "Plot",
  },
  {
    id: "besa-pipla",
    area: "Besa-Pipla",
    locality: "IT Park Vicinity",
    priceRange: "₹15L – ₹28L",
    tags: ["Investment", "Township"],
    highlight: "Emerging Hub",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    appreciation: "+15% YoY",
    type: "Plot",
  },
  {
    id: "butibori",
    area: "Butibori",
    locality: "Industrial Belt",
    priceRange: "₹12L – ₹22L",
    tags: ["Commercial", "Investment"],
    highlight: "Industrial Growth",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    appreciation: "+8% YoY",
    type: "Plot",
  },
];

const categories = ["All", "Plot", "Flat", "Commercial"];

export const PropertyCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filteredProperties = useMemo(() => {
    if (activeCategory === "All") return properties;
    return properties.filter(p => p.type === activeCategory);
  }, [activeCategory]);

  const handlePropertyAction = (slug?: string, area?: string) => {
    if (slug) {
      navigate(`/property/${slug}`);
    } else {
      const message = encodeURIComponent(`Hi, I'm interested in property at ${area}. Please share more details.`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/30" id="properties" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-background border border-border text-muted-foreground hover:border-primary/50"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 bg-card">
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
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-foreground">
                        {property.priceRange}
                      </div>
                      <div className="flex items-center gap-1 text-success text-sm font-medium">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {property.appreciation}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/5 text-primary border-none text-[10px] uppercase tracking-wider">
                        {property.type}
                      </Badge>
                      {property.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-[10px] font-medium border-border/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group/btn shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all"
                      onClick={() => handlePropertyAction(property.slug, property.area)}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {property.slug ? "Explore Project" : "View Details"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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
