import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";
import { ProjectDetails, ProjectType } from "./ProjectDetails";

const projects: ProjectType[] = [
  {
    title: "Supermarket Management System",
    description: "Comprehensive POS and inventory management system for supermarkets with sales tracking, stock management, and customer analytics.",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMHNob3BwaW5nfGVufDF8fHx8MTc2MTMzNzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    languages: [
      { name: "PHP", percent: 55, color: "#4F5D95" },
      { name: "HTML/CSS", percent: 25, color: "#e34c26" },
      { name: "JavaScript", percent: 20, color: "#f1e05a" }
    ]
  },
  {
    title: "Hospital Management System",
    description: "Complete hospital management solution with patient records, appointment scheduling, billing, and staff management.",
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYxMzE5MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Django", "Python", "PostgreSQL", "React"],
    liveUrl: "#",
    githubUrl: "#",
    languages: [
      { name: "Python", percent: 60, color: "#3572A5" },
      { name: "TypeScript", percent: 30, color: "#3178c6" },
      { name: "CSS", percent: 10, color: "#563d7c" }
      
    ]
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTM5MjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "SQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    languages: [
      { name: "JavaScript", percent: 45, color: "#f1e05a" },
      { name: "TypeScript", percent: 40, color: "#3178c6" },
      { name: "CSS", percent: 15, color: "#563d7c" }
    ]
  },
  {
    title: "Food Mobile App",
    description: "Cross-platform food  application with real-time order tracking, payment gateway, and restaurant management.",
    image: "https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2MTM4NTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Kotlin", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    languages: [
      { name: "kotlin", percent: 15.0, color: "#9300B4" },
      { name: "JavaScript", percent: 78.5, color: "#f1e05a" },
      { name: "HTML", percent: 2.7, color: "#F05138" },
      { name: "CSS", percent: 3.8, color: "#563d7c" }
    ]
  },
  
  {
    title: "Real Estate Listing App",
    description: "Property listing and management platform with advanced search, virtual tours, and agent dashboard.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYxMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
    liveUrl: "#",
    githubUrl: "#",
    languages: [
      { name: "JavaScript", percent: 55, color: "#f1e05a" },
      { name: "PHP", percent: 30, color: "#4F5D95" },
      { name: "HTML", percent: 15, color: "#e34c26" }
    ]
  },
  {
    title: "Online Learning Platform",
    description: "A comprehensive full-stack e-learning platform built with React and Vite for the frontend and Node.js/Express for the backend. Features user authentication, course management, assignments, exams, community posts, and real-time activity tracking. Includes interactive dashboards with Recharts, Framer Motion animations, and Radix UI components for a modern learning experience.",
    image: "https://images.unsplash.com/photo-1669607960578-f7d7fd363e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEzMzMxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Vite", "Node.js", "Express", "JavaScript", "Tailwind CSS", "Recharts", "Radix UI"],
    liveUrl: "#",
    githubUrl: "https://github.com/Cyberfox2005/Oniline-learning-platform-.git",
    languages: [
      { name: "JavaScript", percent: 94.5, color: "#f1e05a" },
      { name: "CSS", percent: 5.1, color: "#563d7c" },
      { name: "HTML", percent: 0.4, color: "#e34c26" }
    ]
  },
  {
    title: "Fitness Tracking Mobile App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and personal fitness goals.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzE4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Flutter", "Dart", "Swift", "SQL"],
    liveUrl: "#",
    githubUrl: "#",
    languages: [
      { name: "Dart", percent: 70, color: "#00B4AB" },
      { name: "Swift", percent: 20, color: "#F05138" },
      { name: "C++", percent: 10, color: "#f34b7d" }
    ]
  }
];

export function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-brand-dark dark:to-brand-darker relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">{t('projectsTitle')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan via-brand-green to-brand-purple mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('projectsDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border border-brand-cyan/10 dark:border-brand-cyan/20 flex flex-col h-full group">
                <div 
                  className="relative h-48 overflow-hidden cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" className="scale-0 group-hover:scale-100 transition-transform duration-300 pointer-events-none rounded-full">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer" onClick={() => setActiveProject(project)}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-1">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} className="bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 hover:bg-brand-cyan/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Miniature language bar preview */}
                  <div className="w-full h-1.5 rounded-full overflow-hidden flex mb-6 bg-gray-100 dark:bg-brand-darker">
                    {project.languages?.map((lang, lIndex) => (
                       <div key={lIndex} style={{ width: `${lang.percent}%`, backgroundColor: lang.color }} className="h-full" />
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-brand-cyan to-brand-green hover:opacity-90 text-white border-0"
                      onClick={() => setActiveProject(project)}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      Details
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 border-brand-purple/50 text-brand-purple hover:bg-brand-purple/10">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeProject && (
        <ProjectDetails 
          project={activeProject} 
          onClose={() => setActiveProject(null)} 
        />
      )}
    </section>
  );
}