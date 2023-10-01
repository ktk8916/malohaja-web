import create from 'zustand';
import { hitori } from '../styles/MaterialThemes';

const useThemeStore = create((set) => ({
  theme: hitori,
  setTheme: (theme) => set({ theme: theme }),
}));

export default useThemeStore;
