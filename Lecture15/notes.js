console.log('Executing notes.js...');

var addNote = (title,body) =>{
    console.log('Adding Notes...', title, body);
};

var getAllNotes = () =>{
    console.log('Listing all notes');
}

module.exports = {
    addNote,
    getAllNotes
}