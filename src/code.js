// task.js

const { exec } = require('child_process');

module.exports = {
    runTests: () => {
        console.log('Running tests...');
        exec('npm test', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error running tests: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    },
    formatCode: () => {
        console.log('Formatting code...');
        exec('npx prettier --write .', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error formatting code: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    },
    buildProject: () => {
        console.log('Building project...');
        exec('npm run build', (err, stdout, stderr) => {
            if (err) {
                console.error(`Error building project: ${stderr}`);
                return;
            }
            console.log(stdout);
        });
    }
};