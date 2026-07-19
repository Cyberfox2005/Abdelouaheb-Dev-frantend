import { useParams, useNavigate } from "react-router-dom";
import { ProjectDetails } from "../components/ProjectDetails";
import { PROJECTS } from "../components/Projects";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export function ProjectPage() {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();
  
  const project = PROJECTS.find(p => p.title === decodeURIComponent(title || ''));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#060b18] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button 
            onClick={() => navigate('/projects')}
            className="px-4 py-2 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--store-bg)]">
      <TopNav />
      <div className="pt-16">
        <ProjectDetails project={project} onClose={() => navigate('/projects')} />
      </div>
      <Footer />
    </div>
  );
}
