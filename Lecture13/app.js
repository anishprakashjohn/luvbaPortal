console.log ('Starting app...');

const fs = require ('fs');
const _ = require('lodash');
const yargs = require ('yargs');
const argv = yargs.argv;

const notes = require ('./notes.js');

var command = argv._[2];
//console.log('Command: ', command);
//console.log('Process',process.argv);
console.log('Argument', argv);

if (command == 'add'){
    notes.addNote(argv.title, argv.body);
}
else if (command == 'list'){
    notes.getAll();
}

else if (command == 'read'){
    notes.getNote(argv.title);
}

else if (command == 'remove'){
    notes.removeNote(argv.title);
}else{
    console.log('Not a valid argument');
}

