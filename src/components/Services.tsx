import { motion } from "framer-motion";
import { Layout, Server, Smartphone, Monitor, Shield, Zap } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Application Development",
      desc: "Architecting scalable cross-platform solutions with Flutter and Kotlin.",
      icon: Layout,
      color: "#00D4FF"
    },
    {
      title: "Backend Engineering",
      desc: "Building high-performance APIs with Spring Boot and Django.",
      icon: Server,
      color: "#7C3AED"
    },
    {
      title: "Mobile Architecture",
      desc: "Native-quality mobile experiences with reactive UI systems.",
      icon: Smartphone,
      color: "#3B82F6"
    },
    {
      title: "UI/UX Engineering",
      desc: "Futuristic, interactive interfaces with a focus on motion and accessibility.",
      icon: Monitor,
      color: "#A855F7"
    },
    {
      title: "Software Security",
      desc: "Implementing secure authentication and robust system architectures.",
      icon: Shield,
      color: "#F59E0B"
    },
    {
      title: "System Optimization",
      desc: "High-throughput performance tuning and low-latency engineering.",
      icon: Zap,
      color: "#EF4444"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tight"
          >
            Core <span className="text-brand-cyan">Capabilities</span>
          </motion.h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Solutions engineered for the future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-[#0A0F1E] border border-white/5 group hover:border-brand-cyan/20 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svc.icon className="w-24 h-24" />
              </div>

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
                style={{ backgroundColor: `${svc.color}15`, color: svc.color }}
              >
                <svc.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors uppercase tracking-tight">
                {svc.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {svc.desc}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-brand-cyan uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
