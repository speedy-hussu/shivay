import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/916351305428"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={30} />
        <span className="absolute right-full bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with us
        </span>
      </a>
    </div>
  );
}
