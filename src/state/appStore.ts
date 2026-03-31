import { MMKV } from 'react-native-mmkv';
import { create } from 'zustand';

const storage = new MMKV({ id: 'hackcoder-app' });

type AppState = {
  isOffline: boolean;
  role: 'student' | 'instructor' | 'enterprise';
  setOffline: (v: boolean) => void;
  setRole: (v: 'student' | 'instructor' | 'enterprise') => void;
};

export const useAppStore = create<AppState>((set) => ({
  isOffline: storage.getBoolean('offline') ?? false,
  role: (storage.getString('role') as AppState['role']) ?? 'student',
  setOffline: (v) => {
    storage.set('offline', v);
    set({ isOffline: v });
  },
  setRole: (v) => {
    storage.set('role', v);
    set({ role: v });
  },
}));
