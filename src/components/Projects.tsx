import { useState } from "react";
import { projectsData } from "../data/projectsData";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { FolderGit2, Layers } from "lucide-react";

export { projectsData as PROJECTS };

export function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "mobile" | "system">("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "system", label: "Systems & C++" },
  ];

  const filteredProjects = projectsData.filter((p) =>
    filter === "all" ? true : p.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span>{t("projectsTitle") || "Featured Projects"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Showcase of Modern Applications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            {t("projectsDescription") ||
              "A collection of projects showcasing my expertise in web, mobile, and full-stack development"}
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? "bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white shadow-lg shadow-[var(--brand-cyan)]/25 scale-105"
                  : "bg-white/80 dark:bg-slate-900/80 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}