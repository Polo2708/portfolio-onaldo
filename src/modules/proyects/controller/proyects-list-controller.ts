import { useProyects } from "../../../utils/proyects";

export const useProyectController = () => {
  const { proyects } = useProyects();
  return { proyects };
};
