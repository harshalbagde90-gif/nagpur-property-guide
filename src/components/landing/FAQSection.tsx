import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I buy Nagpur property while living in Mumbai or Pune?",
    answer:
      "Absolutely! Many of our clients are based in Mumbai, Pune, and even abroad. We provide complete remote support including WhatsApp consultations, live video site visits, document verification, and registry coordination. You can complete the entire purchase without visiting Nagpur — or visit only for the final registry.",
  },
  {
    question: "Is an in-person site visit mandatory?",
    answer:
      "No, it's not mandatory. We offer live video site visits where you can see the property in real-time, ask questions, and get a genuine feel for the location. However, we always recommend a physical visit before registry if possible. We'll coordinate your visit and show you multiple properties in one day.",
  },
  {
    question: "How does plot registry work in Maharashtra?",
    answer:
      "Plot registration in Maharashtra involves stamp duty (typically 5-6% of property value) and registration charges (1%). We guide you through the entire process: document verification, stamp duty calculation, IGR portal procedures, and the final Sub-Registrar visit. We ensure all paperwork is legally compliant.",
  },
  {
    question: "What documents should I verify before buying a plot?",
    answer:
      "Essential documents include: 7/12 extract, property card, approved layout plan, RERA registration (if applicable), NA order (for agricultural to non-agricultural conversion), encumbrance certificate, and title search report. We conduct this verification for every property we recommend.",
  },
  {
    question: "Is Nagpur good for long-term investment?",
    answer:
      "Nagpur shows consistent growth due to infrastructure development (Metro, MIHAN, Outer Ring Road), affordable entry prices, and central location in India. While we've seen 8-12% annual appreciation in prime areas, real estate is a long-term investment (5-10 years). We never make unrealistic ROI promises and encourage thorough research.",
  },
  {
    question: "Do you charge any fees for consultation?",
    answer:
      "Initial consultation and property shortlisting is completely free. As channel partners, we work with developers and earn commission from them — not from you. There are no hidden charges. Our fees, if any, are always disclosed upfront before you proceed.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about buying property in Nagpur. Still have doubts?{" "}
              <span className="text-primary font-medium">
                Ask us on WhatsApp
              </span>
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
