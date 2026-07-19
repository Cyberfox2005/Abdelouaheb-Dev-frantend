import { 
  Code2, 
  Smartphone, 
  Palette, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Zap, 
  Sparkles, 
  Wand2, 
  Layers, 
  Cloud,
  Gamepad2,
  Monitor,
  Settings
} from "lucide-react";

export type ServiceSpec = {
  name: string;
  level: number;
};

export type MagicFact = {
  icon: any;
  label: string;
  value: string;
};

export type ServiceSkill = {
  id: string;
  name: string;
};

export type Service = {
  id: string;
  name: string;
  category: string;
  icon: any;
  description: string;
  specs: ServiceSpec[];
  facts: MagicFact[];
  accentColor: string;
  availableSkills: ServiceSkill[];
  isCustom?: boolean;
};

export const clientServices: Service[] = [
  {
    id: "web-sites",
    name: "Web Sites",
    category: "For Clients",
    icon: Globe,
    description: "Custom-built, highly responsive web sites tailored to your brand. From landing pages to full e-commerce platforms.",
    specs: [
      { name: "UI/UX Design", level: 95 },
      { name: "Performance", level: 98 },
      { name: "SEO", level: 90 },
      { name: "Responsiveness", level: 100 }
    ],
    facts: [
      { icon: Zap, label: "Core Element", value: "Modern Web" },
      { icon: Layers, label: "Specialty", value: "Conversion" },
      { icon: Sparkles, label: "Experience", value: "Dynamic UI" }
    ],
    accentColor: "blue-400",
    availableSkills: [
      { id: "react", name: "React" },
      { id: "vue", name: "Vue.js" },
      { id: "nextjs", name: "Next.js" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "wordpress", name: "WordPress" },
      { id: "shopify", name: "Shopify" }
    ]
  },
  {
    id: "mobile-apps",
    name: "Mobile Applications",
    category: "For Clients",
    icon: Smartphone,
    description: "Native and cross-platform mobile applications for iOS and Android, offering fluid experiences and great performance.",
    specs: [
      { name: "Cross Platform", level: 98 },
      { name: "Native Feel", level: 95 },
      { name: "UI Animations", level: 92 },
      { name: "Performance", level: 90 }
    ],
    facts: [
      { icon: Sparkles, label: "Core Element", value: "Mobile UX" },
      { icon: Smartphone, label: "Specialty", value: "iOS & Android" },
      { icon: Palette, label: "Focus", value: "Fluidity" }
    ],
    accentColor: "purple-400",
    availableSkills: [
      { id: "react-native", name: "React Native" },
      { id: "flutter", name: "Flutter" },
      { id: "swift", name: "Swift (iOS)" },
      { id: "kotlin", name: "Kotlin (Android)" },
      { id: "firebase", name: "Firebase" }
    ]
  },
  {
    id: "desktop-apps",
    name: "Desktop Apps",
    category: "For Clients",
    icon: Monitor,
    description: "Powerful and robust desktop software for Windows, macOS, and Linux to streamline your business operations.",
    specs: [
      { name: "System Integration", level: 95 },
      { name: "Offline Support", level: 100 },
      { name: "Performance", level: 98 },
      { name: "Security", level: 95 }
    ],
    facts: [
      { icon: Cpu, label: "Core Element", value: "OS Native" },
      { icon: ShieldCheck, label: "Specialty", value: "Reliability" },
      { icon: Zap, label: "Focus", value: "Speed" }
    ],
    accentColor: "emerald-400",
    availableSkills: [
      { id: "electron", name: "Electron" },
      { id: "tauri", name: "Tauri" },
      { id: "csharp", name: "C# / .NET" },
      { id: "cpp", name: "C++" },
      { id: "python", name: "Python" }
    ]
  },
  {
    id: "games",
    name: "Games",
    category: "For Clients",
    icon: Gamepad2,
    description: "Engaging, high-performance 2D and 3D games tailored for mobile, PC, or web platforms.",
    specs: [
      { name: "Graphics", level: 95 },
      { name: "Physics", level: 90 },
      { name: "Performance", level: 98 },
      { name: "Engagement", level: 95 }
    ],
    facts: [
      { icon: Sparkles, label: "Core Element", value: "Gameplay" },
      { icon: Cpu, label: "Specialty", value: "Optimization" },
      { icon: Palette, label: "Focus", value: "Immersion" }
    ],
    accentColor: "pink-500",
    availableSkills: [
      { id: "unity", name: "Unity" },
      { id: "unreal", name: "Unreal Engine" },
      { id: "godot", name: "Godot" },
      { id: "threejs", name: "Three.js" },
      { id: "csharp-game", name: "C#" },
      { id: "cpp-game", name: "C++" }
    ]
  },
  {
    id: "custom-platform",
    name: "Custom Service / Full Platform",
    category: "For Clients",
    icon: Settings,
    description: "Build a complete ecosystem. Select any combination of web, mobile, desktop, backend, and API technologies for your ultimate vision.",
    specs: [
      { name: "Flexibility", level: 100 },
      { name: "Scalability", level: 100 },
      { name: "Integration", level: 98 },
      { name: "Architecture", level: 95 }
    ],
    facts: [
      { icon: Layers, label: "Core Element", value: "Everything" },
      { icon: Globe, label: "Specialty", value: "Ecosystem" },
      { icon: Wand2, label: "Focus", value: "Limitless" }
    ],
    accentColor: "amber-500",
    isCustom: true,
    availableSkills: [
      { id: "frontend", name: "Frontend (React, Vue, etc.)" },
      { id: "backend", name: "Backend (Node.js, Laravel, etc.)" },
      { id: "mobile", name: "Mobile App (iOS/Android)" },
      { id: "desktop", name: "Desktop App" },
      { id: "database", name: "Database Design" },
      { id: "cloud", name: "Cloud & DevOps (AWS, Docker)" },
      { id: "api", name: "API Development" },
      { id: "uiux", name: "UI/UX Design" }
    ]
  }
];

