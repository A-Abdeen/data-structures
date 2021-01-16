class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }
  getData() => 
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () => (this.isEmpty() ? "Empty deck, sorrry!" : this.top.data);

  push = (color, number) => {
    if (this.isFull()) {
      console.log("Eww, the stack is full. Go away!");
    } else {
      const newNode = new Node(data, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("What else do you wanna take from me? I have nothing left!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.data;
    }
  };
}

// const chickenFillet = new Stack(5);
// chickenFillet.push("bottom bun");
// console.log("Peak: ", chickenFillet.peek());
// chickenFillet.push("mayo");
// console.log("Peak: ", chickenFillet.peek());
// chickenFillet.push("chicken");
// console.log("Peak: ", chickenFillet.peek());
// chickenFillet.push("cole slaw");
// console.log("Peak: ", chickenFillet.peek());
// chickenFillet.push("pickles");
// console.log("Peak: ", chickenFillet.peek());
// console.log(chickenFillet.pop());
// console.log("Peak: ", chickenFillet.peek());
// chickenFillet.push("top bun");
// console.log("Peak: ", chickenFillet.peek());

const colors = []
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const deck = new Stack()
const random = (array){
    const randomIndex = 
}

console.log(`-------------------------
${player1}:
-------------------------
1- Yellow-1
2- Yellow-2
3- Red-2
4- Blue-8
5- Yellow-7
-------------------------
${player2}:
-------------------------
1- Blue-1
2- Yellow-2
3- Red-6
4- Blue-8
5- Red-9


-------------------------
First card in deck: ${peek(this.top.data)}
-------------------------`);
