import React from 'react';
import { Content, Img, Body } from '../components/styled';

import starwars from '../assets/images/starwars.png';
import pokemon from '../assets/images/pokemon.png';

function Home() {
  return (
    <Content>
      <Body>
        <Img src={starwars} />
        <Img src={pokemon} />
      </Body>
    </Content>
  );
}

export default Home;
