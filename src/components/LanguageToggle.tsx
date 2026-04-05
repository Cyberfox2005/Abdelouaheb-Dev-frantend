import { Languages } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { Language } from '../translations';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' }
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-brand-cyan dark:hover:border-brand-cyan transition-all shadow-sm"
        aria-label="Change language"
      >
        <Languages className="h-5 w-5 text-brand-cyan" />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {languages.find(l => l.code === language)?.flag}
        </span>
      </button>
      
      <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[160px]">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              language === lang.code
                ? 'bg-brand-cyan/10 dark:bg-brand-cyan/20 text-brand-cyan'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.label}</span>
            {language === lang.code && (
              <span className="ml-auto text-brand-cyan">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
