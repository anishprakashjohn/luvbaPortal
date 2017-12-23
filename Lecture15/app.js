console.log('Strarting app.. ');

const fs = require ('fs');
const _ = require('lodash');
const yargs=require('yargs');

const notes= require('./notes.js');

const argv=yargs.argv;
var command=argv._[0];

console.log('Command: ',command);

if(command=='add'){
    notes.addNote(argv.title, argv.body);
}

else if(command=='remove'){
    notes.removeNote(argv.title);
}

else if(command=='list'){
    notes.getAllNotes();
}

else if(command=='read'){
    notes.getAllNotes(argv.title);
}
else{
    console.log('Command not correct');
}



