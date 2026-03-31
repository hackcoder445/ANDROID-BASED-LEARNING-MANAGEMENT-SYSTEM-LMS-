import { Course, LiveSession, User } from '@/types/models';

export const mockUser: User = {
  id: 'u1',
  name: 'Ada Obi',
  email: 'ada@hackcoder.academy',
  role: 'student',
  level: 'Developer',
  xp: 2240,
};

export const mockCourses: Course[] = [
  {
    id: 'c1',
    title: 'React Native for Production Apps',
    instructor: 'Grace Mensah',
    thumbnail: 'https://picsum.photos/400/240?1',
    difficulty: 'Intermediate',
    rating: 4.8,
    reviews: 1422,
    durationHours: 18,
    lessons: 42,
    price: 49,
    progress: 0.36,
  },
  {
    id: 'c2',
    title: 'Modern Backend Engineering with Node.js',
    instructor: 'Ibrahim Bello',
    thumbnail: 'https://picsum.photos/400/240?2',
    difficulty: 'Advanced',
    rating: 4.7,
    reviews: 989,
    durationHours: 24,
    lessons: 56,
    price: 79,
  },
  {
    id: 'c3',
    title: 'AI Product Engineering Fundamentals',
    instructor: 'Zara Khan',
    thumbnail: 'https://picsum.photos/400/240?3',
    difficulty: 'Beginner',
    rating: 4.9,
    reviews: 2094,
    durationHours: 12,
    lessons: 28,
    price: 0,
  },
];

export const mockSessions: LiveSession[] = [
  {
    id: 'l1',
    title: 'System Design Office Hours',
    instructor: 'Tolu Adebayo',
    startsAt: '2026-03-31T18:00:00.000Z',
    durationMinutes: 90,
    registeredCount: 221,
    maxSeats: 500,
  },
  {
    id: 'l2',
    title: 'Frontend Interview Deep Dive',
    instructor: 'Amaka Nnadi',
    startsAt: '2026-04-01T14:00:00.000Z',
    durationMinutes: 60,
    registeredCount: 122,
    maxSeats: 300,
  },
];
