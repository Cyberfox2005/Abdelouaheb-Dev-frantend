import React, { useState } from "react";
import { X, Send, DollarSign, Calendar, Sparkles, CheckCircle2 } from "lucide-react";
import { api, ServiceItem } from "../services/api";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
  services?: ServiceItem[];
  onOrderSuccess?: () => void;
}

export function OrderModal({ isOpen, onClose, selectedService, services = [], onOrderSuccess }: OrderModalProps) {
  const [projectTitle, setProjectTitle] = useState("");
  const [requirements, setRequirements] = useState("");
  const [budget, setBudget] = useState(selectedService ? Number(selectedService.starting_price) : 300);
  const [deadlineDays, setDeadlineDays] = useState(selectedService ? selectedService.delivery_days : 5);
  const [serviceId, setServiceId] = useState<number | undefined>(selectedService?.id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state if selectedService changes
  React.useEffect(() => {
    if (selectedService) {
      setServiceId(selectedService.id);
      setBudget(Number(selectedService.starting_price));
      setDeadlineDays(selectedService.delivery_days);
      setProjectTitle(`Custom Order: ${selectedService.title}`);
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTitle.trim() || !requirements.trim()) {
      toast.error("Please fill in both Project Title and Requirements.");
      return;
    }

    setIsSubmitting(true);
    try {
      const order = await api.createOrder({
        service: serviceId,
        project_title: projectTitle,
        requirements: requirements,
        budget: Number(budget),
        deadline_days: Number(deadlineDays),
      });

      // Save locally to fallback state for instant demo feedback
      const existing = JSON.parse(localStorage.getItem("demo_client_orders") || "[]");
      localStorage.setItem("demo_client_orders", JSON.stringify([order, ...existing]));

      toast.success("Order Placed Successfully!", {
        description: `Order #${order.id} "${order.project_title}" has been submitted for review.`,
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      });

      if (onOrderSuccess) onOrderSuccess();
      onClose();
    } catch (err: any) {
      toast.error(err.message || "Failed to submit order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden p-6 sm:p-8"
        >
          {/* Close Trigger */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Title Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] text-xs font-bold uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Project Order Portal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              {selectedService ? `Order ${selectedService.title}` : "Request Custom Project"}
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Service Selection Dropdown */}
            {services.length > 0 && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Select Package / Service
                </label>
                <select
                  value={serviceId || ""}
                  onChange={(e) => {
                    const id = Number(e.target.value);
                    setServiceId(id);
                    const s = services.find((srv) => srv.id === id);
                    if (s) {
                      setBudget(Number(s.starting_price));
                      setDeadlineDays(s.delivery_days);
                      if (!projectTitle) setProjectTitle(`Order: ${s.title}`);
                    }
                  }}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-medium focus:outline-none focus:border-[var(--brand-cyan)]"
                >
                  <option value="">Custom Project Requirement</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} (Starting at ${s.starting_price})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Project Title Input */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Project Title
              </label>
              <input
                type="text"
                required
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="e.g. E-Commerce Website Rebuild"
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-cyan)]"
              />
            </div>

            {/* Requirements Description */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Project Requirements & Features
              </label>
              <textarea
                rows={4}
                required
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Describe your project goals, required tech stack, key features, and reference links..."
                className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[var(--brand-cyan)] resize-none"
              />
            </div>

            {/* Budget & Deadline Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Budget ($ USD)</span>
                </label>
                <input
                  type="number"
                  min={50}
                  step={50}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold focus:outline-none focus:border-[var(--brand-cyan)]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
                  <span>Target Deadline (Days)</span>
                </label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={deadlineDays}
                  onChange={(e) => setDeadlineDays(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-2xl bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold focus:outline-none focus:border-[var(--brand-cyan)]"
                />
              </div>
            </div>

            {/* Submit Action CTA */}
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-2xl border border-gray-200 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 rounded-2xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-bold text-sm shadow-lg shadow-[var(--brand-cyan)]/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "Submitting Order..." : "Place Order"}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
