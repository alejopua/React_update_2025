// Importaciones y Exportaciones

import { heroes, type Hero, Owner } from './data/heroes.data';

const getHeroesById = (id: number): Hero|undefined => {
  const hero =  heroes.find( (hero)=>hero.id === id);

  // if (!hero) {
  //   throw new Error(`No existe un hero con id ${id}`)
  // };

  return hero;

}

// console.log(getHeroesById(3))

export const getHeroesByOwner = (searchByOwner: Owner): Hero[] => {
  const listHeroes = heroes.filter( (hero) => (hero.owner === searchByOwner));
  return listHeroes;
}

