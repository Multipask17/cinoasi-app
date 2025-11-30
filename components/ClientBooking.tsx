import React, { useState } from 'react';
import { Dog, ServiceType } from '../types';
import { LucideCar, LucideCalendarCheck, LucideGraduationCap, LucideHome } from 'lucide-react';

interface ClientBookingProps {
  dogs: Dog[];
}

const ClientBooking: React.FC<ClientBookingProps> = ({ dogs }) => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [selectedDog, setSelectedDog] = useState<string>(dogs[0]?.id || '');
  const [date, setDate] = useState('');
  const [taxi, setTaxi] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setSuccessMsg('Prenotazione inviata con successo! In attesa di conferma.');
        setSelectedService(null);
        setTaxi(false);
        setDate('');
    }, 800);
  };

  const ServiceCard = ({ type, icon: Icon, title, desc }: { type: ServiceType, icon: any, title: string, desc: string }) => (
    <div 
        onClick={() => setSelectedService(type)}
        className={`cursor-pointer border-2 rounded-xl p-6 transition-all hover:shadow-lg ${
            selectedService === type 
            ? 'border-emerald-500 bg-emerald-50' 
            : 'border-slate-100 bg-white hover:border-emerald-200'
        }`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${selectedService === type ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-600'}`}>
            <Icon size={24} />
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
    </div>
  );

  if (successMsg) {
      return (
          <div className="bg-emerald-100 border border-emerald-300 text-emerald-800 p-8 rounded-xl text-center animate-fade-in">
              <div className="flex justify-center mb-4">
                  <div className="bg-emerald-500 text-white rounded-full p-3">
                    <LucideCalendarCheck size={32} />
                  </div>
              </div>
              <h2 className="text-2xl font-bold mb-2">Richiesta Ricevuta!</h2>
              <p>{successMsg}</p>
              <button 
                onClick={() => setSuccessMsg('')}
                className="mt-6 text-emerald-700 font-semibold underline hover:text-emerald-900"
              >
                  Effettua un'altra prenotazione
              </button>
          </div>
      )
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Prenota un Servizio</h2>
        <p className="text-slate-500">Seleziona il servizio e compila i dettagli per il tuo cane.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ServiceCard 
            type={ServiceType.DAYCARE} 
            icon={LucideHome} 
            title="Asilo Diurno" 
            desc="Giornata di gioco e socializzazione vigilata." 
        />
        <ServiceCard 
            type={ServiceType.LESSON} 
            icon={LucideGraduationCap} 
            title="Lezione Privata" 
            desc="Sessione 1-on-1 con un educatore cinofilo." 
        />
        <ServiceCard 
            type={ServiceType.BOARDING} 
            icon={LucideCalendarCheck} 
            title="Pensione" 
            desc="Soggiorno notturno confortevole." 
        />
      </div>

      {selectedService && (
        <form onSubmit={handleBooking} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm animate-fade-in-up">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                Dettagli Prenotazione: <span className="text-emerald-600">{selectedService}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Seleziona Cane</label>
                    <select 
                        value={selectedDog}
                        onChange={(e) => setSelectedDog(e.target.value)}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                        {dogs.map(dog => <option key={dog.id} value={dog.id}>{dog.name}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Data Richiesta</label>
                    <input 
                        type="date" 
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                </div>
            </div>

            {selectedService === ServiceType.DAYCARE && (
                <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <LucideCar className="text-slate-500" />
                        <div>
                            <span className="block font-medium text-slate-900">Servizio Taxi Dog</span>
                            <span className="text-xs text-slate-500">Presa e riconsegna a domicilio (+10€)</span>
                        </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={taxi} onChange={(e) => setTaxi(e.target.checked)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                </div>
            )}

            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-colors">
                Conferma Prenotazione
            </button>
        </form>
      )}
    </div>
  );
};

export default ClientBooking;
