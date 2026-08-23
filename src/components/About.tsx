import { motion } from "framer-motion";
import { Zap, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center">
          
          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rtl:text-right"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[2px] w-12 bg-brand-cyan" />
              <span className="text-brand-cyan text-xs font-black uppercase tracking-[0.4em]">Heritage & Craft</span>
              <div className="h-[2px] w-12 bg-brand-cyan" />
            </div>

            <h2 className="text-5xl sm:text-7xl font-black text-white mb-10 uppercase tracking-tighter">
              Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple">Abdelouaheb Benachi</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
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

            <div className="mt-12 flex justify-center gap-12">
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

        </div>
      </div>
    </section>
  );
}
