import { navbarOptions } from "../../../libs/navbar-options";

export const useNavbarController = () => {
  const { options } = navbarOptions();
  
  return {
    options,
  };
};
