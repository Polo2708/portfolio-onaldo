import { create } from "zustand";

interface sidebarProps {
  state: boolean;
  showSidebar: (state: boolean) => void;
}
export const useSidebarStore = create<sidebarProps>((set) => ({
  state: false,
  showSidebar: (state) => set({ state: state }),
}));
