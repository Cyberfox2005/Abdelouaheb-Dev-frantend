import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Palette, Check } from "lucide-react";
import { useTheme, ThemePreset } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { preset, mode, setPreset, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const presets: { id: ThemePreset; name: string; primary: string; secondary: string }[] = [
    {
      id: "cyber",
      name: "Cyber Neon",
      primary: "#06B6D4",
      secondary: "#8B5CF6",
    },
    {
      id: "emerald",
      name: "Emerald Minimalist",
      primary: "#10B981",
      secondary: "#34D399",
    },
    {
      id: "sunset",
      name: "Sunset Gradient",
      primary: "#F97316",
      secondary: "#F43F5E",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-2">
        {/* Color Theme Selector Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2.5 rounded-full bg-white/10 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-gray-700 dark:text-gray-200 shadow-md flex items-center justify-center group"
          title="Change Color Theme"
          aria-label="Change Color Theme"
        >
          <Palette className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300 text-[var(--color-primary)]" />
        </button>

        {/* Dark/Light Mode Trigger */}
        <button
          onClick={toggleMode}
          className="p-2.5 rounded-full bg-white/10 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700 hover:border-cyan-400/50 transition-all duration-300 text-gray-700 dark:text-gray-200 shadow-md flex items-center justify-center"
          title={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
          aria-label={`Switch to ${mode === "dark" ? "Light" : "Dark"} Mode`}
        >
          {mode === "dark" ? (
            <Sun className="w-5 h-5 text-amber-400 hover:rotate-90 transition-transform duration-300" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Preset Picker Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-64 p-3 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-2xl z-50"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5 px-2">
              Color Themes
            </div>
            <div className="space-y-1.5">
              {presets.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPreset(p.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 text-sm font-medium ${
                    preset === p.id
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800/50 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center -space-x-1">
                      <span
                        className="w-4 h-4 rounded-full inline-block shadow-sm"
                        style={{ backgroundColor: p.primary }}
                      />
                      <span
                        className="w-4 h-4 rounded-full inline-block shadow-sm"
                        style={{ backgroundColor: p.secondary }}
                      />
                    </div>
                    <span>{p.name}</span>
                  </div>
                  {preset === p.id && (
                    <Check className="w-4 h-4 text-emerald-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
