// Importing required modules and libraries
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Route for getting all notes
router.get("/api/notes", async (req, res) => {
  // Reading the JSON data from the file
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  // Sending the JSON data as the response
  res.json(dbJson);
});

// Route for saving a new note
router.post("/api/notes", (req, res) => {
  // Reading the JSON data from the file
  const dbJson = JSON.parse(fs.readFileSync("db/db.json", "utf8"));
  // Creating a new note object with a unique ID
  const newFeedback = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  // Adding the new note to the existing data
  dbJson.push(newFeedback);
  // Writing the updated data back to the file
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
  // Sending the updated JSON data as the response
  res.json(dbJson);
});

// Route for deleting a note
router.delete("/api/notes/:id", (req, res) => {
  // Reading the JSON data from the file
  let data = fs.readFileSync("db/db.json", "utf8");
  const dataJSON = JSON.parse(data);
  // Filtering out the note with the given ID
  const newNotes = dataJSON.filter((note) => {
    return note.id !== req.params.id;
  });
  // Writing the updated data back to the file
  fs.writeFileSync("db/db.json", JSON.stringify(newNotes));
  // Sending a success message as the response
  res.json("Note deleted.");
});

// Exporting the router
module.exports = router;
