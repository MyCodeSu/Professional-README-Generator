function generateMarkdown(data) {

  // Variables
  let selectedLicense = `${data.license}`;
  let licenseLink = '';

  // links to licenses and conditional statements. 
  if (selectedLicense === 'apache-2.0') {
    selectedLicense = 'apache-2.0';
    licenseLink = 'https://opensource.org/licenses#:~:text=have%20strong%20communities%3A-,Apache%20License%202.0,-BSD%203%2DClause';
  };
  if (selectedLicense === 'bsd-3-clause') {
    selectedLicense = 'bsd-3-clause';
    licenseLink = 'https://opensource.org/licenses#:~:text=BSD%203%2DClause%20%22New%22%20or%20%22Revised%22%20license';
  };
  if (selectedLicense === 'bsd-2-clause') {
    selectedLicense = 'bsd-2-clause';
    licenseLink = 'https://opensource.org/licenses#:~:text=BSD%202%2DClause%20%22Simplified%22%20or%20%22FreeBSD%22%20license';
  };
  if (selectedLicense === 'gpl') {
    selectedLicense === 'gpl';
    licenseLink = 'https://opensource.org/licenses#:~:text=GNU%20General%20Public%20License%20(GPL)';
  };
  if (selectedLicense === 'lgpl'); {
    selectedLicense = 'lgpl';
    licenseLink = ' https://opensource.org/licenses#:~:text=GNU%20Library%20or%20%22Lesser%22%20General%20Public%20License%20(LGPL)';
  };
  if (selectedLicense === 'mit') {
    selectedLicense = 'mit';
    licenseLink = 'https://opensource.org/licenses#:~:text=Public%20License%20(LGPL)-,MIT%20license,-Mozilla%20Public%20License';
  };
  if (selectedLicense === 'mpl-2.0') {
    selectedLicense = 'mpl-2.0';
    licenseLink = 'https://opensource.org/licenses#:~:text=Mozilla%20Public%20License%202.0';
  };
  if (selectedLicense === '	epl-2.0') {
    selectedLicense = '	epl-2.0';
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
