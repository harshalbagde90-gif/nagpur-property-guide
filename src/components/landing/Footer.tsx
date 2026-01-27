import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-3">Nagpur Property Expert</h3>
              <p className="text-background/70 text-sm">
                Your trusted local partner for verified real estate investments
                in Nagpur and Vidarbha.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#properties" className="hover:text-background transition-colors">
                    Featured Properties
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-background transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#contact-form" className="hover:text-background transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Nagpur, Maharashtra
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 98765 43210
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@nagpurproperty.com
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-background/20 pt-6 text-center text-sm text-background/60">
            <p>
              © {new Date().getFullYear()} Nagpur Property Expert. All rights
              reserved.
            </p>
            <p className="mt-2 text-xs">
              Disclaimer: We are channel partners, not builders. Property details
              are as provided by developers. Verify all information independently.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
