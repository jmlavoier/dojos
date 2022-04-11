import React from 'react';
import { render, screen } from '@testing-library/react';

import PokemonItem from './PokemonItem';
import { IPokemon } from '../types';

describe('<PokemonItem />', () => {
  it('should render', () => {
    const item: IPokemon = {
      "id": 1,
      "name": {
        "english": "Bulbasaur",
        "japanese": "フシギダネ",
        "chinese": "妙蛙种子",
        "french": "Bulbizarre"
      },
      "type": [
        "Grass",
        "Poison"
      ],
      "base": {
        "HP": 45,
        "Attack": 49,
        "Defense": 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        "Speed": 45
      }
    };

    render(<PokemonItem item={item} />);

    expect(screen.getByText(item.name.french)).toBeInTheDocument();
  }); 
})