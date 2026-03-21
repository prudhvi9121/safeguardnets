import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const FloatingButtons = () => (
  <>
    {/* WhatsApp */}
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20a%20quote%20for%20safety%20nets"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>

    {/* Sticky Call - Mobile */}
    <a
      href="tel:+919876543210"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-semibold text-sm"
    >
      <FiPhone className="w-4 h-4" /> Call Now – Free Quote
    </a>
  </>
);

export default FloatingButtons;
