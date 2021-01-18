const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name, parent, limit) {
    this.name = name;
    this.parent = parent;
    this.children = [];
    this.limit = limit;
  }

  addChild = (name, parent) => {
    name = prompt(`Who are you, Great child of Badam?  `);
    parent = prompt(`Where do you come from, ${name}?  `);
    this.children.push({ name, parent });
  };

  removeChild = (node) => {
    this.children = this.children.filter((name) => child !== node);
  };

  traverse = () => {
    if (this.name === parent) console.log(`OKAY`);
    // nodes = [...nodes, ...current.children];
  };
}

// console.table();

const root = new TreeNode("Great", "Badam", 2);
// const child1 = new TreeNode("Luke Skywalker");
// const child2 = new TreeNode("Leia Organa");
// const child3 = new TreeNode("Kylo Ren");

root.addChild();
// root.addChild();
// root.traverse();
// root.addChild();
// root.addChild();
// root.addChild();

// root.addChild(child2);
// child2.addChild(child3);
// root.removeChild(child2);

// root.traverse();
console.table(root);
