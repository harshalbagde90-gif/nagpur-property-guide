import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const quickLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Why Nagpur", href: "#why-nagpur" },
  { label: "Our Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact-form" },
];

export const Footer = () => {
  return (
    <footer className="bg-hero text-hero-foreground py-12 md:py-16 border-t border-hero-foreground/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="font-semibold text-lg">Nagpur Property Expert</span>
            </div>
            <p className="text-hero-muted text-sm leading-relaxed max-w-md mb-4">
              Your trusted local partner for verified Nagpur properties.
              We help local and out-of-city buyers invest with confidence through
              transparent process and honest guidance.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-hero-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="w-4 h-4" />
                info@nagpurproperty.com
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2025 Nagpur Property Expert. All rights reserved.
          </p>
          <p className="text-background/50 text-xs">
            Disclaimer: Property investment carries risks. Past returns are not indicative of future performance.
          </p>
        </div>
      </div>
    </footer>
  );
};
