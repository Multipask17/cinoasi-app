export enum UserRole {
  CLIENT = 'CLIENT',
  OPERATOR = 'OPERATOR',
  ADMIN = 'ADMIN'
}

export enum ServiceType {
  DAYCARE = 'DAYCARE',
  LESSON = 'LESSON',
  BOARDING = 'BOARDING',
  EVENT = 'EVENT',
  VET = 'VET',
  GROOMING = 'GROOMING'
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: 'Maschio' | 'Femmina';
  notes?: string;
  ownerId: string;
  photoUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  dogs?: Dog[];
  avatarUrl?: string;
}

export interface Booking {
  id: string;
  serviceType: ServiceType;
  date: string; // ISO Date or formatted string
  time?: string;
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED' | 'COMPLETED';
  dogId: string;
  notes?: string;
  taxiRequested?: boolean;
  title?: string; // For display purposes
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  capacity: number;
  enrolled: number;
  category: 'CORSO' | 'ASILO' | 'WEBINAR' | 'ALTRO';
}

export interface Activity {
  id: string;
  type: ServiceType;
  title: string;
  date: string;
  status: 'In programma' | 'Completato' | 'Cancellato';
}