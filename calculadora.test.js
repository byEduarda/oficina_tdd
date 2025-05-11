const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora()

    expect(calculadora.soma(2,3)).toBe(5)
  })

  it('Deverá retornar a subtração de dois números', () => {
     const calculadora = new Calculadora()

    expect(calculadora.subtracao(6,3)).toBe(3)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
     const calculadora = new Calculadora()

    expect(calculadora.multiplicacao(2,3)).toBe(9)
  })

  it('Deverá retornar a divisao entre dois números', () => {
     const calculadora = new Calculadora()

    expect(calculadora.divisao(9,3)).toBe(3)
  })
})