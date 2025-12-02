const fs = require('fs');
const path = require('path');

/**
 * Updates the README file with a new contribution link.
 * @param {string} filePath - The path to the README file.
 * @param {string} newLink - The new contribution link to be added.
 */
const updateReadme = (filePath, newLink) => {
  try {
    // Resolve the full path to the README file
    const readmePath = path.resolve(__dirname, filePath);
    
    // Read the current content of the README file
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');

    // Define the regex pattern to find the contribution link
    const contributionLinkPattern = /\[Contribution Guide\]\(.*?\)/;

    // Replace the old link with the new link
    const updatedContent = readmeContent.replace(contributionLinkPattern, `[Contribution Guide](${newLink})`);

    // Write the updated content back to the README file
    fs.writeFileSync(readmePath, updatedContent, 'utf-8');
  } catch (error) {
    console.error('Error updating README:', error);
  }
};

module.exports = { updateReadme };