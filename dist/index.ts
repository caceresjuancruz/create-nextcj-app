#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

const repoUrl = 'https://github.com/caceresjuancruz/create-nextcj-app.git';

const projectName = process.argv[2] || 'nextcj-app';

console.log(`Cloning in ${projectName}...`);
execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });

process.chdir(path.join(process.cwd(), projectName));

console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit' });

console.log('Done! 🚀');
