const functions = require('./functions');
jest.mock("./functions");

describe('Teste da função stringUpperCase', () => {
  it('Teste se toda a palavra esta em caixa baixa', () => {
    functions.stringUperCase.mockImplementation((string) => string.toLowerCase());

    expect(functions.stringUperCase('CASA')).toBe('casa');
    expect(functions.stringUperCase).toHaveBeenCalled();
    expect(functions.stringUperCase).toHaveBeenCalledTimes(1);
    expect(functions.stringUperCase).toHaveBeenCalledWith('CASA');
  });
});

describe('Teste da função firstWordString', () => {
  it('Teste se a ultima palavra esta em uppercase', () => {
    functions.firstWordString.mockImplementation((string) => string.charAt(string.length - 1));

    expect(functions.firstWordString('ultima')).toBe('a');
    expect(functions.firstWordString).toHaveBeenCalled();
    expect(functions.firstWordString).toHaveBeenCalledTimes(1);
    expect(functions.firstWordString).toHaveBeenCalledWith('ultima');
  });
});

describe('Teste da função joinString', () => {
  it('Teste se concatena as 3 strings', () => {
    functions.joinString.mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(functions.joinString('alo', 'brasil', 'cheguei')).toBe('alobrasilcheguei');
    expect(functions.joinString).toHaveBeenCalled();
    expect(functions.joinString).toHaveBeenCalledTimes(1);
    expect(functions.joinString).toHaveBeenCalledWith('alo', 'brasil', 'cheguei');
  });
});