class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
  getData = () => ` ${this.number} ${this.color} `;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "Empty deck, sorrry!" : this.top.getData());

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
      return popped.getData();
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

while (!deck.isFull()) {
  let color = random(colors);
  let number = random(numbers);
  deck.push(color, number);
}
let playerCards = 5;
let player1Cards = [];
let player2Cards = [];

for (let i = 0; i < 5; i++) {
  player1Cards.push(deck.pop());
  player2Cards.push(deck.pop());
}

console.log(`
----------------------------------------------
Player 1's hand:
----------------------------------------------

${player1Cards}

----------------------------------------------
Player 2's hand:
----------------------------------------------

${player2Cards}

----------------------------------------------
First card in deck: ${deck.peek()}
----------------------------------------------
`);
