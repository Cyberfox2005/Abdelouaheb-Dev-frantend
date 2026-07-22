import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemePreset = "cyber" | "emerald" | "sunset";
export type ThemeMode = "dark" | "light";

interface ThemeContextType {
  preset: ThemePreset;
  mode: ThemeMode;
  setPreset: (preset: ThemePreset) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPreset] = useState<ThemePreset>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme-preset") as ThemePreset;
      if (saved && ["cyber", "emerald", "sunset"].includes(saved)) {
        return saved;
      }
    }
    return "cyber";
  });

  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-theme-mode") as ThemeMode;
      if (saved && ["dark", "light"].includes(saved)) {
        return saved;
      }
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      
      // Remove previous theme classes
      root.classList.remove("theme-cyber", "theme-emerald", "theme-sunset", "dark", "light");
      
      // Add current preset and mode classes
      root.classList.add(`theme-${preset}`);
      root.classList.add(mode);
      
      localStorage.setItem("portfolio-theme-preset", preset);
      localStorage.setItem("portfolio-theme-mode", mode);
    }
  }, [preset, mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ preset, mode, setPreset, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
