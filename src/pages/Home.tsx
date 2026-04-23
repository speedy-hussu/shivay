import {
  Globe,
  Award,
  Zap,
  Handshake,
  ArrowRight,
  Wheat,
  TrendingUp,
  Shield,
  Star,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import HeroCarousel from "@/components/HeroCarousel";
import Layout from "@/components/Layout";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <Layout>
      <div
        className="overflow-x-hidden selection:bg-amber-200 selection:text-amber-900"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');

          .shi-display { font-family: 'Playfair Display', Georgia, serif; }
          .shi-body { font-family: 'Cormorant Garamond', Georgia, serif; }
        .shi-display { font-family: 'Playfair Display', Georgia, serif; }
        .shi-body { font-family: 'Cormorant Garamond', Georgia, serif; }

        .gold-gradient {
          background: linear-gradient(135deg, #C18C3C 0%, #E8C97A 50%, #B87333 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gold-bar {
          background: linear-gradient(90deg, #C18C3C, #E8C97A, #C18C3C);
        }
        .card-hover {
          transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px -12px rgba(176, 137, 104, 0.25);
        }
        .ornament-divider {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ornament-divider::before,
        .ornament-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(193,140,60,0.4), transparent);
        }
      `}</style>

        {/* ── Hero Carousel ── */}
        <HeroCarousel />

        {/* ── Trust Strip ── */}
        <section style={{ backgroundColor: "#2C1810" }} className="py-6 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-center justify-center gap-x-8 gap-y-5 lg:gap-y-3">
              {[
                { icon: <Star size={14} />, text: "FSSAI Certified" },
                { icon: <Globe size={14} />, text: "40+ Countries" },
                { icon: <Award size={14} />, text: "Premium Grade" },
                { icon: <MapPin size={14} />, text: "Ahmedabad, India" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-amber-400/80 text-[10px] lg:text-xs font-bold tracking-widest uppercase justify-center lg:justify-start"
                >
                  <span className="text-amber-500 shrink-0">{item.icon}</span>
                  <span className="text-center lg:text-left">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-28 bg-white relative overflow-hidden">
          {/* decorative background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(193,140,60,1) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px gold-bar opacity-30" />

          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 border"
                style={{
                  backgroundColor: "rgba(193,140,60,0.08)",
                  borderColor: "rgba(193,140,60,0.25)",
                }}
              >
                <Award size={15} className="text-amber-600" />
                <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-amber-800">
                  Why Shivaay International
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="shi-display text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: "#2C1810" }}
              >
                Excellence in Every{" "}
                <span className="gold-gradient">Grain & Spice</span>
              </motion.h2>

              <div className="ornament-divider max-w-xs mx-auto my-5">
                <span style={{ color: "#C18C3C", fontSize: 18 }}>✦</span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="shi-body text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: "#6B4C2A", fontSize: "1.2rem" }}
              >
                We combine legacy farming expertise with modern logistics to
                deliver uncompromising quality to our international distribution
                partners.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Globe size={30} />,
                  title: "Global Reach",
                  desc: "Seamless distribution across Africa, Middle East, USA, and Europe with robust transit networks.",
                },
                {
                  icon: <Award size={30} />,
                  title: "Premium Grade",
                  desc: "Multi-stage quality checks ensuring only export-standard agricultural goods leave our facility.",
                },
                {
                  icon: <Zap size={30} />,
                  title: "Quick Turnaround",
                  desc: "Optimised supply chain management resulting in faster lead times and fresh arrivals.",
                },
                {
                  icon: <Handshake size={30} />,
                  title: "Ethical Sourcing",
                  desc: "Direct-from-farm sourcing ensuring fair trade and sustainable agricultural practices.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 60, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.1,
                  }}
                  className="card-hover group p-8 rounded-3xl border"
                  style={{
                    backgroundColor: "#FBF6EE",
                    borderColor: "rgba(193,140,60,0.15)",
                  }}
                >
                  {/* top gold bar accent */}
                  <div className="h-0.5 rounded-full mb-8 w-10 gold-bar opacity-60 group-hover:w-full transition-all duration-500" />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                    style={{
                      backgroundColor: "rgba(193,140,60,0.1)",
                      color: "#C18C3C",
                    }}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {card.icon}
                    </div>
                  </div>
                  <h3
                    className="shi-display text-xl font-bold mb-3"
                    style={{ color: "#2C1810" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="shi-body leading-relaxed"
                    style={{ color: "#6B4C2A", fontSize: "1.05rem" }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products Showcase ── */}
        <section
          className="py-28 relative overflow-hidden"
          style={{ backgroundColor: "#FBF6EE" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border"
                  style={{
                    backgroundColor: "rgba(193,140,60,0.08)",
                    borderColor: "rgba(193,140,60,0.2)",
                  }}
                >
                  <Wheat size={14} className="text-amber-700" />
                  <span className="font-bold text-[10px] uppercase tracking-[0.2em] text-amber-800">
                    Our Portfolio
                  </span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="shi-display text-4xl lg:text-5xl font-bold"
                  style={{ color: "#2C1810" }}
                >
                  Export Quality <br />
                  <span className="gold-gradient">Agricultural Products</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <NavLink
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3 border font-bold text-sm tracking-wide transition-all duration-300 hover:bg-amber-50"
                  style={{
                    borderColor: "rgba(193,140,60,0.4)",
                    color: "#B87333",
                  }}
                >
                  View Full Catalog
                  <ArrowRight size={16} />
                </NavLink>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image:
                    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80",
                  badge: {
                    icon: <TrendingUp size={12} />,
                    label: "Best Seller",
                  },
                  title: "Basmati Rice",
                  desc: "Extra-long grain aromatic rice with aged fragrance. Perfect for world-class gourmet applications.",
                  to: "/products?category=basmati-rice",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80",
                  badge: { icon: <Shield size={12} />, label: "Certified" },
                  title: "Sharbati Wheat",
                  desc: "High-protein golden wheat grains sourced from the finest regions of central India.",
                  to: "/products?category=wheat",
                },
                {
                  image:
                    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&auto=format&fit=crop&q=80",
                  badge: { icon: <Award size={12} />, label: "Organic" },
                  title: "Premium Spices",
                  desc: "Aromatic and flavorful spices processed with advanced cleaning and sorting technology.",
                  to: "/products?category=spices",
                },
              ].map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.12,
                  }}
                  className="card-hover group relative bg-white rounded-[2rem] overflow-hidden border"
                  style={{ borderColor: "rgba(193,140,60,0.15)" }}
                >
                  {/* image */}
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 to-transparent" />
                    {/* badge */}
                    <div
                      className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md"
                      style={{ backgroundColor: "rgba(193,140,60,0.7)" }}
                    >
                      {product.badge.icon}
                      {product.badge.label}
                    </div>
                    {/* gold bottom rule */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 gold-bar opacity-70" />
                  </div>

                  <div className="p-8">
                    <h3
                      className="shi-display text-2xl font-bold mb-3 group-hover:text-amber-700 transition-colors duration-300"
                      style={{ color: "#2C1810" }}
                    >
                      {product.title}
                    </h3>
                    <p
                      className="shi-body mb-6 leading-relaxed"
                      style={{ color: "#6B4C2A", fontSize: "1.1rem" }}
                    >
                      {product.desc}
                    </p>
                    <NavLink
                      to={product.to}
                      className="inline-flex items-center gap-2 font-bold text-sm tracking-wide group/link"
                      style={{ color: "#C18C3C" }}
                    >
                      <span>Learn More</span>
                      <ArrowRight
                        size={15}
                        className="group-hover/link:translate-x-1 transition-transform duration-300"
                      />
                    </NavLink>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTABanner
          title="Partner with Global"
          highlightText="Agro Experts"
          description="Join a global network of distributors who trust Shivaay International for reliable supply, premium quality, and professional end-to-end logistics."
          primaryButtonText="Start Partnership"
          primaryButtonLink="/contact"
          secondaryButtonText="Call Us Now"
          secondaryButtonLink="tel:+919876543210"
          variant="large"
        />
      </div>
    </Layout>
  );
}
