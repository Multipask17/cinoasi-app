import { User, UserRole, Booking, ServiceType, Event, Activity } from '../types';

export const MOCK_USER_CLIENT: User = {
  id: 'u1',
  name: 'Mario Rossi',
  email: 'm.rossi@email.com',
  phone: '+39 123 4567890',
  role: UserRole.CLIENT,
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mario',
  dogs: [
    { 
      id: 'd1', 
      name: 'Fido', 
      breed: 'Golden Retriever', 
      age: 3, 
      gender: 'Maschio',
      ownerId: 'u1', 
      photoUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=150&q=80' 
    },
    { 
      id: 'd2', 
      name: 'Bobby', 
      breed: 'Labrador', 
      age: 2, 
      gender: 'Maschio',
      ownerId: 'u1', 
      photoUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?auto=format&fit=crop&w=150&q=80' 
    }
  ]
};

export const MOCK_USER_OPERATOR: User = {
  id: 'u2',
  name: 'Laura Staff',
  email: 'laura@cynocenter.com',
  role: UserRole.OPERATOR,
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Laura'
};

export const MOCK_BOOKINGS: Booking[] = [
  { id: 'b1', serviceType: ServiceType.DAYCARE, title: 'Asilo Giornaliero', date: 'Ven, 24 Maggio', time: '09:00', status: 'CONFIRMED', dogId: 'd1', taxiRequested: true },
  { id: 'b2', serviceType: ServiceType.LESSON, title: 'Corso di Agility - Base', date: 'Sab, 25 Maggio', time: '10:00', status: 'CONFIRMED', dogId: 'd1' },
];

export const MOCK_ACTIVITIES_FIDO: Activity[] = [
  { id: 'a1', type: ServiceType.LESSON, title: 'Corso di Agility', date: '15 Ottobre 2024', status: 'In programma' },
  { id: 'a2', type: ServiceType.DAYCARE, title: 'Asilo giornaliero', date: '5 Ottobre 2024', status: 'Completato' },
  { id: 'a3', type: ServiceType.BOARDING, title: 'Pensione', date: '10 Agosto 2024', status: 'Completato' },
  { id: 'a4', type: ServiceType.VET, title: 'Visita veterinaria', date: '1 Agosto 2024', status: 'Completato' },
];

export const MOCK_EVENTS: Event[] = [
  { id: 'e1', title: 'Corso Cuccioli', description: 'Socializzazione e prime basi.', date: '25', time: '18:00', capacity: 10, enrolled: 4, category: 'CORSO' },
  { id: 'e2', title: 'Seminario sul Comportamento', description: 'Evento online.', date: '30', time: '20:00', capacity: 50, enrolled: 12, category: 'WEBINAR' },
];