import { motion } from "framer-motion";

interface BrandProps {
  className?: string;
  size?: number;
  color?: string;
  glow?: boolean;
}

/**
 * THE YD MONOGRAM: GEOMETRIC FUSION
 * Designed for 2035 Technology Aesthetic.
 * Symmetrical, minimal, and iconic.
 */
export function YDMonogram({ className, size = 100, color = "currentColor", glow = false }: BrandProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      {glow && (
        <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-[20px] animate-pulse" />
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* The "YD" Geometric Fusion Symbol */}
        <motion.path
          d="M30 20 L50 45 L70 20" // Y top branches
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 45 V80" // Shared vertical stem
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M50 30 C75 30 75 70 50 70" // D semi-circle merged with stem
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        />

        {/* Precision Dots */}
        <motion.circle
          cx="50" cy="45" r="3"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
        />
      </svg>
    </div>
  );
}

export function YDHorizontalLogo({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <YDMonogram size={size} color="#00D4FF" glow />
      <div className="flex flex-col">
        <span className="font-space font-bold tracking-tighter text-white" style={{ fontSize: size * 0.6 }}>
          YUGURTHA<span className="text-brand-cyan">DEV</span>
        </span>
        <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-gray-500 -mt-1">
          Precision Engineering
        </span>
      </div>
    </div>
  );
}

export function YDVerticalLogo({ className, size = 120 }: { className?: string; size?: number }) {
  return (
    <div className={`flex flex-col items-center gap-6 text-center ${className}`}>
      <YDMonogram size={size} color="#00D4FF" glow />
      <div className="flex flex-col items-center">
        <span className="font-space font-black tracking-tighter text-white text-3xl sm:text-5xl uppercase">
          YUGURTHA<span className="text-brand-cyan">DEV</span>
        </span>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-brand-cyan to-transparent my-4 opacity-50" />
        <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-gray-500">
          Building the Digital Frontier
        </span>
      </div>
    </div>
  );
}
