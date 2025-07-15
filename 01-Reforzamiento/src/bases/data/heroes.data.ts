// Interfaces --> Definen la estructura de un objeto, especificando sus propiedades y tipos.

// Enums --> Permiten definir un conjunto de constantes con nombre, facilitando la legibilidad y el mantenimiento del código.

// types --> Son alias para tipos de datos, permitiendo crear tipos personalizados y más complejos a partir de tipos primitivos o combinaciones de ellos.

export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

// type Owner = 'DC' | 'Marvel';

export enum Owner {
  DC = 'DC', // 0
  Marvel = 'Marvel', // 1
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];

// export default heroes; --> import  heroesFromDC from './heroes.data';

// export const heroes: Hero[] = [... --> import { heroes } from './heroes.data';

// Para exportar interfaces, tipos, en las exportaciones anteponemos la palabra type --> import { type Hero } from './heroes.data';