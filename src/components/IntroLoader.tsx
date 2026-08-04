import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function IntroLoader() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const fullText = "INITIALIZING YUGURTHA_DEV OS...";

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setLoading(false);
      return;
    }

    setLoading(true);
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#05070B] flex flex-col items-center justify-center p-4"
        >
          {/* Scanning Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ top: "-10%" }}
              animate={{ top: "110%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute h-[10vh] w-full bg-gradient-to-b from-transparent via-brand-cyan/10 to-transparent shadow-[0_0_50px_rgba(0,212,255,0.1)]"
            />
          </div>

          <div className="relative">
            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-12"
            >
              <Logo className="w-32 h-32" />
            </motion.div>

            {/* Glowing Aura behind logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-cyan rounded-full blur-[80px]"
            />
          </div>

          {/* Terminal Style Loading Text */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-brand-cyan text-sm tracking-wider"
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 2.5 }}
              className="text-[10px] text-gray-600 uppercase tracking-widest mt-2"
            >
              System Ready
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
