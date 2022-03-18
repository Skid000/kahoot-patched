const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();
var prompt = require('prompt-sync')();
var unicodePassgen = require('unicode-passgen');
var code = prompt("GameCode: ");
client.join(code, unicodePassgen.generate(500));
client.on("Joined", () => {
  console.log("Joined");
});
client.on("QuizStart", () => {
  console.log("Starting...");
});

client.on("QuestionStart", question => {
  console.clear();
  console.log(`
  ________________        __________________
  |      0       |        |        1       |
  |______________|        |________________|    

  ________________        __________________
  |      2       |        |        3       |
  |______________|        |________________|
  `);
  var answer = prompt(`Answer (Max:${question.numberOfChoices}): `);
  question.answer(answer);
  
});
client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});
