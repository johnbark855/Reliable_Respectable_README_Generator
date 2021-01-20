//packages installed/needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util')
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

//use inquirer to generate questions for data in README
const questions = [
    {
    type: 'input',
    message:"What's the project title?",
    name: 'title',
    //validate the property value to check if a value was provided by user
    validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
    type: 'input',
    message:'How do you install the application?',
    name:'installation',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
    type: 'input',
    message:'What instructions must be followed?',
    name:'instructions',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
    type: 'input',
    message:'Are there any Credits?',
    name:'installation',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
    type: 'input',
    message:'How do you use the application?',
    name:'usage',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
    type: 'input',
    message:'Who helped contribute to the project?',
    name:'contributing',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
        //List of used licenses
    type: 'list',
    message:'Did you use any licenses?',
    name:'license',
    choices:['the MIT License',
    'Apache 2.0',
    'The IBM License',
    'ISC license',
    'N/A'],
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
    type:'input',
    message:'Github username',
    name:'git',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },
    {
    type:'input',
    message:'E-mail',
    name: 'email',
    validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    },

];

// prompt the questions
function promptQuestions(questions) {
    return inquirer.prompt(questions);
}

//write the README based on user input
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
}

//function required to initialize the application
const init = async () => {
        try {
        const answers = await promptQuestions(questions);

        const markdown = await generateMarkdown(answers);

        writeToFile('README.md', markdown);

        console.log('Successfully wrote README.md');
    } catch (err) {
        console.log(err);
    }
};

// initialize app
init();