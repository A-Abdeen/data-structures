class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
  getData = () => `${this.color} - ${this.number}`;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "Empty deck, sorrry!" : this.top.getData);

  push = (color, number) => {
    if (this.isFull()) {
      console.log("Fully stacked, go away!");
    } else {
      const newNode = new Node(color, number, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log(`Opps, no more cards!`);
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.getData;
    }
  };
}

const colors = ["Blue", "Green", "Red", "Yellow"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const deck = new Stack(20);
const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};
// do {
//   deck.push(colors, numbers);
// } while (deck.isFull() != 1);

const player1 = [];

do {
  const newCard = deck.pop();
} while (player1.length < 4);

// push(newCard);
// do {
//   player1.push(deck);
// } while (player1.isFull() != 1);

console.log(player1);
