function generateMarkdown(data) {

  // Variables
  let selectedLicense = `${data.license}`;
  let licenseLink = '';

  // links to licenses and conditional statements. 
  if (selectedLicense === 'Apache License 2.0') {
    selectedLicense = 'Apache License 2.0';
    licenseLink = 'https://opensource.org/licenses#:~:text=have%20strong%20communities%3A-,Apache%20License%202.0,-BSD%203%2DClause';
  };
  if (selectedLicense === 'BSD 3-Clause "New" or "Revised" license') {
    selectedLicense = 'BSD 3-Clause "New" or "Revised" license';
    licenseLink = 'https://opensource.org/licenses#:~:text=BSD%203%2DClause%20%22New%22%20or%20%22Revised%22%20license';
  };
  if (selectedLicense === 'BSD 2-Clause "Simplified" or "FreeBSD" license') {
    selectedLicense = 'BSD 2-Clause "Simplified" or "FreeBSD" license';
    licenseLink = 'https://opensource.org/licenses#:~:text=BSD%202%2DClause%20%22Simplified%22%20or%20%22FreeBSD%22%20license';
  };
  if (selectedLicense === 'GNU General Public License (GPL)') {
    selectedLicense === 'GNU General Public License (GPL)';
    licenseLink = 'https://opensource.org/licenses#:~:text=GNU%20General%20Public%20License%20(GPL)';
  };
  if (selectedLicense === 'GNU Library or "Lesser" General Public License (LGPL)'); {
    selectedLicense = 'GNU Library or "Lesser" General Public License (LGPL)';
    licenseLink = ' https://opensource.org/licenses#:~:text=GNU%20Library%20or%20%22Lesser%22%20General%20Public%20License%20(LGPL)';
  };
  if (selectedLicense === 'MIT license') {
    selectedLicense = 'MIT license';
    licenseLink = 'https://opensource.org/licenses#:~:text=Public%20License%20(LGPL)-,MIT%20license,-Mozilla%20Public%20License';
  };
  if (selectedLicense === 'Mozilla Public License 2.0') {
    selectedLicense = 'Mozilla Public License 2.0';
    licenseLink = 'https://opensource.org/licenses#:~:text=Mozilla%20Public%20License%202.0';
  };
  if (selectedLicense === 'Common Development and Distribution License') {
    selectedLicense = 'Common Development and Distribution License';
    licenseLink = 'https://opensource.org/licenses#:~:text=Common%20Development%20and%20Distribution%20License';
  };
  if (selectedLicense === 'Eclipse Public License version 2.0') {
    selectedLicense = 'Eclipse Public License version 2.0';
    licenseLink = 'https://opensource.org/licenses#:~:text=Eclipse%20Public%20License%20version%202.0';
  };



// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

let readmeTemplate =

  `# ${data.title}

### Description

${data.description}

![badge](https://img.shields.io/badge/license-${selectedLicense}-brightorange)
`

// table of content

let tableOfContent =
  `### Table of Contents`;
if (data.installation) {
  tableOfContent +=
    `
  * [Installation](#installation)`
};
if (data.instructions) {
  tableOfContent +=
    `
  * [Usage](#usage)`
};
if (data.contribution) {
  tableOfContent +=
    `
  * [Contribution](#contribution)`
};
if (data.testing) {
  tableOfContent +=
    `
  * [Testing](#testing)`
};

readmeTemplate += tableOfContent;

// contact info; license
readmeTemplate +=
  `
* [Questions](#questions)`;

readmeTemplate +=
  `
* [License](#license)
`;


// content body

// installation
if (data.installation) {
  readmeTemplate += 
  `
  ### Installation

  _Steps to install this application:_

  ${data.installation}`
};

// usage
if (data.instructions) {
  readmeTemplate +=
  `
  
  ### Usage

  _How to use:_

  ${data.instructions}`
};

// contributions
if (data.contribution) {
  readmeTemplate +=
  `
  
  ### Contribution

  _Guidelines for contribution to project:_

  ${data.contribution}`
};

// testing
if (data.testing) {
  readmeTemplate +=
  `
  
  ### Testing

  _How to test the application:_

  ${data.testing}`
};

// contact info
readmeTemplate +=
`

_If you have any questions or would like to contact me:_

${data.questions}

_Contact Information:_

GitHub: [${data.username}](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})`;

markdownTemplate +=

`

### License

_Project License: ${data.license}_

To understand this license, please view the [license description](${licenseLink}).

`;
return readmeTemplate;

}
module.exports = generateMarkdown;
