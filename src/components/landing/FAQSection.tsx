import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I buy Nagpur property while living in Mumbai/Pune?",
    answer: "Absolutely! We specialize in helping out-of-city buyers. Through WhatsApp consultations, live video site visits, and complete documentation support, we make remote property buying seamless. Many of our clients are based in Mumbai, Pune, and other cities.",
  },
  {
    question: "Is an in-person site visit mandatory?",
    answer: "No, it's not mandatory. We offer detailed live video site visits where you can see the property in real-time and ask questions. However, we always recommend an in-person visit before final decision if possible. We can coordinate your visit when you're in Nagpur.",
  },
  {
    question: "How does plot registry work in Maharashtra?",
    answer: "Plot registry in Maharashtra is done at the Sub-Registrar office. You need documents like sale deed, 7/12 extract, NA order (for non-agricultural land), and ID proofs. Stamp duty is typically 5-6% of property value. We guide you through the entire process and coordinate with lawyers.",
  },
  {
    question: "What documents should I verify before buying?",
    answer: "Key documents include: 7/12 extract, property card, NA order (if applicable), RERA registration, approved layout plan, title deed chain, encumbrance certificate, and tax receipts. We verify all these documents before recommending any property.",
  },
  {
    question: "Is Nagpur good for long-term property investment?",
    answer: "Nagpur offers strong long-term potential due to: Central India location, ongoing Metro expansion, MIHAN SEZ development, IT corridor growth, and prices 40-60% lower than Mumbai/Pune. However, like any investment, it carries risks. We provide honest assessment without over-promising returns.",
  },
  {
    question: "Do you charge any fees for consultation?",
    answer: "Initial consultation and property shortlisting are completely free. We earn our commission only when a deal is successfully closed. There are no hidden charges or upfront fees.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background" id="faq" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <span className="w-8 h-px bg-primary" />
              FAQ
              <span className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Common questions about buying property in Nagpur. Can't find your answer? WhatsApp us!
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
