export interface IProyects {
  id: number;
  name: string;
  description: string;
  img: string;
  alt: string;
}

export const useProyects = () => {
  const fetchProyects = async () => {
    const res = await fetch("https://api.github.com/users/Polo2708/repos");

    const data = await res.json();
    console.log(data);
  };
  return {
    fetchProyects,
  };
};
