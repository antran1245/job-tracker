const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Types.ObjectId
    },
    interviewNote: [
        String
    ],
    note: [
        String
    ]
},  {timestamps: true})

const Note = mongoose.model('Notes', NoteSchema);
module.exports =  Note;