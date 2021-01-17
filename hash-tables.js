const prompt = require("prompt-sync")({ sigint: true });

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }
}

// filter = (score) =>
//   (hash = (score) => {
//     const score = students.find((score) => students.score);
//   });

// const classA = students.filter((element) => element.score >= 90);
// console.log(classA);
// const classB = students.filter((element) => 90 > element.score >= 80);
// console.log(classB);
// const classC = students.filter((element) => 80 > element.score >= 70);
// console.log(classC);
// const classD = students.filter((element) => 70 > element.score >= 60);
// console.log(classD);
// const noClass = students.filter((element) => element.score < 60);
// console.log(noClass);

compress = (hashCode) => {
  return hashCode;
};

insert = (name, score) => {
  let collisionCount = 0;
  while (true) {
    const hashCode = this.hash(name, collisionCount);
    const index = this.compress(hashCode);

    let currentValue = this.array[index];
    if (!currentScore || currentValue[0] === name) {
      this.array[index] = [name, score];
      break;
    } else {
      collisionCount++;
    }
  }
};

lookup = (key) => {
  let collisionCount = 0;
  while (true) {
    const hashCode = this.hash(key, collisionCount);
    const index = this.compress(hashCode);
    let currentValue = this.array[index];

    if (!currentValue) return null;

    if (currentValue[0] === key) {
      return currentValue[1];
    }

    collisionCount++;
  }
};

const classSize = prompt(
  `What is the maximum number of students in a single class? `
);

const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

const studentName = students.find((student) => student.name);
console.log(studentName(Diego));

// console.table(find.students());
// console.log(students[0]);
