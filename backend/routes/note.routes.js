const NoteController = require("../controllers/note.controller");

module.exports = (app) => {
    app.post('/api/note/:_id', NoteController.createNote);
    app.get('/api/note/:_id/:_jobId', NoteController.findNote)
}