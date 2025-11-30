import React from 'react';
import { LucideChevronLeft, LucideChevronRight, LucidePlus } from 'lucide-react';

const CalendarPage: React.FC = () => {
  // Static calendar render for mockup purposes
  const days = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  const dates = Array.from({length: 31}, (_, i) => i + 1);
  const offset = 2; // Starts on Tuesday

  return (
    <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center px-2">
            <LucideChevronLeft className="text-violet-600" />
            <h2 className="text-xl font-bold text-slate-800">Ottobre 2024</h2>
            <LucideChevronRight className="text-violet-600" />
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className="grid grid-cols-7 mb-4">
                {days.map(d => <div key={d} className="text-center text-xs font-bold text-slate-400">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-y-4">
                 {Array.from({length: offset}).map((_, i) => <div key={`empty-${i}`} />)}
                 {dates.map(date => {
                     const isSelected = date === 15;
                     const hasDot = [3, 5, 10, 15, 23].includes(date);
                     const dotColor = date === 15 ? 'bg-white' : (date % 2 === 0 ? 'bg-emerald-400' : 'bg-purple-400');
                     
                     return (
                         <div key={date} className="flex flex-col items-center gap-1 cursor-pointer">
                             <div className={`w-8 h-8 flex items-center justify-center text-sm rounded-full ${isSelected ? 'bg-violet-600 text-white font-bold' : 'text-slate-700'}`}>
                                 {date}
                             </div>
                             {hasDot && <div className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></div>}
                         </div>
                     )
                 })}
            </div>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button className="px-5 py-2 bg-violet-600 text-white rounded-full text-sm font-medium whitespace-nowrap">Tutti</button>
            <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span> Corsi
            </button>
            <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Asilo
            </button>
            <button className="px-5 py-2 bg-white border border-slate-200 text-slate-600 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-500"></span> Webinar
            </button>
        </div>

        {/* Events List */}
        <div>
            <h3 className="font-bold text-lg text-slate-800 mb-4">Eventi di Oggi</h3>
            <div className="space-y-3">
                <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                        <LucideChevronRight className="rotate-[-45deg]" /> {/* Mock icon */}
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800">Corso di Agility</h4>
                        <p className="text-sm text-slate-500">18:00 - 19:00</p>
                    </div>
                    <LucideChevronRight className="text-slate-300" />
                </div>
                 <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                        <LucideChevronRight className="rotate-[-45deg]" /> {/* Mock icon */}
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-slate-800">Asilo Giornaliero</h4>
                        <p className="text-sm text-slate-500">09:00 - 17:00</p>
                    </div>
                    <LucideChevronRight className="text-slate-300" />
                </div>
            </div>
        </div>

        <button className="fixed bottom-24 right-6 md:absolute md:bottom-0 md:right-0 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg shadow-orange-200 flex items-center justify-center hover:bg-orange-600 transition-colors z-40">
            <LucidePlus size={28} />
        </button>
    </div>
  );
};

export default CalendarPage;