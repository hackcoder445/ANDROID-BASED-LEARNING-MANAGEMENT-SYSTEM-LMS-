import { Role, User } from '@/types/models';

export type DemoAccount = {
  email: string;
  password: string;
  user: User;
};

export const demoAccounts: DemoAccount[] = [
  {
    email: 'admin@hackcoder.academy',
    password: 'Admin@12345',
    user: {
      id: 'a1',
      name: 'HackCoder Admin',
      email: 'admin@hackcoder.academy',
      role: 'admin',
      level: 'HackMaster',
      xp: 9999,
    },
  },
  {
    email: 'instructor@hackcoder.academy',
    password: 'Instructor@12345',
    user: {
      id: 'i1',
      name: 'Grace Mensah',
      email: 'instructor@hackcoder.academy',
      role: 'instructor',
      level: 'Architect',
      xp: 6400,
    },
  },
  {
    email: 'student@hackcoder.academy',
    password: 'Student@12345',
    user: {
      id: 's1',
      name: 'Ada Obi',
      email: 'student@hackcoder.academy',
      role: 'student',
      level: 'Developer',
      xp: 2240,
    },
  },
];

export const defaultRoleForSignup: Role = 'student';
