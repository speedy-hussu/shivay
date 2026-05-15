import { NavLink } from "react-router";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Wheat,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Zap,
} from "lucide-react";

import Logo from "@/assets/Logos/logo-2.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Export Markets", to: "/markets" },
  { label: "Quality Standards", to: "/quality" },
  { label: "Contact", to: "/contact" },
];

const products = [
  { label: "Basmati Rice", to: "/products?category=basmati-rice" },
  { label: "Sharbati Wheat", to: "/products?category=wheat" },
  { label: "Turmeric Powder", to: "/products?category=spices" },
  { label: "Cumin Seeds", to: "/products?category=spices" },
  { label: "Coriander Powder", to: "/products?category=spices" },
  { label: "Chilli Powder", to: "/products?category=spices" },
];

const socials = [
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Twitter, href: "#", label: "Twitter" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="font-serif">
      <div className="bg-[linear-gradient(170deg,#130A05_0%,#1C0E08_35%,#2C1810_70%,#1C0E08_100%)]">
        {/* ── top gold rule ── */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)] opacity-55" />

        {/* ── main body ── */}
        <div className="max-w-7xl mx-auto px-10 py-15">
          {/* 4-col grid: logo | quick links | products | contact */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_2.1fr] gap-5 items-center">
            {/* ── Col 1: Logo + tagline + socials ── */}
            <div>
              {/* Logo image */}
              <div className="mb-6">
                <img
                  src={Logo}
                  alt="Shivaay International"
                  className="w-44 h-auto brightness-[0.88] sepia-[0.15] opacity-92"
                />
              </div>

              <p className="italic text-base leading-relaxed text-amber-200/40 mb-6 max-w-[240px]">
                Bridging India's finest agricultural heritage with global
                markets — grain by grain, spice by spice.
              </p>

              {/* socials */}
              <div className="flex gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-200/35 transition-all duration-300 hover:border-amber-500/60 hover:bg-amber-500/10 hover:text-amber-200/85 hover:-translate-y-0.5"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Combined Nav & Contact Column ── */}
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {/* ── Quick Links ── */}
                <div>
                  <div className="font-serif text-[0.82rem] font-bold tracking-widest text-[#C18C3C] mb-[1.1rem] flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-[#C18C3C]/25 after:to-transparent">
                    <Zap size={13} className="text-[#C18C3C]" />
                    Quick Links
                  </div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {quickLinks.map((l) => (
                      <li key={l.label}>
                        <NavLink
                          to={l.to}
                          className="group flex items-center gap-1.5 text-amber-200/42 text-base font-serif no-underline transition-all duration-250 leading-none hover:text-amber-200/85 hover:pl-1.5"
                        >
                          <ChevronRight
                            size={11}
                            className="opacity-0 -translate-x-1 text-[#C18C3C] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          />
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Products ── */}
                <div>
                  <div className="font-serif text-[0.82rem] font-bold tracking-widest text-[#C18C3C] mb-[1.1rem] flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-[#C18C3C]/25 after:to-transparent">
                    <Wheat size={13} className="text-[#C18C3C]" />
                    Products
                  </div>
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {products.map((l) => (
                      <li key={l.label}>
                        <NavLink
                          to={l.to}
                          className="group flex items-center gap-1.5 text-amber-200/42 text-base font-serif no-underline transition-all duration-250 leading-none hover:text-amber-200/85 hover:pl-1.5"
                        >
                          <ChevronRight
                            size={11}
                            className="opacity-0 -translate-x-1 text-[#C18C3C] transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                          />
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Contact Info ── */}
                <div>
                  <div className="font-serif text-[0.82rem] font-bold tracking-widest text-[#C18C3C] mb-[1.1rem] flex items-center gap-2 after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-r after:from-[#C18C3C]/25 after:to-transparent">
                    <Globe size={13} className="text-[#C18C3C]" />
                    Get In Touch
                  </div>

                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start gap-2.5 text-amber-200/42 text-[0.95rem] leading-relaxed">
                      <MapPin
                        size={14}
                        className="text-[#C18C3C] mt-[3px] flex-shrink-0"
                      />
                      <span>
                        123, Agro Trade Center, GIDC Estate, Ahmedabad,
                        <br />
                        Gujarat — 382 421, India
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-amber-200/42 text-[0.95rem] leading-relaxed">
                      <Phone
                        size={14}
                        className="text-[#C18C3C] mt-[3px] flex-shrink-0"
                      />
                      <a
                        href="tel:+919876543210"
                        className="text-amber-200/42 no-underline transition-colors duration-200 hover:text-amber-200/85"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                    <div className="flex items-start gap-2.5 text-amber-200/42 text-[0.95rem] leading-relaxed">
                      <Mail
                        size={14}
                        className="text-[#C18C3C] mt-[3px] flex-shrink-0"
                      />
                      <a
                        href="mailto:exports@shivaayintl.com"
                        className="text-amber-200/42 no-underline transition-colors duration-200 hover:text-amber-200/85"
                      >
                        exports@shivaayintl.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* newsletter form */}
              <div className="pt-8 border-t border-amber-500/10">
                <div className="flex flex-col md:flex-row md:justify-between gap-6">
                  <div className="shrink-0">
                    <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[#C18C3C] font-bold mb-1">
                      Trade Updates
                    </div>
                    <div className="text-amber-200/25 text-xs font-serif italic">
                      Subscribe for market insights & quotes
                    </div>
                  </div>

                  <div className="flex flex-1 max-w-lg shadow-2xl shadow-black/20">
                    <input
                      type="email"
                      placeholder="Enter your business email"
                      className="flex-1 bg-white/[0.03] border border-amber-500/18 rounded-l-lg px-4 py-3 text-[#E8C97A] font-serif text-[0.9rem] outline-none transition-all duration-200 placeholder:text-amber-200/22 focus:border-amber-500/45 focus:bg-white/[0.05]"
                    />
                    <button className="bg-[linear-gradient(135deg,#C18C3C,#B87333)] border-none rounded-r-lg px-8 py-3 text-[#1C0E08] font-serif font-bold text-[0.75rem] tracking-widest uppercase cursor-pointer transition-all duration-200 hover:brightness-110 active:scale-[0.98]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ornamental divider ── */}
          <div className="flex items-center gap-3.5  mt-5">
            <div className="flex-1 h-px bg-[linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)] opacity-18" />
            <span className="text-[#C18C3C] text-sm">✦</span>
            <span className="font-serif text-[0.6rem] tracking-[0.28em] uppercase text-amber-500/30">
              Shivaay International
            </span>
            <span className="text-[#C18C3C] text-sm">✦</span>
            <div className="flex-1 h-px bg-[linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)] opacity-18" />
          </div>
        </div>

        {/* ── bottom gold rule ── */}
        <div className="h-px bg-[linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)] opacity-25" />
      </div>
    </footer>
  );
}
