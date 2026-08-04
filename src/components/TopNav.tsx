import { useState, useEffect } from "react";
import { Menu, X, FileText, Sparkles } from "lucide-react";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

export function TopNav() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "experience", "services", "projects", "contact"];
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
    { id: "home", label: t("home") },
    { id: "about", label: t("about") },
    { id: "skills", label: t("skills") },
    { id: "experience", label: t("experienceTitle") },
    { id: "services", label: t("services") },
    { id: "projects", label: t("projects") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        {/* Logo / Branding */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <Logo className="w-10 h-10 group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-2xl tracking-tight text-white flex items-center gap-2">
              YUGURTHA
              <span className="text-brand-cyan">DEV</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500">
              Future Software Engineering
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
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
        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />

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
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 text-gray-200 hover:bg-white/10 transition-colors"
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
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-4 py-3 text-left rounded-xl font-medium text-base transition-colors ${
                    activeSection === link.id
                      ? "bg-brand-cyan/20 text-brand-cyan font-bold"
                  : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
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
