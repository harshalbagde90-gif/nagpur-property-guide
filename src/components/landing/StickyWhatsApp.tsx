import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi, I'm interested in Nagpur property. Please share details."
);

export const StickyWhatsApp = () => {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 md:px-5 md:py-3.5"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:inline font-medium">Chat with Us</span>
    </button>
  );
};
