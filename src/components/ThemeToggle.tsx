import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 rounded-full border-brand-cyan/30 bg-background/80 backdrop-blur-sm hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-brand-cyan" />
      ) : (
        <Sun className="h-5 w-5 text-brand-cyan" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
