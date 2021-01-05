const { test, expect } = require('@jest/globals');
const sum = require('./exercicio_1.js');

test('Soma de dois valores.', () => {
  expect(sum(5, 5)).toBe(10);
});

test('Soma dos número 4 + 5', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Soma dos números 0 + 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow(Error);
});

test('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
  expect(() => {
    sum(4, '5');
  }).toThrow('parameters must be numbers');
});