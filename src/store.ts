import { create } from "zustand";

interface IMainStore {
  isSignedIn: boolean;
  setIsSignedIn: (val: boolean) => void;
}

export const useMainStore = create<IMainStore>((set) => ({
  isSignedIn: false,
  setIsSignedIn: (val) => set({ isSignedIn: val }),
}));
