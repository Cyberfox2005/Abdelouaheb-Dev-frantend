import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageProvider } from "./components/LanguageProvider";
import { LanguageToggle } from "./components/LanguageToggle";
import { TopNav } from "./components/TopNav";
import { LoginPage } from "./pages/Login";
import { NotificationsPage } from "./pages/Notifications";
import { ProfilePage } from "./pages/Profile";
import { SettingsPage } from "./pages/Settings";
import { HelpPage } from "./pages/Help";

function AppContent() {
  return (
    <Router basename="/Abdelouaheb-Dev-frantend">
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
        <TopNav />
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
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help" element={<HelpPage />} />

          <Route path="/services" element={
            <div className="bg-[#0B0F19] min-h-screen pt-20">
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
