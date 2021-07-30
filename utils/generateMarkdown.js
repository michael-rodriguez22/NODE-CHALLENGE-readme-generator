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
  return `${license.name}\n${renderLicenseBadge(license)}\n${license.description.long}\n${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description 
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage) 
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)

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
`
}

module.exports = generateMarkdown;
