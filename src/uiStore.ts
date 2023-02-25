import { create } from "zustand";

interface UIState {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
}));
