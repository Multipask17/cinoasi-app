import React from 'react';
import { User, Event } from '../types';
import { LucideBell, LucideChevronRight, LucideGraduationCap, LucideHome, LucideVideo, LucideLuggage } from 'lucide-react';

interface HomeProps {
  user: User;
  events: Event[];
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ user, events, onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-2xl font-bold text-slate-800">Ciao, {user.name.split(' ')[0]}!</h1>
           <p className="text-slate-500 text-sm">Bentornato al centro.</p>
        </div>
        <button className="p-2 relative">
            <LucideBell className="text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
      </div>

      {/* Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg h-48 md:h-64 group cursor-pointer" onClick={() => onNavigate('calendar')}>
        <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80" 
            alt="Agility Dog" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-1">Nuovo Corso di Agility: <br/> Iscrizioni Aperte!</h2>
            <p className="text-slate-200 text-sm">Migliora l'intesa con il tuo cane.</p>
        </div>
      </div>

      {/* Services Quick Links */}
      <div>
        <h3 className="font-bold text-lg text-slate-800 mb-4">I Nostri Servizi</h3>
        <div className="grid grid-cols-2 gap-4">
            <button onClick={() => onNavigate('services')} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:bg-slate-50 transition-colors py-8">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                    <LucideGraduationCap size={24} />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">Corsi di Formazione</span>
            </button>
            <button onClick={() => onNavigate('services')} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:bg-slate-50 transition-colors py-8">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                    <LucideHome size={24} />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">Asilo Diurno</span>
            </button>
            <button onClick={() => onNavigate('services')} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:bg-slate-50 transition-colors py-8">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                    <LucideVideo size={24} />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">Webinar Online</span>
            </button>
            <button onClick={() => onNavigate('services')} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-3 hover:bg-slate-50 transition-colors py-8">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
                    <LucideLuggage size={24} />
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">Pensione</span>
            </button>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <h3 className="font-bold text-lg text-slate-800 mb-4">Prossimi Appuntamenti</h3>
        <div className="space-y-3">
            {events.slice(0, 2).map((evt, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="bg-orange-500 text-white rounded-xl p-2 w-14 h-14 flex flex-col items-center justify-center leading-none shadow-orange-200">
                        <span className="text-[10px] uppercase font-bold">OTT</span>
                        <span className="text-xl font-bold">{evt.date}</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800">{evt.title}</h4>
                        <p className="text-xs text-slate-500">Inizio alle ore {evt.time}</p>
                    </div>
                    <LucideChevronRight className="text-slate-300" />
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;