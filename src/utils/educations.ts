interface IEducation {
  institution: string;
  title: string;
  finalDate: string;
}
export const useEducation = () => {
  const educations: IEducation[] = [
    {
      institution: "INDEBAMECO",
      title: "Bachillerato",
      finalDate: "Diciembre - 2021",
    },
    {
      institution: "SENA",
      title: "Analisis y desarrollo de software",
      finalDate: "Diciembre - 2025",
    },
  ];
  return {
    educations,
  };
};
