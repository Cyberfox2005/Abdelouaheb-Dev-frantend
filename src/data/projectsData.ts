export interface Project {
  id: string;
  title: string;
  category: "frontend" | "fullstack" | "mobile" | "system";
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stars?: number;
  forks?: number;
}

export const projectsData: Project[] = [
  {
    id: "medical-hospital-system",
    title: "Chifa Medical & Hospital Platform",
    category: "fullstack",
    description: "Comprehensive hospital management suite featuring patient records, appointment scheduling, and real-time medical analytics.",
    longDescription: "A full-featured healthcare management application designed to streamline hospital operations, doctor scheduling, electronic health records (EHR), and prescription management with role-based access control.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL", "Express"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: true,
    stars: 24,
    forks: 7,
  },
  {
    id: "magical-ecommerce-store",
    title: "NextGen E-Commerce & Service Hub",
    category: "frontend",
    description: "Ultra-fast modern shopping experience featuring dynamic cart management, multi-currency support, and dark/light themes.",
    longDescription: "A high-performance online marketplace featuring smooth micro-interactions, responsive search filtering, instant checkout simulation, and state persistence with custom hooks.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
    tags: ["React 18", "Tailwind CSS", "Framer Motion", "Sonner", "Vite"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: true,
    stars: 18,
    forks: 4,
  },
  {
    id: "smart-task-manager",
    title: "CyberTask Productivity Portal",
    category: "fullstack",
    description: "Kanban and timeline task management workspace with drag-and-drop support and real-time team collaboration.",
    longDescription: "Interactive project management workspace enabling agile sprint planning, automated notifications, milestone tracking, and detailed performance analytics.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Laravel", "Tailwind CSS", "REST API", "PostgreSQL"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: true,
    stars: 31,
    forks: 9,
  },
  {
    id: "mobile-fitness-tracker",
    title: "PulseFit Mobile Application",
    category: "mobile",
    description: "Cross-platform mobile fitness tracker with live workout metrics, habit streak counters, and nutrition logging.",
    longDescription: "Native-feeling mobile app built using React Native & Expo, allowing users to log custom workouts, track calorie expenditure, and view graphical progress charts.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
    tags: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "Firebase"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: false,
    stars: 15,
    forks: 3,
  },
  {
    id: "system-file-manager",
    title: "C++ High Performance Memory Allocator",
    category: "system",
    description: "Custom low-level memory allocation engine and benchmarking utility written in C++20 for high-throughput systems.",
    longDescription: "System programming experiment testing thread-safe pooled memory allocation, garbage collection strategies, and profiling execution latency across multi-core processors.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    tags: ["C++", "System Architecture", "Algorithms", "CMake", "Performance"],
    githubUrl: "https://github.com/Cyberfox2005",
    featured: false,
    stars: 42,
    forks: 12,
  },
  {
    id: "interactive-dev-portfolio",
    title: "Cyberfox Modern Developer Portfolio",
    category: "frontend",
    description: "A visually striking developer showcase built with React, Framer Motion, 3 dynamic themes, and a responsive design system.",
    longDescription: "Personal portfolio application featuring multi-theme switching (Cyber Neon, Emerald Minimalist, Sunset Gradient), typing hero header, interactive skill badges, and contact notifications.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: true,
    stars: 56,
    forks: 15,
  }
];
