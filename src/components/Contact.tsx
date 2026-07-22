import React, { useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin, Phone, MessageSquare, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message Sent Successfully!", {
        description: "Thank you for reaching out, Abdelouaheb will get back to you shortly.",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <Mail className="w-4 h-4" />
            <span>{t("contactTitle") || "Get In Touch"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            {t("contactDescription") ||
              "Have a project in mind, a question, or an opportunity? Feel free to reach out!"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-[var(--brand-cyan)]" />
                <span>Contact Details</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:ben689533@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-[var(--brand-cyan)] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Email Me</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">ben689533@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                  <div className="p-3 rounded-xl bg-[var(--brand-purple)]/10 text-[var(--brand-purple)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Location</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Algiers, Algeria 🇩🇿</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Availability</div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Open for Freelance & Full-Time</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Follow & Connect
                </div>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Github, href: "https://github.com/Cyberfox2005", label: "GitHub" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/abdelouhab-benachi-4628632b0/", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:ben689533@gmail.com", label: "Email" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:text-[var(--brand-cyan)] hover:border-[var(--brand-cyan)] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200/80 dark:border-gray-800 shadow-xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Send a Message
              </h3>

              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("yourName") || "Your Name"}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-950 border ${
                    errors.name ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                  } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-cyan)] transition-colors`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("yourEmail") || "Your Email"}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className={`w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-950 border ${
                    errors.email ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                  } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-cyan)] transition-colors`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t("yourMessage") || "Your Message"}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className={`w-full px-4 py-3.5 rounded-2xl bg-gray-50 dark:bg-slate-950 border ${
                    errors.message ? "border-red-500" : "border-gray-200 dark:border-gray-800"
                  } text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-cyan)] transition-colors resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-bold text-base shadow-lg shadow-[var(--brand-cyan)]/25 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? t("sending") || "Sending..." : t("sendMessage") || "Send Message"}</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}