import React from 'react';
import { Content, Button, Text, Body } from '../components/styled';

import List from '../components/List';
import Item from '../components/Item';


import pokemons from '../data/pokemons.json';
const pokemonsNames = pokemons.map((p) => p.name.english)

function Pokemon() {
  return (
    <Content>
      <List
        items={pokemonsNames}
        renderItem={(item) => (
          <Item>
            <Button>
              {item}
            </Button>
          </Item>
        )}
      />
      <Body>
        <Text>Escolha 1 item da lista para visualizar</Text>
      </Body>
    </Content>
  );
}

export default Pokemon;
