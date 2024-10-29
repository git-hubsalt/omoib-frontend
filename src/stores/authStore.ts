import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  login: (accessToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>()(
  persist<AuthState>(
    set => ({
      isLoggedIn: false,
      accessToken: null,
      login: (accessToken: string) => set({ isLoggedIn: true, accessToken }),
      logout: () => set({ isLoggedIn: false, accessToken: null }),
    }),
    {
      name: 'authStore',
    }
  ),
);

export default useAuthStore;
