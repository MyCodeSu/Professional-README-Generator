// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository 
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter your repository title.');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your repository? (Required)',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a description of the repository.');
            return false;
        }
    }
},
{
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Is there an installation process?'
},
{
    type: 'input',
    name: 'installation',
    message: 'Please list installation instructions.',
    // the <when> is a condition that allows the user to input an installation process if installation is required.
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Would you like to provide instructions on how to use your application?'
  },
  { //if confirmed
    type: 'input',
    name: 'instructions',
    message: 'Please provide instructions on how to use your application.',
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmContribution',
    message: 'Will other developers be granted permission to contribute to your repository?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please describe how other developers can contribute to your project.',
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'testConfirm',
    message: 'Is testing available?'
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Please describe how users may test your application.',
    when: ({ testConfirm }) => {
      if (testConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  { //checkbox that allows license choice
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license type.',
    choices: ['apache-2.0', 'bsd-3-clause', 'bsd-2-clause', 'gpl', 'lgpl', 'mit', 'mpl-2.0', 'epl-2.0'],
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please select a license type.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please provide instructions on how you prefer to be contacted.',
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        return false;
      }
    }
  }];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if(error) {
            return console.log('An error has occurred: '+ error);
        }
    })
}

const createReadMe = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
