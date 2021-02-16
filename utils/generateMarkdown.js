function renderLicenseBadge(license) {
    // If the user selection for the license type is "None", then return an empty string.
    if (license === "None") {
        return ""
    } else {
        // Else, if a license type is selected, then pull the corresponding badge.
        return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
    }
}

function renderLicenseLink(license) {
    // If the user selection for the license type is "None", then return an empty string.
    if (license === "None") {
        return ""
    } else {
        // Else, if a license type is selected, then create a License line in the table of contents.
        return (
            `- [License](#license🔐)`
        )
    }
}

function renderLicenseSection(license) {
    // If the user selection for the license type is "None", then return an empty string. 
    if (license === "None") {
        return ""
    } else {
        // Else, if a license type is selected, then create a License section.
        return (
            `## License🔐
            This project is licensed under ${license}.`
        )
    }
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 🖥
  ${renderLicenseBadge(data.license)}

  ---

  ## Description📒
  \`\`\`
  ${data.description}
  \`\`\`

  ---

  ## Table Of Contents🗄
  - [Installation](#Installation⬇️) 
  - [Usage](#Usage📋)
  - [Contributors](#Contributors🧑‍💻👩‍💻)
  - [Future Contributions](#Future-Contributions💡)
  - [Tests](#Tests🗂)
  - [Questions](#Questions❔)
  ${renderLicenseLink(data.license)}

  ---

  ## Installation⬇️
  The user must first have the npm library installed by running the command:\n
  \`\`\`
  ${data.installation}
  \`\`\`

  ---

  ## Usage📋
  To run the application, you'll need to run the command:\n
  \`\`\`
  ${data.usage}
  \`\`\`

  ---

  ## Contributors🧑‍💻👩‍💻
  
  ${data.contributors}
  
  ---

  ## Future Contributions💡
  
  ${data.constributions}

  ---

  ## Tests🗂
  To run tests in this project, run the command:\n
  \`\`\`
  ${data.test}
  \`\`\`

  ---

  ## Questions❔

  If you have any questions, please contact me at ${data.email}\n
  Have a look at my other projects at [github.com/${data.github}](https://github.com/${data.github})
  
  ---
  ${renderLicenseSection(data.license)}
  `;
}

module.exports = generateMarkdown;