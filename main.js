const fs = require("fs");

const people = [
  {
    name: "Ali",
    age: 25,
    role: "dev",
  },
  {
    name: "Kerry",
    age: 30,
    role: "Manager",
  },
  {
    name: "Peter",
    age: 45,
    role: "dev",
  },
];

// fs.writeFileSync("data.json", JSON.stringify(people));
const data = fs.readFileSync("./data.json");
const streamBufer = data.toString();
const convert = JSON.parse(streamBufer);
// fs.writeFileSync("result.js", "convert");
const command = process.argv[2];
switch (command) {
  case "add":
    console.log("adding...");
    break;
  case "remove":
    console.log("removing...");
    break;
}
console.log(convert);
console.log(process.argv);
