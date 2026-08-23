export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  category: "Frontend" | "Backend" | "CrossPlatform" | "Systems" | "DevOps";
  logoId: string;
}

export const skillsData: SkillItem[] = [
  // Cross-Platform & Mobile
  { name: "Flutter", level: 100, category: "CrossPlatform", logoId: "Flutter" },
  { name: "Android", level: 100, category: "CrossPlatform", logoId: "Android" },
  { name: "React Native", level: 100, category: "CrossPlatform", logoId: "ReactNative" },

  // Frontend Engineering
  { name: "React", level: 100, category: "Frontend", logoId: "React" },
  { name: "TypeScript", level: 100, category: "Frontend", logoId: "TypeScript" },
  { name: "JavaScript", level: 100, category: "Frontend", logoId: "JavaScript" },
  { name: "Tailwind CSS", level: 100, category: "Frontend", logoId: "TailwindCSS" },

  // Backend & Cloud
  { name: "Kotlin", level: 100, category: "Backend", logoId: "Kotlin" },
  { name: "Java", level: 100, category: "Backend", logoId: "Java" },
  { name: "Spring Boot", level: 100, category: "Backend", logoId: "SpringBoot" },
  { name: "Laravel", level: 100, category: "Backend", logoId: "Laravel" },
  { name: "Django", level: 100, category: "Backend", logoId: "Django" },
  { name: "Python", level: 100, category: "Backend", logoId: "Python" },
  { name: "Node.js", level: 100, category: "Backend", logoId: "NodeJS" },
  { name: "PostgreSQL", level: 100, category: "Backend", logoId: "PostgreSQL" },
  { name: "Firebase", level: 100, category: "Backend", logoId: "Firebase" },

  // Systems & Architecture
  { name: "C++", level: 100, category: "Systems", logoId: "Cpp" },
  { name: "Linux", level: 100, category: "Systems", logoId: "Linux" },

  // DevOps & Tooling
  { name: "Docker", level: 100, category: "DevOps", logoId: "Docker" },
  { name: "Git & GitHub", level: 100, category: "DevOps", logoId: "Git" },
];

