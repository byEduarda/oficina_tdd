const soma = require('./soma');

describe('Soma', () => {
  it('deverá somar dois números inteiros', () => {
    expect(soma(2, 3)).toBe(5);
  });
});
