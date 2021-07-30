const createTemplate = answers => `
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
${answers.license}

## Contributing
${answers.contributions}

## Tests
${answers.tests}
`

module.exports = createTemplate;