import type { INavbar } from "../modules/navbar/interfaces/navbar-options";

export const navbarOptions = () => {
  const options: INavbar[] = [
    {
      name: "Home",
      id: "1",
    },
    {
      name: "Proyectos",
      id: "2",
    },
    {
      name: "Habilidades",
      id: "3",
    },
    {
      name: "Experiencia",
      id: "5",
    },
    {
      name: "Educación",
      id: "4",
    },
  ];

  return {
    options,
  };
};
