import React from 'react';
import { User, UserRole } from '../types';
import { LucideLogOut, LucideUser, LucideCalendar, LucideHome, LucideSettings, LucideGrid, LucidePhone, LucideBookOpen, LucideUsers } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout, currentPage, onNavigate }) => {
  if (!user) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-100">{children}</div>;
  }

  const isOperator = user.role === UserRole.OPERATOR || user.role === UserRole.ADMIN;

  const NavItem = ({ page, icon: Icon, label }: { page: string, icon: any, label: string }) => (
    <button
      onClick={() => onNavigate(page)}
      className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
        currentPage === page 
          ? 'bg-violet-600 text-white shadow-md' 
          : 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 p-4 sticky top-0 h-screen z-30">
        <div className="mb-8 px-2 flex items-center space-x-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
            </div>
          <h1 className="text-xl font-bold text-slate-800">Centro Cinofilo</h1>
        </div>

        <nav className="flex-1 space-y-1">
          <NavItem page="home" icon={LucideHome} label="Home" />
          <NavItem page="calendar" icon={LucideCalendar} label="Calendario Eventi" />
          <NavItem page="services" icon={LucideGrid} label="I nostri Servizi" />
          <NavItem page="professionals" icon={LucideUsers} label="I Professionisti" />
          <NavItem page="blog" icon={LucideBookOpen} label="Blog" />
          <NavItem page="contacts" icon={LucidePhone} label="Contatti e Sede" />
          
          <div className="my-4 border-t border-slate-100"></div>

          {isOperator ? (
             <NavItem page="operator-dashboard" icon={LucideSettings} label="Dashboard" />
          ) : (
             <NavItem page="profile" icon={LucideUser} label="Il mio Profilo" />
          )}
          <NavItem page="settings" icon={LucideSettings} label="Impostazioni" />
        </nav>

        <div className="pt-4 border-t border-slate-200">
          <button 
            onClick={onLogout}
            className="flex items-center space-x-3 w-full p-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LucideLogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 pb-20 md:pb-0">
        {/* Mobile Header (Often hidden if pages have their own headers, but useful for global actions) */}
        <header className="md:hidden bg-white p-4 flex justify-between items-center sticky top-0 z-20 shadow-sm">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center text-white font-bold">C</div>
              <span className="font-bold text-lg text-slate-800">Centro Cinofilo</span>
           </div>
           <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
              {user.avatarUrl && <img src={user.avatarUrl} alt="User" />}
           </div>
        </header>

        <div className="p-4 md:p-8 max-w-5xl mx-auto w-full">
            {children}
        </div>
        
        {/* Mobile Bottom Nav */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-3 pb-safe z-30 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
             <button onClick={() => onNavigate('home')} className={`flex flex-col items-center gap-1 ${currentPage === 'home' ? 'text-violet-600' : 'text-slate-400'}`}>
                 <LucideHome size={24} />
                 <span className="text-[10px] font-medium">Home</span>
             </button>
             <button onClick={() => onNavigate('calendar')} className={`flex flex-col items-center gap-1 ${currentPage === 'calendar' ? 'text-violet-600' : 'text-slate-400'}`}>
                 <LucideCalendar size={24} />
                 <span className="text-[10px] font-medium">Calendario</span>
             </button>
             <button onClick={() => onNavigate('services')} className={`flex flex-col items-center gap-1 ${currentPage === 'services' ? 'text-violet-600' : 'text-slate-400'}`}>
                 <LucideGrid size={24} />
                 <span className="text-[10px] font-medium">Servizi</span>
             </button>
             <button onClick={() => onNavigate(isOperator ? 'operator-dashboard' : 'profile')} className={`flex flex-col items-center gap-1 ${currentPage === 'profile' || currentPage === 'operator-dashboard' ? 'text-violet-600' : 'text-slate-400'}`}>
                 <LucideUser size={24} />
                 <span className="text-[10px] font-medium">Profilo</span>
             </button>
        </div>
      </main>
    </div>
  );
};

export default Layout;