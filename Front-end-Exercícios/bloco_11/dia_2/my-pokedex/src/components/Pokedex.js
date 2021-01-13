import React from 'react';

import PokemonCards from './PokemonCards'

import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <section className='pokedex'>
        {pokemons.map(pokemonInfos => <PokemonCards pokemons={pokemonInfos} />)}
      </section>
    );
  }
}

export default Pokedex;
