import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { useServiceManager } from "./ServiceContext";
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
  X,
  Star,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceSpec = {
  name: string;
  level: number;
};

type MagicFact = {
  icon: any;
  label: string;
  value: string;
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
};

export const services: Service[] = [
  {
    id: "react-frontend",
    name: "React Frontend",
    category: "Web Frontend",
    icon: Globe,
    description: "A highly responsive, interactive, and beautifully designed frontend using React.js. Perfect for modern web applications.",
    specs: [
      { name: "UI/UX Design", level: 95 },
      { name: "Performance", level: 98 },
      { name: "State Management", level: 90 },
      { name: "Responsiveness", level: 100 }
    ],
    facts: [
      { icon: Zap, label: "Core Element", value: "Components" },
      { icon: Layers, label: "Specialty", value: "Fast Rendering" },
      { icon: Sparkles, label: "Experience", value: "Dynamic UI" }
    ],
    accentColor: "blue-400"
  },
  {
    id: "laravel-backend",
    name: "Laravel Backend",
    category: "Web Backend",
    icon: ShieldCheck,
    description: "Robust PHP backend using the Laravel framework. Comes with secure REST APIs, robust database structure, and administrative control.",
    specs: [
      { name: "API Development", level: 95 },
      { name: "Database Design", level: 90 },
      { name: "Security", level: 98 },
      { name: "MVC Architecture", level: 94 }
    ],
    facts: [
      { icon: Cpu, label: "Core Element", value: "PHP Eloquent" },
      { icon: ShieldCheck, label: "Specialty", value: "Data Vault" },
      { icon: Wand2, label: "Focus", value: "Reliability" }
    ],
    accentColor: "red-500"
  },
  {
    id: "node-backend",
    name: "Node.js Backend",
    category: "Web Backend",
    icon: Zap,
    description: "Lightning-fast, highly scalable backend built on Node.js and Express. Ideal for real-time applications and microservices.",
    specs: [
      { name: "Async Processing", level: 98 },
      { name: "Scalability", level: 95 },
      { name: "Real-time Sockets", level: 90 },
      { name: "API Design", level: 92 }
    ],
    facts: [
      { icon: Cpu, label: "Core Element", value: "Event Loop" },
      { icon: Layers, label: "Specialty", value: "Microservices" },
      { icon: Zap, label: "Experience", value: "High Speed" }
    ],
    accentColor: "green-500"
  },
  {
    id: "react-native-app",
    name: "Cross-Platform App",
    category: "Mobile App",
    icon: Smartphone,
    description: "A cross-platform mobile application using React Native. Write once, run seamlessly on both Android and iOS devices.",
    specs: [
      { name: "Cross Platform", level: 98 },
      { name: "Native Modules", level: 85 },
      { name: "UI Animations", level: 92 },
      { name: "Performance", level: 90 }
    ],
    facts: [
      { icon: Sparkles, label: "Core Element", value: "Mobile UX" },
      { icon: Smartphone, label: "Specialty", value: "iOS & Android" },
      { icon: Palette, label: "Focus", value: "Fluidity" }
    ],
    accentColor: "purple-400"
  }
];

function MagicParticles({ count = 20, color = "amber-500" }: { count?: number, color?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`absolute bg-${color}/30 rounded-full blur-[1px] animate-float-particle`}
          style={{
            width: Math.random() * 4 + 2 + 'px',
            height: Math.random() * 4 + 2 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 10 + 's',
            animationDuration: Math.random() * 10 + 10 + 's',
            opacity: Math.random() * 0.5 + 0.2
          } as any}
        />
      ))}
    </div>
  );
}

