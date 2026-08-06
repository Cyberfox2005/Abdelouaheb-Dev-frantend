import { motion } from "framer-motion";
import { Zap, Shield, Target } from "lucide-react";
import personalPhoto from "../assets/";

export function About() {
  return (
    <section id="about" className="py-32 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rtl:text-right"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-brand-cyan" />
              <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.4em]">Heritage & Craft</span>
            </div>

            <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 uppercase tracking-tighter">
              Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">Abdelouaheb Benachi</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Based in <span className="text-white font-medium">Algiers, Algeria</span>, I am a Software Engineer driven by the quest for leadership and innovation. My journey is defined by digital craftsmanship and a commitment to excellence.
              </p>
              <p>
                I specialize in mastering the complexity of <span className="text-white font-medium">Distributed Backends</span> and <span className="text-white font-medium">Fluid Cross-Platform Interfaces</span>. My core expertise includes <span className="text-brand-cyan">Flutter</span>, <span className="text-brand-blue">Kotlin</span>, <span className="text-brand-purple">Spring Boot</span>, <span className="text-brand-cyan">Django</span>, and <span className="text-brand-blue">Laravel</span>.
              </p>
              <p>
                I don't just build applications; I engineer ecosystems. Every pixel and every line of code is intentional, serving a purpose beyond mere functionality—it's about creating an <span className="text-white font-medium">unforgettable digital experience</span>.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-brand-cyan" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Precision Driven</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-brand-purple" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Innovation Core</span>
              </div>
            </div>
          </motion.div>

          {/* Personal Photo Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            {/* Geometric Shapes representing Yugurtha's Crown/Armor style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-full h-full border border-white/5 rounded-[40%] opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-4/5 h-4/5 border border-brand-cyan/10 rounded-[35%] opacity-30"
              />

              {/* Central Photo Container */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center group overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-brand-cyan/5 group-hover:bg-transparent transition-colors z-20" />
                <img
                  src={personalPhoto}
                  alt="Abdelouaheb Benachi"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-cyan/5 blur-[100px] rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
