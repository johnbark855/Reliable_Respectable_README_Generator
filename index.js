const inquirer = require('inquirer');
const fs = require('fs');


//use inquirer to generate questions for data in README
inquirer.prompt(
[
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
        //List of used licenses
    type: 'list',
    message:'Did you use any licenses?',
    name:'license',
    choices:['the MIT License','The GPL License','Apache License','GNU license','N/A'],
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
    {
        type:'input',
        message:'LinkedIn',
        name: 'linkedin',
        validate: (value)=>{ if (value){return true} else {return 'I need a value to continue'}},
    }
    
]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution,
})=>{
    //template that will be used
    const template = `# ${title}
    * [Installation](#installation)
    * [Usage] (#usage)
    * [contribution] (#contribution)
    * [Credits] (#credits)
    * [License] (#license)
    * Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ### instructions
    ${instructions}
    ## Credits
    ${credit}
    ## License
    ${license}
    # Contact
    *Github :${git}
    *Linkedin :${linkedin}
    E-mail :${email}`;
    //Function to create readme using fs
    createNewFile(title,template);
}
);
//Creating our createNewfile function
function createNewFile(fileName,data){
//fs
fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data,(err)=>{
    if (err){
        console.log(err)
    }
    console.log('Your README has been sucessfully generated');
})
}

