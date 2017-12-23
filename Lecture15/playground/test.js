//var obj = {
//    name: 'Andrew'
//}
//
//var stringObj = JSON.stringify(obj);
//console.log(typeof obj);
//console.log(obj);

//var personString = '{"name":"Andrew", "age":25}';
//var person= JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
}
 
var originalNoteString = JSON.stringify(originalNote);
console.log('Original Note  Type',typeof originalNoteString);
console.log('Original Note', originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var readNoteString = fs.readFileSync('notes.json');
var readNote= JSON.parse(readNoteString);
console.log('Read Note Type', typeof readNoteString);
console.log(readNote.title);


