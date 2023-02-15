import { create } from "zustand";

const useAuth = create((set) => ({
  auth: false,
  setAuth: () => set((state) => ({ authZus: true })),
  removeAuth: () => set({ authZus: false }),
}));

export default useAuth;
