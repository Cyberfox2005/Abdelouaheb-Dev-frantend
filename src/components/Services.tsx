import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { useServiceManager } from "./ServiceContext";
import { useNavigate } from "react-router-dom";
import { 
  X,
  Star,
  CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Service, clientServices, developerServices } from "../data/servicesData";

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
  const { isServiceSelected } = useServiceManager();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'clients' | 'developers'>('clients');

  const displayedServices = activeTab === 'clients' ? clientServices : developerServices;

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
      `}} />

      <MagicParticles color="amber-500" count={30} />
      <StarConnection />
      
      <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 text-white tracking-widest italic drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"
          >
            {t('servicesTitle')}
          </motion.h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 rounded-full" />
          <p className="text-amber-100/60 max-w-2xl mx-auto text-xl font-light uppercase tracking-[0.3em] mb-12">
            {t('servicesDescription')}
          </p>

          {/* Category Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 p-2 rounded-full border border-white/10 flex items-center shadow-lg">
              <button 
                onClick={() => setActiveTab('clients')}
                className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 ${activeTab === 'clients' ? 'bg-amber-500 text-black shadow-[0_0_20px_rgba(245,158,11,0.4)]' : 'text-gray-400 hover:text-white'}`}
              >
                For Clients
              </button>
              <button 
                onClick={() => setActiveTab('developers')}
                className={`px-8 py-3 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-300 ${activeTab === 'developers' ? 'bg-blue-500 text-black shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 'text-gray-400 hover:text-white'}`}
              >
                For Developers
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedServices.map((service, idx) => {
            const isSelected = isServiceSelected(service.id);
            return (
              <ServiceCard 
                key={service.id} 
                service={service} 
                delay={idx * 0.1} 
                onClick={() => navigate(`/service/${service.id}`)}
                isSelected={isSelected}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, delay, onClick, isSelected }: { 
  service: Service, 
  delay: number, 
  onClick: () => void,
  isSelected: boolean
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
              className="p-2 px-6 bg-amber-500 text-[#0B0F19] rounded-full font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] w-full text-center"
             >
                Start Service
             </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
