
const childProcess = require('child_process');


const runCommand = command => {
    try {
        childProcess.execSync(`${command}`, { stdio: 'inherit' })
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }
    return true;
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/SyimykMitalipov/create-webpack-syimyk ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repo from ${repoName}`);
const checkout = runCommand(gitCheckoutCommand);
if (!checkout) process.exit(-1);


console.log(`Installing dependencies for ${repoName}`);

const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);


console.log(`Congratulations! You are ready`);
console.log(`cd ${repoName} && npm start`);