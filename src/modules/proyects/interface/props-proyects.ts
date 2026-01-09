export interface PropsProyects {
  proyects: IProyect;
}

interface IProyect {
  id: number;
  name: string;
  description: string;
  img: string;
  alt: string;
}
