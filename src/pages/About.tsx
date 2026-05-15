import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Wheat,
  Globe,
  Award,
  Shield,
  Users,
  TrendingUp,
  Handshake,
  ArrowRight,
  Anchor,
  Star,
} from "lucide-react";
import { NavLink } from "react-router";
import Layout from "@/components/Layout";
import heroVideo from "@/assets/About/hero.mp4";
import about2Video from "@/assets/About/About-2.mp4";

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "10+", label: "Years of Excellence", icon: <Star size={22} /> },
  { value: "40+", label: "Countries Served", icon: <Globe size={22} /> },
  { value: "500MT", label: "Monthly Capacity", icon: <Wheat size={22} /> },
  { value: "98%", label: "On-Time Delivery", icon: <TrendingUp size={22} /> },
];

const milestones = [
  {
    year: "2014",
    title: "Founded in Ahmedabad",
    desc: "Shivaay International was established with a vision to bring India's finest agricultural produce to global markets.",
  },
  {
    year: "2016",
    title: "First International Export",
    desc: "Commenced exports to the Middle East with our flagship Basmati Rice, earning trust with consistent quality.",
  },
  {
    year: "2018",
    title: "ISO 9001:2015 Certified",
    desc: "Achieved international quality management certification, formalising our multi-stage quality assurance protocols.",
  },
  {
    year: "2020",
    title: "Spice Processing Unit",
    desc: "Launched a dedicated spice cleaning and steam-sterilisation facility, expanding our product portfolio significantly.",
  },
  {
    year: "2022",
    title: "APEDA & Spices Board",
    desc: "Registered with APEDA and the Spices Board of India, unlocking new markets in Europe and North America.",
  },
  {
    year: "2024",
    title: "40+ Countries Reached",
    desc: "Crossed a landmark milestone of exporting to over 40 nations across Africa, Asia, Europe, and the Americas.",
  },
];

const values = [
  {
    icon: <Award size={26} />,
    title: "Uncompromising Quality",
    desc: "Every lot undergoes multi-stage inspection — from farm intake to final packaging — ensuring only export-standard produce leaves our facility.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Ethical Sourcing",
    desc: "We work directly with farmers across Gujarat, Madhya Pradesh and Punjab, ensuring fair pricing and sustainable agricultural practices.",
  },
  {
    icon: <Shield size={26} />,
    title: "Regulatory Compliance",
    desc: "Full adherence to international phytosanitary, food safety and customs regulations across all destination markets.",
  },
  {
    icon: <Users size={26} />,
    title: "Partnership First",
    desc: "We don't just supply; we build long-term trade relationships built on transparency, reliability and mutual growth.",
  },
];

const certLogos = [
  { label: "FSSAI", sub: "Food Safety" },
  { label: "ISO", sub: "9001 : 2015" },
  { label: "APEDA", sub: "Registered" },
  { label: "Spices Board", sub: "India" },
  { label: "HACCP", sub: "Certified" },
];

const GOLD_BAR =
  "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)";
const GOLD_SOLID = "linear-gradient(90deg,#C18C3C,#E8C97A,#C18C3C)";

// ── Component ─────────────────────────────────────────────────────────────────

