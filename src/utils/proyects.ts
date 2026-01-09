export interface IProyects {
  id: number;
  name: string;
  description: string;
  img: string;
  alt: string;
}
export const useProyects = () => {
  const proyectsList: IProyects[] = [
    {
      id: 1,
      name: "LudyCommercers 2",
      description: "",
      img: "",
      alt: "",
    },
    {
      id: 2,
      name: "LudyCalendar",
      description: "",
      img: "",
      alt: "",
    },
    {
      id: 3,
      name: "",
      description: "",
      img: "",
      alt: "",
    },
  ];
  return {
    proyectsList,
  };
};
