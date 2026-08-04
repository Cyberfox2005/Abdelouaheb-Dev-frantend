import { useLanguage } from "../components/LanguageProvider";
import { Badge } from "../components/ui/badge";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { ArrowLeft, Star, GitFork, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
}

export function ProjectsPage() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("https://api.github.com/users/Cyberfox2005/repos?sort=updated&per_page=100")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Sort by stars and exclude forks if desired, or just show all
          const sorted = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
          setRepos(sorted);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#05070B] transition-colors duration-500">
      <TopNav />
      
      <main className="pt-32 pb-24 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center text-brand-cyan hover:text-brand-purple transition-colors mb-12 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to HQ
          </Link>

          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent text-5xl md:text-7xl font-black uppercase tracking-tighter"
            >
              Full Repository <span className="text-white">Index</span>
            </motion.h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Explore the complete technical manifest of my digital engineering missions, synchronized directly from GitHub.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-2 border-brand-cyan/20 border-t-brand-cyan rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {repos.map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative rounded-3xl bg-[#0A0F1E] border border-white/5 p-8 hover:border-brand-cyan/30 transition-all flex flex-col h-[300px]"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan">
                        <Github className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-4 text-gray-500 text-xs font-mono">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-brand-gold" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors line-clamp-1">
                      {repo.name.replace(/-/g, ' ')}
                    </h3>

                    <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-1">
                      {repo.description || "System architecture for advanced digital ecosystem. High-performance engineering mission."}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <Badge className="bg-white/5 text-gray-400 border-none text-[10px] uppercase tracking-widest px-3 py-1">
                        {repo.language || "TypeScript"}
                      </Badge>

                      <div className="flex gap-2">
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan hover:text-black transition-all"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-all"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-brand-cyan/20 pointer-events-none transition-all" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
