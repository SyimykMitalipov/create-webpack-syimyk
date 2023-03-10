#!usr/bin/env node
const proChild = require('child_process');

const runCommand = command => {
  try {
    proChild.execSync(`${command}, { stdio: 'inherit' }`);
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[ 2 ];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/SyimykMitalipov/create-webpack-syimyk ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);

const installDeps = runCommand(installDepsCommand);

if (!installDeps) process.exit(-1);

console.log('Congratulations! You are ready. Follow the followint commands to start');
console.log(`cd ${repoName} && npm start`)