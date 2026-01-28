const logos = [
  { name: "MIHAN SEZ", text: "MIHAN" },
  { name: "Nagpur Metro", text: "METRO" },
  { name: "Smart City", text: "SMART CITY" },
  { name: "IT Park", text: "IT PARK" },
  { name: "MIDC", text: "MIDC" },
  { name: "Ring Road", text: "RING ROAD" },
];

export const LogoMarquee = () => {
  return (
    <section className="py-8 bg-hero border-t border-hero-foreground/10">
      <div className="overflow-hidden">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-12"
            >
              <span className="text-hero-muted/60 font-semibold text-sm md:text-base tracking-wider">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
