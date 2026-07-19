import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ArrowLeft, Loader2, Link as LinkIcon, CheckCircle2 } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { useServiceManager, SelectedService } from "../components/ServiceContext";
import { useLanguage } from "../components/LanguageProvider";
import { allServices as services } from "../data/servicesData";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import { db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export function CartPage() {
  const { t } = useLanguage();
  const { user } = useAuth();
  const { selectedServices, removeService } = useServiceManager();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");

  // Sync cart to backend automatically when it changes and user is logged in
  useEffect(() => {
    if (user && selectedServices.length > 0) {
      const items = selectedServices.map(s => {
        const detail = services.find(ds => ds.id === s.id);
        return {
          serviceId: s.id,
          title: detail?.name || "Unknown Service",
          price: 50000 // mock price in DZD
        };
      });
      
      setDoc(doc(db, "carts", user.uid), {
        items,
        total: items.length * 50000,
        updatedAt: new Date().toISOString()
      }, { merge: true }).catch(err => console.error("Failed to sync cart:", err));
    }
  }, [user, selectedServices]);

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to place your order.");
      navigate("/login");
      return;
    }
    
    if (selectedServices.length === 0) return;

    setLoading(true);
    try {
      // Create order document in Firebase
      await setDoc(doc(db, "orders", `${user.uid}_${Date.now()}`), {
        userId: user.uid,
        items: selectedServices,
        description: projectDescription,
        status: "pending",
        createdAt: new Date().toISOString(),
        total: selectedServices.length * 50000
      });
      
      // Empty user's saved cart document manually
      await setDoc(doc(db, "carts", user.uid), {
        items: [],
        total: 0,
        updatedAt: new Date().toISOString()
      });
      
      // Clear local storage / context
      selectedServices.forEach(s => removeService(s.id));
      
      // Send Email via EmailJS
      try {
        const templateParams = {
          client_name: user.displayName || user.email?.split('@')[0] || "Client",
          client_email: user.email,
          project_description: projectDescription || "No description provided.",
          services_selected: selectedServices.map(s => {
            const detail = services.find(ds => ds.id === s.id);
            return detail ? detail.name : s.id;
          }).join(', '),
          total_price: (selectedServices.length * 50000).toLocaleString() + ' DZD'
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
        );
        console.log("Email notification sent successfully!");
      } catch (emailError) {
        console.error("Failed to send email notification", emailError);
      }
      
      toast.success("Order placed successfully!");
      setSuccess(true);
    } catch (err: any) {
      toast.error(err.message || "Failed to checkout");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0B0F19] pt-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl py-10 flex flex-col items-center">
           <CheckCircle2 className="h-24 w-24 text-green-500 mb-6" />
           <h1 className="text-4xl font-black text-white mb-4">Order Successful!</h1>
           <p className="text-gray-400 mb-8">We will contact you shortly about your selected technology services.</p>
           <Link to="/" className="px-8 py-3 bg-amber-500 text-[#0B0F19] rounded-xl font-bold uppercase tracking-wider hover:bg-white transition-all">
             Back to Home
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-10 max-w-4xl">
        <div className="mb-6 flex justify-between items-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-amber-500 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          {!user && (
            <Link to="/login" className="text-xs text-gray-400 hover:text-amber-500 flex items-center gap-2">
              <LinkIcon className="h-3 w-3" /> Login to Save Basket
            </Link>
          )}
        </div>

        <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-widest">Your Basket</h1>
        <p className="text-gray-400 mb-8 font-light text-sm">Review your selected technologies before proceeding.</p>

        {selectedServices.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
            <h3 className="text-xl text-white font-bold mb-4">Your basket is empty</h3>
             <Link to="/services" className="px-6 py-2 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-all text-sm">
                Explore Services
             </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {selectedServices.map(ss => {
                const detail = services.find(ds => ds.id === ss.id);
                if (!detail) return null;
                return (
                  <div key={ss.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 group">
                    <div className={`w-16 h-16 rounded-xl bg-${detail.accentColor}/20 flex items-center justify-center border border-${detail.accentColor}/30 shrink-0`}>
                       <detail.icon className={`h-8 w-8 text-${detail.accentColor}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white">{detail.name}</h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">{detail.category}</p>
                    </div>
                    <button onClick={() => removeService(ss.id)} className="p-3 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                )
              })}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Project Description</h3>
                <p className="text-gray-400 text-sm mb-4">Please provide details about your project, goals, and any specific requirements.</p>
                <textarea 
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="w-full bg-[#0B0F19] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-amber-500 transition-colors h-32 resize-none"
                  placeholder="Describe your vision here..."
                ></textarea>
              </div>
            </div>
            
            <div className="lg:col-span-1">
               <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest">Order Summary</h3>
                  
                  <div className="space-y-4 mb-6">
                     <div className="flex justify-between text-gray-400 text-sm">
                        <span>Items ({selectedServices.length})</span>
                        <span>{(selectedServices.length * 50000).toLocaleString()} DZD</span>
                     </div>
                     <div className="flex justify-between text-gray-400 text-sm">
                        <span>Setup Fee</span>
                        <span>0 DZD</span>
                     </div>
                     <div className="h-px w-full bg-white/10" />
                     <div className="flex justify-between text-white font-bold text-lg">
                        <span>Total Estimate</span>
                        <span className="text-amber-500">{(selectedServices.length * 50000).toLocaleString()} DZD</span>
                     </div>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout} 
                    disabled={loading}
                    className="w-full h-14 bg-amber-500 hover:bg-white text-[#0B0F19] font-black uppercase tracking-widest text-sm rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all"
                  >
                    {loading ? <Loader2 className="animate-spin h-5 w-5" /> : (user ? "Checkout" : "Login to Checkout")}
                  </Button>
               </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
