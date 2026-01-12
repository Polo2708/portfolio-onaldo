export interface IProyects {
  id: number;
  name: string;
  description: string;
  img: string;
  alt: string;
}

export const useProyects = () => {
  const proyects = [
    {
      name: "Ludycalendar",
      description: "Calendario de agendamiento de ordenes de trabajo, con funcionalidades modernas como drag and drop, diferentes modales y popups, reasignacion de ordenes, cancelacion de agendamiento y muchas funcionalidades más.",
      company: "Ludycom S.A.S",
      date: "",
    },
    {
      name: "NYM",
      description: "",
      company: "Yo",
      date: "",
    },
  ];

  return {
    proyects,
  };
};
