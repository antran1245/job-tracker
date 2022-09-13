const Note = require("../models/note.model");
const User = require("../models/user.model");

module.exports.createNote = async(req, res) => {
    const {userId, jobId, interviewNote, note} = req.body
    const exist = await Note.exists({jobId: jobId, userId: userId})
    if (exist) {
        Note.findOneAndUpdate(
            {jobId: jobId, userId: userId},
            {$push: {interviewNote: interviewNote, note: note}},
            {new: true})
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    } else {
        Note.create(req.body)
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    }
}

module.exports.findNote = (req, res) => {
    const {_userId, _jobId} = req.params
    Note.findOne({jobId: _jobId, userId: _userId})
    .then(resp => res.json({interviewNote: resp.interviewNote, note: resp.note}))
    .catch(err => res.json(err))
}