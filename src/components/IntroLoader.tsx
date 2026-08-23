import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function IntroLoader() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const fullText = "INITIALIZING_SYSTEM_CORE... [OK]";

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
    }, 400);

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("hasSeenIntro", "true");
    }, 4500);

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
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 1.5, ease: "circIn" }}
          className="fixed inset-0 z-[100] bg-[#05070B] flex flex-col items-center justify-center p-4"
        >
          {/* Energy Core Point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0.8], opacity: [0, 1, 0.5] }}
            transition={{ duration: 2, times: [0, 0.5, 1] }}
            className="absolute w-1 h-1 bg-brand-cyan rounded-full shadow-[0_0_100px_40px_rgba(0,212,255,0.4)]"
          />

          <div className="relative">
            {/* Logo Assembly */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, letterSpacing: "2em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.2em" }}
              transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
              className="mb-16"
            >
              <Logo variant="cinematic" className="w-48 h-48" />
            </motion.div>

            {/* Scanning Light Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: [0, 0.2, 0] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-brand-cyan rounded-full"
            />
          </div>

          {/* System Terminal Readout */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-brand-cyan text-[10px] tracking-[0.5em] uppercase font-black"
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: [0.1, 1, 0.1] }}
                  transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                  className="w-8 h-[2px] bg-brand-cyan"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
