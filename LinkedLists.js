const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(age, highlight, next = null) {
    this.age = age;
    this.highlight = highlight;
    this.next = next;
  }
}
class LinkedList {
  constructor(age) {
    this.head = node1;
    this.length = userAge;
  }

  insert = (data) => {
    const newNode = new Node(age, highlight, this.head);
    this.head = newNode;
  };

  traverse = () => {
    let arrayData = [node1, node3, node7];
    let current = this.head;
    while (current) {
      arrayData.push(current.data);
      current = current.next;
    }
    return arrayData;
  };
}

let userAge = prompt(`How old are you?`);

const node1 = new Node(1, "I was born");
const node3 = new Node(3, "started walking");
const node7 = new Node(7, "I turned seven");

let lifeDocumented = [node1, node3, node7];
// prompt(`What was the highlight of your life when you were ${missingAge}`);

console.log(traverse());
