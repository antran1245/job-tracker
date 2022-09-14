const Note = require("../models/note.model");
const User = require("../models/user.model");

module.exports.createNote = async(req, res) => {
    const {userId, jobId, note} = req.body
    const form = {userId: userId, jobId: jobId, note: note}
    const exist = await Note.exists({jobId: jobId, userId: userId})
    if (exist) {
        Note.findOneAndUpdate(
            {jobId: jobId, userId: userId},
            {$push: {note: note}},
            {new: true})
        .then(resp => res.json(resp.note))
        .catch(err => res.json(err))
    } else {
        Note.create(form)
        .then(resp => res.json(resp.note))
        .catch(err => res.json(err))
    }
}
module.exports.createInterviewNote = async(req, res) => {
    const {userId, jobId, interviewNote} = req.body
    const form = {userId: userId, jobId: jobId, interviewNote: interviewNote}
    const exist = await Note.exists({jobId: jobId, userId: userId})
    if (exist) {
        Note.findOneAndUpdate(
            {jobId: jobId, userId: userId},
            {$push: {interviewNote: interviewNote}},
            {new: true})
        .then(resp => res.json(resp.interviewNote))
        .catch(err => res.json(err))
    } else {
        Note.create(form)
        .then(resp => res.json(resp.interviewNote))
        .catch(err => res.json(err))
    }
}
module.exports.findNote = (req, res) => {
    const {_userId, _jobId} = req.params
    Note.findOne({jobId: _jobId, userId: _userId})
    .then(resp => res.json({interviewNote: resp.interviewNote, note: resp.note}))
    .catch(err => res.json(err))
}