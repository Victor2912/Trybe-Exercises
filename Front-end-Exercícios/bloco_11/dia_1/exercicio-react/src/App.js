import './App.css';
import React from 'react';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const array = ['Leão', 'Elefante', 'Lobo', 'Jacaré', 'Urso', 'Pinguim'];

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Word!</h1>
        <ul>{array.map(animal => task(animal))}</ul>
      </div>
    )
  }
};

export default App;
