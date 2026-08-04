import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { TerminalSection } from "./components/TerminalSection";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { GitHubStats } from "./components/GitHubStats";
import { CodeSnippet } from "./components/CodeSnippet";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import { TopNav } from "./components/TopNav";
import { ProjectPage } from "./pages/ProjectPage";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { IntroLoader } from "./components/IntroLoader";
import { CustomCursor } from "./components/CustomCursor";
import { Toaster } from "./components/ui/sonner";

function AppContent() {
  return (
    <Router basename="/Abdelouaheb-Dev-frantend">
      <div className="min-h-screen bg-background text-foreground selection:bg-brand-cyan/30 selection:text-white">
        <IntroLoader />
        <CustomCursor />
        <AnimatedBackground />
        <TopNav />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <TerminalSection />
                <About />
                <Skills />
                <Experience />
                <Services />
                <Projects />
                <GitHubStats />
                <CodeSnippet />
                <Contact />
                <Footer />
              </main>
            }
          />
          <Route path="/project/:title" element={<ProjectPage />} />
        </Routes>
        <Toaster position="top-center" expand={true} richColors />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </LanguageProvider>
  );
}
