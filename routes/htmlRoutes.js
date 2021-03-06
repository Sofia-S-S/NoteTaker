const path = require("path");
const router = require("express").Router();

//GET `/notes` - Should return the `notes.html` file.
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// - GET `*` - Should return the `index.html` file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export routes for server.js to use.
module.exports = router;
