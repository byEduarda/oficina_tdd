const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue();

    expect(queue).toEqual({ elements: [] });
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();

    expect(queue.size()).toBe(0); //fila vazia
    queue.add('item1');
    queue.add('item2');
    expect(queue.size()).toBe(2); //após adicionar 2 itens
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();

    queue.add('item1');
    expect(queue.elements).toEqual(['item1']); //verifica que o item foi adicionado
    queue.add('item2');
    expect(queue.elements).toEqual(['item1', 'item2']); //verifica que os itens estão na ordem correta
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();

    queue.add('item1');
    queue.add('item2');
    expect(queue.peek()).toBe('item1'); //retorna o primeiro item
    expect(queue.size()).toBe(2); //garante que o tamanho da fila não foi alterado
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();

    queue.add('item1');
    queue.add('item2');
    const removed = queue.dequeue();
    expect(removed).toBe('item1'); //verifica que o primeiro item foi removido
    expect(queue.elements).toEqual(['item2']); //verifica que o segundo item agora é o primeiro
    expect(queue.size()).toBe(1); //garante que o tamanho foi atualizado
  });
});
