import React from 'react';

import Pokedex from './components/Pokedex';
import DataPokemon from './data';

import './App.css';

class App extends React.Component {
  render() {
    return(
      <main className='main-content'>
        <h1>POKEDEX</h1>
        <Pokedex pokemons={DataPokemon} />
      </main>
    );
  }
}

export default App;
