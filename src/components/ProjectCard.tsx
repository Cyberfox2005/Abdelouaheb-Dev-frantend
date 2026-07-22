import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Project } from "../data/projectsData";
import { useLanguage } from "./LanguageProvider";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 overflow-hidden shadow-lg hover:shadow-2xl hover:border-[var(--brand-cyan)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full">
      {/* Image Preview Header */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 group-hover:brightness-100"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Pill */}
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
          {project.category}
        </span>

        {/* GitHub stats if present */}
        {(project.stars || project.forks) && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-mono">
            {project.stars && (
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {project.stars}
              </span>
            )}
            {project.forks && (
              <span className="flex items-center gap-1">
                <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                {project.forks}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-[var(--brand-cyan)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="p-6 pt-0 flex items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-bold text-xs shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            <span>{t("liveDemo") || "Live Demo"}</span>
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)] transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}
