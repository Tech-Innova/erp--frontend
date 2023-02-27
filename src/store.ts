import { TUserAuthModel } from "@super_raptor911/erp-types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IMainStore {
  user: TUserAuthModel | null;
  jwtToken: string;
  setIsSignedIn: (val: TUserAuthModel | null) => void;
  setJwtToken: (val: string) => void;
}

export const useMainStore = create<IMainStore>()(
  persist(
    (set) => ({
      user: null,
      jwtToken: "",

      setIsSignedIn: (val: TUserAuthModel | null) => set({ user: val }),
      setJwtToken: (val: string) => set({ jwtToken: val }),
    }),

    {
      name: "main-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
