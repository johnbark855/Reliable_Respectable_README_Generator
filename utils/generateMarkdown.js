//function to return badge
function renderLicenseBadge(license) {
switch(license){
case 'the MIT License':
  return 'https://img.shields.io/badge/License-MIT-green.svg';
case 'Apache 2.0':
  return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
case 'The IBM License':
  return 'https://img.shields.io/badge/License-IBM-green.svg';
case 'ISC license':
  return 'https://img.shields.io/badge/License-ISC-green.svg';
case 'N/A':
  return 'https://img.shields.io/badge/License-unlicense-lightgray.svg';
  }
}  

//function to return link
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'IBM':
      return 'https://opensource.org/licenses/IPL-1.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'Unlicense':
      return 'https://opensource.org/licenses/unlicense';
    }
}





// return the licenses of the README
function renderLicenseSection(license) {
  return `This project is released under ${license} opensource license`;
}

//generate markdown for README



function generateMarkdown(data) {
  console.log(data.license)
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSelection = renderLicenseSection(data.license);

return `# ${data.title}




## Description
![License](${licenseBadge})
\n
${data.description}

## Table of Contents


- [Installation](#Installation)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [License](#License)
- [Questions](#Questions)


    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contribution
    ${data.contribution}


    ## License
    this application is covered by the ${data.license} license

    ## Questions
    To see more of my work and projects, [Visit my Github profile.](https://github.com/${data.github})
    If there are any questions you would like to ask, please contact my email ${data.email}

    `;

}

module.exports = generateMarkdown;
