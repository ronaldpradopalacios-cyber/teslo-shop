import { create } from "zustand";

interface State {
  isOpenSidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

export const useUiStore = create<State>()((set) => ({
  isOpenSidebar: false,
  openSidebar: () => set({ isOpenSidebar: true }),
  closeSidebar: () => set({ isOpenSidebar: false }),
}));
