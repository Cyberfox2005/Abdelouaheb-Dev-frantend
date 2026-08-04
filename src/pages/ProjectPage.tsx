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
      <div className="min-h-screen bg-[#05070B] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Mission Data Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-brand-cyan text-black font-black uppercase tracking-widest rounded-lg"
          >
            Return to HQ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05070B]">
      <div className="pt-0">
        <ProjectDetails project={project} onClose={() => navigate('/')} />
      </div>
      <Footer />
    </div>
  );
}
