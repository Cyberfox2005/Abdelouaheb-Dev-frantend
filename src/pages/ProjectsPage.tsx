import { useLanguage } from "../components/LanguageProvider";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Supermarket Management System",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMHNob3BwaW5nfGVufDF8fHx8MTc2MTMzNzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "Hospital Management System",
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYxMzE5MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Django", "Python", "PostgreSQL", "React"],
  },
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTM5MjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "SQL", "Tailwind"],
  },
  {
    title: "Food Mobile App",
    image: "https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2MTM4NTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Kotlin", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Real Estate Listing App",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYxMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Online Learning Platform",
    image: "https://images.unsplash.com/photo-1669607960578-f7d7fd363e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEzMzMxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
  },
  {
    title: "Fitness Tracking Mobile App",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzE4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "Dart", "Swift", "SQL"],
  }
];

export function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-500">
      <TopNav />
      
      <main className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-cyan hover:text-brand-purple transition-colors mb-12 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-20 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <h1 className="mb-6 bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple bg-clip-text text-transparent text-5xl md:text-7xl font-black">
              {t('projectsTitle')}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xl">
              {t('projectsDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-100 dark:bg-brand-darker aspect-[4/5] shadow-2xl hover:shadow-brand-cyan/20 transition-all duration-700 animate-in zoom-in-95"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <h3 className="text-white text-3xl font-bold mb-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        className="bg-white/20 backdrop-blur-md text-white border-white/30 px-4 py-1.5 text-sm rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Always visible small technology indicators at the bottom for mobile/default */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                   {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[10px] font-black uppercase tracking-widest text-white/70 bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
