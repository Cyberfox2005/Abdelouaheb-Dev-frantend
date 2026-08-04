import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, Code } from "lucide-react";

export function GitHubStats() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/Cyberfox2005")
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !stats) return null;

  const cards = [
    { label: "Repositories", value: stats.public_repos, icon: Github, color: "#00D4FF" },
    { label: "Followers", value: stats.followers, icon: Users, color: "#7C3AED" },
    { label: "Stars Earned", value: "150+", icon: Star, color: "#F59E0B" },
    { label: "Gists", value: stats.public_gists, icon: Code, color: "#3B82F6" }
  ];

  return (
    <section className="py-24 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-[#0A0F1E] border border-white/5 flex flex-col items-center text-center group hover:border-brand-cyan/20 transition-all"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${card.color}10`, color: card.color }}
              >
                <card.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-black text-white mb-2 tracking-tighter">
                {card.value}
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                {card.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
