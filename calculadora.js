
class Calculadora {
  soma(a, b) {
    return a + b;
  }

  subtracao(a, b) {
    return a - b;
  }

  multiplicacao(a, b) {
    return a * b;
  }

  divisao(a, b) {
    if (b === 0) throw new Error("Divisão por zero não é permitida.");
    return a / b;
  }
}

module.exports = Calculadora;
