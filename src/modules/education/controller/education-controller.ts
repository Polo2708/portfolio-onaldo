import { useEducation } from "../../../utils/educations";

export const useEducationController = () => {
  const { educations } = useEducation();
  return { educations };
};
