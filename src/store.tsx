import create from "zustand";

interface SidebarState {
    sidebarOpen: boolean;
    setSidebarOpen: (isOpen: boolean) => void;
  }
  
  export const useSidebarStore = create<SidebarState>((set) => ({
    sidebarOpen: false,
    setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
  }));