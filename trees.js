const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
      console.log(`${node.name} child of ${this.name}`);
    } else {
      console.log("Orphan");
    }
  };

  getChildWithName = (name) => {
    return this.children.find((child) => child.name === name);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.name);
      nodes = [...nodes, ...current.children];
    }
  };
}

const root = new TreeNode("GreatBadam");
let fullName = prompt("Enter child name or type done: ");

while (fullName !== "done") {
  let current = root;
  let names = fullName.split(` `).reverse(); // To start at root
  let firstName = names.pop();
  let lastName = names.shift();

  if (lastName === current.name) {
    if (names) {
      for (let name of names) {
        let child = current.getChildWithName(name);
        if (child) {
          current = child;
        } else {
          let newNode = new TreeNode(name);
          current.addChild(newNode);
          current = newNode;
        }
      }
    }
    let newNode = new TreeNode(firstName);
    current.addChild(newNode);
  }
  console.log("---------------------------------------------------");
  fullName = prompt("Enter child name or type done: ");
}
root.traverse();
