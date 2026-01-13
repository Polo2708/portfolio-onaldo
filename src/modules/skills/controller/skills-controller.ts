import { MySkills } from "../../../utils/skills";

export const useSkillsController = () => {
  const { skills } = MySkills();
  return {
    skills,
  };
};
