// queue.js
class Queue {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
  }

  peek() {
    return this.items.length > 0 ? this.items[0] : null;
  }

  dequeue() {
    return this.items.length > 0 ? this.items.shift() : null;
  }
}

module.exports = Queue;
