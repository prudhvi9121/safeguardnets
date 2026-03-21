import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const services = [
  { label: "Invisible Grills", to: "/invisible-grills" },
  { label: "Pigeon Nets", to: "/pigeon-nets" },
  { label: "Safety Nets", to: "/safety-nets" },
  { label: "Cricket Nets", to: "/cricket-nets" },
  { label: "Industrial Nets", to: "/industrial-nets" },
];

const Footer = () => (
  <footer className="bg-foreground text-background/80 pt-16 pb-8">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <Link to="/" className="inline-block mb-4">
            <img src="/logo.png" alt="Nithya Safe Guard" className="h-16 w-auto" />
          </Link>
          <p className="text-sm leading-relaxed opacity-70">
            Premium invisible grills and safety net solutions for homes and businesses across Hyderabad.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><FaFacebookF /></a>
            <a href="#" className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><FaInstagram /></a>
            <a href="https://wa.me/919876543210" className="w-9 h-9 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-background mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="text-sm opacity-70 hover:opacity-100 hover:text-secondary transition-all">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3 opacity-70"><FiPhone className="w-4 h-4 shrink-0" /> +91 98765 43210</li>
            <li className="flex items-center gap-3 opacity-70"><FiMail className="w-4 h-4 shrink-0" /> info@safeguardnets.in</li>
            <li className="flex items-start gap-3 opacity-70"><FiMapPin className="w-4 h-4 shrink-0 mt-0.5" /> Hyderabad, Telangana, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} SafeGuardNets. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
