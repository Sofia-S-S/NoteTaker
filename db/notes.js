const util = require("util");
var fs = require("fs");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  constructor() {
    this.id = 0;
  }
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(note) {
    return writeFileAsync("db/db.json", JSON.stringify(note));
  }
  getNotes() {
    console.log("get noTES FUNCTIOJNS");
    return this.read().then(notes => {
      let structuredNotes = [];
      structuredNotes = structuredNotes.concat(JSON.parse(notes));
      console.log(structuredNotes);
      return structuredNotes;
    });
  }
  saveNote(note) {
    console.log("adding note");
    const { title, text } = note;
    const newNote = { title, text, id: ++this.id };
    return this.getNotes()
      .then(notes => [...notes, newNote])
      .then(updatedNotes => this.write(updatedNotes))
      .then(() => newNote);
  }
  deleteNote(id) {
    console.log("delete route");
    return this.getNotes()
      .then(notes => notes.filter(note => note.id !== parseInt(id)))
      .then(filteredNotes => this.write(filteredNotes));
  }
}
module.exports = new Notes();
