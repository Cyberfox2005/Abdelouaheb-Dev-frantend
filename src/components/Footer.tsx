import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-[#0A0F1E] via-[#050812] to-[#0A0F1E] dark:from-[#0A0F1E] dark:via-[#050812] dark:to-[#0A0F1E] light:from-gray-100 light:via-gray-50 light:to-gray-100 text-foreground py-12 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-brand-green/5 to-brand-purple/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="mb-4 bg-gradient-to-r from-brand-cyan to-brand-green bg-clip-text text-transparent">{t('name')}</h4>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
                {t('title')}
              </p>
            </div>
            
            <div>
              <h4 className="mb-4 text-brand-cyan">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400 dark:text-gray-400 light:text-gray-600">
                <li>
                  <a href="#about" className="hover:text-brand-cyan transition-colors">{t('about')}</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-brand-green transition-colors">{t('skills')}</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-brand-purple transition-colors">{t('projects')}</a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-brand-cyan transition-colors">{t('experience')}</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-cyan transition-colors">{t('contact')}</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 text-brand-purple">{t('followMe')}</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Cyberfox2005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-all hover:scale-110 p-2 hover:bg-brand-cyan/10 rounded-lg">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition-all hover:scale-110 p-2 hover:bg-brand-green/10 rounded-lg">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:ben689533@gmail.com" className="text-gray-400 hover:text-brand-purple transition-all hover:scale-110 p-2 hover:bg-brand-purple/10 rounded-lg">
                  <Mail className="h-6 w-6" />
                </a>
                
              </div>
            </div>
          </div>
          
          <div className="border-t border-brand-cyan/20 pt-8 text-center text-gray-400 dark:text-gray-400 light:text-gray-600">
            <p>© {new Date().getFullYear()} <span className="text-brand-cyan">{t('name')}</span>. {t('rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}