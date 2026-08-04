import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { YDVerticalLogo } from "./BrandAssets";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/5 py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center gap-16">
          
          {/* Central Logo Lockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <YDVerticalLogo size={100} />
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 border-t border-white/5 pt-12">

            {/* Social Links */}
            <div className="flex items-center gap-8">
              {[
                { icon: Github, href: "https://github.com/Cyberfox2005", label: "Github" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ben689533@gmail.com", label: "Mail" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ scale: 1.2, color: "#00D4FF" }}
                  className="text-gray-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            <div className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.3em]">
              Precision Software Engineering © 2026
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
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
    </footer>
  );
}
