console.log ('Starting app...');

const fs = require ('fs');
const _ = require('lodash');

const notes = require ('./notes.js');

var command = process.argv[2];
console.log('Command: ', command);
console.log(process.argv);

if (command == 'list'){
    console.log('Listing notes');
}