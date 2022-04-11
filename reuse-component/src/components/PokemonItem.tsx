import React from 'react';

import { IPokemon } from '../types';
import { Item, Button } from './styled';

interface Props {
  item: IPokemon
}

const PokemonItem = ({ item }: Props) => (
  <Item>
    <Button>{item.name.english}</Button>
  </Item>
);

export default PokemonItem;