function StarConnection({ className }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block ${className}`} viewBox="0 0 1000 1000">
      <defs>
          <radialGradient id="serviceGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
      </defs>
      <path d="M 500 500 L 200 200" stroke="url(#serviceGlow)" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse opacity-20" />
      <path d="M 500 500 L 800 200" stroke="url(#serviceGlow)" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse opacity-20" />
      <path d="M 500 500 L 200 800" stroke="url(#serviceGlow)" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse opacity-20" />
      <path d="M 500 500 L 800 800" stroke="url(#serviceGlow)" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse opacity-20" />
      <path d="M 500 500 L 500 100" stroke="url(#serviceGlow)" strokeWidth="1" strokeDasharray="5 5" className="animate-pulse opacity-20" />
    </svg>
  );
}

export function Services() {
  const { t } = useLanguage();
  const { addService, isServiceSelected } = useServiceManager();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleAddService = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    addService(id);
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          25% { opacity: 0.6; }
          50% { transform: translate(\${Math.random() * 100 - 50}px, \${Math.random() * -200}px) scale(1.2); opacity: 0.8; }
          75% { opacity: 0.4; }
        }
        @keyframes service-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slow-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}} />

      <MagicParticles color="amber-500" count={30} />
      <StarConnection />
      
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 text-white tracking-widest italic drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            {t('servicesTitle')}
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 rounded-full" />
          <p className="text-amber-100/60 max-w-2xl mx-auto text-xl font-light uppercase tracking-[0.3em]">
            {t('servicesDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const isSelected = isServiceSelected(service.id);
            return (
              <ServiceCard 
                key={service.id} 
                service={service} 
                delay={idx * 0.1} 
                onClick={() => setSelectedService(service)}
                isSelected={isSelected}
                onAdd={(e) => handleAddService(e, service.id)}
              />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={selectedService.id}
              className="relative w-full max-w-6xl h-[90vh] bg-[#0B0F19] border-2 border-amber-500/20 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row"
            >
              <MagicParticles count={40} color={selectedService.accentColor} />
              
              <div className={`lg:w-2/5 relative bg-${selectedService.accentColor}/5 flex items-center justify-center p-12 lg:border-r border-white/5`}>
                <div className="relative">
                   <div className={`absolute inset-[-40px] bg-${selectedService.accentColor}/20 rounded-full blur-3xl animate-pulse`} />
                   <div className={`w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-tr from-${selectedService.accentColor} via-white to-white/50 flex items-center justify-center shadow-[0_0_80px_rgba(0,0,0,0.5)] border-4 border-white/20 relative z-10`}>
                      <selectedService.icon className="w-24 h-24 sm:w-32 sm:h-32 text-[#0B0F19]" />
                   </div>
                </div>
              </div>

              <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col overflow-y-auto bg-[#0B0F19]/80 backdrop-blur-md">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-8 right-8 p-4 bg-white/5 rounded-full hover:bg-amber-500/20 text-white transition-all hover:rotate-90"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="mb-12">
                  <h3 className="text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-md">
                    {selectedService.name}
                  </h3>
                  <div className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs">
                    {selectedService.category}
                  </div>
                </div>

                <p className="text-amber-100/90 text-xl leading-relaxed font-light italic mb-12 border-l-4 border-amber-500/30 pl-6">
                  {selectedService.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                       <Sparkles className="w-4 h-4 text-amber-500" /> Magical Specs
                    </h4>
                    {selectedService.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="group/spec">
                        <div className="flex justify-between text-amber-100/60 mb-2 text-xs font-black uppercase tracking-widest">
                          <span>{spec.name}</span>
                          <span className={`text-${selectedService.accentColor}`}>{spec.level}%</span>
                        </div>
                        <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${spec.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + sIdx * 0.1 }}
                            className={`h-full bg-gradient-to-r from-${selectedService.accentColor} to-white rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                     <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                        <Wand2 className="w-4 h-4 text-amber-500" /> Arcane Intel
                     </h4>
                     {selectedService.facts.map((fact, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-all">
                           <div className="p-2 bg-amber-500/20 rounded-xl text-amber-500">
                              <fact.icon className="w-5 h-5" />
                           </div>
                           <div>
                              <p className="text-[10px] text-amber-500/60 uppercase font-black tracking-widest">{fact.label}</p>
                              <p className="text-white font-bold text-sm">{fact.value}</p>
                           </div>
                        </div>
                     ))}
                  </div>
                </div>

                <div className="mt-auto">
                   <button 
                    disabled={isServiceSelected(selectedService.id)}
                    onClick={(e) => handleAddService(e, selectedService.id)}
                    className={`px-10 py-4 font-black uppercase tracking-[0.2em] rounded-full transition-all shadow-[0_0_30px_rgba(245,158,11,0.5)] active:scale-95 flex items-center gap-2 ${
                      isServiceSelected(selectedService.id) 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed shadow-none" 
                      : "bg-amber-500 hover:bg-white text-[#0B0F19]"
                    }`}
                   >
                      {isServiceSelected(selectedService.id) ? (
                        <>
                          <CheckCircle2 className="w-5 h-5" />
                          {t('inBasket')}
                        </>
                      ) : t('addToBasket')}
                   </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ServiceCard({ service, delay, onClick, isSelected, onAdd }: { 
  service: Service, 
  delay: number, 
  onClick: () => void,
  isSelected: boolean,
  onAdd: (e: React.MouseEvent) => void
}) {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <motion.div 
        className={`relative bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] p-10 border transition-all duration-500 h-full overflow-hidden ${
          isSelected ? "border-green-500/40" : "border-white/10 group-hover:border-amber-500/40"
        }`}
        whileHover={{ scale: 1.02, y: -10 }}
      >
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${service.accentColor}/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        {isSelected && (
          <div className="absolute top-6 right-6">
            <div className="p-2 bg-green-500/20 rounded-full text-green-400 border border-green-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
        )}

        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl bg-${service.accentColor}/20 flex items-center justify-center mb-8 border border-${service.accentColor}/30 group-hover:scale-110 transition-transform`}>
            <service.icon className={`w-8 h-8 text-${service.accentColor}`} />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
            {service.name}
          </h3>
          
          <p className="text-amber-100/40 text-sm leading-relaxed mb-10 font-light">
            {service.description.slice(0, 100)}...
          </p>

          <div className="flex items-center gap-3">
             <button 
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              className="p-1 px-4 bg-white/5 rounded-full border border-white/10 text-amber-400/60 font-black uppercase text-[10px] tracking-[0.2em] hover:border-amber-500/40 hover:text-amber-400 transition-all"
             >
                {t('more')}
             </button>
              {!isSelected && (
                <button 
                  onClick={onAdd}
                  className="p-1 px-4 bg-amber-500 text-[#0B0F19] rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                >
                  {t('addToBasket')}
                </button>
             )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
