import { ArrowLeft, ExternalLink, Github, Star, Download, Shield, Code2 } from "lucide-react";
import { Badge } from "./ui/badge";

export interface ScreenshotType {
  url: string;
  alt: string;
}

export interface ProjectType {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  developer: string;
  rating: number;
  reviews: number;
  category: string;
  videoUrl?: string;
  screenshots: ScreenshotType[];
  features: string[];
  languages?: { name: string; percent: number; color: string }[];
}

interface ProjectDetailsProps {
  project: ProjectType;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const fullStars = Math.floor(project.rating);
  const hasHalf = project.rating % 1 >= 0.5;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-y-auto"
      style={{ background: "var(--store-bg)" }}
    >
      {/* Sticky top bar */}
      <div className="sticky top-0 z-10 flex items-center gap-4 px-6 py-4 border-b detail-topbar">
        <button
          id="back-to-store-btn"
          onClick={onClose}
          className="store-back-btn flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          <span>All Apps</span>
        </button>
        <span className="text-sm opacity-40 truncate">{project.title}</span>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* ── App Hero Row ───────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start gap-7 mb-10">
          {/* Squircle icon */}
          <div className="squircle-icon detail-icon flex-shrink-0">
            <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="detail-title">{project.title}</h1>
            <p className="detail-developer">{project.developer}</p>
            <p className="detail-subtitle mb-4">{project.subtitle}</p>

            {/* Star rating */}
            <div className="flex items-center gap-2 mb-5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={s <= fullStars ? "star-filled" : (s === fullStars + 1 && hasHalf ? "star-half" : "star-empty")}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm opacity-60">{project.rating} ({project.reviews.toLocaleString()} ratings)</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && project.liveUrl !== "#" ? (
                <a
                  id={`open-app-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-open-btn"
                >
                  <ExternalLink size={15} />
                  Open App
                </a>
              ) : (
                <span className="store-open-btn-disabled">
                  <ExternalLink size={15} />
                  Open App
                </span>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  id={`github-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-github-btn"
                >
                  <Github size={15} />
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ── Meta Chips ─────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap gap-3 mb-10">
          <div className="detail-meta-chip">
            <Shield size={13} className="detail-meta-icon" />
            <span>{project.category}</span>
          </div>
          <div className="detail-meta-chip">
            <Download size={13} className="detail-meta-icon" />
            <span>{project.reviews.toLocaleString()}+ Downloads</span>
          </div>
          <div className="detail-meta-chip">
            <Code2 size={13} className="detail-meta-icon" />
            <span>{project.tags.slice(0, 2).join(" · ")}</span>
          </div>
        </div>

        {/* ── Media Section ──────────────────────────────────────────────────── */}
        <div className="mb-12">
          <h2 className="detail-section-title">Preview</h2>

          {/* Video / hero image */}
          <div className="detail-video-container mb-5">
            {project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                title={`${project.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-2xl"
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>

          {/* Screenshot strip */}
          <div className="screenshot-strip">
            {project.screenshots.map((s, i) => (
              <div key={i} className="screenshot-thumb">
                <img src={s.url} alt={s.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Description ────────────────────────────────────────────────────── */}
        <div className="detail-card mb-8">
          <h2 className="detail-section-title">About this app</h2>
          <p className="detail-description">{project.description}</p>
        </div>

        {/* ── Features ───────────────────────────────────────────────────────── */}
        {project.features && project.features.length > 0 && (
          <div className="detail-card mb-8">
            <h2 className="detail-section-title">Key Features</h2>
            <ul className="feature-list">
              {project.features.map((f, i) => (
                <li key={i} className="feature-item">
                  <span className="feature-bullet">✦</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── Tech Tags ──────────────────────────────────────────────────────── */}
        <div className="detail-card mb-8">
          <h2 className="detail-section-title">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Badge key={i} className="tech-badge">{tag}</Badge>
            ))}
          </div>
        </div>

        {/* ── Language Bar ───────────────────────────────────────────────────── */}
        {project.languages && project.languages.length > 0 && (
          <div className="detail-card mb-8">
            <h2 className="detail-section-title">Language Usage</h2>
            <div className="lang-bar">
              {project.languages.map((l, i) => (
                <div
                  key={i}
                  style={{ width: `${l.percent}%`, backgroundColor: l.color }}
                  className="lang-bar-segment"
                  title={`${l.name}: ${l.percent}%`}
                />
              ))}
            </div>
            <div className="lang-legend">
              {project.languages.map((l, i) => (
                <div key={i} className="lang-item">
                  <span className="lang-dot" style={{ backgroundColor: l.color }} />
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-pct">{l.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
