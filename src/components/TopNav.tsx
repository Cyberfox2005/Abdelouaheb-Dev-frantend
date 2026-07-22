import { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import logoImage from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";
import { motion, AnimatePresence } from "framer-motion";

export function TopNav() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: t("home") || "Home" },
    { id: "about", label: t("about") || "About" },
    { id: "skills", label: t("skills") || "Skills" },
    { id: "projects", label: t("projects") || "Projects" },
    { id: "services", label: t("services") || "Services" },
    { id: "contact", label: t("contact") || "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg shadow-black/5"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo / Branding */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-tr from-[var(--brand-cyan)] to-[var(--brand-purple)] p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center p-1 overflow-hidden">
              <img
                src={logoImage}
                alt="Abdelouaheb Logo"
                className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-gray-900 dark:text-white flex items-center gap-1">
              Abdelouaheb
              <Sparkles className="w-4 h-4 text-[var(--brand-cyan)] animate-pulse" />
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-[var(--brand-cyan)]">
              Developer & Designer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/40 dark:bg-slate-900/40 p-1.5 rounded-full border border-gray-200/40 dark:border-gray-800/40 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Resume Button */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />

          {/* Resume Download CTA */}
          <a
            href="https://github.com/Cyberfox2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg hover:shadow-[var(--brand-cyan)]/25 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            <span>Resume / CV</span>
          </a>
        </div>

        {/* Mobile Controls & Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-800 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-3 text-left rounded-xl font-medium text-base transition-colors ${
                    activeSection === link.id
                      ? "bg-gradient-to-r from-[var(--brand-cyan)]/20 to-[var(--brand-purple)]/20 text-[var(--brand-cyan)] font-bold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <LanguageToggle />
                <a
                  href="https://github.com/Cyberfox2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-semibold text-sm shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume / CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
