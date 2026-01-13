interface ISkills {
  name: string;
  experience: string;
}
export const MySkills = () => {
  const skills: ISkills[] = [
    {
      name: "JavaScript",
      experience: "",
    },
    {
      name: "React",
      experience: "",
    },
    {
      name: "NextJs",
      experience: "",
    },
    {
      name: "Angular",
      experience: "",
    },
  ];
  return {
    skills,
  };
};
