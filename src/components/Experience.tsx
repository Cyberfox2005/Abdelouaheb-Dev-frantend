import { motion } from "framer-motion";
import { Cpu, Code, Layers, Smartphone, Terminal } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export function Experience() {
  const { t } = useLanguage();
  const roadmap = [
    {
      year: "2021",
      title: "Core Foundations",
      desc: "Deep dive into Java & Algorithm design. Mastering the fundamentals of computer science.",
      icon: Terminal,
      color: "#3B82F6"
    },
    {
      year: "2022",
      title: "Mobile Revolution",
      desc: "Pioneering Flutter applications. Building seamless cross-platform experiences.",
      icon: Smartphone,
      color: "#00D4FF"
    },
    {
      year: "2023",
      title: "Backend Architecture",
      desc: "Scaling with Django & Laravel. Implementing robust server-side logic and APIs.",
      icon: Cpu,
      color: "#7C3AED"
    },
    {
      year: "2024",
      title: "Enterprise Ecosystems",
      desc: "Architecting with Spring Boot. Building high-performance microservices.",
      icon: Layers,
      color: "#A855F7"
    },
    {
      year: "Future",
      title: "The Digital Frontier",
      desc: "Exploring AI integration & Cloud Native Engineering. Building the future of tech.",
      icon: Code,
      color: "#FFFFFF"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">

        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Evolutionary <span className="text-brand-cyan">{t("experienceTitle")}</span>
          </motion.h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">The journey of a software architect</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-brand-purple to-transparent opacity-20 hidden md:block" />

          <div className="space-y-24">
            {roadmap.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`flex-1 w-full text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="text-brand-cyan font-mono text-sm mb-2 tracking-[0.3em] font-bold">{item.year}</div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
                    {item.desc}
                  </p>
                </div>

                {/* Central Orb */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 rounded-2xl bg-[#0A0F1E] border border-white/10 flex items-center justify-center text-white shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </motion.div>
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 bg-brand-cyan/20 rounded-2xl blur-xl animate-pulse" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
