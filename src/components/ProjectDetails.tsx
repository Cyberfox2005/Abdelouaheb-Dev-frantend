import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Star, GitFork, Shield, Zap } from "lucide-react";
import { Project } from "../data/projectsData";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div className="min-h-screen bg-[#05070B] text-white selection:bg-brand-cyan/30">
      {/* Sticky Top Nav */}
      <div className="sticky top-0 z-50 bg-[#05070B]/80 backdrop-blur-xl border-b border-white/5 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-400 hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to HQ</span>
          </button>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" className="p-2 text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" className="px-4 py-2 bg-brand-cyan text-black text-xs font-black uppercase tracking-widest rounded-lg">
                Launch Mission
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left: Info & Specs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 rounded-md bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-widest border border-brand-cyan/20">
                {project.category}
              </span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <h1 className="text-5xl sm:text-7xl font-black mb-8 leading-tight tracking-tighter">
              {project.title}
            </h1>

            <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed mb-12">
              <p>{project.longDescription}</p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Star className="w-5 h-5 text-brand-gold mx-auto mb-2" />
                <div className="text-xl font-bold">{project.stars || 0}</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">Stars</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <GitFork className="w-5 h-5 text-brand-purple mx-auto mb-2" />
                <div className="text-xl font-bold">{project.forks || 0}</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">Forks</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Shield className="w-5 h-5 text-brand-cyan mx-auto mb-2" />
                <div className="text-xl font-bold">Stable</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">Status</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Zap className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                <div className="text-xl font-bold">Live</div>
                <div className="text-[10px] text-gray-600 uppercase tracking-widest">Ops</div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Media / Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] to-transparent opacity-60" />

              {/* Overlay content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-6 glass rounded-2xl border border-white/10">
                  <div className="text-[10px] text-brand-cyan font-black uppercase tracking-widest mb-2">Technical Brief</div>
                  <div className="text-sm text-gray-300 italic">
                    "This system implements a robust {project.category} architecture utilizing {project.tags.slice(0, 2).join(' and ')}."
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
