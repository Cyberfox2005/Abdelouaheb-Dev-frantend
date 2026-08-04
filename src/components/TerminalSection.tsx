import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export function TerminalSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; result: string | string[] }[]>([
    { cmd: "whoami", result: "YUGURTHA_DEV v1.0.0 - Software Architect & Creative Engineer" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const commands: Record<string, string | string[]> = {
    help: ["Available commands:", "  whoami   - Display identity", "  skills   - List tech stack", "  projects - Recent builds", "  clear    - Clear console", "  contact  - Get social links"],
    whoami: "Identity: Yugurtha Dev. Mission: Building digital experiences beyond code. Philosophy: Craftsmanship over completion.",
    skills: ["Tech Stack:", "  - Flutter / Dart", "  - Kotlin / Spring Boot", "  - Python / Django", "  - C++ / System Design", "  - Linux / Docker"],
    projects: ["Recent Missions:", "  - Chifa Medical Platform", "  - NextGen E-Commerce", "  - CyberTask Productivity", "  - PulseFit Mobile"],
    contact: ["Communication Channels:", "  - GitHub: @Cyberfox2005", "  - LinkedIn: /in/yugurtha-dev", "  - Email: ben689533@gmail.com"],
    "sudo hire yugurtha": "ACCESS_GRANTED: Initializing recruitment protocol... Redirecting to contact section.",
    "sudo make me coffee": "Permission denied: ☕ User is not in the sudoers file. This incident will be reported.",
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
    } else {
      const result = commands[cmd] || `Command not found: ${cmd}. Type 'help' for options.`;
      setHistory((prev) => [...prev, { cmd, result }]);
    }
    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section className="py-24 bg-[#05070B] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#0A0F1E]"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-4 text-xs font-mono text-gray-500 flex items-center gap-2">
                <Terminal className="w-3 h-3" /> yugurtha — zsh
              </span>
            </div>
            <span className="text-[10px] text-gray-600 font-mono">127.0.0.1</span>
          </div>

          {/* Terminal Body */}
          <div
            ref={scrollRef}
            className="p-8 h-[400px] overflow-y-auto font-mono text-sm space-y-4 custom-scrollbar"
          >
            {history.map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-brand-cyan">❯</span>
                  <span className="text-white">{item.cmd}</span>
                </div>
                <div className="text-gray-400 pl-4 whitespace-pre-wrap">
                  {Array.isArray(item.result)
                    ? item.result.map((line, j) => <div key={j}>{line}</div>)
                    : item.result
                  }
                </div>
              </div>
            ))}

            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-brand-cyan animate-pulse">❯</span>
              <input
                autoFocus
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none outline-none text-white w-full p-0"
                placeholder="type 'help'..."
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
