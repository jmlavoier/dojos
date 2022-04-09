import React from 'react';

import { IPokemon } from '../types';
import { Item } from './styled';

interface Props {
  item: IPokemon
}

const PokemonItem = ({ item }: Props) => (
  <Item>
    {item.name.english}
  </Item>
);

export default PokemonItem;
