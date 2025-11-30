import React from 'react';
import { User, Booking } from '../types';
import { LucideSettings, LucideChevronRight, LucidePlus, LucideCalendarCheck, LucideCheckCircle, LucideArrowLeft } from 'lucide-react';

interface UserProfileProps {
  user: User;
  bookings: Booking[];
  onNavigate: (page: string) => void;
  onDogClick: (dogId: string) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, bookings, onNavigate, onDogClick }) => {
  return (
    <div className="space-y-8">
        {/* Header (Custom for this page in mockup) */}
        <div className="flex items-center justify-between">
            <button onClick={() => onNavigate('home')}><LucideArrowLeft className="text-slate-800" /></button>
            <h1 className="text-lg font-bold text-slate-800">Il mio Profilo</h1>
            <button onClick={() => onNavigate('settings')}><LucideSettings className="text-slate-800" /></button>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-violet-100">
                <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
            <p className="text-slate-500 text-sm">{user.email}</p>
            <p className="text-slate-500 text-sm">{user.phone}</p>
            
            <button className="mt-4 w-full bg-violet-600 text-white font-bold py-3 rounded-xl hover:bg-violet-700 transition-colors">
                Modifica Dati
            </button>
        </div>

        {/* My Dogs Section */}
        <div>
            <h3 className="font-bold text-lg text-slate-800 mb-4">I Miei Cani</h3>
            <div className="space-y-3">
                {user.dogs?.map(dog => (
                    <div 
                        key={dog.id} 
                        onClick={() => onDogClick(dog.id)}
                        className="bg-slate-50 p-4 rounded-xl flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <img src={dog.photoUrl} alt={dog.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="font-medium text-slate-900">{dog.name}</span>
                        </div>
                        <LucideChevronRight className="text-slate-400" />
                    </div>
                ))}
            </div>
            
            <button className="mt-4 w-full bg-violet-100 text-violet-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-violet-200 transition-colors">
                <LucidePlus size={20} />
                Aggiungi Cane
            </button>
        </div>

        {/* Recent Activities */}
        <div>
            <div className="flex justify-between items-end mb-4">
                <h3 className="font-bold text-lg text-slate-800">Le Mie Attività Recenti</h3>
                <button className="text-orange-500 text-sm font-semibold">Vedi tutte</button>
            </div>

            {bookings.length > 0 ? (
                <div className="space-y-3">
                    {bookings.map(booking => (
                        <div key={booking.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="font-bold text-slate-900">{booking.title}</h4>
                                <LucideChevronRight className="text-slate-300 w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600 mb-2">
                                <LucideCalendarCheck size={16} />
                                <span>{booking.date} - {booking.time}</span>
                            </div>
                            {booking.status === 'CONFIRMED' && (
                                <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
                                    <LucideCheckCircle size={14} />
                                    Confermato
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50">
                     <div className="w-12 h-12 bg-slate-200 rounded-lg mx-auto flex items-center justify-center text-slate-400 mb-4">
                        <LucideCalendarCheck />
                     </div>
                     <h4 className="text-slate-800 font-medium mb-1">Nessuna iscrizione trovata.</h4>
                     <p className="text-sm text-slate-500 mb-6">Non ti sei ancora iscritto a nessuna attività. Scopri i nostri corsi!</p>
                     <button onClick={() => onNavigate('services')} className="bg-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                        Sfoglia Eventi
                     </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default UserProfile;