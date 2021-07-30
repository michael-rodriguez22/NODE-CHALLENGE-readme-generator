const licenses = require("./licenses");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (required)",
    validate: (input) => input !== undefined,
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description for your project. (required)",
    validate: (input) => input !== undefined,
  },
  {
    type: "input",
    name: "installation",
    message: "How do users install your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do users interact with your application?",
  },
  {
    type: "input",
    name: "contributions",
    message: "What are the contribution guidelines for this project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do users run tests for this application?",
  },
  {
    type: "list",
    name: "license",
    message: "Which of these licenses best fits your project?",
    choices: [1, 2, 3] /*licenses.id licenses.name licenses.description.short*/,
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message:
      "What is a good email address to receive questions relating to this project?",
  },
];

module.exports = questions
