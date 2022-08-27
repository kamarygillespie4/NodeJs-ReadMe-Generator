// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Description
${data.projectdescription}

  ## Table of Contents
  1. [Installation Instructions](#installation)
  2. [Usage Information](#usage)
  3. [Contribution Guidelines](#contribution)
  4. [Testing](#testing)
  5. [License information](#Licensing)
  6. [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Testing
  ${data.testinstructions}
  ## Licensing
  ${data.licenseselection}
  ## Questions
  If you have any further questions, 
   - You can email me at: ${data.email}
   - You can find my GitHub at: [${data.gituser}](https://github.com/${data.gituser})
  

`;
}

module.exports = generateMarkdown;