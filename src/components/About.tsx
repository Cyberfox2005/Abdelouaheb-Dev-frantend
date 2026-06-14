import profileImageDark from "../assets/9924fd72bc599674567ae61e63466315b12bb425.png";
import profileImageLight from "../assets/db191a8f1dc496e096a90c96c3790591f1a9bf77.png";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { Mail, MapPin, Phone, Github, Linkedin, Code2, Award, Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "./ui/badge";

export function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              
              <div className="bg-gray-50 dark:bg-gray-900 p-8 sm:p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-gray-700">
                <img
                  src={theme === 'light' ? profileImageLight : profileImageDark}
                  alt={t('name')}
                  className="rounded-3xl w-4/5 sm:w-full max-w-sm md:max-w-md object-cover shadow-sm"
                />
                
                <div className="mt-8 flex gap-4">
                  <a href="https://github.com/Cyberfox2005" target="_blank" rel="noopener noreferrer" 
                     className="p-3 rounded-xl bg-white dark:bg-gray-800 hover:text-brand-cyan transition-colors shadow-sm">
                    <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/" target="_blank" rel="noopener noreferrer"
                     className="p-3 rounded-xl bg-white dark:bg-gray-800 hover:text-brand-green transition-colors shadow-sm">
                    <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="mailto:ben689533@gmail.com"
                     className="p-3 rounded-xl bg-white dark:bg-gray-800 hover:text-brand-purple transition-colors shadow-sm">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <Badge className="mb-4 sm:mb-6 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm uppercase tracking-wider bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20">
                  {t('aboutTitle')}
                </Badge>
                
                <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {t('name')}
                </h2>
                
                <h3 className="text-lg sm:text-xl text-brand-cyan mb-6 sm:mb-8">
                  {t('title')}
                </h3>

                <div className="space-y-4 mb-8 sm:mb-10 text-base sm:text-lg text-gray-600 dark:text-gray-400">
                  <p>{t('aboutParagraph1')}</p>
                  <p>{t('aboutParagraph2')}</p>
                  <p>{t('aboutParagraph3')}</p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 sm:gap-4 break-all">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">ben689533@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">+213 553 120 173</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Constantine, Algeria</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                    <div className="text-2xl font-bold text-brand-cyan mb-1">8+</div>
                    <div className="text-sm text-gray-500">{t('projectsCompleted')}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                    <div className="text-2xl font-bold text-brand-green mb-1">20+</div>
                    <div className="text-sm text-gray-500">{t('techStacks')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
