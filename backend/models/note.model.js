const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Types.ObjectId
    },
    interviewNote: {
        type: String
    },
    note: {
        type: String
    }
},  {timestamps: true})

const Note = mongoose.model('Notes', NoteSchema);
module.exports =  Note;