import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, LayoutGrid, Clock, CheckCircle2, ShieldEllipsis, Trash2, ArrowRight, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { useLanguage } from "../components/LanguageProvider";
import { useServiceManager, ServiceStatus } from "../components/ServiceContext";
import { services, Service } from "../components/Services";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useAuth } from "../contexts/AuthContext";

export function ProfilePage() {
  const { t } = useLanguage();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { selectedServices, removeService } = useServiceManager();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const getServiceStatusDetails = (status: ServiceStatus) => {
    switch (status) {
      case 'pending':
        return { 
          icon: Clock, 
          label: t('pending'), 
          color: "text-amber-500", 
          bgColor: "bg-amber-500/10",
          borderColor: "border-amber-500/20"
        };
      case 'in-progress':
        return { 
          icon: ShieldEllipsis, 
          label: t('inProgress'), 
          color: "text-blue-400", 
          bgColor: "bg-blue-500/10",
          borderColor: "border-blue-500/20"
        };
      case 'completed':
        return { 
          icon: CheckCircle2, 
          label: t('completed'), 
          color: "text-green-400", 
          bgColor: "bg-green-500/10",
          borderColor: "border-green-500/20"
        };
      default:
        return { 
          icon: Clock, 
          label: status, 
          color: "text-gray-400", 
          bgColor: "bg-gray-500/10",
          borderColor: "border-gray-500/20"
        };
    }
  };

  const getFullServiceData = (id: string): (Service & { status: ServiceStatus, addedAt: string }) | undefined => {
    const service = services.find(s => s.id === id);
    const selected = selectedServices.find(s => s.id === id);
    if (!service || !selected) return undefined;
    return { ...service, status: selected.status, addedAt: selected.addedAt };
  };

  const userServices = selectedServices
    .map(s => getFullServiceData(s.id))
    .filter((s): s is NonNullable<typeof s> => !!s);

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-black tracking-widest text-[#F59E0B] hover:text-white transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                {t("backHome")}
              </Link>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tight"
            >
              {t("myServices")}
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-[2rem] pr-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-amber-200 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <User className="h-6 w-6 text-[#0B0F19]" />
              </div>
              <div>
                <p className="text-white font-bold leading-none mb-1">{user?.displayName || user?.email?.split('@')[0] || "Client"}</p>
                <p className="text-amber-500/60 text-xs font-black uppercase tracking-widest leading-none">Client Portfolio</p>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLogout}
              className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Sidebar Info */}
           <div className="lg:col-span-1 space-y-6">
              <Card className="bg-white/5 border-white/10 text-white overflow-hidden relative group">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500 to-transparent" />
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <ShieldEllipsis className="h-5 w-5 text-amber-500" />
                    Portfolio Overview
                  </CardTitle>
                  <CardDescription className="text-gray-400">Manage your magical service requests.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-sm text-gray-400">Total Services</span>
                    <span className="text-lg font-black text-amber-500">{userServices.length}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-sm text-gray-400">Pending Manifestations</span>
                    <span className="text-lg font-black text-amber-500">
                      {userServices.filter(s => s.status === 'pending').length}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Link to="/services">
                <Button className="w-full h-16 rounded-2xl bg-amber-500 hover:bg-white text-[#0B0F19] font-black uppercase tracking-widest text-xs gap-2 group shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <LayoutGrid className="w-5 h-5" />
                  {t("goShopping")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
           </div>

           {/* Services List */}
           <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {userServices.length > 0 ? (
                  userServices.map((service, idx) => {
                    const status = getServiceStatusDetails(service.status);
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="bg-white/5 border-white/10 text-white overflow-hidden group hover:border-amber-500/30 transition-all duration-500">
                          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                            <div className={`w-20 h-20 shrink-0 rounded-2xl bg-${service.accentColor}/20 flex items-center justify-center border border-${service.accentColor}/30`}>
                              <service.icon className={`w-10 h-10 text-${service.accentColor}`} />
                            </div>
                            
                            <div className="grow text-center md:text-left">
                              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-2">
                                <h3 className="text-2xl font-black">{service.name}</h3>
                                <Badge className={`${status.bgColor} ${status.color} ${status.borderColor} border font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5`}>
                                  <status.icon className="w-3.5 h-3.5" />
                                  {status.label}
                                </Badge>
                              </div>
                              <p className="text-gray-400 text-sm mb-4 font-medium line-clamp-2">{service.description}</p>
                              <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">
                                {t('addedAt')}: {new Date(service.addedAt).toLocaleDateString()}
                              </p>
                            </div>

                            <div className="shrink-0 flex items-center gap-2">
                              <Button 
                                variant="ghost" 
                                size="icon"
                                onClick={() => removeService(service.id)}
                                className="w-12 h-12 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white transition-all shadow-none"
                              >
                                <Trash2 className="w-5 h-5" />
                              </Button>
                            </div>
                          </div>
                          
                          {/* Progress bar mock */}
                          <div className="h-1 w-full bg-white/5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: service.status === 'completed' ? '100%' : service.status === 'in-progress' ? '60%' : '5%' }}
                              className={`h-full bg-gradient-to-r ${
                                service.status === 'completed' ? 'from-green-500 to-green-300' :
                                service.status === 'in-progress' ? 'from-blue-500 to-blue-300' :
                                'from-amber-500 to-amber-300'
                              }`}
                            />
                          </div>
                        </Card>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center p-20 bg-white/5 border border-dashed border-white/10 rounded-[3rem] text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                      <LayoutGrid className="w-10 h-10 text-white/20" />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">{t("noServices")}</h3>
                    <p className="text-gray-400 mb-8 max-w-xs">{t("profileHint")}</p>
                    <Link to="/services">
                      <Button className="rounded-full bg-amber-500 hover:bg-white text-[#0B0F19] px-8 font-black uppercase tracking-widest text-xs">
                        {t("goShopping")}
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
}

