const Note = require("../models/note.model");
const User = require("../models/user.model");

module.exports.createNote = async(req, res) => {
    const {userId, jobId, interviewNote, note} = req.body
    const exist = await Note.exists({jobId: jobId, userId: userId})
    if (exist) {
        Note.findOneAndUpdate(
            {jobId: jobId},
            {$push: {interviewNote: interviewNote, note: note}},
            new: true)
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    } else {
        Note.create(req.body)
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    }
}

module.exports.findNote = (req, res) => {
    const {userId, jobId} = req.params
    Note.findOne({jobId: jobId, userId: userId})
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
}