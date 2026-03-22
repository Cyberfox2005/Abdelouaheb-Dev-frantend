import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageProvider, useLanguage } from "./components/LanguageProvider";
import { LanguageToggle } from "./components/LanguageToggle";

function AppContent() {
  const { t } = useLanguage();

  return (
    <Router>
      <div className="min-h-screen">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes portal-swirl {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes magic-spark {
            0% { transform: scale(0) translate(0, 0); opacity: 1; }
            100% { transform: scale(1) translate(var(--tw-translate-x), var(--tw-translate-y)); opacity: 0; }
          }
        `}} />
        <div className="fixed top-4 right-4 z-50 flex gap-3">
          <LanguageToggle />
          <ThemeToggle />
        </div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              
              <section className="py-24 bg-[#0B0F19] relative flex flex-col items-center justify-center overflow-hidden border-t border-amber-500/20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
                
                <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-20 tracking-tighter relative z-10 text-center uppercase italic drop-shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                  {t('teamTitle')}
                </h2>
                
                <div className="relative z-10 pb-12 flex justify-center w-full">
                  {/* Cyber Magic Portal Wrapper */}
                  <Link to="/team" className="relative group w-72 h-96 flex items-center justify-center cursor-pointer block">
                    
                    {/* Portal Swirl Background (behind door) */}
                    <div className="absolute inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0">
                      <div className="absolute inset-0 bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 rounded-full blur-3xl animate-portal-swirl opacity-40"></div>
                      <div className="absolute inset-10 bg-gradient-to-bl from-amber-400 via-white to-amber-500 rounded-full blur-2xl animate-portal-swirl opacity-30" style={{ animationDirection: 'reverse', animationDuration: '4s' }}></div>
                    </div>

                    {/* Door Frame Glowing */}
                    <div className="absolute inset-0 border-[6px] border-amber-500/30 rounded-t-[3rem] shadow-[0_0_40px_rgba(245,158,11,0.3),inset_0_0_40px_rgba(245,158,11,0.3)] group-hover:border-amber-400 group-hover:shadow-[0_0_70px_rgba(245,158,11,0.8),inset_0_0_50px_rgba(245,158,11,0.6)] transition-all duration-1000 z-30"></div>
                    
                    {/* Door Inner Split Left */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-[#0B0F19] via-[#151a29] to-[#0B0F19] border-r-[3px] border-amber-500/60 rounded-tl-[3rem] group-hover:-translate-x-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) z-20 shadow-[10px_0_30px_rgba(0,0,0,0.8)]">
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-amber-500"></div>
                    </div>
                    
                    {/* Door Inner Split Right */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#0B0F19] via-[#151a29] to-[#0B0F19] border-l-[3px] border-amber-500/60 rounded-tr-[3rem] group-hover:translate-x-full transition-transform duration-1000 cubic-bezier(0.4, 0, 0.2, 1) z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.8)]">
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-30 transition-opacity bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-amber-500"></div>
                    </div>
                    
                    {/* Magic Core inside the portal */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200 z-10 bg-[#0B0F19]/40 rounded-t-[3rem] backdrop-blur-sm">
                      <div className="relative">
                        <div className="absolute inset-[-20px] bg-amber-500/30 rounded-full blur-2xl animate-pulse"></div>
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 via-white to-yellow-400 flex items-center justify-center shadow-[0_0_60px_rgba(245,158,11,1)] transition-transform duration-700 group-hover:scale-110 border-4 border-amber-200">
                          <span className="text-amber-900 font-extrabold text-4xl">&rarr;</span>
                        </div>
                      </div>
                      <span className="mt-8 text-white font-black tracking-[0.5em] uppercase text-sm drop-shadow-[0_0_15px_rgba(245,158,11,1)] animate-bounce">
                        Explore
                      </span>
                    </div>

                    {/* Central Magical Seal (Visible when closed) */}
                    <div className="absolute inset-0 flex items-center justify-center z-40 group-hover:opacity-0 group-hover:scale-150 transition-all duration-700 ease-in">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-amber-500/50 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                        <div className="absolute inset-2 border-2 border-amber-400/40 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
                        <div className="w-16 h-16 rounded-full border-4 border-amber-500 bg-[#0B0F19] shadow-[0_0_50px_rgba(245,158,11,1)] flex items-center justify-center z-50 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent"></div>
                          <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,1)] animate-ping relative z-10"></div>
                        </div>
                        {/* Golden Sparks from seal */}
                        {[...Array(6)].map((_, i) => (
                          <div 
                            key={i}
                            className="absolute w-1 h-1 bg-amber-300 rounded-full animate-magic-spark opacity-0 group-hover:opacity-100"
                            style={{ 
                              '--tw-translate-x': `${(i % 2 === 0 ? 1 : -1) * (Math.random() * 100 + 50)}px`,
                              '--tw-translate-y': `${(i < 3 ? 1 : -1) * (Math.random() * 100 + 50)}px`,
                              animation: `magic-spark 1.5s ease-out infinite`,
                              animationDelay: `${i * 0.2}s`
                            } as any}
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </section>

              <Contact />
              <Footer />
            </>
          } />
          
          <Route path="/team" element={
            <div className="bg-[#0B0F19] min-h-screen">
              <div className="pt-24 pb-4">
                <div className="container mx-auto px-4 sm:px-6 relative z-20">
                  <Link to="/" className="inline-flex items-center text-amber-400 hover:text-white transition-colors gap-2 font-black bg-white/5 hover:bg-amber-500/20 px-8 py-3 rounded-full backdrop-blur-md border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.2)] uppercase tracking-widest text-xs">
                    &larr; {t('welcome') ? 'Back to Sanctuary' : 'Back'}
                  </Link>
                </div>
              </div>
              <Team />
              <Footer />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark">
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
