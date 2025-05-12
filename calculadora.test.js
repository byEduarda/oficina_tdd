const Calculadora = require('./calculadora');

describe('Calculadora', () => {
  it('Deve retornar a soma de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(2, 3)).toBe(5);
  });

  it('Deve retornar a subtração de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtracao(5, 3)).toBe(2);
  });

  it('Deve retornar a multiplicação de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplicacao(3, 3)).toBe(9);
  });

  it('Deve retornar a divisão de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.divisao(9, 3)).toBe(3);
  });

  it('Deve lançar um erro ao tentar dividir por zero', () => {
    const calculadora = new Calculadora();
    expect(() => calculadora.divisao(9, 0)).toThrow('Divisão por zero não é permitida.');
  });
});