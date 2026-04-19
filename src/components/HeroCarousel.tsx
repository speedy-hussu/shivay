import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Handshake } from "lucide-react";
import { NavLink } from "react-router";

interface Slide {
  image?: string;
  video?: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  cta: { label: string; to: string };
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
}

const slides: Slide[] = [
  {
    video: "/src/assets/hero1.mp4",
    tag: "Excellence in Export",
    title: "Shivaay",
    subtitle: "International",
    description:
      "Leading agricultural export house delivering India's finest grains, spices, and produce to global markets with uncompromising quality and trust.",
    cta: { label: "Explore Products", to: "/products" },
    stat1: { value: "40+", label: "Countries Served" },
    stat2: { value: "15+", label: "Years Experience" },
  },
  {
    video: "/src/assets/hero3.mp4",
    tag: "Premium Grain Export",
    title: "Quality Grains",
    subtitle: "From India's Heartland",
    description:
      "Premium wheat, rice, and pulses sourced directly from India's most fertile agricultural regions, ensuring unmatched quality and authenticity.",
    cta: { label: "View Grains", to: "/products?category=grains" },
    stat1: { value: "500MT", label: "Monthly Capacity" },
    stat2: { value: "ISO", label: "Certified" },
  },
  {
    video: "/src/assets/hero2.mp4",
    tag: "Global Agricultural Excellence",
    title: "From Farm",
    subtitle: "To World",
    description:
      "Connecting India's rich agricultural heritage with global markets through premium quality exports and trusted partnerships worldwide.",
    cta: { label: "Discover More", to: "/about" },
    stat1: { value: "50+", label: "Global Partners" },
    stat2: { value: "24/7", label: "Support" },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background Image ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 z-0"
        >
          {slide.video ? (
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          )}
          {/* layered overlays for deep warmth */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-amber-900/40 to-amber-800/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/50 via-transparent to-transparent" />
          {/* subtle grain texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Decorative vertical rule ── */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500/40 to-transparent z-10" />

      {/* ── Main Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 xl:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-white font-black leading-[1.05] mb-5"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 4rem)",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    textShadow: "0 2px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  {slide.title}
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {slide.subtitle}
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-amber-100/85 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {slide.description}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="flex flex-col sm:flex-row gap-4 mb-14"
                >
                  <NavLink
                    to={slide.cta.to}
                    className="group inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
                      color: "#fff",
                      boxShadow: "0 8px 32px rgba(180,83,9,0.4)",
                    }}
                  >
                    <Handshake size={20} />
                    {slide.cta.label}
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border border-amber-600/40 text-amber-200 hover:bg-amber-800/25 backdrop-blur-sm transition-all duration-300"
                  >
                    Get Free Quote
                  </NavLink>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="flex items-center gap-8"
                >
                  <div className="text-center">
                    <div
                      className="text-3xl font-black text-amber-400 leading-none mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {slide.stat1.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-amber-200/60 font-semibold">
                      {slide.stat1.label}
                    </div>
                  </div>
                  <div className="w-px h-10 bg-amber-700/50" />
                  <div className="text-center">
                    <div
                      className="text-3xl font-black text-amber-400 leading-none mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {slide.stat2.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-amber-200/60 font-semibold">
                      {slide.stat2.label}
                    </div>
                  </div>
                  <div className="w-px h-10 bg-amber-700/50" />
                  <div className="text-center">
                    <div
                      className="text-3xl font-black text-amber-400 leading-none mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      SI
                    </div>
                    <div className="text-xs uppercase tracking-widest text-amber-200/60 font-semibold">
                      Shivaay Intl.
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Slide Indicators ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((s, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group flex flex-col items-center gap-1.5 transition-all duration-300"
            >
              <div
                className={`h-0.5 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "w-10 bg-amber-400"
                    : "w-5 bg-amber-700/50 group-hover:bg-amber-600/70"
                }`}
              />
              {currentSlide === index && (
                <span className="text-[9px] uppercase tracking-widest text-amber-400/70 font-bold hidden sm:block">
                  {s.title}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Slide counter ── */}
        <div className="absolute bottom-10 right-12 text-amber-500/50 text-sm font-mono hidden lg:block">
          {String(currentSlide + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </div>
      </div>

      {/* ── Nav Arrows ── */}
      <button
        onClick={goToPrevious}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-amber-900/40 backdrop-blur-md border border-amber-700/30 text-amber-200 hover:bg-amber-700/50 hover:border-amber-500/50 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-amber-900/40 backdrop-blur-md border border-amber-700/30 text-amber-200 hover:bg-amber-700/50 hover:border-amber-500/50 transition-all duration-300 flex items-center justify-center"
      >
        <ChevronRight size={22} />
      </button>

      {/* ── Progress bar ── */}
      {!isPaused && (
        <motion.div
          key={`progress-${currentSlide}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5.5, ease: "linear" }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500/50 origin-left z-20"
        />
      )}
    </div>
  );
}
