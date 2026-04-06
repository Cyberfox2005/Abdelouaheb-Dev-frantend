import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

export type ServiceStatus = 'pending' | 'in-progress' | 'completed';

export interface SelectedService {
  id: string;
  status: ServiceStatus;
  addedAt: string;
}

interface ServiceContextType {
  selectedServices: SelectedService[];
  addService: (id: string) => void;
  removeService: (id: string) => void;
  updateServiceStatus: (id: string, status: ServiceStatus) => void;
  isServiceSelected: (id: string) => boolean;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

export function ServiceProvider({ children }: { children: ReactNode }) {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('client_services');
    if (saved) {
      try {
        setSelectedServices(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved services', e);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('client_services', JSON.stringify(selectedServices));
    }
  }, [selectedServices, mounted]);

  const addService = (id: string) => {
    if (selectedServices.find(s => s.id === id)) {
      toast.error('Service already in your portfolio');
      return;
    }
    const newService: SelectedService = {
      id,
      status: 'pending',
      addedAt: new Date().toISOString(),
    };
    setSelectedServices(prev => [...prev, newService]);
    toast.success('Service added to your portfolio!');
  };

  const removeService = (id: string) => {
    setSelectedServices(prev => prev.filter(s => s.id !== id));
    toast.info('Service removed from your portfolio');
  };

  const updateServiceStatus = (id: string, status: ServiceStatus) => {
    setSelectedServices(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const isServiceSelected = (id: string) => {
    return !!selectedServices.find(s => s.id === id);
  };

  return (
    <ServiceContext.Provider value={{ selectedServices, addService, removeService, updateServiceStatus, isServiceSelected }}>
      {children}
    </ServiceContext.Provider>
  );
}

export function useServiceManager() {
  const context = useContext(ServiceContext);
  if (context === undefined) {
    throw new Error('useServiceManager must be used within a ServiceProvider');
  }
  return context;
}
