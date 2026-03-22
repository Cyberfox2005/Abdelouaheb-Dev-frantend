import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { Github, Linkedin, Twitter, Mail, Star, X, Sparkles, Zap, Cloud, Cpu, Layers, Shield, Wand2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import profileImageDark from "../assets/9924fd72bc599674567ae61e63466315b12bb425.png";
import teamLogo from "../assets/d3fb022417f356c7ca48d8ab4a07b126226cc9b4.png";

type Skill = {
  name: string;
  level: number;
};

type MagicFact = {
  icon: any;
  label: string;
  value: string;
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: Skill[];
  facts: MagicFact[];
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    mail?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: "abdelouheb",
    name: "Benachi Abdelouheb",
    role: "Full-Stack Developer",
    image: profileImageDark,
    bio: "Passionate about building scalable applications and leading innovative tech solutions. A digital architect weaving magic into every line of code.",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "Node.js / Express", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "PostgreSQL", level: 85 }
    ],
    facts: [
      { icon: Wand2, label: "Element", value: "Void & Light" },
      { icon: Layers, label: "Signature", value: "Architect of Realms" },
      { icon: Sparkles, label: "Hidden Lore", value: "Never sleeps during an active bug hunt." }
    ],
    links: { github: "https://github.com/Cyberfox2005", linkedin: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/", mail: "mailto:ben689533@gmail.com" }
  },
  {
    id: "yazid",
    name: "Yazid Mikhazni",
    role: "Mobile Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Specializes in building high-performance, beautiful cross-platform mobile applications. Transforming visions into pocket-sized magic.",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Flutter", level: 82 },
      { name: "iOS Swift", level: 75 },
      { name: "Firebase", level: 90 }
    ],
    facts: [
      { icon: Cloud, label: "Element", value: "Ether" },
      { icon: Cpu, label: "Signature", value: "Pocket Weaver" },
      { icon: Zap, label: "Hidden Lore", value: "Compiles complex code in his dreams." }
    ],
    links: { linkedin: "#" }
  },
  {
    id: "mouhamed",
    name: "Djebiri Mouhamed",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Crafts engaging user interfaces and seamless interactive experiences. Eye for detail and heart for smooth, magical interactions.",
    skills: [
      { name: "Tailwind CSS", level: 98 },
      { name: "Framer Motion", level: 90 },
      { name: "Three.js", level: 70 },
      { name: "UI Design", level: 85 }
    ],
    facts: [
      { icon: Layers, label: "Element", value: "Crystal" },
      { icon: Sparkles, label: "Signature", value: "Prism Master" },
      { icon: Wand2, label: "Hidden Lore", value: "Can see 16.7 million colors by naked eye." }
    ],
    links: { github: "#", linkedin: "#" }
  },
  {
    id: "malak",
    name: "Malak",
    role: "UI/UX and 3D Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Designs beautiful, intuitive interfaces that users love to interact with. Bringing 3D worlds into the magical digital realm.",
    skills: [
      { name: "Figma", level: 98 },
      { name: "Blender", level: 85 },
      { name: "Adobe Creative Cloud", level: 92 },
      { name: "UX Strategy", level: 88 }
    ],
    facts: [
      { icon: Cloud, label: "Element", value: "Spirit" },
      { icon: Layers, label: "Signature", value: "Dream Sculptor" },
      { icon: Shield, label: "Hidden Lore", value: "Designs UI for alternate digital realities." }
    ],
    links: { linkedin: "#" }
  },
  {
    id: "yousef",
    name: "Yousef Atal",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    bio: "Architects scalable server solutions and manages complex databases. The unseen hand controlling the gears of digital magic.",
    skills: [
      { name: "Python / Django", level: 92 },
      { name: "Go / Gin", level: 80 },
      { name: "Docker / K8s", level: 75 },
      { name: "Advanced SQL", level: 88 }
    ],
    facts: [
      { icon: Shield, label: "Element", value: "Lead & Forge" },
      { icon: Cpu, label: "Signature", value: "Core Alchemist" },
      { icon: Zap, label: "Hidden Lore", value: "Talks to databases in binary fluently." }
    ],
    links: { github: "#" }
  }
];

