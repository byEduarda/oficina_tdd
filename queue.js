class Queue {
  elements;
  
  constructor() {
    this.elements = [];
  }
  
  //retorna o tamanho da fila
  size() {
    return this.elements.length;
  }

  //adiciona um elemento à fila
  add(item) {
    this.elements.push(item);
  }

  //retorna o primeiro elemento sem removê-lo
  peek() {
    return this.elements.length > 0 ? this.elements[0] : null;
  }

  //remove e retorna o primeiro elemento
  dequeue() {
    return this.elements.length > 0 ? this.elements.shift() : null;
  }
}

module.exports = Queue;
