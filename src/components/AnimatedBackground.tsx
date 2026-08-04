import { motion } from "framer-motion";
import { useMemo } from "react";

export function AnimatedBackground() {
  const nodes = useMemo(() => [...Array(10)].map((_, i) => ({
    id: i,
    cx: Math.random() * 100 + "%",
    cy: Math.random() * 100 + "%",
    duration: 3 + Math.random() * 5,
    delay: Math.random() * 5
  })), []);

  const fragments = useMemo(() => [...Array(8)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 20 + Math.random() * 20
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#05070B]">
      {/* Digital Grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(var(--brand-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--brand-cyan) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Radial Gradient Over Grid */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-background/60 to-background" />

      {/* Floating Circuit Traces (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--brand-cyan)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Circuit Line 1 */}
        <motion.path
          d="M -100 100 L 200 100 L 250 150 L 500 150"
          stroke="url(#circuitGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Circuit Line 2 */}
        <motion.path
          d="M 1200 800 L 900 800 L 850 750 L 600 750"
          stroke="url(#circuitGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.cx}
            cy={node.cy}
            r="1"
            fill="var(--brand-cyan)"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: node.duration, repeat: Infinity, delay: node.delay }}
          />
        ))}
      </svg>

      {/* Deep Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-cyan rounded-full blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-brand-purple rounded-full blur-[150px]"
      />

      {/* Floating Code Fragments */}
      <div className="absolute inset-0 font-mono text-[8px] text-brand-cyan/10 select-none">
        {fragments.map((frag) => (
          <motion.div
            key={frag.id}
            className="absolute whitespace-nowrap"
            style={{
              top: frag.top,
              left: frag.left,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: frag.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {`val build = Idea().transform { impact() }`}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
