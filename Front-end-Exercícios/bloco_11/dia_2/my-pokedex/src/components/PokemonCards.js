import React from 'react';

import './PokemonCards.css';

class PokemonCards extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemons;

    return(
      <section className='pokeCards'> 
        <div className='info'>
          <div>{name}</div>
          <div>{type}</div>
          <div>averageWeight: {averageWeight.value} {averageWeight.measurementUnit}</div>
        </div>
        <img src={image} alt='imagem pokemon' />
      </section>
    );
  }
}

export default PokemonCards;