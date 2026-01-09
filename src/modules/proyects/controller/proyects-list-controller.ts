import { useProyects } from "../../../utils/proyects";

export const useProyectController = () => {
  const { proyectsList } = useProyects();

  return {
    proyectsList,
  };
};
