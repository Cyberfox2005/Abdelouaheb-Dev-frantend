import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Star, 
  GitFork, 
  Shield, 
  Zap, 
  CheckCircle2, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Smartphone,
  Layers,
  Sparkles
} from "lucide-react";
import { Project } from "../data/projectsData";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);
  const screenshots = project.screenshots || [];
  const currentScreenshot = hasScreenshots ? screenshots[activeScreenshotIdx] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveScreenshotIdx((prev) => (prev + 1) % screenshots.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveScreenshotIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, screenshots.length]);

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
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-brand-cyan text-black text-xs font-black uppercase tracking-widest rounded-lg flex items-center gap-2 hover:bg-brand-cyan/90 transition-colors"
              >
                <span>Launch Mission</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Info, Overview & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-md bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-widest border border-brand-cyan/20">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Mission
              </span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl font-black leading-tight tracking-tight text-white">
              {project.title}
            </h1>

            {/* Description */}
            <div className="prose prose-invert max-w-none text-gray-300 text-base sm:text-lg leading-relaxed whitespace-pre-line bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              {project.longDescription}
            </div>

            {/* Key Capabilities / Features */}
            {project.features && project.features.length > 0 && (
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-brand-cyan text-xs font-black uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  Key System Capabilities
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Star className="w-5 h-5 text-brand-gold mx-auto mb-2" />
                <div className="text-xl font-bold">{project.stars || 0}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Stars</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <GitFork className="w-5 h-5 text-brand-purple mx-auto mb-2" />
                <div className="text-xl font-bold">{project.forks || 0}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Forks</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Shield className="w-5 h-5 text-brand-cyan mx-auto mb-2" />
                <div className="text-xl font-bold">Stable</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Status</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center">
                <Zap className="w-5 h-5 text-brand-blue mx-auto mb-2" />
                <div className="text-xl font-bold">Mobile</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">Platform</div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="space-y-2">
              <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">Technologies & Stack</div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-brand-cyan/30 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase / Screenshots Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5"
          >
            {hasScreenshots ? (
              <div className="space-y-6">
                {/* Visual Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-cyan">
                    <Smartphone className="w-4 h-4" />
                    App Preview & Photos ({activeScreenshotIdx + 1}/{screenshots.length})
                  </div>
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Fullscreen</span>
                  </button>
                </div>

                {/* Smartphone Mockup Frame */}
                <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] rounded-[44px] p-3.5 bg-gradient-to-b from-gray-700 via-gray-900 to-black border-[3px] border-white/20 shadow-[0_0_50px_rgba(0,212,255,0.15)]">
                  {/* Speaker Notch */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#05070B] rounded-full z-30 flex items-center justify-center">
                    <div className="w-10 h-1 bg-gray-700 rounded-full" />
                    <div className="w-2.5 h-2.5 bg-gray-800 rounded-full ml-3" />
                  </div>

                  {/* Phone Screen Container */}
                  <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[9/19] cursor-pointer group" onClick={() => setLightboxOpen(true)}>
                    <AnimatePresence mode="wait">
                      {currentScreenshot && (
                        <motion.img
                          key={currentScreenshot.url}
                          src={currentScreenshot.url}
                          alt={currentScreenshot.title}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </AnimatePresence>

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <div className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-brand-cyan flex items-center gap-2">
                        <Maximize2 className="w-4 h-4" />
                        Click to Expand
                      </div>
                    </div>

                    {/* Nav arrows on screen */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/90 transition-all z-20 border border-white/10"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveScreenshotIdx((prev) => (prev + 1) % screenshots.length);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/90 transition-all z-20 border border-white/10"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Active Screenshot Caption Card */}
                {currentScreenshot && (
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-white text-base flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                        {currentScreenshot.title}
                      </h4>
                      {currentScreenshot.titleAr && (
                        <span className="text-xs text-brand-cyan font-bold" dir="rtl">
                          {currentScreenshot.titleAr}
                        </span>
                      )}
                    </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {currentScreenshot.description}
                      </p>
                      {currentScreenshot.descriptionAr && (
                        <p className="text-xs text-gray-400 leading-relaxed font-sans" dir="rtl">
                          {currentScreenshot.descriptionAr}
                        </p>
                      )}
                  </div>
                )}

                {/* Thumbnails Row */}
                <div className="space-y-2">
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Select Screen Preview</div>
                  <div className="grid grid-cols-5 gap-2">
                    {screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenshotIdx(idx)}
                        className={`relative rounded-xl overflow-hidden aspect-[9/16] border-2 transition-all group ${
                          activeScreenshotIdx === idx
                            ? "border-brand-cyan shadow-[0_0_15px_rgba(0,212,255,0.4)] scale-105"
                            : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                        }`}
                      >
                        <img src={s.url} alt={s.title} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-1 left-1 right-1 text-[8px] font-bold bg-black/70 rounded px-1 py-0.5 text-center text-white truncate">
                          {idx + 1}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* Fallback Single Image Box */
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10">
                    <div className="text-[10px] text-brand-cyan font-black uppercase tracking-widest mb-2">Technical Brief</div>
                    <div className="text-sm text-gray-300 italic">
                      "This system implements a robust {project.category} architecture utilizing {project.tags.slice(0, 2).join(' and ')}."
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

        </div>

        {/* Extended Gallery Grid View for Multiple Photos */}
        {hasScreenshots && screenshots.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-white/5"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <div className="text-brand-cyan text-xs font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Gallery Overview
                </div>
                <h3 className="text-2xl font-black text-white">Full Application Flow & Screens</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {screenshots.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveScreenshotIdx(idx);
                    setLightboxOpen(true);
                  }}
                  className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-cyan/50 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <div className="aspect-[9/19] overflow-hidden bg-black">
                    <img
                      src={s.url}
                      alt={s.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 bg-[#0A0F1E] border-t border-white/5">
                    <div className="text-xs font-bold text-white truncate group-hover:text-brand-cyan transition-colors">
                      {idx + 1}. {s.title}
                    </div>
                    {s.titleAr && (
                      <div className="text-[10px] text-gray-400 truncate font-sans" dir="rtl">
                        {s.titleAr}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && hasScreenshots && currentScreenshot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-50"
              aria-label="Close fullscreen"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveScreenshotIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all z-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveScreenshotIdx((prev) => (prev + 1) % screenshots.length);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all z-50"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Lightbox Image View */}
            <div
              className="relative max-h-[90vh] max-w-[90vw] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentScreenshot.url}
                src={currentScreenshot.url}
                alt={currentScreenshot.title}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="max-h-[78vh] w-auto rounded-2xl shadow-[0_0_60px_rgba(0,212,255,0.2)] object-contain border border-white/10"
              />

              {/* Lightbox Info Bar */}
              <div className="mt-4 text-center max-w-lg">
                <div className="text-white font-bold text-lg">{currentScreenshot.title}</div>
                {currentScreenshot.titleAr && (
                  <div className="text-brand-cyan text-sm font-sans" dir="rtl">{currentScreenshot.titleAr}</div>
                )}
                <div className="text-xs text-gray-400 mt-1">{currentScreenshot.description}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

