import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import ServicesList from './components/ServicesList';
import UserProfile from './components/UserProfile';
import DogProfile from './components/DogProfile';
import CalendarPage from './components/CalendarPage';
import ClientBooking from './components/ClientBooking';
import OperatorDashboard from './components/OperatorDashboard';

import { User, Booking, Event, Dog } from './types';
import { MOCK_USER_CLIENT, MOCK_USER_OPERATOR, MOCK_BOOKINGS, MOCK_EVENTS, MOCK_ACTIVITIES_FIDO } from './services/mockData';
import { LucideDog, LucideShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDogId, setSelectedDogId] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [events, setEvents] = useState<Event[]>(MOCK_EVENTS);

  const navigate = (page: string) => {
      setCurrentPage(page);
      if (page !== 'dog-profile') setSelectedDogId(null);
  }

  const handleDogClick = (dogId: string) => {
      setSelectedDogId(dogId);
      navigate('dog-profile');
  };

  const handleLoginClient = () => {
    setCurrentUser(MOCK_USER_CLIENT);
    navigate('home');
  };

  const handleLoginOperator = () => {
    setCurrentUser(MOCK_USER_OPERATOR);
    navigate('operator-dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    navigate('login');
  };

  const renderContent = () => {
    if (!currentUser) return null;

    if (currentPage === 'dog-profile' && selectedDogId) {
        const dog = currentUser.dogs?.find(d => d.id === selectedDogId);
        if (dog) {
            return <DogProfile dog={dog} activities={MOCK_ACTIVITIES_FIDO} onBack={() => navigate('profile')} />;
        }
    }

    switch (currentPage) {
      case 'home':
        return <Home user={currentUser} events={events} onNavigate={navigate} />;
      case 'services':
        return <ServicesList onNavigate={navigate} />;
      case 'book':
        return <ClientBooking dogs={currentUser.dogs || []} />;
      case 'calendar':
          return <CalendarPage />;
      case 'profile':
        return <UserProfile user={currentUser} bookings={bookings} onNavigate={navigate} onDogClick={handleDogClick} />;
      case 'operator-dashboard':
        return <OperatorDashboard bookings={bookings} events={events} />;
      default:
        return <div className="p-8 text-center text-slate-400">Pagina in costruzione...</div>;
    }
  };

  // Login Screen
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-3xl shadow-xl p-8 text-center border border-slate-100">
          <div className="w-20 h-20 bg-violet-600 rounded-3xl mx-auto flex items-center justify-center mb-6 shadow-lg shadow-violet-200">
             <span className="text-white font-bold text-4xl">C</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">CynoCenter</h1>
          <p className="text-slate-500 mb-8">App Ufficiale</p>
          
          <div className="space-y-4">
            <button 
              onClick={handleLoginClient}
              className="w-full flex items-center justify-center space-x-3 bg-violet-600 hover:bg-violet-700 text-white py-4 px-4 rounded-2xl transition-all transform hover:scale-[1.02] shadow-md shadow-violet-200"
            >
              <LucideDog />
              <span className="font-bold text-lg">Accedi come Cliente</span>
            </button>
            
            <button 
              onClick={handleLoginOperator}
              className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-slate-100 text-slate-700 hover:border-slate-300 hover:bg-slate-50 py-4 px-4 rounded-2xl transition-all"
            >
              <LucideShieldCheck />
              <span className="font-bold text-lg">Area Operatori</span>
            </button>
          </div>
          
          <p className="mt-12 text-xs text-slate-300">
            Powered by React Native & Google Gemini
          </p>
        </div>
      </div>
    );
  }

  return (
    <Layout 
      user={currentUser} 
      onLogout={handleLogout} 
      currentPage={currentPage}
      onNavigate={navigate}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;