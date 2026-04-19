import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { Handshake, ArrowRight, Wheat } from "lucide-react";

interface CTABannerProps {
  title: string;
  highlightText: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: "compact" | "large";
}

const GOLD_BAR =
  "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)";

export default function CTABanner({
  title,
  highlightText,
  description,
  primaryButtonText = "Get In Touch",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Products",
  secondaryButtonLink = "/products",
  variant = "compact",
}: CTABannerProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={isCompact ? "py-14 relative" : "py-16 relative"}
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div
        className={
          isCompact ? "max-w-5xl mx-auto px-6" : "max-w-7xl mx-auto px-6"
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`relative rounded-[2rem] overflow-hidden px-10 flex flex-col sm:flex-row items-center justify-between gap-8 ${
            isCompact ? "py-10" : "py-16 text-center"
          }`}
          style={{
            background: isCompact
              ? "linear-gradient(135deg,#1C0E08 0%,#2C1810 55%,#3D2010 100%)"
              : "linear-gradient(135deg, #2C1810 0%, #3D2010 40%, #4A2C1A 100%)",
          }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-50"
            style={{ background: GOLD_BAR }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-25"
            style={{ background: GOLD_BAR }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%,rgba(193,140,60,0.08) 0%,transparent 65%)",
            }}
          />

          {/* Content */}
          <div
            className={`relative z-10 ${isCompact ? "" : "max-w-3xl mx-auto"}`}
          >
            <h2
              className="font-black text-white mb-2"
              style={{
                fontSize: isCompact
                  ? "clamp(1.4rem,3vw,2rem)"
                  : "clamp(2rem,5vw,3.5rem)",
                lineHeight: 1.12,
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              {title}{" "}
              <span
                className="bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(135deg,#C18C3C 0%,#E8C97A 55%,#B87333 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {highlightText}
              </span>
            </h2>
            <p
              style={{
                fontSize: isCompact ? "1.05rem" : "1.15rem",
                fontStyle: "italic",
                color: "rgba(232,201,122,0.55)",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`relative z-10 flex flex-col sm:flex-row gap-3 shrink-0 ${
              isCompact ? "" : "justify-center"
            }`}
          >
            <NavLink
              to={primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 font-bold transition-all duration-300 group active:scale-95 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg,#E8C97A 0%,#C18C3C 100%)",
                color: "#2C1810",
                boxShadow: "0 6px 24px rgba(193,140,60,0.3)",
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <Handshake size={16} />
              {primaryButtonText}
              <ArrowRight
                size={13}
                className="group-hover:translate-x-1 transition-transform"
              />
            </NavLink>
            <NavLink
              to={secondaryButtonLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 font-bold border transition-all duration-300 whitespace-nowrap"
              style={{
                borderColor: "rgba(193,140,60,0.3)",
                color: "#E8C97A",
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <Wheat size={15} />
              {secondaryButtonText}
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
