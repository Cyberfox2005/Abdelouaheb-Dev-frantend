import { useState, useEffect } from "react";
import { api, OrderItem } from "../services/api";
import { Clock, CheckCircle2, AlertCircle, XCircle, Plus, Calendar, DollarSign, Package } from "lucide-react";
import { OrderModal } from "./OrderModal";
import { motion } from "framer-motion";

export function ClientDashboard() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadOrders = async () => {
    setIsLoading(true);
    try {
      const data = await api.getMyOrders();
      setOrders(data);
    } catch {
      // Fallback
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const getStatusBadge = (status: OrderItem["status"]) => {
    switch (status) {
      case "pending":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">
            <Clock className="w-3.5 h-3.5" />
            <span>Pending Review</span>
          </span>
        );
      case "in_progress":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20 animate-pulse">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>In Progress</span>
          </span>
        );
      case "completed":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Completed</span>
          </span>
        );
      case "cancelled":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-xs font-bold border border-rose-500/20">
            <XCircle className="w-3.5 h-3.5" />
            <span>Cancelled</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-16 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-cyan)]/10 text-[var(--brand-cyan)] text-xs font-bold uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5" />
              <span>Client Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              My Project Orders
            </h1>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--brand-cyan)] to-[var(--brand-purple)] text-white font-bold text-sm shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
            <span>New Order</span>
          </button>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800 shadow-lg">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Active Orders Yet</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6 text-sm">
              You haven't submitted any custom project requests or service orders yet. Select a service to get started!
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-2xl bg-[var(--brand-cyan)] text-white font-bold text-sm shadow-md hover:bg-[var(--brand-cyan)]/90 transition-colors"
            >
              Order a Project
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                key={order.id}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-gray-200/80 dark:border-gray-800 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <div className="text-xs font-mono text-[var(--brand-cyan)] mb-1">
                      Order #{order.id} • Submitted {new Date(order.created_at).toLocaleDateString()}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {order.project_title}
                    </h3>
                  </div>

                  {getStatusBadge(order.status)}
                </div>

                {/* Requirements Summary */}
                <div className="py-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Requirements Summary
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-gray-50 dark:bg-slate-950 p-4 rounded-2xl border border-gray-100 dark:border-gray-800/60">
                    {order.requirements}
                  </p>
                </div>

                {/* Details Meta Row */}
                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1.5 font-bold text-gray-900 dark:text-white">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span>Budget: ${order.budget}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-medium">
                    <Calendar className="w-4 h-4 text-[var(--brand-cyan)]" />
                    <span>Deadline: {order.deadline_days} Days</span>
                  </div>

                  {order.service_title && (
                    <div className="flex items-center gap-1.5 font-medium">
                      <Package className="w-4 h-4 text-[var(--brand-purple)]" />
                      <span>Package: {order.service_title}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOrderSuccess={loadOrders}
      />
    </div>
  );
}
