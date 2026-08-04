import { motion } from "framer-motion";
import logoImage from "../assets/9924fd72bc599674567ae61e63466315b12bb425.png";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-brand-purple/10 rounded-full blur-2xl animate-pulse delay-75" />

      {/* The Logo Image */}
      <img
        src={logoImage}
        alt="YUGURTHA DEV Master Emblem"
        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_25px_rgba(0,212,255,0.6)] filter brightness-110 contrast-110"
      />

      {/* Decorative Rotating Ring */}
      <motion.div
        className="absolute inset-0 border border-brand-cyan/10 rounded-full"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
