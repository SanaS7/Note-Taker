// Importing required modules and libraries
const router = require("express").Router();
const path = require("path");

// Route for serving the index.html file
router.get("/", (req, res) => {
  // Sending the index.html file as the response
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Route for serving the notes.html file
router.get("/notes", (req, res) => {
  // Sending the notes.html file as the response
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Exporting the router
module.exports = router;
