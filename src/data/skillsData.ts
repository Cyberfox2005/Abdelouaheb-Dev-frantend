export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: "frontend" | "tools" | "backend";
  icon: string;
  highlight?: boolean;
}

export const skillsData: SkillItem[] = [
  // Frontend
  { name: "React / React 18", level: 95, category: "frontend", icon: "Code2", highlight: true },
  { name: "JavaScript (ES6+)", level: 92, category: "frontend", icon: "FileCode", highlight: true },
  { name: "TypeScript", level: 88, category: "frontend", icon: "FileJson", highlight: true },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "Palette", highlight: true },
  { name: "HTML5 / CSS3", level: 98, category: "frontend", icon: "Layout", highlight: true },
  { name: "Framer Motion", level: 85, category: "frontend", icon: "Sparkles" },
  { name: "Vue.js", level: 80, category: "frontend", icon: "Boxes" },
  { name: "React Native", level: 85, category: "frontend", icon: "Smartphone", highlight: true },

  // Tools & Workflow
  { name: "Git & GitHub", level: 92, category: "tools", icon: "GitBranch", highlight: true },
  { name: "Vite / npm", level: 90, category: "tools", icon: "Zap", highlight: true },
  { name: "VS Code", level: 96, category: "tools", icon: "Terminal" },
  { name: "Figma", level: 82, category: "tools", icon: "Figma" },
  { name: "Postman", level: 88, category: "tools", icon: "Send" },
  { name: "Docker Basic", level: 75, category: "tools", icon: "Container" },

  // Backend & Databases
  { name: "Node.js / Express", level: 88, category: "backend", icon: "Server", highlight: true },
  { name: "Laravel (PHP)", level: 86, category: "backend", icon: "Database", highlight: true },
  { name: "Python / Django", level: 82, category: "backend", icon: "Cpu" },
  { name: "MySQL / PostgreSQL", level: 88, category: "backend", icon: "Database" },
  { name: "Firebase", level: 85, category: "backend", icon: "Flame" },
  { name: "C++ / C#", level: 80, category: "backend", icon: "Terminal" },
];
