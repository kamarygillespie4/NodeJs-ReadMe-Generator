// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
}, {
    type: "input",
    message: "Please provide a description of your project",
    name: "project-description",
}, {
    type: "input",
    message: "How do you install the application?",
    name: "installation",
}, {
    type: "input",
    message: "How is this application used?",
    name: "usage",
}, {
    type: "input",
    message: "Contribution credit?",
    name: "contribution",
}, {
    type: "input",
    message: "test instrucions?",
    name: "test-instructions"
}, {}, {
    type: "input",
    message: "What is your github username",
    name: "git-user"
}, {}, {
    type: "input",
    message: "What is your email?",
    name: "test-instructions"
}, {
    type: "list",
    message: "Please choose a license for this project",
    choices: ["Apache License 2.0", "GNU GPLv3", "MIT", ],
    name: "license-selection"
}];

//TODO: Create a function to write README file
function writeToFile(fileName, data) {

}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            fs.writeFile("README.md", generateMarkdown(response));
        })
        .catch((err) => {
            if (err) throw err;
        });
}

// Function call to initialize app
init();