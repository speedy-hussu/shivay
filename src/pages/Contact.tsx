import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Globe,
  Wheat,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";

// ── constants ─────────────────────────────────────────────────────────────────

const GOLD_BAR =
  "linear-gradient(90deg,transparent,#C18C3C,#E8C97A,#C18C3C,transparent)";
const GOLD_SOLID = "linear-gradient(90deg,#C18C3C,#E8C97A,#C18C3C)";

const BUSINESS_HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 6:00 PM IST" },
  { day: "Saturday", time: "10:00 AM – 3:00 PM IST" },
  { day: "Sunday", time: "Closed" },
];

const CONTACT_INFO = [
  {
    icon: <Mail size={18} />,
    label: "Export Enquiries",
    value: "exports@shivaayintl.com",
    href: "mailto:exports@shivaayintl.com",
  },
  {
    icon: <Phone size={18} />,
    label: "Direct Line",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <Phone size={18} />,
    label: "WhatsApp",
    value: "+91 98765 43211",
    href: "https://wa.me/919876543211",
  },
  {
    icon: <MapPin size={18} />,
    label: "Registered Office",
    value:
      "123, Agro Trade Center, GIDC Estate, Ahmedabad, Gujarat — 382 421, India",
    href: "https://maps.google.com/?q=GIDC+Estate+Ahmedabad+Gujarat",
  },
];

