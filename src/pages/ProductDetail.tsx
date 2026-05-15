import { useParams, NavLink, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Package,
  CheckCircle,
  Award,
  Wheat,
  Send,
  ExternalLink,
} from "lucide-react";
import Layout from "@/components/Layout";
import { PRODUCTS } from "@/data/products";

const BADGE_STYLES: Record<string, string> = {
  "Best Seller": "bg-amber-600/15 text-amber-600 border border-amber-500/25",
  Certified: "bg-emerald-700/10 text-emerald-700 border border-emerald-600/20",
  Organic: "bg-lime-700/10 text-lime-700 border border-lime-600/20",
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.slug === slug);

  // related products (same category, exclude current)
  const related = PRODUCTS.filter(
    (p) => p.category === product?.category && p.id !== product?.id,
  ).slice(0, 3);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen bg-[#FBF6EE] flex flex-col items-center justify-center gap-4 px-6">
          <h2
            className="font-black text-amber-900 text-3xl"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Product not found
          </h2>
          <NavLink
            to="/products"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 font-bold text-sm uppercase tracking-widest transition-colors"
            style={{ fontFamily: "'Cormorant Garamond',serif" }}
          >
            <ArrowLeft size={14} /> Back to Products
          </NavLink>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBF6EE] selection:bg-amber-200 selection:text-amber-900">
        {/* ══ HERO SPLIT ════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden grid items-center"
          style={{
            background:
              "linear-gradient(160deg,#1C0E08 0%,#2C1810 55%,#3D2010 100%)",
            minHeight: "100dvh",
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* back link */}
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 text-amber-200/40 hover:text-amber-300 transition-colors my-5 text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Cormorant Garamond',serif" }}
              >
                <ArrowLeft size={13} /> All Products
              </button>

              {/* category + badge row */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border"
                  style={{
                    background: "rgba(193,140,60,0.1)",
                    borderColor: "rgba(193,140,60,0.25)",
                    color: "rgba(232,201,122,0.7)",
                    fontFamily: "'Cormorant Garamond',serif",
                  }}
                >
                  <Wheat size={11} className="text-amber-600" />
                  {product.categoryLabel}
                </span>
                {product.badge && (
                  <span
                    className={`text-[0.6rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${BADGE_STYLES[product.badge]}`}
                    style={{ fontFamily: "'Cormorant Garamond',serif" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              <h1
                className="font-black text-white mb-3"
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(2.2rem,5vw,4rem)",
                  lineHeight: 1.06,
                }}
              >
                {product.name}
              </h1>
              <div
                className="h-0.5 w-14 rounded-full mb-5 opacity-65"
                style={{
                  background: "linear-gradient(90deg,#C18C3C,#E8C97A,#C18C3C)",
                }}
              />
              <p
                className="text-amber-100/55 mb-4"
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                }}
              >
                {product.tagline}
              </p>
              <p
                className="text-amber-100/45 mb-8 leading-relaxed"
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.82,
                }}
              >
                {product.description}
              </p>

              {/* origin */}
              <div className="flex items-center gap-2.5 mb-8">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(193,140,60,0.12)" }}
                >
                  <MapPin size={14} className="text-amber-500" />
                </div>
                <div>
                  <div
                    className="text-[0.58rem] font-bold tracking-[0.18em] uppercase text-amber-600/50 mb-0.5"
                    style={{ fontFamily: "'Cormorant Garamond',serif" }}
                  >
                    Origin
                  </div>
                  <div
                    className="text-amber-200/70 font-medium"
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1rem",
                    }}
                  >
                    {product.origin}
                  </div>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <NavLink
                  to={`/contact?product=${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3 font-bold transition-all duration-300 group active:scale-95"
                  style={{
                    background:
                      "linear-gradient(135deg,#C18C3C 0%,#B87333 100%)",
                    color: "#1C0E08",
                    boxShadow: "0 6px 24px rgba(180,83,9,0.3)",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <Send size={15} />
                  Request a Quote
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3 font-bold border transition-all duration-300 text-amber-300/70 hover:text-amber-200 hover:bg-amber-800/30 text-sm uppercase tracking-widest"
                  style={{
                    borderColor: "rgba(193,140,60,0.3)",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.88rem",
                  }}
                >
                  Ask a Sample
                </NavLink>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative  mb-10 lg:mb-0"
            >
              <div
                className="relative rounded-3xl overflow-hidden max-w-[420px] mx-auto lg:ml-auto border border-amber-900/20"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg,transparent 55%,rgba(28,14,8,0.55) 100%)",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ DETAILS GRID ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* ── Highlights ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-amber-100 overflow-hidden"
            >
              <div
                className="px-7 py-5 border-b border-amber-100 flex items-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(193,140,60,0.06),rgba(193,140,60,0.02))",
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-100 text-amber-700">
                  <Award size={15} />
                </div>
                <h3
                  className="font-bold text-amber-950"
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.05rem",
                  }}
                >
                  Key Highlights
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle
                      size={14}
                      className="text-amber-600 mt-0.5 shrink-0"
                    />
                    <span
                      className="text-amber-800/80"
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── Specifications ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
              className="bg-white rounded-2xl border border-amber-100 overflow-hidden"
            >
              <div
                className="px-7 py-5 border-b border-amber-100 flex items-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(193,140,60,0.06),rgba(193,140,60,0.02))",
                }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-100 text-amber-700">
                  <Package size={15} />
                </div>
                <h3
                  className="font-bold text-amber-950"
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.05rem",
                  }}
                >
                  Specifications
                </h3>
              </div>
              <div className="divide-y divide-amber-50">
                {product.specifications.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between px-6 py-3.5"
                  >
                    <span
                      className="text-amber-600/65 text-xs font-bold uppercase tracking-wider"
                      style={{ fontFamily: "'Cormorant Garamond',serif" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-semibold text-amber-900 text-sm text-right"
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "1rem",
                      }}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ── Packaging & Certs ── */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16,
              }}
              className="flex flex-col gap-6"
            >
              {/* Packaging */}
              <div className="bg-white rounded-2xl border border-amber-100 overflow-hidden flex-1">
                <div
                  className="px-7 py-5 border-b border-amber-100 flex items-center gap-3"
                  style={{
                    background:
                      "linear-gradient(135deg,rgba(193,140,60,0.06),rgba(193,140,60,0.02))",
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-100 text-amber-700">
                    <Package size={15} />
                  </div>
                  <h3
                    className="font-bold text-amber-950"
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: "1.05rem",
                    }}
                  >
                    Packaging Options
                  </h3>
                </div>
                <ul className="p-5 space-y-2">
                  {product.packaging.map((pkg) => (
                    <li key={pkg} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 shrink-0" />
                      <span
                        className="text-amber-800/70"
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "0.95rem",
                        }}
                      >
                        {pkg}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl border border-amber-100 p-5">
                <div
                  className="text-[0.6rem] font-bold tracking-[0.18em] uppercase text-amber-600/55 mb-3"
                  style={{ fontFamily: "'Cormorant Garamond',serif" }}
                >
                  Certifications
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center gap-1 text-[0.65rem] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-xl border border-amber-200 text-amber-700 bg-amber-50/80"
                      style={{ fontFamily: "'Cormorant Garamond',serif" }}
                    >
                      <Award size={10} className="text-amber-500" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ ENQUIRY CTA BAND ══════════════════════════════════════════════ */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-amber-800/30"
              style={{
                background:
                  "linear-gradient(135deg,#1C0E08 0%,#2C1810 55%,#3D2010 100%)",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-px opacity-50"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)",
                }}
              />
              <div
                className="absolute bottom-0 inset-x-0 h-px opacity-25"
                style={{
                  background:
                    "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)",
                }}
              />

              <div>
                <h3
                  className="font-black text-white mb-1.5"
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "clamp(1.3rem,2.5vw,1.9rem)",
                    lineHeight: 1.1,
                  }}
                >
                  Interested in {product.name}?
                </h3>
                <p
                  className="text-amber-100/45"
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  Get a custom quote, request samples, or discuss long-term
                  supply contracts.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <NavLink
                  to={`/contact?product=${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold transition-all duration-300 group active:scale-95 whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg,#E8C97A 0%,#C18C3C 100%)",
                    color: "#1C0E08",
                    boxShadow: "0 5px 20px rgba(193,140,60,0.28)",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.88rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <Send size={14} />
                  Request Quote
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ RELATED PRODUCTS ══════════════════════════════════════════════ */}
        {related.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
            <div className="flex items-center gap-4 mb-8">
              <h3
                className="font-bold text-amber-950"
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "1.5rem",
                }}
              >
                Related Products
              </h3>
              <div
                className="flex-1 h-px"
                style={{
                  background:
                    "linear-gradient(90deg,rgba(193,140,60,0.25),transparent)",
                }}
              />
              <NavLink
                to={`/products?category=${product.category}`}
                className="inline-flex items-center gap-1.5 text-amber-700 hover:text-amber-900 font-bold text-xs uppercase tracking-widest transition-colors"
                style={{ fontFamily: "'Cormorant Garamond',serif" }}
              >
                View all <ExternalLink size={11} />
              </NavLink>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.07,
                  }}
                >
                  <NavLink
                    to={`/products/${p.slug}`}
                    className="group flex gap-4 bg-white rounded-2xl p-4 border border-amber-100 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/60 transition-all duration-300"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-amber-50">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-[0.58rem] font-bold tracking-[0.16em] uppercase text-amber-600/55 mb-1"
                        style={{ fontFamily: "'Cormorant Garamond',serif" }}
                      >
                        {p.categoryLabel}
                      </div>
                      <h4
                        className="font-bold text-amber-950 mb-1 group-hover:text-amber-700 transition-colors line-clamp-1"
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "1rem",
                        }}
                      >
                        {p.name}
                      </h4>
                      <p
                        className="text-amber-700/55 line-clamp-2"
                        style={{
                          fontFamily: "'Cormorant Garamond',serif",
                          fontSize: "0.88rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {p.tagline}
                      </p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-amber-400 shrink-0 mt-3 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
