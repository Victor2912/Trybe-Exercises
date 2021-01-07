const funct = require('./random-number');

describe('Teste da função randomNumber', () => {
  it('Teste de retorno padrão 10', () => {
    funct.randomNumber = jest.fn()
      .mockReturnValue(10);

    expect(funct.randomNumber()).toBe(10);
    expect(funct.randomNumber).toBeCalled();
    expect(funct.randomNumber).toBeCalledTimes(1);
  });
});

describe('Teste de implemetação na randomNumber criando divisão entre dois parametros', () => {
  test('Implementação da função', () => {
    funct.randomNumber = jest.fn().mockImplementation((num1, num2) => num1 / num2);

    expect(funct.randomNumber(20, 10)).toBe(2);
    expect(funct.randomNumber).toBeCalled();
    expect(funct.randomNumber).toBeCalledTimes(1);
    expect(funct.randomNumber).toBeCalledWith(20, 10);
  });
});

describe('Test de uma segunda implemetação de multiplicação', () => {
  test('Implemetação da função', () => {
    funct.randomNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);

    expect(funct.randomNumber(5, 5, 5)).toBe(125);
    expect(funct.randomNumber).toBeCalled();
    expect(funct.randomNumber).toBeCalledTimes(1);
    expect(funct.randomNumber).toBeCalledWith(5, 5, 5);

    funct.randomNumber.mockReset();
    funct.randomNumber = jest.fn().mockImplementationOnce((num1) => num1 * 2);

    expect(funct.randomNumber(4)).toBe(8);
    expect(funct.randomNumber).toBeCalled();
    expect(funct.randomNumber).toBeCalledTimes(1);
    expect(funct.randomNumber).toBeCalledWith(4);
  });
});