const PRODUCTS_LIST = [
  "Basmati Rice",
  "Sharbati Wheat",
  "Turmeric Powder",
  "Cumin Seeds",
  "Coriander Powder",
  "Chilli Powder",
  "Other / General Enquiry",
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <div
        style={{ backgroundColor: "#FBF6EE", overflowX: "hidden" }}
        className="selection:bg-amber-200 selection:text-amber-900"
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');
          .sd{font-family:'Playfair Display',Georgia,serif;}
          .sb{font-family:'Cormorant Garamond',Georgia,serif;}
          .gt{background:linear-gradient(135deg,#C18C3C 0%,#E8C97A 55%,#B87333 100%);
              -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

          /* form inputs */
          .shi-input{
            width:100%;
            background:rgba(251,246,238,0.6);
            border:1px solid rgba(193,140,60,0.2);
            border-radius:10px;
            padding:12px 16px;
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:1rem;
            color:#2C1810;
            outline:none;
            transition:border-color 0.25s, box-shadow 0.25s, background 0.25s;
          }
          .shi-input::placeholder{color:rgba(107,76,42,0.4);}
          .shi-input:focus{
            border-color:rgba(193,140,60,0.55);
            background:#fff;
            box-shadow:0 0 0 3px rgba(193,140,60,0.1);
          }
          .shi-label{
            display:block;
            font-family:'Cormorant Garamond',Georgia,serif;
            font-size:0.65rem;
            letter-spacing:0.2em;
            text-transform:uppercase;
            color:#8B5E2A;
            font-weight:700;
            margin-bottom:6px;
          }
          .contact-row{
            display:flex;align-items:flex-start;gap:14px;
            padding:16px;border-radius:14px;
            border:1px solid rgba(193,140,60,0.12);
            background:#fff;
            transition:all 0.3s;
          }
          .contact-row:hover{
            border-color:rgba(193,140,60,0.35);
            box-shadow:0 8px 28px -8px rgba(176,137,104,0.2);
            transform:translateX(4px);
          }
          .contact-row a{color:inherit;text-decoration:none;}
          .contact-row a:hover{color:#C18C3C;}
        `}</style>

        {/* ═══════════════════ HERO ═══════════════════ */}
        <section
          className="relative min-h-[62vh] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg,#1C0E08 0%,#2C1810 55%,#3D2010 100%)",
          }}
        >
          {/* bg image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&auto=format&fit=crop&q=70"
              alt=""
              className="w-full h-full object-cover opacity-15"
            />
          </div>

          {/* radial glow */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 45%,rgba(193,140,60,0.13) 0%,transparent 70%)",
            }}
          />

          {/* dot grid */}
          <div
            className="absolute inset-0 z-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(232,201,122,1) 1px,transparent 1px)",
              backgroundSize: "30px 30px",
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

          {/* decorative left rule */}
          <div
            className="absolute left-10 top-0 bottom-0 w-px opacity-20 hidden lg:block"
            style={{
              background:
                "linear-gradient(180deg,transparent,#C18C3C 30%,#C18C3C 70%,transparent)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-7"
              style={{
                background: "rgba(193,140,60,0.1)",
                border: "1px solid rgba(193,140,60,0.25)",
              }}
            >
              <Wheat size={13} style={{ color: "#C18C3C" }} />
              <span
                className="sb"
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(232,201,122,0.75)",
                  fontWeight: 700,
                }}
              >
                Trade Enquiries · Ahmedabad, India
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="sd font-black text-white mb-5"
              style={{ fontSize: "clamp(2.4rem,6vw,4.8rem)", lineHeight: 1.07 }}
            >
              Let's Build a <br />
              <span className="gt">Trade Partnership</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="sb"
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.78,
                fontStyle: "italic",
                color: "rgba(232,201,122,0.62)",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Reach out to discuss pricing, samples, product specifications, or
              long-term supply arrangements — our export team responds within 24
              hours.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════ 2-COL: DETAILS + FORM ═══════════════════ */}
        <section
          className="py-24 relative"
          style={{ backgroundColor: "#FBF6EE" }}
        >
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(193,140,60,1) 1px,transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              {/* ── LEFT: Contact Details ── */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2"
              >
                {/* section label */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                  style={{
                    background: "rgba(193,140,60,0.08)",
                    border: "1px solid rgba(193,140,60,0.2)",
                  }}
                >
                  <Globe size={12} style={{ color: "#C18C3C" }} />
                  <span
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#8B5E2A",
                      fontWeight: 700,
                    }}
                  >
                    Get In Touch
                  </span>
                </div>

                <h2
                  className="sd font-bold mb-2"
                  style={{
                    fontSize: "clamp(1.8rem,3vw,2.6rem)",
                    color: "#2C1810",
                    lineHeight: 1.12,
                  }}
                >
                  Office &amp; <span className="gt">Contact</span>
                </h2>
                <div
                  className="h-0.5 w-12 rounded-full mb-7 opacity-60"
                  style={{ background: GOLD_SOLID }}
                />

                {/* contact info cards */}
                <div className="space-y-3 mb-10">
                  {CONTACT_INFO.map((c) => (
                    <div key={c.label} className="contact-row">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "rgba(193,140,60,0.1)",
                          color: "#C18C3C",
                        }}
                      >
                        {c.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "rgba(107,76,42,0.6)",
                            fontWeight: 700,
                            marginBottom: "3px",
                          }}
                        >
                          {c.label}
                        </div>
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sb"
                          style={{
                            fontSize: "1rem",
                            color: "#2C1810",
                            lineHeight: 1.5,
                            fontWeight: 500,
                          }}
                        >
                          {c.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* business hours card */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(193,140,60,0.18)" }}
                >
                  <div
                    className="px-6 py-4 flex items-center gap-3"
                    style={{
                      background: "linear-gradient(135deg,#2C1810,#3D2010)",
                    }}
                  >
                    <Clock size={15} style={{ color: "#C18C3C" }} />
                    <span
                      style={{
                        fontSize: "0.62rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(232,201,122,0.7)",
                        fontWeight: 700,
                      }}
                    >
                      Business Hours (IST)
                    </span>
                  </div>
                  <div
                    className="bg-white divide-y"
                    style={{ borderColor: "rgba(193,140,60,0.08)" }}
                  >
                    {BUSINESS_HOURS.map((h) => (
                      <div
                        key={h.day}
                        className="flex items-center justify-between px-6 py-3.5"
                      >
                        <span
                          className="sb"
                          style={{
                            fontSize: "0.95rem",
                            color: "#5A3E22",
                            fontWeight: 500,
                          }}
                        >
                          {h.day}
                        </span>
                        <span
                          className="sb"
                          style={{
                            fontSize: "0.95rem",
                            color:
                              h.time === "Closed"
                                ? "rgba(107,76,42,0.4)"
                                : "#C18C3C",
                            fontWeight: 600,
                          }}
                        >
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Maps CTA */}
                <a
                  href="https://maps.google.com/?q=GIDC+Estate+Ahmedabad+Gujarat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 rounded-xl px-6 py-3 font-bold transition-all duration-300 group"
                  style={{
                    background: "rgba(193,140,60,0.08)",
                    border: "1px solid rgba(193,140,60,0.25)",
                    color: "#C18C3C",
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "0.88rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  <MapPin size={15} />
                  Open in Google Maps
                  <ExternalLink
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </motion.div>

              {/* ── RIGHT: Inquiry Form ── */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-3"
              >
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(193,140,60,0.15)",
                    boxShadow: "0 24px 80px -16px rgba(176,137,104,0.18)",
                  }}
                >
                  {/* form header */}
                  <div
                    className="px-10 py-8 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg,#2C1810 0%,#3D2010 100%)",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-px opacity-60"
                      style={{ background: GOLD_BAR }}
                    />
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(232,201,122,1) 1px,transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="flex flex-col">
                        <div className="inline-flex items-center gap-2 mb-2">
                          <div
                            className="h-px w-8 opacity-60"
                            style={{ background: GOLD_SOLID }}
                          />
                          <span
                            style={{
                              fontSize: "0.6rem",
                              letterSpacing: "0.22em",
                              textTransform: "uppercase",
                              color: "rgba(232,201,122,0.55)",
                              fontWeight: 700,
                            }}
                          >
                            Export Inquiry
                          </span>
                        </div>
                        <h3
                          className="sd font-bold text-white"
                          style={{ fontSize: "1.7rem", lineHeight: 1.1 }}
                        >
                          Send Us a <span className="gt">Message</span>
                        </h3>
                        <p
                          className="sb mt-1"
                          style={{
                            fontSize: "0.95rem",
                            fontStyle: "italic",
                            color: "rgba(232,201,122,0.5)",
                          }}
                        >
                          Please fill out the form below and we will get back to
                          you shortly.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* form body */}
                  <div className="bg-white px-10 py-8">
                    {sent ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-16 text-center"
                      >
                        <div
                          className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                          style={{
                            background:
                              "linear-gradient(135deg,#C18C3C,#E8C97A)",
                          }}
                        >
                          <Send size={26} style={{ color: "#2C1810" }} />
                        </div>
                        <h4
                          className="sd font-bold mb-2"
                          style={{ fontSize: "1.6rem", color: "#2C1810" }}
                        >
                          Enquiry Sent!
                        </h4>
                        <p
                          className="sb"
                          style={{
                            fontSize: "1.1rem",
                            fontStyle: "italic",
                            color: "#6B4C2A",
                          }}
                        >
                          Thank you for reaching out. Our export team will
                          respond within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={submit} className="space-y-5">
                        {/* row 1 */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="shi-label">Full Name *</label>
                            <input
                              name="fullName"
                              required
                              placeholder="Your full name"
                              value={form.fullName}
                              onChange={handle}
                              className="shi-input"
                            />
                          </div>
                          <div>
                            <label className="shi-label">Email Address *</label>
                            <input
                              name="email"
                              type="email"
                              required
                              placeholder="your.email@example.com"
                              value={form.email}
                              onChange={handle}
                              className="shi-input"
                            />
                          </div>
                        </div>

                        {/* row 2 */}
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="shi-label">Phone Number</label>
                            <input
                              name="phone"
                              placeholder="+1 (555) 123-4567"
                              value={form.phone}
                              onChange={handle}
                              className="shi-input"
                            />
                          </div>
                          <div>
                            <label className="shi-label">Company Name</label>
                            <input
                              name="company"
                              placeholder="Your company name"
                              value={form.company}
                              onChange={handle}
                              className="shi-input"
                            />
                          </div>
                        </div>

                        {/* row 3 */}
                        <div>
                          <label className="shi-label">Subject *</label>
                          <select
                            name="subject"
                            required
                            value={form.subject}
                            onChange={handle}
                            className="shi-input"
                            style={{ cursor: "pointer" }}
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">
                              General Inquiry
                            </option>
                            <option value="Product Quote">Product Quote</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Export Question">
                              Export Question
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        {/* message */}
                        <div>
                          <label className="shi-label">Message *</label>
                          <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder="Please provide details about your enquiry, including product specifications, quantities, and any specific requirements..."
                            value={form.message}
                            onChange={handle}
                            className="shi-input"
                            style={{ resize: "vertical", minHeight: "120px" }}
                          />
                        </div>

                        {/* submit */}
                        <button
                          type="submit"
                          className="w-full flex items-center justify-center gap-3 rounded-xl py-4 font-bold transition-all duration-300 group active:scale-[0.98]"
                          style={{
                            background:
                              "linear-gradient(135deg,#C18C3C 0%,#B87333 100%)",
                            color: "#fff",
                            boxShadow: "0 8px 32px rgba(180,83,9,0.28)",
                            fontFamily: "'Cormorant Garamond',serif",
                            fontSize: "1rem",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        >
                          Send Message
                          <Send
                            size={17}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          />
                        </button>

                        <p
                          className="text-center sb"
                          style={{
                            fontSize: "0.8rem",
                            color: "rgba(107,76,42,0.5)",
                            fontStyle: "italic",
                          }}
                        >
                          We respect your privacy. Your details are never shared
                          with third parties.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ FULL-WIDTH MAP ═══════════════════ */}
        <section className="relative h-[350px] lg:h-[520px]">
          <div
            className="absolute top-0 left-0 right-0 h-px z-10 opacity-50"
            style={{ background: GOLD_BAR }}
          />

          {/* OpenStreetMap iframe — GIDC Ahmedabad */}
          <iframe
            title="Shivaay International Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.53%2C22.99%2C72.65%2C23.07&layer=mapnik&marker=23.030%2C72.587"
            className="w-full h-full border-0"
            loading="lazy"
            style={{ filter: "sepia(30%) saturate(0.9) brightness(0.95)" }}
          />

          {/* overlay info card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 rounded-2xl overflow-hidden"
            style={{
              width: "300px",
              boxShadow: "0 24px 60px -8px rgba(28,14,8,0.5)",
              border: "1px solid rgba(193,140,60,0.25)",
            }}
          >
            {/* card header */}
            <div
              className="px-6 py-4"
              style={{ background: "linear-gradient(135deg,#1C0E08,#2C1810)" }}
            >
              <div
                className="h-px w-8 mb-3 opacity-60"
                style={{ background: GOLD_SOLID }}
              />
              <div
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(232,201,122,0.55)",
                  fontWeight: 700,
                  marginBottom: "4px",
                }}
              >
                Office Headquarters
              </div>
              <div
                className="sd font-bold text-white"
                style={{ fontSize: "1.4rem", lineHeight: 1.1 }}
              >
                Ahmedabad,
                <br />
                Gujarat
              </div>
            </div>

            {/* card body */}
            <div className="bg-white px-6 py-5 space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(193,140,60,0.1)",
                    color: "#C18C3C",
                  }}
                >
                  <MapPin size={14} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(107,76,42,0.55)",
                      fontWeight: 700,
                      marginBottom: "2px",
                    }}
                  >
                    Location Address
                  </div>
                  <p
                    className="sb"
                    style={{
                      fontSize: "0.9rem",
                      color: "#2C1810",
                      lineHeight: 1.55,
                    }}
                  >
                    123, Agro Trade Center,
                    <br />
                    GIDC Estate, Ahmedabad,
                    <br />
                    Gujarat — 382 421
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(193,140,60,0.1)",
                    color: "#C18C3C",
                  }}
                >
                  <Mail size={14} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(107,76,42,0.55)",
                      fontWeight: 700,
                      marginBottom: "2px",
                    }}
                  >
                    Export Enquiries
                  </div>
                  <a
                    href="mailto:exports@shivaayintl.com"
                    className="sb"
                    style={{ fontSize: "0.9rem", color: "#C18C3C" }}
                  >
                    exports@shivaayintl.com
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=GIDC+Estate+Ahmedabad+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 w-full font-bold transition-all duration-300 group"
                style={{
                  background: "linear-gradient(135deg,#C18C3C,#B87333)",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(180,83,9,0.25)",
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "0.82rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Open in Google Maps
                <ChevronRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}
