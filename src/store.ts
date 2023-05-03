import { TUserAuthModel } from "@super_raptor911/erp-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IMainStore {
  user: TUserAuthModel | null;
  jwtToken: string;
  setIsSignedIn: (val: TUserAuthModel | null) => void;
  setJwtToken: (val: string) => void;
  twoFactorAuth: boolean;
  setTwoFactorAuth: (val: boolean) => void;
}

export const useMainStore = create<IMainStore>()(
  persist(
    (set) => ({
      user: null,
      jwtToken: "",

      setIsSignedIn: (val: TUserAuthModel | null) => set({ user: val }),
      setJwtToken: (val: string) => set({ jwtToken: val }),

      twoFactorAuth: false,
      setTwoFactorAuth: (val: boolean) => set({ twoFactorAuth: val }),
    }),

    {
      name: "main-storage", // unique name
    }
  )
);
