import { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"all" | "fullstack" | "frontend" | "mobile" | "system">("all");

  const categories = [
    { id: "all", label: "All Operations" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
    { id: "system", label: "Low-Level" },
  ];

  const filteredProjects = projectsData.filter((p) =>
    activeCategory === "all" ? true : p.category === activeCategory
  );

  return (
    <section id="projects" className="py-32 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-brand-cyan" />
            <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.4em]">Operations</span>
          </motion.div>

          <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 uppercase tracking-tighter">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Missions</span>
          </h2>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat.id
                    ? "bg-brand-cyan text-black border-brand-cyan shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                    : "bg-transparent text-gray-500 border-white/5 hover:border-brand-cyan/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-widest">More experiments on GitHub</p>
          <a
            href="https://github.com/Cyberfox2005"
            target="_blank"
            className="inline-flex items-center gap-3 text-white font-bold group"
          >
            Explore Repositories
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
