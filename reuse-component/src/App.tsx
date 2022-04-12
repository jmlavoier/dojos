import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from './components/styled';

import Home from './screens/Home';
import Pokemon from './screens/Pokemon';
import StarWars from './screens/StarWars';
import Timer from './dojo/Timer';

function App() {
  return (
    <BrowserRouter>
      <Header>
        Dojo Sobre Reaproveitamento
      </Header>
      <Timer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/startwars" element={<StarWars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
