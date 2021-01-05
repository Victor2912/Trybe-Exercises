const { TestScheduler } = require('jest');
const decode = require('./decode.js');

describe('Testes na função decode', () => {
  test('Testa a função decode', () => {
    expect(typeof decode).toEqual('function');
  });

  test('Teste se o número 1 retorna vogal A', () => {
    expect(decode('1m1')).toBe('ama');
  });

  test('Teste se o número 2 retorna vogal E', () => {
    expect(decode('2l2')).toBe('ele');
  });

  test('Teste se o número 3 retorna vogal I', () => {
    expect(decode('m3m3')).toBe('mimi');
  });

  test('Teste se o número 4 retorna vogal O', () => {
    expect(decode('z44')).toBe('zoo');
  });

  test('Teste se o número 5 retorna vogal U', () => {
    expect(decode('5m')).toBe('um');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('6789')).toBe('6789');
  });

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const tam = 'p1l1vr1'.length;
    expect(decode('p1l1vr1').length).toBe(tam);
  });
});
