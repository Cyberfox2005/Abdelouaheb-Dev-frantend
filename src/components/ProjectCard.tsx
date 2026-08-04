import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import { Project } from "../data/projectsData";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor="project"
      className="relative group w-full h-[450px] rounded-3xl overflow-hidden bg-[#0A0F1E] border border-white/5 transition-all duration-500 hover:border-brand-cyan/30"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-[#05070B]/80 to-transparent" />
      </div>

      {/* Dynamic Glow that follows mouse inside */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(0, 212, 255, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Content */}
      <div className="relative z-20 h-full p-8 flex flex-col justify-end translate-z-[50px]">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-brand-cyan transition-colors leading-tight">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-6 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Footer Metrics & Actions */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-gray-500 text-xs font-mono">
            {project.stars && (
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-brand-gold" /> {project.stars}
              </span>
            )}
            {project.forks && (
              <span className="flex items-center gap-1.5">
                <GitFork className="w-3.5 h-3.5" /> {project.forks}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
            )}
            <Link to={`/project/${project.title}`} className="p-2.5 rounded-full bg-brand-cyan text-black hover:scale-110 transition-transform">
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Glassy Border Reveal */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-brand-cyan/20 transition-all pointer-events-none z-30" />
    </motion.div>
  );
}
