import { useState } from "react";
import { skillsData } from "../data/skillsData";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Sparkles, Code2, Wrench, Server } from "lucide-react";

export function Skills() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "tools" | "backend">("all");

  const categories = [
    { id: "all", label: "All Skills", icon: Sparkles },
    { id: "frontend", label: "Frontend", icon: Code2 },
    { id: "tools", label: "Tools & Workflow", icon: Wrench },
    { id: "backend", label: "Backend & Systems", icon: Server },
  ];

  const filteredSkills = skillsData.filter((skill) =>
    activeTab === "all" ? true : skill.category === activeTab
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-purple)]/10 text-[var(--brand-purple)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t("skillsTitle") || "Skills & Expertise"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Technologies & Stack Mastered
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            {t("skillsDescription") ||
              "Development pathways - from core web standards to modern frameworks and backend tooling"}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white shadow-lg shadow-[var(--brand-cyan)]/25 scale-105"
                    : "bg-white/80 dark:bg-slate-900/80 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              key={skill.name}
              className="p-6 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 shadow-md hover:shadow-2xl hover:border-[var(--brand-cyan)] hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background ambient glow on hover */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[var(--brand-cyan)]/10 rounded-full blur-xl group-hover:bg-[var(--brand-cyan)]/30 transition-all duration-500" />

              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 group-hover:bg-gradient-to-tr group-hover:from-[var(--brand-cyan)] group-hover:to-[var(--brand-purple)] group-hover:text-white transition-all duration-300 text-gray-800 dark:text-gray-200 font-bold">
                  <span className="text-sm font-mono tracking-tight">{skill.name.substring(0, 3)}</span>
                </div>
                <span className="text-xs font-mono font-bold text-[var(--brand-cyan)] bg-[var(--brand-cyan)]/10 px-2.5 py-1 rounded-full">
                  {skill.level}%
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[var(--brand-cyan)] transition-colors">
                {skill.name}
              </h3>

              {/* Animated Progress Meter */}
              <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-slate-800 overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
