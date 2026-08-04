import { motion } from "framer-motion";
import { YDMonogram } from "./BrandAssets";
import cinematicLogo from "../assets/9924fd72bc599674567ae61e63466315b12bb425.png";

interface LogoProps {
  className?: string;
  variant?: "minimal" | "cinematic";
  size?: number;
}

export function Logo({ className, variant = "minimal", size }: LogoProps) {
  if (variant === "cinematic") {
    return (
      <motion.div
        className={`relative flex items-center justify-center rounded-full border-2 border-brand-cyan/30 p-2 overflow-hidden shadow-[0_0_30px_rgba(0,212,255,0.2)] bg-[#05070B] ${className}`}
        whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.6)" }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-2xl animate-pulse" />

        <img
          src={cinematicLogo}
          alt="YUGURTHA DEV Cinematic Emblem"
          className="relative z-10 w-full h-full object-cover rounded-full filter brightness-110 contrast-110"
        />

        {/* Inner Spinning Ring */}
        <motion.div
          className="absolute inset-1 border border-dashed border-brand-cyan/20 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    );
  }

  return (
    <YDMonogram
      className={className}
      size={size}
      color="#00D4FF"
      glow
    />
  );
}
