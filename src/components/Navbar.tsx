import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import logoScrolled from "@/assets/logo-2.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let scrollTimeout: number;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background
      setScrolled(currentScrollY > 20);

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Only hide when scrolling down, always show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar immediately
        setIsVisible(false);

        // Show navbar after scrolling stops
        scrollTimeout = setTimeout(() => {
          setIsVisible(true);
        }, 150);
      } else {
        // Scrolling up - always show navbar immediately
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group w-">
          <img
            src={scrolled ? logoScrolled : logo}
            alt="Shivaay International"
            className="h-15 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-500 ${
                  isActive
                    ? "text-amber-500 after:w-full"
                    : scrolled
                      ? "text-slate-600"
                      : "text-white/80 hover:text-white"
                } relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 ${
                  !link.path.includes(link.name.toLowerCase()) &&
                  "after:w-0 hover:after:w-full"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            asChild
            variant="ghost"
            className={`rounded-full ${
              scrolled ? "text-slate-600" : "text-white hover:bg-white/10"
            }`}
          >
            <NavLink
              to="tel:+919876543210"
              className="flex items-center space-x-2"
            >
              <Phone size={18} className="text-amber-500" />
              <span className="font-bold">+91 98765 43210</span>
            </NavLink>
          </Button>
          <Button
            asChild
            className="px-4 py-2"
            style={{
              background: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
              color: "#fff",
              boxShadow: "0 8px 32px rgba(180,83,9,0.4)",
            }}
          >
            <NavLink to="/contact">Get a Quote</NavLink>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-lg font-bold uppercase tracking-widest p-4 rounded-2xl transition-all ${
                      isActive
                        ? "bg-amber-50 text-amber-600"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                <Button asChild variant="outline" className="rounded-2xl h-14">
                  <NavLink to="tel:+919876543210">Call Now</NavLink>
                </Button>
                <Button
                  asChild
                  style={{
                    background:
                      "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(180,83,9,0.4)",
                  }}
                >
                  <NavLink to="/contact">Quote</NavLink>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
