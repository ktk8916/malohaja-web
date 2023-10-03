import create from 'zustand';
import { hitori } from '../styles/MaterialThemes';

const useThemeStore = create((set) => ({
  theme: hitori,
  setTheme: (theme) => set({ theme: theme }),
}));

const useLoginUserStore = create((set) => ({
  user: {
    id: 0,
    profileImageUri: '',
    nickname: '',
    accessToken: '',
    role: '',
    isLogin: false,
  },
  setUser: (user) => set(user),
}));

export { useThemeStore, useLoginUserStore };
