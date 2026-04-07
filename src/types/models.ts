export type Role = 'student' | 'instructor' | 'enterprise' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
  level: string;
  xp: number;
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  reviews: number;
  durationHours: number;
  lessons: number;
  price: number;
  progress?: number;
}

export interface LiveSession {
  id: string;
  title: string;
  instructor: string;
  startsAt: string;
  durationMinutes: number;
  registeredCount: number;
  maxSeats: number;
}
