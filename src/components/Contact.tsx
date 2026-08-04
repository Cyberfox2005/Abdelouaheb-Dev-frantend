import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message Transmitted", {
        description: "Your communication has been received by Yugurtha Dev HQ.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-[#05070B] relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-cyan/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Branding & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-8 uppercase tracking-tighter">
              Initiate <span className="text-brand-cyan">Contact</span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 max-w-md leading-relaxed">
              Every great application begins with an idea. Let's synchronize and build your digital vision into reality.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-cyan/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 font-bold">Encrypted Mail</div>
                  <div className="text-white font-mono">ben689533@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-purple/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-600 mb-1 font-bold">Direct Channels</div>
                  <div className="text-white font-mono">Open for New Missions</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: "#00D4FF" }}
                  className="w-14 h-14 rounded-2xl border border-white/5 flex items-center justify-center text-gray-500 hover:border-brand-cyan/30 transition-all bg-white/5"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Futuristic Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <form onSubmit={handleSubmit} className="relative z-10 p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-cyan focus:outline-none transition-all peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-brand-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand-cyan peer-[:not(:placeholder-shown)]:text-xs">
                    Operator Identity
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-cyan focus:outline-none transition-all peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-brand-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand-cyan peer-[:not(:placeholder-shown)]:text-xs">
                    Communication Protocol (Email)
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:border-brand-cyan focus:outline-none transition-all peer resize-none"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-brand-cyan peer-focus:text-xs peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-brand-cyan peer-[:not(:placeholder-shown)]:text-xs">
                    Mission Brief
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-2xl bg-brand-cyan text-black font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? "Transmitting..." : <>Transmit Message <Send className="w-5 h-5" /></>}
                </motion.button>
              </div>
            </form>

            {/* Decoration */}
            <div className="absolute top-[-20px] right-[-20px] w-20 h-20 border-t-2 border-r-2 border-brand-cyan/20 pointer-events-none" />
            <div className="absolute bottom-[-20px] left-[-20px] w-20 h-20 border-b-2 border-l-2 border-brand-purple/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
