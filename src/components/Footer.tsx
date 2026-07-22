import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import logoImage from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-slate-950 text-white border-t border-gray-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--brand-cyan)]/5 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Abdelouaheb Dev"
                className="w-10 h-auto drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              />
              <span className="font-extrabold text-xl tracking-tight text-white">
                Abdelouaheb Dev
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Frontend & Full-Stack Developer creating intuitive, high-performance web and mobile applications with modern frameworks.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              {t("quickLinks") || "Quick Links"}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              <button onClick={() => scrollToSection("home")} className="text-left hover:text-[var(--brand-cyan)] transition-colors">
                {t("home") || "Home"}
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-[var(--brand-cyan)] transition-colors">
                {t("about") || "About"}
              </button>
              <button onClick={() => scrollToSection("skills")} className="text-left hover:text-[var(--brand-cyan)] transition-colors">
                {t("skills") || "Skills"}
              </button>
              <button onClick={() => scrollToSection("projects")} className="text-left hover:text-[var(--brand-cyan)] transition-colors">
                {t("projects") || "Projects"}
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left hover:text-[var(--brand-cyan)] transition-colors">
                {t("contact") || "Contact"}
              </button>
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
                {t("followMe") || "Follow Me"}
              </h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/Cyberfox2005", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ben689533@gmail.com", label: "Email" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-slate-900 border border-gray-800 text-gray-300 hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)] transition-colors shadow-sm"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--brand-cyan)] hover:text-white transition-colors group focus:outline-none"
            >
              <span>Back to Top</span>
              <div className="p-2 rounded-full bg-slate-900 border border-gray-800 group-hover:bg-[var(--brand-cyan)] group-hover:text-black transition-colors">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} Abdelouaheb Dev. {t("rights") || "All rights reserved."}
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>using React, Tailwind CSS & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
}