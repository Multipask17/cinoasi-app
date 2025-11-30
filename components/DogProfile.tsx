import React, { useState } from 'react';
import { Dog, Activity, ServiceType } from '../types';
import { LucideArrowLeft, LucideEdit2, LucideTrophy, LucideHome, LucideSyringe, LucideLuggage, LucidePlus } from 'lucide-react';

interface DogProfileProps {
  dog: Dog;
  activities: Activity[];
  onBack: () => void;
}

const DogProfile: React.FC<DogProfileProps> = ({ dog, activities, onBack }) => {
  const [activeTab, setActiveTab] = useState<'attivita' | 'galleria' | 'note'>('attivita');

  const getActivityIcon = (type: ServiceType) => {
    switch(type) {
        case ServiceType.LESSON: return <div className="bg-violet-100 text-violet-600 p-2 rounded-full"><LucideTrophy size={16} /></div>;
        case ServiceType.DAYCARE: return <div className="bg-violet-100 text-violet-600 p-2 rounded-full"><LucideHome size={16} /></div>;
        case ServiceType.VET: return <div className="bg-violet-100 text-violet-600 p-2 rounded-full"><LucideSyringe size={16} /></div>;
        case ServiceType.BOARDING: return <div className="bg-violet-100 text-violet-600 p-2 rounded-full"><LucideLuggage size={16} /></div>;
        default: return <div className="bg-slate-100 text-slate-600 p-2 rounded-full"><LucideHome size={16} /></div>;
    }
  };

  return (
    <div className="space-y-6">
       {/* Header */}
       <div className="flex items-center justify-between">
            <button onClick={onBack}><LucideArrowLeft className="text-slate-800" /></button>
            <h1 className="text-lg font-bold text-slate-800">Profilo di {dog.name}</h1>
            <button><LucideEdit2 className="text-slate-800" size={20} /></button>
        </div>

        {/* Dog Avatar & Info */}
        <div className="flex flex-col items-center text-center">
             <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
                <img src={dog.photoUrl} alt={dog.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">{dog.name}</h2>
            <p className="text-emerald-600 text-sm font-medium">{dog.breed}, {dog.age} anni, {dog.gender}</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200">
            {['Attività', 'Galleria', 'Note'].map((tab) => (
                <button 
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase() as any)}
                    className={`flex-1 pb-3 text-sm font-semibold capitalize ${
                        activeTab === tab.toLowerCase() 
                        ? 'text-violet-600 border-b-2 border-violet-600' 
                        : 'text-slate-400'
                    }`}
                >
                    {tab}
                </button>
            ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
            {activeTab === 'attivita' && (
                <div className="relative pl-4 space-y-8 before:content-[''] before:absolute before:left-[27px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100">
                    {activities.map((act, idx) => (
                        <div key={idx} className="relative flex items-start gap-4">
                            <div className="relative z-10 bg-slate-50 rounded-full border-4 border-white shadow-sm">
                                {getActivityIcon(act.type)}
                            </div>
                            <div className="pt-1">
                                <h4 className="font-bold text-slate-900">{act.title}</h4>
                                <div className="flex items-center gap-2 text-sm mt-0.5">
                                    <span className={act.status === 'In programma' ? 'text-orange-500' : 'text-emerald-600'}>
                                        {act.date} - {act.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
             {activeTab === 'galleria' && (
                 <div className="grid grid-cols-3 gap-2">
                    <img src="https://picsum.photos/200?random=1" className="rounded-lg w-full aspect-square object-cover" />
                    <img src="https://picsum.photos/200?random=2" className="rounded-lg w-full aspect-square object-cover" />
                    <img src="https://picsum.photos/200?random=3" className="rounded-lg w-full aspect-square object-cover" />
                 </div>
             )}
             {activeTab === 'note' && (
                 <p className="text-slate-500 text-sm italic">Nessuna nota aggiuntiva.</p>
             )}
        </div>

        <button className="fixed bottom-24 right-6 md:absolute md:bottom-0 md:right-0 bg-violet-600 text-white rounded-full px-6 py-3 shadow-lg shadow-violet-200 font-bold flex items-center gap-2 hover:bg-violet-700 transition-colors z-40">
            <LucidePlus size={20} />
            Aggiungi
        </button>
    </div>
  );
};

export default DogProfile;