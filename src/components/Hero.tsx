import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";
import { useLanguage } from "./LanguageProvider";
import { AnimatedBackground } from "./AnimatedBackground";

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-brand-dark text-foreground relative py-16 sm:py-20 overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8 sm:mb-10 flex justify-center">
            <img 
              src={logoImage} 
              alt="ABD EL OUAHEB DEV Logo" 
              className="w-32 sm:w-48 md:w-56 h-auto"
            />
          </div>
          
          <div className="mb-6 sm:mb-8">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-brand-cyan/10 text-brand-cyan rounded-full font-medium">
              {t('welcome')} 👋
            </span>
          </div>
          
          <h1 className="mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight px-2">
            {t('name')}
          </h1>
          
          <h2 className="mb-6 sm:mb-8 text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
            {t('title')}
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button 
              size="lg" 
              className="bg-brand-cyan hover:bg-brand-cyan/90 text-white h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
              {t('getInTouch')}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 dark:border-gray-700 h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg rounded-full w-full sm:w-auto"
              onClick={() => scrollToSection('projects')}
            >
              {t('viewProjects')}
            </Button>
          </div>
          
          <div className="flex gap-4 sm:gap-6 justify-center">
            {[
              { icon: Github, href: "https://github.com/Cyberfox2005" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/" },
              { icon: Mail, href: "mailto:ben689533@gmail.com" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}