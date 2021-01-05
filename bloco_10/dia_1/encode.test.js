const encode = require('./encode.js');

describe('Testes na função encode', () => {
  test('Testa a função encode', () => {
    expect(typeof encode).toEqual('function');
  });

  test('Teste se a vogal A retorna 1', () => {
    expect(encode('ama')).toBe('1m1');
  });

  test('Teste se a vogal E retorna 2', () => {
    expect(encode('ele')).toBe('2l2');
  });

  test('Teste se a vogal I retorna 3', () => {
    expect(encode('mimi')).toBe('m3m3');
  });

  test('Teste se a vogal O retorna 4', () => {
    expect(encode('zoo')).toBe('z44');
  });

  test('Teste se a vogal U retorna 5', () => {
    expect(encode('um')).toBe('5m');
  });

  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('bcdfghjklmnpqrstvxw')).toBe('bcdfghjklmnpqrstvxw');
  });

  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    const tam = 'palavra'.length;
    expect(encode('palavra').length).toBe(tam);
  });
});
