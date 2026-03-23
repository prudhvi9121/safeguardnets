import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "#",
    dropdown: [
      { label: "Invisible Grills", to: "/invisible-grills" },
      { label: "Pigeon Nets", to: "/pigeon-nets" },
      { label: "Safety Nets", to: "/safety-nets" },
      { label: "Cloth Hangers", to: "/invisible-grills" },
      { label: "Cricket Nets", to: "/cricket-nets" },
      { label: "Industrial Nets", to: "/industrial-nets" },
    ]
  },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="Nithya Safe Guard" className="h-14 w-auto group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <div key={l.label} className="relative group">
              {l.dropdown ? (
                <>
                  <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 focus:outline-none py-2">
                    {l.label}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Invisible padding to bridge the gap and keep hover active */}
                  <div className="absolute top-full left-0 w-full h-4" />
                  <div className="absolute top-[calc(100%+0.5rem)] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-surface border border-border rounded-xl shadow-xl p-2 min-w-[220px] flex flex-col gap-1">
                      {l.dropdown.map(drop => (
                        <Link
                          key={drop.label}
                          to={drop.to}
                          className="px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                        >
                          {drop.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={l.to}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {l.label}
                </Link>
              )}
            </div>
          ))}
          <a
            href="tel:+919666440642"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-primary-gradient text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all shadow-lg"
          >
            <FiPhone className="w-4 h-4" /> Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <div key={l.label} className="flex flex-col gap-1">
                  {l.dropdown ? (
                    <details className="group">
                      <summary className="text-sm font-bold text-foreground py-2 border-b border-border/40 flex justify-between items-center cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        {l.label}
                        <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="flex flex-col gap-1 pl-4 pt-2">
                        {l.dropdown.map(drop => (
                          <Link
                            key={drop.label}
                            to={drop.to}
                            onClick={() => setOpen(false)}
                            className="text-sm font-medium text-muted-foreground hover:text-primary py-2"
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="text-sm font-bold text-foreground hover:text-primary py-1 border-b border-border/40"
                    >
                      {l.label}
                    </Link>
                  )}
                </div>
              ))}
              <a
                href="tel:+919666440642"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 mt-2 rounded-2xl bg-primary-gradient text-primary-foreground text-sm font-semibold shadow-lg"
              >
                <FiPhone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
