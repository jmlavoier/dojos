import React from 'react';

import { List } from './styled';

import pokemons from '../data/pokemons.json';
import PokemonItem from './PokemonItem';


const PockemonsList = () => (
  <List>
    {pokemons.map((item) => (
      <PokemonItem item={item} />
    ))}
  </List>
);

export default PockemonsList;
