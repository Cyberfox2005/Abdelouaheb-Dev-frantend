import { motion } from "framer-motion";

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
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
      >
        {/* Background Glow */}
        <circle cx="50" cy="50" r="45" fill="url(#logoGlow)" fillOpacity="0.1" />

        {/* Outer Ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          stroke="url(#ringGradient)"
          strokeWidth="1"
          strokeDasharray="10 5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Amazigh Symbol ⵣ Integrated with YD */}
        {/* The 'Y' body forms the central vertical of Yaz */}
        <path
          d="M35 30 L50 50 L65 30 M50 50 V80"
          stroke="url(#textGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* The 'D' part */}
        <path
          d="M65 40 C80 40 80 70 65 70"
          stroke="url(#textGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Yaz arms/legs (the curved parts of ⵣ) */}
        <path
          d="M30 40 C20 40 20 20 30 20 M70 40 C80 40 80 20 70 20"
          stroke="url(#accentGradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M30 60 C20 60 20 80 30 80 M70 60 C80 60 80 80 70 80"
          stroke="url(#accentGradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Central Dot / Core */}
        <motion.circle
          cx="50"
          cy="50"
          r="4"
          fill="#00D4FF"
          initial={{ opacity: 0.5, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />

        <defs>
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
