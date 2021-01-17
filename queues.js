class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.waitingTime = 0;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => this.waitingTime;

  addNode = (groupSize) => {
    const newNode = new Node(groupSize);
    if (this.isEmpty()) this.front = newNode;
    else this.back.next = newNode;

    this.back = newNode;
    this.length++;
    this.waitingTime += groupSize * 0.5;
  };

  enqueue = (groupSize) => {
    if (this.isFull()) {
      console.log(
        `Currently busy, try our other attractions and come back in ${this.waitingTime}`
      );
    } else {
      let peopleNum = groupSize;
      while (peopleNum > 12) {
        this.addNode(12);
        peopleNum -= 12;
      }
      this.addNode(peopleNum);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("It's empty at the moment.");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.waitingTime -= removed.groupSize * 0.5;
      return removed.groupSize;
    }
  };
}

const ridePark = new Queue();
console.log(`___

Waiting time is ====> ${ridePark.peek()} minutes
___`);
ridePark.enqueue(5);
ridePark.enqueue(2);
ridePark.enqueue(3);
ridePark.enqueue(17);
console.log(`___

Waiting time is ====> ${ridePark.peek()} minutes
___`);
console.log(
  `
  
  The number of people leaving the queue right now is: ${ridePark.dequeue()}
  `
);
console.log(`___

Waiting time is ====> ${ridePark.peek()} minutes
___`);
