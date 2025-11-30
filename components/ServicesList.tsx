import React from 'react';
import { LucideSearch } from 'lucide-react';

interface ServicesListProps {
  onNavigate: (page: string) => void;
}

const ServicesList: React.FC<ServicesListProps> = ({ onNavigate }) => {
  const services = [
    {
        title: "Corsi di Educazione",
        desc: "Percorsi personalizzati per ogni età e livello.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
        cta: "Scopri di più",
        link: "book"
    },
    {
        title: "Asilo Diurno",
        desc: "Socializzazione e divertimento sotto la nostra supervisione.",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80",
        cta: "Vedi Calendario",
        link: "calendar"
    },
    {
        title: "Pensione",
        desc: "Un soggiorno sicuro e sereno quando sei via.",
        image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80",
        cta: "Scopri di più",
        link: "book"
    },
    {
        title: "Eventi e Webinar",
        desc: "Incontri, workshop e seminari per approfondire.",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
        cta: "Vedi Calendario",
        link: "calendar"
    },
    {
        title: "Dog Sitting",
        desc: "Cura e attenzioni a domicilio.",
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
        cta: "Scopri di più",
        link: "book"
    }
  ];

  return (
    <div className="space-y-6">
        {/* Search Bar */}
        <div className="relative">
            <LucideSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input 
                type="text" 
                placeholder="Cerca un servizio" 
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
        </div>

        {/* Services Cards */}
        <div className="space-y-6">
            {services.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                    <div className="h-40 rounded-xl overflow-hidden mb-4">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{service.desc}</p>
                    <button 
                        onClick={() => onNavigate(service.link)}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
                    >
                        {service.cta}
                    </button>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ServicesList;