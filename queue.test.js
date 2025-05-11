// queue.test.js
const Queue = require('./queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should return the size of the queue', () => {
    expect(queue.size()).toBe(0);
    queue.add('item1');
    expect(queue.size()).toBe(1);
  });

  test('should add an item to the queue', () => {
    queue.add('item1');
    expect(queue.peek()).toBe('item1');
    expect(queue.size()).toBe(1);
  });

  test('should return the first item without removing it (peek)', () => {
    queue.add('item1');
    queue.add('item2');
    expect(queue.peek()).toBe('item1');
    expect(queue.size()).toBe(2);
  });

  test('should remove the first item from the queue (dequeue)', () => {
    queue.add('item1');
    queue.add('item2');
    expect(queue.dequeue()).toBe('item1');
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe('item2');
  });

  test('should return null when peeking or dequeuing an empty queue', () => {
    expect(queue.peek()).toBe(null);
    expect(queue.dequeue()).toBe(null);
  });
});
