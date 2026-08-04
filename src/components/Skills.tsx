import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skillsData } from "../data/skillsData";
import { useLanguage } from "./LanguageProvider";

import { SkillItem } from "../data/skillsData";

export function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillItem["category"] | "all">("all");

  const categories: { id: SkillItem["category"] | "all"; label: string }[] = [
    { id: "all", label: "Unified Intelligence" },
    { id: "frontend", label: "UI Engineering" },
    { id: "backend", label: "Core Systems" },
    { id: "tools", label: "Deployment & OPS" }
  ];

  const filteredSkills = skillsData.filter(s => activeCategory === "all" ? true : s.category === activeCategory);

  return (
    <section id="skills" className="py-32 bg-[#05070B] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] border border-white/5 rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Technological <span className="text-brand-cyan">Arsenal</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-brand-cyan text-black border-brand-cyan"
                    : "bg-transparent text-gray-500 border-white/10 hover:border-brand-cyan/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <SkillOrb key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillOrb({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col items-center"
    >
      {/* The Orb */}
      <div className="relative w-32 h-32 mb-4">
        {/* Glowing Aura */}
        <div className="absolute inset-0 bg-brand-cyan/10 rounded-full blur-xl group-hover:bg-brand-cyan/20 transition-all duration-500" />

        {/* Animated Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border border-dashed border-white/10 rounded-full"
        />

        {/* Inner Content */}
        <div className="absolute inset-2 bg-gradient-to-b from-[#101827] to-[#05070B] rounded-full border border-white/5 flex flex-col items-center justify-center p-4 shadow-2xl">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
            className="text-brand-cyan mb-1"
          >
            {/* Symbol or Initials */}
            <span className="text-xl font-black">{skill.name.substring(0, 2).toUpperCase()}</span>
          </motion.div>

          <div className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">
            Stability: {skill.level}%
          </div>
        </div>

        {/* Level Indicator (Arc) */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={377}
            strokeDashoffset={377 - (377 * skill.level) / 100}
            className="text-brand-cyan opacity-40 group-hover:opacity-100 transition-opacity"
          />
        </svg>
      </div>

      <h3 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors tracking-tight text-center uppercase">
        {skill.name}
      </h3>
    </motion.div>
  );
}
