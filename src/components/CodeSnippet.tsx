import { motion } from "framer-motion";

export function CodeSnippet() {
  const code = `class YugurthaDeveloper {
    /**
     * @mission Building digital experiences beyond code.
     * @philosophy Craftsmanship, Innovation, Amazigh Heritage.
     */
    fun create(idea: Idea): Result {
        return idea
            .validate()
            .apply { Engineering.excellence() }
            .transform { Impact.maximum() }
    }
}`;

  return (
    <section className="py-24 bg-[#05070B] overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#0A0F1E] p-8 shadow-2xl"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-brand-cyan/20" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Philosophy.kt</span>
            </div>

            <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto custom-scrollbar">
              <code className="text-gray-400">
                {code.split('\n').map((line, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="w-6 text-gray-700 text-right select-none">{i + 1}</span>
                    <span dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/(class|fun|return|val)/g, '<span class="text-brand-purple">$1</span>')
                        .replace(/(YugurthaDeveloper|Idea|Result|Engineering|Impact)/g, '<span class="text-brand-cyan">$1</span>')
                        .replace(/(\/\/.*|\/\*[\s\S]*?\*\/)/g, '<span class="text-gray-600">$1</span>')
                    }} />
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
