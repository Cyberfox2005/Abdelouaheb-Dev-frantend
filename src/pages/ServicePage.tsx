import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import { Footer } from "../components/Footer";
import { useServiceManager } from "../components/ServiceContext";
import { allServices, Service } from "../data/servicesData";
import { 
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Wand2,
  Check
} from "lucide-react";
import { motion } from "framer-motion";

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addService, isServiceSelected, selectedServices } = useServiceManager();
  
  const service = allServices.find(s => s.id === id);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // If service is already in basket, we can optionally load its saved skills
  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      const existing = selectedServices.find(s => s.id === service.id);
      if (existing && existing.selectedSkills) {
        setSelectedSkills(existing.selectedSkills);
      }
    }
  }, [service, selectedServices]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#060b18] flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <button 
          onClick={() => navigate('/services')}
          className="px-6 py-2 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const toggleSkill = (skillId: string) => {
    if (isServiceSelected(service.id)) return; // Disable changes if already added
    
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(s => s !== skillId)
        : [...prev, skillId]
    );
  };

  const selectAllSkills = () => {
    if (isServiceSelected(service.id)) return;
    if (selectedSkills.length === service.availableSkills.length) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills(service.availableSkills.map(s => s.id));
    }
  };

  const handleAddService = () => {
    if (!isServiceSelected(service.id)) {
      addService(service.id, selectedSkills);
    }
  };

  const isSelected = isServiceSelected(service.id);

  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col">
      <TopNav />
      
      <div className="flex-1 pt-24 pb-20 px-4 sm:px-6 container mx-auto max-w-6xl">
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center gap-2 text-amber-500/80 hover:text-amber-500 mb-8 font-bold tracking-widest text-sm uppercase transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Details */}
          <div className="lg:w-1/2">
            <div className={`w-24 h-24 rounded-3xl bg-${service.accentColor}/20 flex items-center justify-center mb-8 border-2 border-${service.accentColor}/30 shadow-[0_0_40px_rgba(245,158,11,0.2)]`}>
              <service.icon className={`w-12 h-12 text-${service.accentColor}`} />
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter drop-shadow-md">
              {service.name}
            </h1>
            <div className={`text-${service.accentColor} font-bold uppercase tracking-[0.3em] text-xs mb-8`}>
              {service.category}
            </div>

            <p className="text-amber-100/90 text-xl leading-relaxed font-light italic mb-12 border-l-4 border-amber-500/30 pl-6">
              {service.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                   <Sparkles className="w-4 h-4 text-amber-500" /> Specs
                </h4>
                {service.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="group/spec">
                    <div className="flex justify-between text-amber-100/60 mb-2 text-xs font-black uppercase tracking-widest">
                      <span>{spec.name}</span>
                      <span className={`text-${service.accentColor}`}>{spec.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${spec.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + sIdx * 0.1 }}
                        className={`h-full bg-gradient-to-r from-${service.accentColor} to-white rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                 <h4 className="text-white font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                    <Wand2 className="w-4 h-4 text-amber-500" /> Key Features
                 </h4>
                 {service.facts.map((fact, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 p-3 bg-white/5 rounded-2xl border border-white/5">
                       <div className="p-2 bg-amber-500/20 rounded-xl text-amber-500">
                          <fact.icon className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="text-[9px] text-amber-500/60 uppercase font-black tracking-widest">{fact.label}</p>
                          <p className="text-white font-bold text-xs">{fact.value}</p>
                       </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>

          {/* Right Column: Customization */}
          <div className="lg:w-1/2">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-lg sticky top-24">
              <h3 className="text-2xl font-black text-white mb-2">Build Your Stack</h3>
              <p className="text-gray-400 text-sm mb-8">
                {service.isCustom 
                  ? "Select all the technologies you want to include in your full platform ecosystem."
                  : "Select the specific skills or technologies you want prioritized for your project."}
              </p>

              <div className="mb-4 flex justify-end">
                <button 
                  onClick={selectAllSkills}
                  disabled={isSelected}
                  className="text-xs text-amber-500 hover:text-white uppercase tracking-wider font-bold transition-colors disabled:opacity-50"
                >
                  {selectedSkills.length === service.availableSkills.length ? "Deselect All" : "Select All"}
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-12">
                {service.availableSkills.map((skill) => {
                  const isSkillSelected = selectedSkills.includes(skill.id);
                  return (
                    <button
                      key={skill.id}
                      onClick={() => toggleSkill(skill.id)}
                      disabled={isSelected}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                        isSkillSelected 
                        ? `bg-${service.accentColor}/20 text-white border-${service.accentColor}/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]` 
                        : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                      } disabled:cursor-not-allowed`}
                    >
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                        isSkillSelected ? `border-${service.accentColor} bg-${service.accentColor}` : "border-gray-500"
                      }`}>
                        {isSkillSelected && <Check className="w-3 h-3 text-[#0B0F19]" />}
                      </div>
                      {skill.name}
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-white/10 pt-8 flex items-center justify-between">
                <div>
                  <div className="text-white font-black text-xl mb-1">
                    {selectedSkills.length} <span className="text-gray-400 text-sm font-normal">skills selected</span>
                  </div>
                  {isSelected && (
                    <div className="text-green-400 text-xs font-bold uppercase tracking-wider">
                      Already in basket
                    </div>
                  )}
                </div>

                <button 
                  disabled={isSelected || selectedSkills.length === 0}
                  onClick={handleAddService}
                  className={`px-8 py-4 font-black uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center gap-2 ${
                    isSelected 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30 cursor-not-allowed shadow-none" 
                    : selectedSkills.length === 0 
                      ? "bg-white/5 text-gray-500 cursor-not-allowed"
                      : "bg-amber-500 hover:bg-white text-[#0B0F19] shadow-[0_0_30px_rgba(245,158,11,0.5)] active:scale-95"
                  }`}
                >
                  {isSelected ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      In Basket
                    </>
                  ) : "Add to Basket"}
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
