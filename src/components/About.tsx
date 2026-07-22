import { Code2, Cpu, Smartphone, Award, CheckCircle2, User, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { label: t("projectsCompleted") || "Projects Completed", count: "15+", icon: Code2, color: "text-cyan-500" },
    { label: t("techStacks") || "Tech Stacks", count: "12+", icon: Cpu, color: "text-purple-500" },
    { label: "Years Experience", count: "3+", icon: Award, color: "text-emerald-500" },
    { label: "Code Commits", count: "500+", icon: Smartphone, color: "text-orange-500" },
  ];

  const highlights = [
    "Full-stack Web & Mobile Development",
    "Clean, Modular & Maintainable Code",
    "UI/UX Architecture & Glassmorphism Aesthetics",
    "Performance Optimization & SEO Standards",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <User className="w-4 h-4" />
            <span>{t("aboutTitle") || "About Me"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t("aboutHeading") || "Crafting Digital Experiences"}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-5">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("aboutParagraph1") ||
                  "I'm a passionate Web and Mobile Developer based in Algiers, Algeria, specializing in building dynamic and responsive applications that deliver exceptional user experiences. With expertise spanning both frontend and backend technologies, I bring ideas to life through clean, efficient code."}
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("aboutParagraph2") ||
                  "My technical arsenal includes modern frameworks like React, React Native, Laravel, and Django, combined with proficiency in multiple programming languages including JavaScript, PHP, Python, Java, C++, and C#. I excel at creating full-stack solutions that are both scalable and maintainable."}
              </p>

              {/* Highlights Bullet List */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-cyan)] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200/80 dark:border-gray-800 shadow-xl hover:border-[var(--brand-cyan)]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 rounded-2xl bg-gray-100 dark:bg-slate-800 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                  {stat.count}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
