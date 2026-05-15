import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Logos/logo.png";
import logoScrolled from "@/assets/Logos/logo-2.png";

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
    const height = isVisible ? (scrolled ? "68px" : "78px") : "0px";
    document.documentElement.style.setProperty("--nav-offset", height);
  }, [isVisible, scrolled]);

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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:justify-center lg:gap-x-20 xl:gap-x-32">
        {/* Logo */}
        <NavLink to="/" className="flex items-center group shrink-0">
          <img
            src={scrolled ? logoScrolled : logo}
            alt="Shivaay International"
            className="h-15 w-auto transition-all duration-300 group-hover:scale-105"
          />
        </NavLink>

        {/* Navigation & CTA Group for Desktop */}
        <div className="hidden lg:flex items-center lg:gap-x-20 xl:gap-x-32">
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-10 xl:space-x-12">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-500 ${
                    isActive
                      ? "text-amber-500 after:w-full"
                      : scrolled
                        ? "text-slate-600 after:w-0 hover:after:w-full"
                        : "text-white/80 hover:text-white after:w-0 hover:after:w-full"
                  } relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="flex items-center">
            <Button
              asChild
              className="px-5 py-2.5 rounded-xl font-bold text-sm tracking-wide bg-[linear-gradient(135deg,#E8C97A_0%,#C18C3C_100%)] text-[#2C1810] shadow-[0_8px_32px_rgba(193,140,60,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
          </div>
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
                  end={link.path === "/"}
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
              <div className="pt-4 border-t border-slate-100">
                <Button
                  asChild
                  className="w-full h-14 rounded-2xl bg-[linear-gradient(135deg,#E8C97A_0%,#C18C3C_100%)] text-[#2C1810] shadow-[0_8px_32px_rgba(193,140,60,0.3)] transition-all active:scale-95"
                >
                  <NavLink to="/contact">Get a Quote</NavLink>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