function MagicParticles({ count = 20, color = "amber-400" }: { count?: number, color?: string }) {
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
          }}
        />
      ))}
    </div>
  );
}

function StarConnection({ className }: { className?: string }) {
  return (
    <svg className={`absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block ${className}`} viewBox="0 0 1000 1000">
      <defs>
          <radialGradient id="lineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
      </defs>
      <path d="M 500 500 L 150 150" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse opacity-40" />
      <path d="M 500 500 L 850 150" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse opacity-40" />
      <path d="M 500 500 L 150 850" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse opacity-40" />
      <path d="M 500 500 L 850 850" stroke="url(#lineGlow)" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse opacity-40" />
    </svg>
  );
}

export function Team() {
  const { t } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const captain = teamMembers[0];
  const crew = teamMembers.slice(1);

  return (
    <section id="team" className="py-20 md:py-32 bg-[#0B0F19] relative overflow-hidden min-h-[140vh] lg:min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          25% { opacity: 0.6; }
          50% { transform: translate(\${Math.random() * 100 - 50}px, \${Math.random() * -200}px) scale(1.2); opacity: 0.8; }
          75% { opacity: 0.4; }
        }
        @keyframes magic-aura {
          0% { transform: scale(1) rotate(0deg); opacity: 0.4; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 0.6; }
          100% { transform: scale(1) rotate(360deg); opacity: 0.4; }
        }
        @keyframes card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes captain-glow {
          0%, 100% { box-shadow: 0 0 30px rgba(245,158,11,0.2); }
          50% { box-shadow: 0 0 60px rgba(245,158,11,0.5); }
        }
        @keyframes rune-pulse {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 2px #f59e0b); }
          50% { filter: brightness(1.5) drop-shadow(0 0 10px #f59e0b); }
        }
        @keyframes slow-rotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}} />

      {/* BACKGROUND LOGO INTEGRATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1000px] aspect-square pointer-events-none opacity-[0.03] z-0">
          <motion.img 
            src={teamLogo} 
            alt="Background Logo" 
            className="w-full h-full object-contain"
            style={{ animation: 'slow-rotate 60s linear infinite' }}
          />
      </div>

      <MagicParticles />
      <StarConnection />
      
      <div className="absolute top-[10%] right-[15%] w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[180px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-32">
          <h2 className="text-5xl md:text-8xl font-extrabold mb-6 text-white tracking-tighter italic drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]">
            {t('teamTitle')}
          </h2>
          <div className="w-48 h-2 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8 rounded-full relative">
             <div className="absolute inset-0 bg-white/30 blur-md animate-pulse" />
          </div>
          <p className="text-amber-100/60 max-w-2xl mx-auto text-xl md:text-2xl font-light tracking-widest uppercase">
            {t('teamDescription')}
          </p>
        </div>

        {/* STAR LAYOUT */}
        <div className="relative max-w-7xl mx-auto h-auto lg:h-[800px] flex flex-col items-center">
          
          {/* Captain (Center) */}
          <motion.div 
            layoutId={captain.id}
            onClick={() => setSelectedMember(captain)}
            className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-40 w-full lg:w-[450px] mb-20 lg:mb-0 cursor-pointer"
          >
             <div 
              className="group relative"
              style={{ animation: 'card-float 4s ease-in-out infinite' }}
            >
              <div className="relative bg-amber-500/[0.05] backdrop-blur-3xl rounded-[3rem] p-12 border-2 border-amber-500/40 transition-all duration-700 h-full overflow-hidden shadow-2xl animate-captain-glow hover:border-amber-400">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-400 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.8)] border border-white/20">
                    <Star className="w-5 h-5 text-white fill-white animate-spin" style={{ animationDuration: '4s' }} />
                    <span className="text-white font-black text-sm uppercase tracking-[0.2em]">Captain Member</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 via-transparent to-white/10 opacity-40" />
                <div className="relative text-center z-20 mt-8">
                  <div className="mb-12 relative inline-block">
                    <div className="absolute inset-[-20%] bg-gradient-to-r from-amber-500/5 to-yellow-300/5 rounded-full blur-3xl animate-magic-aura" />
                    <motion.div className="relative" layoutId={`img-${captain.id}`}>
                      <div className="absolute inset-[-6px] bg-gradient-to-tr from-amber-500 via-white to-yellow-200 rounded-full shadow-[0_0_60px_rgba(245,158,11,0.6)]" />
                      <img 
                        src={captain.image} 
                        alt={captain.name} 
                        className="w-48 h-48 rounded-full object-cover border-4 border-[#0B0F19] relative z-10"
                      />
                    </motion.div>
                  </div>
                  <motion.h3 layoutId={`name-${captain.id}`} className="text-4xl font-black text-white mb-3 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{captain.name}</motion.h3>
                  <motion.div layoutId={`role-${captain.id}`} className="text-amber-400 font-black mb-8 uppercase tracking-[0.3em] text-sm py-2 px-6 bg-amber-500/20 rounded-full inline-block border-2 border-amber-400/30">
                    {captain.role}
                  </motion.div>
                  <p className="text-amber-100/40 text-xs uppercase tracking-widest font-black animate-pulse">Click to Reveal Presence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Crew Members */}
          <CrewCard member={crew[0]} position="lg:absolute lg:top-0 lg:left-0" delay={0.5} onClick={() => setSelectedMember(crew[0])} />
          <CrewCard member={crew[1]} position="lg:absolute lg:top-0 lg:right-0" delay={1.0} onClick={() => setSelectedMember(crew[1])} />
          <CrewCard member={crew[2]} position="lg:absolute lg:bottom-0 lg:left-0" delay={1.5} onClick={() => setSelectedMember(crew[2])} />
          <CrewCard member={crew[3]} position="lg:absolute lg:bottom-0 lg:right-0" delay={2.0} onClick={() => setSelectedMember(crew[3])} />

        </div>
      </div>

      {/* DETAILED PRESENTATION MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
            />
            
            <motion.div 
              layoutId={selectedMember.id}
              className="relative w-full max-w-6xl h-[95vh] bg-[#0B0F19] border-2 border-amber-500/30 rounded-[4rem] overflow-hidden shadow-[0_0_150px_rgba(245,158,11,0.25)] flex flex-col lg:flex-row"
            >
              <MagicParticles count={60} />
              
              {/* Left Section: Visuals */}
              <div className="lg:w-2/5 relative bg-amber-500/[0.03] flex items-center justify-center p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-amber-500/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_80%)] from-amber-500/10" />
                <div className="relative">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute inset-[-50%] bg-amber-500/30 rounded-full blur-[120px] animate-magic-aura" 
                  />
                  <motion.div layoutId={`img-${selectedMember.id}`} className="relative">
                    <div className="absolute inset-[-12px] bg-gradient-to-tr from-amber-500 via-white to-yellow-200 rounded-full shadow-[0_0_100px_rgba(245,158,11,0.9)]" />
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover border-8 border-[#0B0F19] relative z-10"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="lg:w-3/5 p-12 lg:p-20 flex flex-col overflow-y-auto relative bg-[#0B0F19]/60 backdrop-blur-3xl">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-10 right-10 p-5 bg-white/5 rounded-full hover:bg-amber-500/20 text-white transition-all hover:rotate-90 group z-50"
                >
                  <X className="w-8 h-8 group-hover:text-amber-400" />
                </button>

                <div className="mb-16">
                  <motion.h3 layoutId={`name-${selectedMember.id}`} className="text-6xl font-black text-white mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                    {selectedMember.name}
                  </motion.h3>
                  <motion.div layoutId={`role-${selectedMember.id}`} className="text-amber-400 font-extrabold uppercase tracking-[0.5em] text-sm py-2.5 px-8 bg-amber-500/15 rounded-full inline-block border-2 border-amber-500/40">
                    {selectedMember.role}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                  {/* Magic Facts */}
                  <div className="space-y-8">
                     <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3 mb-6">
                        <Wand2 className="w-5 h-5 text-amber-500" /> Mystical Attributes
                      </h4>
                      {selectedMember.facts.map((fact, fIdx) => (
                        <motion.div 
                          key={fIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + fIdx * 0.1 }}
                          className="relative p-6 bg-white/[0.03] rounded-3xl border border-white/5 hover:border-amber-500/40 transition-all group/fact"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover/fact:opacity-100 transition-opacity rounded-3xl" />
                          <div className="flex items-center gap-5 relative z-10">
                            <div className="p-3 bg-amber-500/20 rounded-2xl text-amber-500">
                               <fact.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="text-[10px] text-amber-500/60 uppercase font-black tracking-widest mb-1">{fact.label}</p>
                              <p className="text-white font-bold tracking-wide">{fact.value}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                  </div>

                  {/* Magic Skills */}
                  <div className="space-y-10">
                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-xs flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-amber-500" /> Magical Arts
                    </h4>
                    <div className="space-y-8">
                      {selectedMember.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="group/skill">
                          <div className="flex justify-between text-amber-100/60 mb-3 text-sm font-black tracking-widest uppercase">
                            <span>{skill.name}</span>
                            <span className="text-amber-500">{skill.level}%</span>
                          </div>
                          <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 + sIdx * 0.1 }}
                              className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-500 rounded-full relative"
                            >
                              <div className="absolute inset-0 bg-white/40 animate-pulse blur-md" />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay:0.4 }}
                  className="text-amber-100/90 text-2xl leading-relaxed font-light italic mb-20 border-l-8 border-amber-500/30 pl-10"
                >
                  "{selectedMember.bio}"
                </motion.p>

                {/* Magical Links */}
                <div className="flex gap-8 mt-auto">
                   {Object.entries(selectedMember.links).map(([key, value], lIdx) => value && (
                      <motion.a 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + lIdx * 0.1 }}
                        key={lIdx}
                        href={value} 
                        className="p-6 bg-amber-500/10 rounded-3xl text-amber-500 hover:text-white transition-all hover:scale-125 hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] border border-amber-500/40 group"
                      >
                         {key === 'github' && <Github className="w-10 h-10" />}
                         {key === 'linkedin' && <Linkedin className="w-10 h-10" />}
                         {key === 'twitter' && <Twitter className="w-10 h-10" />}
                         {key === 'mail' && <Mail className="w-10 h-10" />}
                      </motion.a>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function CrewCard({ member, position, delay, onClick }: { member: TeamMember, position: string, delay: number, onClick: () => void }) {
  return (
    <motion.div 
      layoutId={member.id}
      onClick={onClick}
      className={`w-full lg:w-[350px] mb-12 lg:mb-0 ${position} cursor-pointer`}
    >
       <div 
        className="group relative"
        style={{ animation: 'card-float 6s ease-in-out infinite', animationDelay: `${delay}s` }}
      >
        <div className="relative bg-white/[0.02] backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 group-hover:border-amber-500/40 transition-all duration-700 h-full overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative text-center z-20">
            <div className="mb-6 relative inline-block">
              <div className="absolute inset-[-15%] bg-amber-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div layoutId={`img-${member.id}`} className="relative">
                <div className="absolute inset-[-3px] bg-gradient-to-tr from-amber-500/40 to-yellow-200/40 rounded-full group-hover:bg-amber-500 transition-all" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-28 h-28 rounded-full object-cover border-4 border-[#0B0F19] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
            </div>
            <motion.h3 layoutId={`name-${member.id}`} className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-amber-200 transition-colors">
              {member.name}
            </motion.h3>
            <motion.div layoutId={`role-${member.id}`} className="text-amber-400/60 font-semibold mb-6 uppercase tracking-[0.2em] text-[10px] py-1 px-4 bg-white/5 rounded-full inline-block border border-white/10 group-hover:border-amber-500/30 group-hover:text-amber-400">
              {member.role}
            </motion.div>
            <p className="text-amber-100/20 text-[8px] uppercase tracking-widest font-black animate-pulse group-hover:text-amber-500/60 transition-colors">Click to Expand Presence</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
