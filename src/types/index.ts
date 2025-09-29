export interface Alumni {
  id: string;
  name: string;
  email: string;
  batch: string;
  department: string;
  location: string;
  profession: string;
  profilePicture?: string;
  bio?: string;
  linkedIn?: string;
  phone?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  department: string;
  year: string;
  profilePicture?: string;
  bio?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  organizer: string;
  type: 'workshop' | 'reunion' | 'webinar' | 'meetup';
  location: string;
}

export interface Donation {
  id: string;
  alumniId: string;
  amount: number;
  purpose: string;
  date: string;
  status: 'completed' | 'pending';
}

export type UserRole = 'admin' | 'alumni' | 'student';