import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useSearchParams } from "react-router";
import {
  Search,
  X,
  ArrowRight,
  SlidersHorizontal,
  Wheat,

} from "lucide-react";
import Layout from "@/components/Layout";
import { PRODUCTS, CATEGORIES, type ProductCategory } from "@/data/products";



export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<ProductCategory | "all">(
    (searchParams.get("category") as ProductCategory) ?? "all",
  );

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCat = active === "all" || p.category === active;
      const matchQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [active, query]);

  const handleCategory = (val: ProductCategory | "all") => {
    setActive(val);
    setSearchParams(val === "all" ? {} : { category: val });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FBF6EE] selection:bg-amber-200 selection:text-amber-900">
        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section
          className="relative min-h-[52vh] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg,#1C0E08 0%,#2C1810 55%,#3D2010 100%)",
          }}
        >
          {/* bg image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&auto=format&fit=crop&q=70"
              alt=""
              className="w-full h-full object-cover opacity-[0.12]"
            />
          </div>
          {/* dot grid */}
          <div
            className="absolute inset-0 z-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(232,201,122,1) 1px,transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          {/* rules */}
          <div
            className="absolute top-0 inset-x-0 h-px opacity-50"
            style={{
              background:
                "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)",
            }}
          />
          <div
            className="absolute bottom-0 inset-x-0 h-px opacity-30"
            style={{
              background:
                "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-7 border"
              style={{
                background: "rgba(193,140,60,0.1)",
                borderColor: "rgba(193,140,60,0.25)",
              }}
            >
              <Wheat size={13} className="text-amber-600" />
              <span
                className="text-[0.62rem] font-bold tracking-[0.22em] uppercase text-amber-200/70"
                style={{ fontFamily: "'Cormorant Garamond',serif" }}
              >
                Export Portfolio · 8+ Product Lines
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-black text-white mb-5"
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "clamp(2.4rem,6vw,4.4rem)",
                lineHeight: 1.07,
              }}
            >
              Our Export{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#C18C3C 0%,#E8C97A 55%,#B87333 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Product Range
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.8 }}
              className="text-amber-100/55 max-w-xl mx-auto leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "1.2rem",
                fontStyle: "italic",
              }}
            >
              Premium-grade grains, whole spices, spice powders and pulses —
              direct from India's finest growing regions to your port.
            </motion.p>
          </div>
        </section>

        {/* ══ SEARCH + FILTERS ══════════════════════════════════════════════ */}
        <section
          className="sticky z-30 bg-[#FBF6EE]/95 backdrop-blur-md border-b border-amber-200/50 shadow-sm shadow-amber-100/60 transition-[top] duration-300"
          style={{ top: "var(--nav-offset, 70px)" }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <Search
                size={15}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500/60 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search products…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-amber-200 bg-white text-amber-950 placeholder:text-amber-400/50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 transition-all"
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "1rem",
                }}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-600 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 items-center">
              <SlidersHorizontal
                size={14}
                className="text-amber-500/50 shrink-0"
              />
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  onClick={() =>
                    handleCategory(c.value as ProductCategory | "all")
                  }
                  className={`inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-250 border
                    ${
                      active === c.value
                        ? "bg-amber-800 text-amber-200 border-amber-700 shadow-md shadow-amber-900/20"
                        : "bg-white text-amber-700/70 border-amber-200 hover:border-amber-400 hover:text-amber-800"
                    }`}
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "clamp(0.6rem, 2vw, 0.72rem)",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PRODUCT GRID ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {/* result count */}
          <div className="flex items-center justify-between mb-8">
            <p
              className="text-amber-700/60 text-sm"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "1rem",
              }}
            >
              Showing{" "}
              <span className="font-bold text-amber-800">
                {filtered.length}
              </span>{" "}
              product{filtered.length !== 1 ? "s" : ""}
              {active !== "all" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="text-amber-700 font-semibold">
                    {CATEGORIES.find((c) => c.value === active)?.label}
                  </span>
                </span>
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-amber-400" />
                </div>
                <h3
                  className="font-bold text-amber-900 mb-2"
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "1.4rem",
                  }}
                >
                  No products found
                </h3>
                <p
                  className="text-amber-700/60 mb-6"
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.05rem",
                  }}
                >
                  Try a different keyword or category.
                </p>
                <button
                  onClick={() => {
                    setQuery("");
                    setActive("all");
                  }}
                  className="px-6 py-2.5 rounded-xl border border-amber-300 text-amber-700 hover:bg-amber-50 text-sm font-bold uppercase tracking-wider transition-all"
                  style={{ fontFamily: "'Cormorant Garamond',serif" }}
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
              >
                {filtered.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.06,
                    }}
                  >
                    <NavLink
                      to={`/products/${product.slug}`}
                      className="group block h-full"
                    >
                      <div className="h-full bg-white rounded-2xl overflow-hidden border border-amber-100 hover:border-amber-300 hover:shadow-xl sm:hover:-translate-y-1.5 transition-all duration-400 flex flex-col">
                        {/* Image */}
                        <div className="relative w-full h-40 sm:h-52 overflow-hidden bg-amber-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/40 to-transparent" />

                          {/* category chip */}
                          <span
                            className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 text-[0.5rem] sm:text-[0.58rem] font-bold tracking-widest uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-amber-950/60 text-amber-200 backdrop-blur-sm border border-amber-700/30"
                            style={{ fontFamily: "'Cormorant Garamond',serif" }}
                          >
                            {product.categoryLabel}
                          </span>
                        </div>

                        {/* gold accent line */}
                        <div
                          className="h-px w-full"
                          style={{
                            background:
                              "linear-gradient(90deg,#C18C3C,#E8C97A,#C18C3C)",
                          }}
                        />

                        {/* Content */}
                        <div className="p-4 sm:p-5 flex-1 flex flex-col">
                          
                          <h3
                            className="font-bold text-amber-950 mb-1 sm:mb-1.5 group-hover:text-amber-700 transition-colors duration-300"
                            style={{
                              fontFamily: "'Playfair Display',serif",
                              fontSize: "clamp(0.95rem,4vw,1.15rem)",
                              lineHeight: 1.2,
                            }}
                          >
                            {product.name}
                          </h3>
                          
                          <p
                            className="text-amber-700/65 mb-3 sm:mb-4 leading-relaxed line-clamp-2"
                            style={{
                              fontFamily: "'Cormorant Garamond',serif",
                              fontSize: "0.88rem",
                            }}
                          >
                            {product.tagline}
                          </p>

                     

                          <div className="mt-auto">
                            {/* CTA */}
                            <div
                              className="flex items-center gap-1.5 text-amber-700 font-bold text-[0.8rem] sm:text-sm group/link"
                              style={{
                                fontFamily: "'Cormorant Garamond',serif",
                                letterSpacing: "0.06em",
                              }}
                            >
                              <span>View Details</span>
                              <ArrowRight
                                size={14}
                                className="group-hover/link:translate-x-1 transition-transform duration-300"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ══ BOTTOM CTA ════════════════════════════════════════════════════ */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
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
                  Need a Custom Product Spec?
                </h3>
                <p
                  className="text-amber-100/50"
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  We accommodate custom grades, packaging, and certifications on
                  request.
                </p>
              </div>
              <NavLink
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl px-7 py-3 font-bold transition-all duration-300 group active:scale-95 whitespace-nowrap border border-amber-600/30 text-amber-300/80 hover:text-amber-200 hover:bg-amber-800/30 text-sm uppercase tracking-widest"
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "0.88rem",
                }}
              >
                Get In Touch{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </NavLink>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
