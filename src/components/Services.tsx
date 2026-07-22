import { useState, useEffect } from "react";
import { Check, Sparkles, Clock, DollarSign, ArrowRight } from "lucide-react";
import { api, ServiceItem } from "../services/api";
import { OrderModal } from "./OrderModal";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";

export function Services() {
  const { t } = useLanguage();
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await api.getServices();
        setServices(data);
      } catch {
        // Fallback default services
      } finally {
        setIsLoading(false);
      }
    }
    loadServices();
  }, []);

  const handleOrderClick = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-50/40 dark:bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t("servicesTitle") || "Our Services"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Professional Web & Mobile Development
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            {t("servicesDescription") ||
              "Select a service package or place a custom order to turn your product vision into reality"}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={service.id}
              className="rounded-3xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-gray-200/80 dark:border-gray-800/80 p-8 shadow-xl hover:shadow-2xl hover:border-[var(--brand-cyan)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight ribbon for mid package */}
              {idx === 1 && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[var(--brand-cyan)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xs font-semibold text-gray-400">Starting at</span>
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">
                    ${service.starting_price}
                  </span>
                </div>

                {/* Delivery Time Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-slate-800 text-xs font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  <Clock className="w-3.5 h-3.5 text-[var(--brand-cyan)]" />
                  <span>Est. Delivery: {service.delivery_days} Days</span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    What's Included:
                  </div>
                  {service.features_json.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Service Action Trigger */}
              <button
                onClick={() => handleOrderClick(service)}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-bold text-sm shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <span>Order Service</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Order Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[var(--brand-cyan)]/10 via-[var(--brand-purple)]/10 to-transparent border border-[var(--brand-cyan)]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Need a Custom Solution or Enterprise Application?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Submit your specific project specs, budget requirements, and desired timeline directly.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedService(null);
              setIsModalOpen(true);
            }}
            className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold text-sm shadow-md hover:border-[var(--brand-cyan)] hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
          >
            Request Custom Project
          </button>
        </div>

      </div>

      {/* Order Modal Component */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
        services={services}
        onOrderSuccess={() => {
          setIsModalOpen(false);
        }}
      />
    </section>
  );
}