export default function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <Layout>
      <div
        style={{ backgroundColor: "#FBF6EE", overflowX: "hidden" }}
        className="selection:bg-amber-200 selection:text-amber-900"
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
          .shi-d{font-family:'Playfair Display',Georgia,serif;}
          .shi-b{font-family:'Cormorant Garamond',Georgia,serif;}
          .gt{background:linear-gradient(135deg,#C18C3C 0%,#E8C97A 55%,#B87333 100%);
              -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

          /* timeline */
          .tl-track{position:absolute;left:50%;top:0;bottom:0;width:1px;
            background:linear-gradient(180deg,transparent,rgba(193,140,60,0.4) 8%,rgba(193,140,60,0.4) 92%,transparent);
            transform:translateX(-50%);}
          .tl-dot{position:absolute;left:50%;top:10px;width:13px;height:13px;border-radius:50%;
            background:linear-gradient(135deg,#C18C3C,#E8C97A);
            border:3px solid #FBF6EE;
            box-shadow:0 0 0 1px rgba(193,140,60,0.5),0 0 14px rgba(193,140,60,0.25);
            transform:translateX(-50%);z-index:2;}

          /* cards */
          .vc{border:1px solid rgba(193,140,60,0.12);background:#fff;
            transition:all 0.4s cubic-bezier(0.22,1,0.36,1);}
          .vc:hover{transform:translateY(-6px);border-color:rgba(193,140,60,0.35);
            box-shadow:0 20px 60px -12px rgba(176,137,104,0.2);}
          .vc:hover .vi{background:linear-gradient(135deg,#C18C3C,#B87333)!important;color:#fff!important;}

          .cert-card{border:1px solid rgba(193,140,60,0.18);transition:all 0.25s;}
          .cert-card:hover{border-color:rgba(193,140,60,0.5);background:rgba(193,140,60,0.08)!important;transform:scale(1.04);}

          /* stat cards */
          .sc{transition:all 0.38s cubic-bezier(0.22,1,0.36,1);}
          .sc:hover{transform:translateY(-5px);
            box-shadow:0 20px 50px -10px rgba(176,137,104,0.22);
            border-color:rgba(193,140,60,0.4)!important;}
          .sc:hover .si{background:linear-gradient(135deg,#C18C3C,#B87333)!important;color:#fff!important;}
        `}</style>

        {/* ════════════════════ HERO — clean ════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-dvh flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.68) 100%)",
          }}
        >
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-25"
            />
          </motion.div>

          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 40%,rgba(193,140,60,0.11) 0%,transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(232,201,122,1) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-50"
            style={{ background: GOLD_BAR }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-30"
            style={{ background: GOLD_BAR }}
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-8"
              style={{
                background: "rgba(193,140,60,0.1)",
                border: "1px solid rgba(193,140,60,0.25)",
              }}
            >
              <Anchor size={13} style={{ color: "#C18C3C" }} />
              <span
                className="shi-b"
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(232,201,122,0.75)",
                  fontWeight: 700,
                }}
              >
                Our Story · Est. 2014 · Ahmedabad, India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="shi-d font-black text-white mb-6"
              style={{ fontSize: "clamp(2.6rem,6.5vw,5rem)", lineHeight: 1.06 }}
            >
              Rooted in India,
              <br />
              <span className="gt">Reaching the World</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="shi-b"
              style={{
                fontSize: "1.25rem",
                lineHeight: 1.78,
                fontStyle: "italic",
                color: "rgba(232,201,122,0.62)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              For over a decade, Shivaay International has bridged India's
              finest agricultural heritage with discerning buyers across six
              continents — grain by grain, spice by spice.
            </motion.p>

            {/* Stats below description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mt-10"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="shi-d font-black mb-1"
                    style={{
                      fontSize: "2rem",
                      color: "#E8C97A",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="shi-b"
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(232,201,122,0.6)",
                      fontWeight: 600,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════ WHO WE ARE ════════════════════ */}
        <section className="py-28 bg-white relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-25"
            style={{ background: GOLD_BAR }}
          />
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(193,140,60,1) 1px,transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative rounded-[2.5rem] aspect-square overflow-hidden">
                  <video
                    src={about2Video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="aspect-square object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg,transparent 50%,rgba(44,24,16,0.7) 100%)",
                    }}
                  />
                  <div
                    className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl"
                    style={{
                      background: "rgba(28,14,8,0.75)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(193,140,60,0.25)",
                    }}
                  >
                    <div className="shi-d font-bold text-white text-lg mb-1">
                      Farm-to-Port Excellence
                    </div>
                    <div
                      className="shi-b"
                      style={{
                        fontSize: "0.95rem",
                        fontStyle: "italic",
                        color: "rgba(232,201,122,0.6)",
                      }}
                    >
                      Every shipment carries the legacy of generations of Indian
                      farmers.
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -right-6 top-12 rounded-2xl p-5 shadow-2xl text-center"
                  style={{
                    background: "linear-gradient(135deg,#C18C3C,#E8C97A)",
                    width: "130px",
                  }}
                >
                  <div
                    className="shi-d font-black text-amber-950 leading-none mb-1"
                    style={{ fontSize: "2.2rem" }}
                  >
                    10+
                  </div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(44,24,16,0.7)",
                    }}
                  >
                    Years of Trade
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-7"
                  style={{
                    background: "rgba(193,140,60,0.08)",
                    border: "1px solid rgba(193,140,60,0.2)",
                  }}
                >
                  <Star size={13} style={{ color: "#C18C3C" }} />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#8B5E2A",
                      fontWeight: 700,
                    }}
                  >
                    Who We Are
                  </span>
                </div>
                <h2
                  className="shi-d font-bold mb-6"
                  style={{
                    fontSize: "clamp(2rem,4vw,3.2rem)",
                    color: "#2C1810",
                    lineHeight: 1.12,
                  }}
                >
                  A Decade of Trust,
                  <br />
                  <span className="gt">Built Grain by Grain</span>
                </h2>
                <div
                  className="h-0.5 w-16 rounded-full mb-2 opacity-70"
                  style={{ background: GOLD_SOLID }}
                />
                <p
                  className="shi-b mb-5"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.85,
                    color: "#6B4C2A",
                  }}
                >
                  Founded in 2014 in the heart of Ahmedabad, Shivaay
                  International began with a single conviction: that India's
                  agricultural bounty deserves a world-class platform. What
                  started as a modest rice export operation has grown into a
                  full-spectrum agro export house serving buyers across six
                  continents.
                </p>
                <p
                  className="shi-b mb-8"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.85,
                    color: "#6B4C2A",
                  }}
                >
                  We source directly from India's most fertile belts — the
                  Gangetic plains for Basmati, the Malwa plateau for Sharbati
                  wheat, and Rajasthan and Gujarat for premium spices — ensuring
                  traceability, freshness, and authentic provenance in every
                  consignment.
                </p>

                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 font-bold transition-all duration-300 group"
                  style={{
                    background: "linear-gradient(135deg,#C18C3C,#B87333)",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(180,83,9,0.3)",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Partner With Us
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </NavLink>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════════════ TIMELINE ════════════════════ */}
        <section
          className="py-28 relative overflow-hidden"
          style={{ backgroundColor: "#FBF6EE" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6"
                style={{
                  background: "rgba(193,140,60,0.08)",
                  border: "1px solid rgba(193,140,60,0.2)",
                }}
              >
                <TrendingUp size={13} style={{ color: "#C18C3C" }} />
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#8B5E2A",
                    fontWeight: 700,
                  }}
                >
                  Our Journey
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="shi-d font-bold"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#2C1810" }}
              >
                A Decade of <span className="gt">Milestones</span>
              </motion.h2>
            </div>
            <div className="relative">
              <div className="tl-track hidden md:block" />
              <div className="space-y-12">
                {milestones.map((m, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="relative grid md:grid-cols-2 gap-8 items-start"
                    >
                      <div className="tl-dot hidden md:block" />
                      <div
                        className={`md:col-span-1 ${isLeft ? "md:col-start-1 md:text-right md:pr-16" : "md:col-start-2 md:pl-16"}`}
                      >
                        <div className="vc rounded-2xl p-7">
                          <div
                            className="shi-d font-black mb-2"
                            style={{
                              fontSize: "2.2rem",
                              color: "#C18C3C",
                              lineHeight: 1,
                            }}
                          >
                            {m.year}
                          </div>
                          <div
                            className="h-0.5 w-8 rounded-full mb-4 opacity-60"
                            style={{ background: GOLD_SOLID }}
                          />
                          <h3
                            className="shi-d font-bold mb-2"
                            style={{ fontSize: "1.2rem", color: "#2C1810" }}
                          >
                            {m.title}
                          </h3>
                          <p
                            className="shi-b"
                            style={{
                              fontSize: "1rem",
                              lineHeight: 1.75,
                              color: "#6B4C2A",
                            }}
                          >
                            {m.desc}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════ VALUES ════════════════════ */}
        <section className="py-28 bg-white relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-25"
            style={{ background: GOLD_BAR }}
          />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6"
                style={{
                  background: "rgba(193,140,60,0.08)",
                  border: "1px solid rgba(193,140,60,0.2)",
                }}
              >
                <Shield size={13} style={{ color: "#C18C3C" }} />
                <span
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#8B5E2A",
                    fontWeight: 700,
                  }}
                >
                  What We Stand For
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="shi-d font-bold"
                style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "#2C1810" }}
              >
                Our Core <span className="gt">Values</span>
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                  className="vc rounded-3xl p-8"
                >
                  <div
                    className="vi w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{
                      background: "rgba(193,140,60,0.1)",
                      color: "#C18C3C",
                    }}
                  >
                    {v.icon}
                  </div>
                  <div
                    className="h-0.5 w-8 rounded-full mb-5 opacity-50"
                    style={{ background: GOLD_SOLID }}
                  />
                  <h3
                    className="shi-d font-bold mb-3"
                    style={{ fontSize: "1.15rem", color: "#2C1810" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="shi-b"
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.75,
                      color: "#6B4C2A",
                    }}
                  >
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════ CERTIFICATIONS ════════════════════ */}
        <section className="py-20 bg-white relative">
          <div
            className="absolute top-0 left-0 right-0 h-px opacity-25"
            style={{ background: GOLD_BAR }}
          />
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8B5E2A",
                fontWeight: 700,
                marginBottom: "2rem",
              }}
            >
              Certified & Compliant — Trusted by Regulators Worldwide
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {certLogos.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  className="cert-card rounded-2xl px-8 py-5 text-center cursor-default"
                  style={{ background: "rgba(193,140,60,0.04)" }}
                >
                  <div
                    className="shi-d font-black"
                    style={{
                      fontSize: "1.5rem",
                      color: "#C18C3C",
                      lineHeight: 1,
                    }}
                  >
                    {c.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(107,76,42,0.6)",
                      fontWeight: 600,
                      marginTop: "4px",
                    }}
                  >
                    {c.sub}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ════════════════════ CTA — compact horizontal ════════════════════ */}
        <section
          className="py-14 relative"
          style={{ backgroundColor: "#FBF6EE" }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-8"
              style={{
                background:
                  "linear-gradient(135deg,#1C0E08 0%,#2C1810 55%,#3D2010 100%)",
              }}
            >
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

              <div className="relative z-10">
                <h2
                  className="shi-d font-black text-white mb-2"
                  style={{
                    fontSize: "clamp(1.4rem,3vw,2rem)",
                    lineHeight: 1.12,
                  }}
                >
                  Ready to Source{" "}
                  <span className="gt">Premium Agro Produce?</span>
                </h2>
                <p
                  className="shi-b"
                  style={{
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: "rgba(232,201,122,0.55)",
                  }}
                >
                  Reach out for samples, pricing, and tailored supply
                  arrangements.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 font-bold transition-all duration-300 group active:scale-95 whitespace-nowrap"
                  style={{
                    background:
                      "linear-gradient(135deg,#E8C97A 0%,#C18C3C 100%)",
                    color: "#2C1810",
                    boxShadow: "0 6px 24px rgba(193,140,60,0.3)",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <Handshake size={16} />
                  Get In Touch
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </NavLink>
                <NavLink
                  to="/products"
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
                  Products
                </NavLink>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
