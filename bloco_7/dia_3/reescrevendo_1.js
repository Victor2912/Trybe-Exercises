const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  let arrayHello = [];

  for (const person in people) {
    arrayHello.push(greeting + people[person]);
  }
  return arrayHello;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