export const developerServices: Service[] = [
  {
    id: "dev-frontend",
    name: "Frontend Collaboration",
    category: "For Developers",
    icon: Code2,
    description: "Need help pushing your UI to the next level? I can jump into your frontend project to build complex components, animations, or refactor legacy code.",
    specs: [
      { name: "Code Quality", level: 98 },
      { name: "Component Design", level: 95 },
      { name: "State Management", level: 95 },
      { name: "Testing", level: 90 }
    ],
    facts: [
      { icon: Zap, label: "Core Element", value: "Components" },
      { icon: Layers, label: "Specialty", value: "Architecture" },
      { icon: Sparkles, label: "Focus", value: "DX (Dev Exp)" }
    ],
    accentColor: "blue-400",
    availableSkills: [
      { id: "react", name: "React / Next.js" },
      { id: "vue", name: "Vue.js" },
      { id: "ts", name: "TypeScript" },
      { id: "state", name: "Redux / Zustand" },
      { id: "styling", name: "Tailwind / SCSS" }
    ]
  },
  {
    id: "dev-backend",
    name: "Backend Engineering",
    category: "For Developers",
    icon: Cloud,
    description: "Robust backend support to help you scale. Whether it's setting up microservices, optimizing database queries, or writing core logic.",
    specs: [
      { name: "Scalability", level: 95 },
      { name: "Database Optimization", level: 98 },
      { name: "Security", level: 95 },
      { name: "Architecture", level: 94 }
    ],
    facts: [
      { icon: ShieldCheck, label: "Core Element", value: "Data Flow" },
      { icon: Cpu, label: "Specialty", value: "Optimization" },
      { icon: Cloud, label: "Focus", value: "Reliability" }
    ],
    accentColor: "red-500",
    availableSkills: [
      { id: "nodejs", name: "Node.js / Express / Nest" },
      { id: "php", name: "PHP / Laravel" },
      { id: "python", name: "Python / Django / FastAPI" },
      { id: "sql", name: "SQL (PostgreSQL / MySQL)" },
      { id: "nosql", name: "NoSQL (MongoDB / Redis)" }
    ]
  },
  {
    id: "dev-api",
    name: "API Development & Integration",
    category: "For Developers",
    icon: Zap,
    description: "Designing, building, and securing RESTful or GraphQL APIs. Connecting third-party services like Stripe, Twilio, or AWS.",
    specs: [
      { name: "REST/GraphQL", level: 98 },
      { name: "Security", level: 95 },
      { name: "Documentation", level: 90 },
      { name: "Performance", level: 95 }
    ],
    facts: [
      { icon: Globe, label: "Core Element", value: "Endpoints" },
      { icon: ShieldCheck, label: "Specialty", value: "OAuth & JWT" },
      { icon: Layers, label: "Focus", value: "Integration" }
    ],
    accentColor: "yellow-500",
    availableSkills: [
      { id: "rest", name: "RESTful APIs" },
      { id: "graphql", name: "GraphQL" },
      { id: "websockets", name: "WebSockets" },
      { id: "auth", name: "Authentication (OAuth/JWT)" },
      { id: "third-party", name: "Third-party APIs (Stripe, etc.)" }
    ]
  },
  {
    id: "dev-apps",
    name: "Mobile App Assistance",
    category: "For Developers",
    icon: Smartphone,
    description: "Pair programming or handing off modules for your React Native or Flutter app. Helping you deal with native modules or complex UI states.",
    specs: [
      { name: "Native Bridges", level: 90 },
      { name: "UI Polish", level: 95 },
      { name: "Performance", level: 92 },
      { name: "Store Deployment", level: 85 }
    ],
    facts: [
      { icon: Cpu, label: "Core Element", value: "App State" },
      { icon: Smartphone, label: "Specialty", value: "React Native" },
      { icon: Palette, label: "Focus", value: "60fps UI" }
    ],
    accentColor: "purple-400",
    availableSkills: [
      { id: "react-native", name: "React Native" },
      { id: "flutter", name: "Flutter" },
      { id: "animations", name: "Complex Animations" },
      { id: "native-modules", name: "Native Modules" }
    ]
  },
  {
    id: "dev-desktop",
    name: "Desktop App Assistance",
    category: "For Developers",
    icon: Monitor,
    description: "Assisting with Electron or Tauri apps. Tackling IPC communication, native OS features, and performance bottlenecks.",
    specs: [
      { name: "IPC Communication", level: 95 },
      { name: "File System Access", level: 98 },
      { name: "App Size Optimization", level: 90 },
      { name: "Auto Updates", level: 85 }
    ],
    facts: [
      { icon: Zap, label: "Core Element", value: "IPC" },
      { icon: ShieldCheck, label: "Specialty", value: "Electron" },
      { icon: Cpu, label: "Focus", value: "OS Native" }
    ],
    accentColor: "emerald-500",
    availableSkills: [
      { id: "electron", name: "Electron" },
      { id: "tauri", name: "Tauri" },
      { id: "ipc", name: "IPC & Main Process" },
      { id: "packaging", name: "App Packaging & Updates" }
    ]
  },
  {
    id: "dev-games",
    name: "Game Development Help",
    category: "For Developers",
    icon: Gamepad2,
    description: "Stuck on a tricky game mechanic? Need help optimizing rendering or physics? I can assist in your Unity or Godot projects.",
    specs: [
      { name: "Game Logic", level: 95 },
      { name: "Physics Tuning", level: 90 },
      { name: "Memory Profiling", level: 85 },
      { name: "Shaders", level: 80 }
    ],
    facts: [
      { icon: Sparkles, label: "Core Element", value: "Scripts" },
      { icon: Cpu, label: "Specialty", value: "Optimization" },
      { icon: Gamepad2, label: "Focus", value: "Mechanics" }
    ],
    accentColor: "pink-500",
    availableSkills: [
      { id: "unity-csharp", name: "Unity / C#" },
      { id: "godot", name: "Godot / GDScript" },
      { id: "multiplayer", name: "Multiplayer / Netcode" },
      { id: "optimization", name: "Profiling & Optimization" }
    ]
  }
];

export const allServices = [...clientServices, ...developerServices];
