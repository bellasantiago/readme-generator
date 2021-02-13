//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What's your project's TITLE?"
    },
    {
        type: "input",
        name: "description",
        message: "In SUMMARY, describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the CONTRIBUTORS to the project?"
    },
    {
        type: "input",
        name: "constributions",
        message: "Who are the criterias for CONTRIBUTIONS to the project?"
    },
    {
        type: "input",
        name: "test",
        message: "What is the default RUN TEST command?",
        default: "npm i"
    },
    {
        type: "list",
        name: "license",
        message: "Choose your LICENSE type?",
        choices: ["Apache", "BSD 3", "BSD 2", "GPL", "MIT", "Mozilla Public", "Common Dev and Distribution", "Eclipse", "None"],
    },

];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("The computer elfs are working on your new file...");
            writeToFile("./output/README.md", generateMarkdown({...inquirerAnswers }));
        });
};

// Function call to initialize app
init();