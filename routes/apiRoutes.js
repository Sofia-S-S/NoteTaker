const router = require("express").Router();
const notes = require("../db/notes");
console.log("api routes");
//GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
// Displays all notes
router.get("/notes", (req, res) => {
  console.log("API GET ROUTE");
  notes
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});
//POST `/api/notes`
//Should recieve a new note to save on the request body,
//add it to the `db.json` file,
//and then return the new note to the client.
router.post("/notes", (req, res) => {
  var newNote = req.body;
  console.log("POst route");
  notes.saveNote(newNote).then(note => res.json(note));
});

//DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

router.delete("/notes/:id", (request, response) => {
  const noteId = request.params.id;
  console.log("delete route id: " + noteId);
  // const newNotes = notes.filter(note => note.id != noteId);
  // notes.deleteNote().then();
  // if (!newNotes) {
  //   response.status(500).send("note not found.");
  // } else {
  //   notes = newNotes;
  //   response.send(notes);
  // }deleteNote
  notes
    .deleteNote(noteId)
    .then(() => response.json({ ok: true }))
    .catch(err => response.status(500).json(err));
});
// Export routes for server.js to use.
module.exports = router;
