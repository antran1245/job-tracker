const NoteController = require("../controllers/note.controller");

module.exports = (app) => {
    app.post('/api/note', NoteController.createNote);
    app.get('/api/note/:_userId/:_jobId', NoteController.findNote)
}