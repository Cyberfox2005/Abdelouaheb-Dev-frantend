import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-black text-white tracking-tighter">
                YUGURTHA<span className="text-brand-cyan">DEV</span>
              </span>
            </div>
            <p className="text-gray-600 text-xs font-mono uppercase tracking-[0.3em]">
              The Digital Frontier © 2026
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8">
            {[
              { icon: Github, href: "#", label: "Github" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Mail" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.2, color: "#00D4FF" }}
                className="text-gray-500 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-cyan transition-all"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Closing Philosophy */}
        <div className="mt-20 text-center">
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.5em] mb-4">
            Built with Vision. Driven by Purpose.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-800">
            <div className="h-px w-12 bg-white/5" />
            <span className="text-lg font-black italic">Yugurtha</span>
            <div className="h-px w-12 bg-white/5" />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
    </footer>
  );
}
