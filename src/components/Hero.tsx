import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const [bootText, setBootText] = useState("");
  const [bootComplete, setBootComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    "INITIALIZING_CORE_SYSTEMS...",
    "LOADING_VISUAL_INTERFACE...",
    "CONNECTING_AMAZIGH_HERITAGE...",
    "OPTIMIZING_PERFORMANCE...",
    "READY."
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      setBootText(bootSequence[currentLine]);
      currentLine++;
      if (currentLine >= bootSequence.length) {
        clearInterval(interval);
        setTimeout(() => setBootComplete(true), 500);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.current = (clientX - innerWidth / 2) / 25;
    mouseY.current = (clientY - innerHeight / 2) / 25;
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
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#05070B]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-brand-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {!bootComplete ? (
          <div className="flex flex-col items-center justify-center gap-6">
             <div className="font-mono text-brand-cyan text-sm tracking-[0.3em] uppercase opacity-80">
                {bootText}
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>|</motion.span>
             </div>
             <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-cyan to-transparent"
                />
             </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rtl:text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-ping" />
                System Active
              </div>

              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black text-white leading-[0.9] mb-8">
                {t("heroTitle").split(' ').slice(0, 2).join(' ')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">
                  {t("heroTitle").split(' ').slice(2, 3)}
                </span><br />
                {t("heroTitle").split(' ').slice(3).join(' ')}
              </h1>

              <p className="text-lg text-gray-400 max-w-xl mb-12 leading-relaxed">
                {t("heroSubtitle")}
              </p>

              <div className="flex flex-wrap gap-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("projects")}
                  className="px-8 py-4 bg-brand-cyan text-black font-bold rounded-xl flex items-center gap-3 transition-shadow"
                >
                  {t("viewProjects")} <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Cyberfox2005" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/" },
                    { icon: Mail, href: "mailto:ben689533@gmail.com" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      whileHover={{ y: -5, color: "#00D4FF" }}
                      className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-gray-500 hover:border-brand-cyan/50 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content: Layered Emblem Parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square flex items-center justify-center"
            >
              {/* Monolithic Backdrop */}
              <div className="absolute inset-[15%] bg-brand-cyan/5 rounded-[40px] blur-[60px]" />

              {/* Outer Glowing Ring */}
              <motion.div
                style={{ y: y1, rotate }}
                className="absolute inset-0 border border-white/5 rounded-full"
              />

              {/* Central Emblem Container */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                  rotateX: mouseY.current,
                  rotateY: -mouseX.current,
                }}
              >
                {/* The New Master Emblem (Cinematic Version) */}
                <div className="relative z-10 w-3/4 h-3/4">
                   <Logo variant="cinematic" className="w-full h-full drop-shadow-[0_0_50px_rgba(0,212,255,0.4)]" />

                   {/* Floating Tech Specs */}
                   <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-0 border border-white/10 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg"
                   >
                     <div className="text-[8px] font-mono text-gray-500 uppercase">Architecture</div>
                     <div className="text-[10px] font-bold text-white tracking-widest uppercase">Distributed</div>
                   </motion.div>
                </div>

                {/* Cyberpunk Lighting Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 via-transparent to-brand-purple/20 rounded-full blur-[100px] opacity-30" />
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-cyan to-transparent" />
      </motion.div>
    </section>
  );
}
