let questions = [
  {
    type: "input",
    name: "playerName",
    message: "what is your name?",
  },
  {
    type: "list",
    name: "petType",
    message: "what type of Animal do you want you pet to be?",
    choices: ["Dog", "Cat", "Penguin", "Lion"],
  },
  {
    type: "input",
    name: "petName",
    message: "what is your pets name?",
  },
];

let gameLoop = [
  {
    type: "list",
    name: "action",
    message: "what action would you like to take?",
    choices: ["Play", "Eat", "Drink", "Sleep", "Check Stats"],
  },
];

module.exports = {
  questions,
  gameLoop,
};
