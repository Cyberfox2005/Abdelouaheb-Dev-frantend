import { useState, useEffect } from "react";
import { ArrowRight, Mail, Code, Sparkles, Layers, Cpu, Globe, Terminal, Github, Linkedin } from "lucide-react";
import logoImage from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";
import { useLanguage } from "./LanguageProvider";
import { AnimatedBackground } from "./AnimatedBackground";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  // Typing effect skills list
  const skillsList = [
    "Building Modern Web Apps",
    "Crafting Interactive UI/UX",
    "React & Frontend Specialist",
    "Full-Stack Solution Architecture",
    "Mobile & Cross-Platform Apps",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skillsList[currentSkillIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentSkill) {
      typingSpeed = 2000; // Pause at end of word
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentSkillIndex((prev) => (prev + 1) % skillsList.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          if (prev === currentSkill) {
            setIsDeleting(true);
            return prev;
          }
          return currentSkill.substring(0, prev.length + 1);
        } else {
          return currentSkill.substring(0, prev.length - 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSkillIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/10 dark:bg-white/10 backdrop-blur-md border border-[var(--brand-cyan)]/30 text-[var(--brand-cyan)] text-sm font-semibold mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>{t("welcome") || "Welcome to my Portfolio"} 👋</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[var(--brand-cyan)] via-[var(--brand-purple)] to-[var(--brand-green)] bg-clip-text text-transparent">
                Abdelouaheb
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600 dark:text-gray-300">
                Frontend & Full-Stack Developer
              </span>
            </h1>

            {/* Dynamic Typing Effect */}
            <div className="h-12 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-lg sm:text-xl lg:text-2xl font-mono text-[var(--brand-cyan)] font-semibold flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-[var(--brand-purple)]" />
                {displayedText}
                <span className="inline-block w-0.5 h-6 bg-[var(--brand-cyan)] ml-1 animate-pulse" />
              </span>
            </div>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {t("heroDescription") ||
                "I craft beautiful, performant web and mobile applications with modern technologies. Passionate about creating intuitive user experiences and writing clean, maintainable code."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-bold text-base shadow-xl shadow-[var(--brand-cyan)]/20 hover:shadow-2xl hover:shadow-[var(--brand-cyan)]/35 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>{t("viewProjects") || "View Projects"}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold text-base shadow-md hover:border-[var(--brand-cyan)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5 text-[var(--brand-cyan)]" />
                <span>{t("getInTouch") || "Contact Me"}</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold mr-2">
                Connect:
              </span>
              {[
                { icon: Github, href: "https://github.com/Cyberfox2005", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ben689533@gmail.com", label: "Email" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-3 rounded-xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 text-gray-700 dark:text-gray-300 hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Tech Cards & Branding Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Glowing Backdrop Ring */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[var(--brand-cyan)]/30 via-[var(--brand-purple)]/20 to-[var(--brand-green)]/30 blur-3xl animate-pulse" />

            {/* Central Branding Card */}
            <div className="relative w-full max-w-sm p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-800/60 shadow-2xl group transition-all duration-500 hover:shadow-[var(--brand-cyan)]/20">
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-[var(--brand-cyan)] font-semibold">
                  abdelouaheb.dev
                </span>
              </div>

              {/* Logo / Image Display */}
              <div className="relative flex justify-center py-4 my-2">
                <div className="p-4 rounded-2xl bg-slate-950 border border-[var(--brand-cyan)]/20 shadow-inner group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={logoImage}
                    alt="Abdelouaheb Dev"
                    className="w-36 sm:w-44 h-auto drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                  />
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-800/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Available for Work
                  </span>
                </div>
                <span className="text-xs font-mono text-gray-400">Algeria 🇩🇿</span>
              </div>

              {/* Floating Orbiting Tech Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 shadow-xl flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-white"
              >
                <Code className="w-4 h-4 text-cyan-500" />
                <span>React 18</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -right-6 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 shadow-xl flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-white"
              >
                <Layers className="w-4 h-4 text-purple-500" />
                <span>Tailwind CSS</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-10 transform -translate-y-1/2 px-3 py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200 dark:border-slate-800 shadow-xl flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-white hidden sm:flex"
              >
                <Cpu className="w-4 h-4 text-emerald-500" />
                <span>Node.js</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}