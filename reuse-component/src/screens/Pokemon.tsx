import React from 'react';
import { Content, Text, Body } from '../components/styled';

import PokemonList from '../components/PokemonList';

function Pokemon() {
  return (
    <Content>
      <PokemonList />
      <Body>
        <Text>Escolha 1 item da lista para visualizar</Text>
      </Body>
    </Content>
  );
}

export default Pokemon;
