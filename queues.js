class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
    this.limit = 12;
    isCrowded = () => this.groupSize > this.limit;
    splitUp = (groupSize) => {
      while (this.isCrowded()) {
        const newNode = new Node(groupSize);
        this.groupSize = back.groupSize - 12;
      }
    };
    this.groupSize = 12;
  }
}

class Queue {
  constructor(limit) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? `Queue Underflow` : this.front.data);

  enqueue = () => {
    if (this.isFull()) {
      console.log("Queue Overflow");
    } else {
      const newNode = new Node(groupSize);
      if (this.isEmpty()) {
        this.front = newNode;
        this.back = newNode;
      } else {
        this.back.next = newNode;
        this.back = newNode;
      }
      this.length++;
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      return removed.groupSize;
    }
  };
}

const rideQ = new Queue();
rideQTime = () => rideQ[0] * 0.5;

// while (rideQ.groupSize > 12) {
//   let rideQ = 12;
//   rideQ.enqueue(this.groupSize - 12);
// }

console.log(`Current queue time is ${rideQTime(rideQ)} minutes.`);

rideQ.enqueue(3);
rideQ.enqueue(11);
rideQ.enqueue(4);
rideQ.enqueue(25);

console.log(`Current queue time is ${rideQTime(rideQ)} minutes.`);
// console.log(rideQ.peek());
// console.log(rideQ.dequeue());
// console.log(rideQ.peek());

console.log(rideQ);
