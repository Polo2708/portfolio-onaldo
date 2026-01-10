import { create } from "zustand";
import { useProyects } from "../utils/proyects";

interface IProyectStore {
  proyectLists: any[];
  getProyects: () => Promise<void>;
}
const { fetchProyects } = useProyects();
export const useProyectsStore = create<IProyectStore>((set) => ({
  proyectLists: [],
  getProyects: async () => {
    try {
      const data = await fetchProyects();
      set({ proyectLists: data ?? [] });
    } catch (error) {
      console.error("Error al obtener proyectos");
    }
  },
}));
