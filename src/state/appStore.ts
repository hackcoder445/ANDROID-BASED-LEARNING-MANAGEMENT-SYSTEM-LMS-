import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';

import { Role } from '@/types/models';

const storage = new MMKV({ id: 'hackcoder-app' });

type AppState = {
  isOffline: boolean;
  role: Role;
  hasOnboarded: boolean;
  setOffline: (v: boolean) => void;
  setRole: (v: Role) => void;
  setHasOnboarded: (v: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  isOffline: storage.getBoolean('offline') ?? false,
  role: (storage.getString('role') as Role) ?? 'student',
  hasOnboarded: storage.getBoolean('hasOnboarded') ?? false,
  setOffline: (v) => {
    storage.set('offline', v);
    set({ isOffline: v });
  },
  setRole: (v) => {
    storage.set('role', v);
    set({ role: v });
  },
  setHasOnboarded: (v) => {
    storage.set('hasOnboarded', v);
    set({ hasOnboarded: v });
  },
}));
