## node-app
A simple Application using Node.js, Express and MongoDB.


## Getting Started
Please do your initial checkout with the command 'git@github.com:mariepascale/node-app.git'


## Installation
Node.js - https://nodejs.org/
npm install -g express-generator
Run "express node-app" to add structure

Add the following to package.json:
"mongodb": "*",
"monk": "*"
Run "npm install" to install everyting listed in the dependencies object and gets the latest versions.
Running npm install creates the node_modules dir with all dependencies.

Run "mkdir data" to prepare for MongoDB data storage.

## Replace Jade with html templating engine in an Express.js app.
Run "express --hogan"
This adds Hogan as a dependency in package.json, generating an index.hjs file and replacing a line in your configuration in express.js from
app.set('view engine', 'jade') to app.set('view engine', 'hjs');


## Optional
In app.js add html as a view engine:
comment out app.set('view engine', 'hjs');
Add the following:
app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
In view change file extensions to html.

Note:
If "jade": "latest" exists in your dependency:
In package.json, remove "jade": "latest" and add "hogan-express": "latest"
Run "npm install"




