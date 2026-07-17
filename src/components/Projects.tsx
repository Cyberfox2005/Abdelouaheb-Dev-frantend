import { useState } from "react";
import { Search, Star, ChevronRight, ExternalLink } from "lucide-react";
import { ProjectDetails, ProjectType } from "./ProjectDetails";
import { useLanguage } from "./LanguageProvider";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA — extend with your real projects
───────────────────────────────────────────────────────────────────────────── */

const PROJECTS: ProjectType[] = [
  {
    title: "Supermarket Management System",
    subtitle: "POS, inventory & analytics for retail",
    description:
      "A comprehensive Point-of-Sale and inventory management system built for supermarkets. Handles sales tracking, real-time stock alerts, supplier management, and multi-cashier support. The analytics dashboard provides daily revenue breakdowns, best-selling products, and customer purchase trends — all surfaced in a clean, role-based UI.",
    image: "https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMHNob3BwaW5nfGVufDF8fHx8MTc2MTMzNzU1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1628102491629-778571d893a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMHNob3BwaW5nfGVufDF8fHx8MTc2MTMzNzU1Mnww&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    developer: "Abdelouaheb Dev",
    rating: 4.5,
    reviews: 2340,
    category: "Business & Tools",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&q=80", alt: "Dashboard" },
      { url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80", alt: "Inventory" },
      { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80", alt: "Analytics" },
      { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80", alt: "Reports" },
    ],
    features: [
      "Multi-cashier POS terminal with receipt printing",
      "Real-time inventory alerts and reorder triggers",
      "Supplier management and purchase orders",
      "Revenue analytics with exportable PDF reports",
      "Role-based access control (admin / cashier / manager)",
    ],
    languages: [
      { name: "PHP", percent: 55, color: "#4F5D95" },
      { name: "HTML/CSS", percent: 25, color: "#e34c26" },
      { name: "JavaScript", percent: 20, color: "#f1e05a" },
    ],
  },
  {
    title: "Hospital Management System",
    subtitle: "Complete patient & staff solution",
    description:
      "A full-featured hospital management platform covering patient records (EHR), appointment scheduling, lab results, billing, and staff management. Built with Django on the backend and React on the frontend, connected via a REST API. The system supports multi-department workflows and provides real-time dashboards for hospital administrators.",
    image: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYxMzE5MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1564732005956-20420ebdab60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYxMzE5MjM5fDA&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["Django", "Python", "PostgreSQL", "React"],
    liveUrl: "#",
    githubUrl: "#",
    developer: "Abdelouaheb Dev",
    rating: 4.8,
    reviews: 1870,
    category: "Healthcare",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80", alt: "Patient Records" },
      { url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&q=80", alt: "Scheduling" },
      { url: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=400&q=80", alt: "Billing" },
      { url: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&q=80", alt: "Dashboard" },
    ],
    features: [
      "Electronic Health Records (EHR) with full history",
      "Appointment scheduling with SMS/email reminders",
      "Lab and radiology order management",
      "Automated billing and insurance claim tracking",
      "Multi-department dashboards and reporting",
    ],
    languages: [
      { name: "Python", percent: 60, color: "#3572A5" },
      { name: "TypeScript", percent: 30, color: "#3178c6" },
      { name: "CSS", percent: 10, color: "#563d7c" },
    ],
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-stack shop with real-time analytics",
    description:
      "A scalable e-commerce solution with Stripe payment integration, a product catalog with rich filtering, real-time inventory management, and a seller analytics dashboard. Customers enjoy a smooth cart experience with wishlist syncing across devices. The admin panel tracks conversions, revenue trends, and abandoned carts.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTM5MjI2Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTM5MjI2Mnww&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["React", "Node.js", "SQL", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    developer: "Abdelouaheb Dev",
    rating: 4.6,
    reviews: 3120,
    category: "Commerce",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", alt: "Product Listing" },
      { url: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?w=400&q=80", alt: "Cart" },
      { url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80", alt: "Checkout" },
      { url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", alt: "Dashboard" },
    ],
    features: [
      "Stripe payment gateway with 3D Secure support",
      "Dynamic product catalog with faceted search",
      "Cross-device cart and wishlist sync",
      "Seller analytics: revenue, conversions, heatmaps",
      "Abandoned cart recovery email flows",
    ],
    languages: [
      { name: "JavaScript", percent: 45, color: "#f1e05a" },
      { name: "TypeScript", percent: 40, color: "#3178c6" },
      { name: "CSS", percent: 15, color: "#563d7c" },
    ],
  },
  {
    title: "Food Delivery App",
    subtitle: "Real-time orders & restaurant management",
    description:
      "A cross-platform food delivery application featuring real-time GPS order tracking, a multi-restaurant menu engine, payment gateway integration, and an integrated restaurant management console. Customers receive push notifications at every step; restaurant owners manage menus, hours, and orders from a unified dashboard.",
    image: "https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2MTM4NTE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1644946763226-22c60fcb6635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5fGVufDF8fHx8MTc2MTM4NTE5N3ww&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["React Native", "Kotlin", "JavaScript", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    developer: "Abdelouaheb Dev",
    rating: 4.7,
    reviews: 5800,
    category: "Food & Drink",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80", alt: "Menu" },
      { url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80", alt: "Order Tracking" },
      { url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80", alt: "Restaurants" },
      { url: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=400&q=80", alt: "Payment" },
    ],
    features: [
      "Real-time GPS order tracking for customers and drivers",
      "Multi-restaurant menu engine with modifiers",
      "Push notification at every order stage",
      "Restaurant management: menus, hours, promos",
      "Integrated Stripe & PayPal checkout",
    ],
    languages: [
      { name: "JavaScript", percent: 78.5, color: "#f1e05a" },
      { name: "Kotlin", percent: 15, color: "#9300B4" },
      { name: "CSS", percent: 3.8, color: "#563d7c" },
      { name: "HTML", percent: 2.7, color: "#e34c26" },
    ],
  },
  {
    title: "Real Estate Listing App",
    subtitle: "Search properties with virtual tours",
    description:
      "A property listing and management platform with advanced multi-filter search, 360° virtual tour embeds, and a full-featured agent dashboard. Buyers can save searches, compare listings, and contact agents directly. Agents manage listings, leads, and performance metrics. Built with PHP and JavaScript for broad hosting compatibility.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYxMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHl8ZW58MXx8fHwxNzYxMzcxMTQzfDA&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
    liveUrl: "#",
    githubUrl: "#",
    developer: "Abdelouaheb Dev",
    rating: 4.3,
    reviews: 980,
    category: "Real Estate",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80", alt: "Listings" },
      { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", alt: "Property Detail" },
      { url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80", alt: "Map View" },
      { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", alt: "Agent Dashboard" },
    ],
    features: [
      "Advanced property search with map and filter",
      "360° virtual tour embed support",
      "Saved searches and email listing alerts",
      "Agent lead management dashboard",
      "Mortgage calculator with amortization schedule",
    ],
    languages: [
      { name: "JavaScript", percent: 55, color: "#f1e05a" },
      { name: "PHP", percent: 30, color: "#4F5D95" },
      { name: "HTML", percent: 15, color: "#e34c26" },
    ],
  },
  {
    title: "Online Learning Platform",
    subtitle: "Interactive courses, exams & community",
    description:
      "A comprehensive full-stack e-learning platform built with React + Vite and a Node.js/Express backend. Features include user authentication, course and assignment management, integrated exams with auto-grading, community posts, and real-time activity tracking. An interactive dashboard powered by Recharts and Framer Motion animations gives learners and instructors clear progress visibility.",
    image: "https://images.unsplash.com/photo-1669607960578-f7d7fd363e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEzMzMxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1669607960578-f7d7fd363e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMG9ubGluZXxlbnwxfHx8fDE3NjEzMzMxNjh8MA&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["React", "Vite", "Node.js", "Express", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
    githubUrl: "https://github.com/Cyberfox2005/Oniline-learning-platform-.git",
    developer: "Abdelouaheb Dev",
    rating: 4.9,
    reviews: 6410,
    category: "Education",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&q=80", alt: "Course Library" },
      { url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80", alt: "Video Lesson" },
      { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80", alt: "Exam" },
      { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", alt: "Dashboard" },
    ],
    features: [
      "Course library with progress tracking and bookmarks",
      "Integrated video lessons with notes and captions",
      "Auto-graded exams with instant feedback",
      "Community discussion boards per course",
      "Instructor analytics: enrollment, completion, engagement",
    ],
    languages: [
      { name: "JavaScript", percent: 94.5, color: "#f1e05a" },
      { name: "CSS", percent: 5.1, color: "#563d7c" },
      { name: "HTML", percent: 0.4, color: "#e34c26" },
    ],
  },
  {
    title: "Fitness Tracking App",
    subtitle: "Workouts, nutrition & personal goals",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition intake, and personal fitness milestones. Built with Flutter for iOS and Android, it integrates with HealthKit and Google Fit for biometric data. Users build custom workout plans, log meals with a barcode scanner, and visualise progress through animated charts.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzE4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    icon: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzE4MDQ5fDA&ixlib=rb-4.1.0&q=80&w=200",
    tags: ["Flutter", "Dart", "Swift", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    developer: "Abdelouaheb Dev",
    rating: 4.7,
    reviews: 4230,
    category: "Health & Fitness",
    screenshots: [
      { url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80", alt: "Workout Plan" },
      { url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80", alt: "Progress" },
      { url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80", alt: "Nutrition" },
      { url: "https://images.unsplash.com/photo-1601422407692-ec4aea5560b5?w=400&q=80", alt: "Goals" },
    ],
    features: [
      "Custom workout plans with animated exercise guides",
      "Barcode-scanner nutrition logging with macro tracking",
      "HealthKit & Google Fit biometric sync",
      "Progress charts with weekly and monthly views",
      "Personal records and achievement badges",
    ],
    languages: [
      { name: "Dart", percent: 70, color: "#00B4AB" },
      { name: "Swift", percent: 20, color: "#F05138" },
      { name: "C++", percent: 10, color: "#f34b7d" },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   SUBCOMPONENTS
───────────────────────────────────────────────────────────────────────────── */

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  return (
    <span className="store-stars">
      {"★".repeat(full)}{"☆".repeat(5 - full)}
    </span>
  );
}

function AppCard({ project, onSelect }: { project: ProjectType; onSelect: () => void }) {
  return (
    <div className="app-card" id={`app-card-${project.title.replace(/\s+/g, '-').toLowerCase()}`}>
      {/* Squircle icon */}
      <div className="squircle-icon app-icon" onClick={onSelect}>
        <img src={project.icon} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Text block */}
      <div className="app-card-body">
        <h3 className="app-title" onClick={onSelect}>{project.title}</h3>
        <p className="app-subtitle">{project.subtitle}</p>

        {/* Tags */}
        <div className="app-tags">
          {project.tags.slice(0, 3).map((t, i) => (
            <span key={i} className="app-tag">{t}</span>
          ))}
        </div>

        {/* Rating row */}
        <div className="app-meta-row">
          <StarRating rating={project.rating} />
          <span className="app-rating-num">{project.rating}</span>
          <span className="app-review-count">({project.reviews.toLocaleString()})</span>
        </div>
      </div>

      {/* GET button */}
      <button
        id={`get-btn-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
        className="get-btn"
        onClick={onSelect}
      >
        VIEW
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CATEGORIES
───────────────────────────────────────────────────────────────────────────── */
const CATEGORIES = ["All", "Business & Tools", "Healthcare", "Commerce", "Food & Drink", "Real Estate", "Education", "Health & Fitness"];

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────────────────────── */

export function Projects() {
  const { t } = useLanguage();
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = PROJECTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  /* — Detail view — */
  if (activeProject) {
    return (
      <ProjectDetails
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    );
  }

  /* — Store grid — */
  return (
    <section id="projects" className="store-section">
      {/* ── Store Header ─────────────────────────────────────────────── */}
      <div className="store-header">
        <div className="store-header-inner">
          <div className="store-header-top">
            <div>
              <p className="store-eyebrow">Developer Portfolio</p>
              <h2 className="store-title">{t('projectsTitle')}</h2>
            </div>
            <div className="store-badge">
              <Star size={13} className="inline mr-1 -mt-0.5" />
              {PROJECTS.length} Apps
            </div>
          </div>

          {/* Search bar */}
          <div className="store-search-wrap">
            <Search size={16} className="store-search-icon" />
            <input
              id="store-search-input"
              type="text"
              placeholder="Search apps, technologies…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="store-search-input"
            />
          </div>

          {/* Category pills */}
          <div className="store-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                className={`cat-pill${activeCategory === cat ? " cat-pill-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── App Grid ─────────────────────────────────────────────────── */}
      <div className="store-grid-wrap">
        {filtered.length === 0 ? (
          <div className="store-empty">
            <p className="text-4xl mb-3">🔍</p>
            <p>No apps match your search.</p>
          </div>
        ) : (
          <div className="store-grid">
            {filtered.map((p, i) => (
              <AppCard
                key={i}
                project={p}
                onSelect={() => setActiveProject(p)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}