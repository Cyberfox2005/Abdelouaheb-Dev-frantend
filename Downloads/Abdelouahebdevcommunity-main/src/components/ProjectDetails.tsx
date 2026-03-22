import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageProvider";

export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  languages?: { name: string; percent: number; color: string }[];
}

interface ProjectDetailsProps {
  project: ProjectType;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] bg-white dark:bg-brand-dark rounded-2xl shadow-2xl overflow-y-auto animate-in zoom-in-95 duration-300 border border-gray-200 dark:border-brand-cyan/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button 
          variant="outline" 
          size="icon" 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/50 dark:bg-brand-dark/50 backdrop-blur-md hover:bg-white dark:hover:bg-brand-dark border-brand-cyan/20"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Hero Image */}
        <div className="w-full h-64 md:h-96 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-brand-dark to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 -mt-20 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
            {project.title}
          </h2>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, index) => (
              <Badge key={index} className="bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20 px-3 py-1 text-sm">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-brand-cyan to-brand-green hover:opacity-90 text-white border-0 shadow-lg shadow-brand-cyan/20">
              <ExternalLink className="mr-2 h-5 w-5" />
              {t('liveDemo')}
            </Button>
            <Button size="lg" variant="outline" className="border-brand-purple/50 text-brand-purple hover:bg-brand-purple/10">
              <Github className="mr-2 h-5 w-5" />
              {t('viewCode')}
            </Button>
          </div>

          {/* GitHub Style Language Usage Graph */}
          {project.languages && project.languages.length > 0 && (
            <div className="mt-8 border-t border-gray-200 dark:border-brand-cyan/20 pt-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Languages
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex mb-4 bg-gray-100 dark:bg-brand-darker">
                {project.languages.map((lang, index) => (
                  <div 
                    key={index}
                    style={{ 
                      width: `${lang.percent}%`,
                      backgroundColor: lang.color 
                    }}
                    className="h-full transition-all duration-1000 ease-out hover:brightness-110"
                    title={`${lang.name}: ${lang.percent}%`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {project.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full shadow-sm"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      {lang.percent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
