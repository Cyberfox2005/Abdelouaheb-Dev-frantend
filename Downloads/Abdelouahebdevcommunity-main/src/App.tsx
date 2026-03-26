import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Zap } from "lucide-react";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
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


              <Contact />
              <Footer />
            </>
          } />
          

          <Route path="/services" element={
            <div className="bg-[#0B0F19] min-h-screen">
              <div className="pt-24 pb-4">
                <div className="container mx-auto px-4 sm:px-6 relative z-20">
                  <Link to="/" className="inline-flex items-center text-blue-400 hover:text-white transition-colors gap-2 font-black bg-white/5 hover:bg-blue-500/20 px-8 py-3 rounded-full backdrop-blur-md border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.2)] uppercase tracking-widest text-xs">
                    &larr; {t('welcome') ? 'Back to Sanctuary' : 'Back'}
                  </Link>
                </div>
              </div>
              <Services />
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
