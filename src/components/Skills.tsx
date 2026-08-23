import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skillsData, SkillItem } from "../data/skillsData";
import { useLanguage } from "./LanguageProvider";
import { TechLogos } from "./TechLogos";
import { Shield, Zap, Cpu, Code2, Globe, Layers } from "lucide-react";

export function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<SkillItem["category"] | "All">("All");

  const categories: { id: SkillItem["category"] | "All"; label: string; icon: any }[] = [
    { id: "All", label: "Unified Intelligence", icon: Globe },
    { id: "CrossPlatform", label: "Mobile / Cross-Platform", icon: Zap },
    { id: "Backend", label: "Backend & Cloud", icon: Cpu },
    { id: "Frontend", label: "Frontend Engineering", icon: Code2 },
    { id: "Systems", label: "Systems & Low-Level", icon: Shield },
    { id: "DevOps", label: "DevOps & Tooling", icon: Layers },
  ];

  const filteredSkills = skillsData.filter(s => activeCategory === "All" ? true : s.category === activeCategory);

  return (
    <section id="skills" className="py-32 bg-[#05070B] relative overflow-hidden">
      {/* Background visual atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.05),transparent_70%)]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-6"
          >
            <Zap className="w-4 h-4 text-brand-cyan" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Engineering Headquarters</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-7xl font-black text-white mb-12 uppercase tracking-tighter"
          >
            Technological <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Arsenal</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-[10px] font-black tracking-widest uppercase transition-all duration-500 border ${
                  activeCategory === cat.id
                    ? "bg-brand-cyan text-black border-brand-cyan shadow-[0_0_40px_rgba(0,212,255,0.3)]"
                    : "bg-transparent text-gray-500 border-white/5 hover:border-brand-cyan/20 hover:text-white"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, i) => (
              <SkillCard key={skill.name} skill={skill} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const LogoComponent = (TechLogos as any)[skill.logoId] || TechLogos.React;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative h-full p-8 rounded-3xl bg-[#0A0F1E] border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
        {/* Hover Ambient Light */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tech Logo Frame */}
        <div className="relative z-10 w-20 h-20 mb-8 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-brand-cyan/40 group-hover:bg-white/[0.06] transition-all duration-500 shadow-inner flex items-center justify-center group-hover:scale-110">
           <LogoComponent className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]" />
           {/* Logo Glow */}
           <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-30 transition-opacity">
              <LogoComponent className="w-full h-full" />
           </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-lg font-black text-white mb-2 group-hover:text-brand-cyan transition-colors uppercase tracking-tight">
            {skill.name}
          </h3>
          <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Completed
            </span>
            <span className="text-brand-cyan font-bold font-mono">100%</span>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple shadow-[0_0_10px_#00D4FF]"
            />
          </div>
        </div>

        {/* Glossy Corner Refraction */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] rotate-45 translate-x-16 -translate-y-16 pointer-events-none" />
      </div>
    </motion.div>
  );
}
