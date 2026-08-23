import nadhifHome from "../assets/nadhif/nadhif-home.jpg";
import nadhifAuth from "../assets/nadhif/nadhif-auth.jpg";
import nadhifReport1 from "../assets/nadhif/nadhif-report-1.jpg";
import nadhifReport2 from "../assets/nadhif/nadhif-report-2.jpg";
import nadhifSchedule from "../assets/nadhif/nadhif-schedule.jpg";

export interface ProjectScreenshot {
  url: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "frontend" | "fullstack" | "mobile" | "system";
  description: string;
  longDescription: string;
  image: string;
  screenshots?: ProjectScreenshot[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  stars?: number;
  forks?: number;
  features?: string[];
}

export const projectsData: Project[] = [
  {
    id: "nadhif-app",
    title: "Nadhif - Smart Waste Management & Recycling App",
    category: "mobile",
    description: "Smart municipal waste management and citizen recycling mobile ecosystem featuring real-time GPS truck tracking, instant photo issue reporting, schedules, and gamified Flexy reward points.",
    longDescription: "Nadhif (تطبيق نظيف) is an intelligent, civic-oriented mobile platform engineered to modernize municipal solid waste logistics and empower citizen participation across Algerian municipalities (such as Biskra).\n\nBuilt with modern mobile architecture and real-time mapping, Nadhif bridges the gap between municipal sanitation services and residents. The application introduces transparent collection schedules, live vehicle GPS monitoring, frictionless incident reporting with photo and audio attachments, and a gamified loyalty points system that rewards eco-friendly recycling behaviors with mobile phone balance (Flexy).",
    image: nadhifHome,
    screenshots: [
      {
        url: nadhifHome,
        title: "Live GPS Tracking & Citizen Rewards",
        titleAr: "الرئيسية: التتبع المباشر ومكافآت النقاط",
        description: "Interactive real-time map displaying municipal collection trucks in Biskra, next pickup countdown window (19:00 - 21:00), and loyalty reward progress towards Flexy 500 DZD.",
        descriptionAr: "خريطة تفاعلية لتتبع مسار شاحنات النظافة مباشرة في حي الزيتون ببسكرة، مع عداد موعد المرور القادم ونظام تحويل نقاط التدوير إلى رصيد تعبئة فليكسي."
      },
      {
        url: nadhifAuth,
        title: "Role-Based Authentication (Citizen & Driver)",
        titleAr: "اختيار الحساب: مواطن أو سائق",
        description: "Passwordless streamlined onboarding with dedicated interfaces for Citizens (reporting & schedules) and Municipal Drivers (daily route logistics & task validation).",
        descriptionAr: "واجهة دخول مخصصة وسلسة تتيح الاختيار الفوري بين حساب المواطن (للإبلاغ ومتابعة المواعيد) وحساب السائق (لإدارة المسارات اليومية وتأكيد إنجاز المهام)."
      },
      {
        url: nadhifReport1,
        title: "Smart Waste Incident Reporting",
        titleAr: "الإبلاغ عن النفايات وتحديد النوع",
        description: "Intuitive reporting flow with direct camera capture, automated neighborhood GPS geocoding, and multi-category waste classification (Household, Demolition, Green, Plastic/Wood).",
        descriptionAr: "نظام إبلاغ ذكي مع التقاط فوري للصور وتحديد الموقع التلقائي وتصنيف النفايات (منزلية، صلبة/هدم، خضراء/حدائق، بلاستيك وخشب)."
      },
      {
        url: nadhifReport2,
        title: "Voice Notes & Instant Incident Dispatch",
        titleAr: "إرسال البلاغ والملاحظات الصوتية",
        description: "Detailed submission interface allowing citizens to record voice notes, attach notes, and dispatch actionable geo-tagged alerts directly to sanitation crews.",
        descriptionAr: "واجهة إرسال البلاغ مع دعم إضافة تفاصيل وملاحظات صوتية سريعة بلمسة واحدة لفرق النظافة الميدانية."
      },
      {
        url: nadhifSchedule,
        title: "Collection Timetable & Sorting Guide",
        titleAr: "الجدول الزمني ودليل الفرز والتوعية",
        description: "Comprehensive weekly collection calendar with category indicators (Regular vs Recyclable days) paired with interactive visual waste sorting education (Bottles, Cardboard, Glass).",
        descriptionAr: "جدول جمع النفايات الأسبوعي مع تمييز أيام الجمع العادي والقابل للتدوير، ودليل توعوي بصري لإرشادات فرز القوارير والكرتون والزجاج."
      }
    ],
    tags: ["Flutter", "Dart", "Firebase", "Google Maps API", "Geolocation", "Android", "Clean Architecture", "UI/UX Design"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: true,
    stars: 5,
    forks: 2,
    features: [
      "Real-Time Municipal Collection Truck GPS Tracking",
      "Citizen & Driver Dual-Role Architecture",
      "Smart Geotagged Waste Issue Reporting with Camera & Audio",
      "Gamified Recycling Loyalty Points & Flexy Mobile Top-up Rewards",
      "Interactive Weekly Pickup Timetable & Environmental Sorting Guide"
    ]
  },
  {
    id: "online-learning-platform",
    title: "Online Learning & E-Course Platform",
    category: "fullstack",
    description: "Modern full-stack online learning and educational platform featuring interactive course catalogs, video lesson progression, enrollment management, and a Laravel backend.",
    longDescription: "A full-featured e-learning web application engineered with React, Tailwind CSS, and a robust PHP Laravel REST API backend.\n\nDesigned to deliver a smooth educational experience for students and instructors, the platform incorporates dynamic course exploration, detailed curriculum roadmaps, interactive quizzes, video streaming player integration, student enrollment tracking, and secure role-based access control.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "Tailwind CSS", "PHP", "Laravel", "REST API", "MySQL", "Vite"],
    liveUrl: "https://cyberfox2005.github.io/Oniline-learning-platform-/",
    githubUrl: "https://github.com/Cyberfox2005/Oniline-learning-platform-",
    featured: true,
    stars: 2,
    forks: 0,
    features: [
      "Dynamic Course Catalogs & Advanced Category Search",
      "Student Enrollment & Lesson Progress Tracking",
      "Instructor Content Management & Curriculum Builder",
      "RESTful API Backend Built with PHP Laravel",
      "Responsive, Mobile-Optimized Modern Tailwind CSS UI"
    ]
  },
  {
    id: "ticket-manager",
    title: "Java Enterprise Ticket & Support Manager",
    category: "system",
    description: "Robust enterprise issue tracking and customer support ticketing system with priority triage queues, status workflows, team assignments, and resolution analytics.",
    longDescription: "An enterprise-grade ticket management and issue tracking system engineered in Java.\n\nBuilt with clean object-oriented architecture and reliable data persistence, the platform streamlines customer service operations, bug triage pipelines, team queue dispatching, SLA tracking, and resolution lifecycle monitoring.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    tags: ["Java", "OOP", "MySQL / JDBC", "Software Architecture", "Ticket Queue", "Enterprise"],
    githubUrl: "https://github.com/Cyberfox2005/ticket-manager",
    featured: true,
    stars: 1,
    forks: 0,
    features: [
      "Ticket Queue & Priority Triage Workflows",
      "Automated Incident Status Lifecycle Tracking",
      "Support Agent Assignment & Resolution Notes",
      "Robust Java Core OOP Architecture & Data Validation",
      "SLA Response Times & Performance Metrics"
    ]
  },
  {
    id: "hotel-manager",
    title: "Hotel & Reservation Management Suite",
    category: "fullstack",
    description: "Comprehensive hospitality and lodging management system covering room booking pipelines, guest check-in/out, availability calendars, and billing.",
    longDescription: "A full hospitality management platform created to simplify accommodation workflows and reservation lifecycles.\n\nThe system provides interactive room availability schedules, instant room booking and guest registration, check-in and checkout processing, invoice generation, room maintenance status, and administrative revenue reporting.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "REST API"],
    githubUrl: "https://github.com/Cyberfox2005/Hotel-manager",
    featured: true,
    stars: 1,
    forks: 0,
    features: [
      "Real-Time Room Availability Calendar",
      "Guest Booking & Reservation Flow",
      "Check-in / Check-out Front Desk Dashboard",
      "Invoice & Billing Management",
      "Housekeeping & Room Status Tracking"
    ]
  },
  {
    id: "food-platform",
    title: "FoodExpress Restaurant & Delivery Platform",
    category: "frontend",
    description: "Interactive online food ordering ecosystem featuring dynamic digital menus, real-time cart calculation, order customization, and checkout flow.",
    longDescription: "A responsive food ordering and delivery web application built with modern JavaScript and React.\n\nIt features categorized cuisine menus, interactive dish modifiers, real-time cart persistence with custom hooks, delivery address selection, order status simulation, and a merchant admin view for menu item management.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    tags: ["React", "JavaScript", "Tailwind CSS", "State Management", "UI/UX Design", "Vite"],
    githubUrl: "https://github.com/Cyberfox2005/Food-platform",
    featured: true,
    stars: 1,
    forks: 0,
    features: [
      "Dynamic Restaurant Menus & Filtering",
      "Interactive Cart & Order Summary Calculation",
      "Meal Customization & Dietary Tags",
      "Instant Search & Category Explorer",
      "Responsive Mobile-First UI"
    ]
  },
  {
    id: "abdelouaheb-dev-frontend",
    title: "Cyberfox Modern Developer Portfolio",
    category: "frontend",
    description: "High-performance developer showcase built with React 18, TypeScript, Tailwind CSS, Framer Motion 12, dynamic multi-theming, and interactive terminal.",
    longDescription: "Personal developer portfolio and interactive project showcase engineered with React 18, TypeScript, Tailwind CSS, and Framer Motion.\n\nHighlights include 3 theme engines (Cyber Neon, Emerald Minimalist, Sunset Gradient), interactive command-line terminal, localized Arabic & French language support, project mission logs, and interactive screenshot lightbox previews.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    tags: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons", "Vite"],
    liveUrl: "https://cyberfox2005.github.io/Abdelouaheb-Dev-frantend/",
    githubUrl: "https://github.com/Cyberfox2005/Abdelouaheb-Dev-frantend",
    featured: true,
    stars: 3,
    forks: 1,
    features: [
      "Tri-Theme Dynamic Visual Engine",
      "Interactive Developer CLI Terminal",
      "Trilingual Localization (EN, AR, FR)",
      "Interactive Project Showcases & Fullscreen Lightbox",
      "Responsive Modern Cyberpunk UI"
    ]
  }
];
