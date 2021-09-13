const licenses = require("./licenses");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license.badge ? `${license.badge}\n` : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license.link ? `${license.link}` : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${license.name}\n${license.description.long}\n\n${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(licenses[answers.license.match(/^[0-9]+/)])}

## Description 
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage) 
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${answers.installation}

## Usage 
${answers.usage}

## License
${renderLicenseSection(licenses[answers.license.match(/^[0-9]+/)])}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Have any questions related to this project? Feel free to reach out to me on <a href="https://github.com/${answers.github}">my github profile page!</a>

You can also reach me by email at ${answers.email}
`
}

module.exports = generateMarkdown;
