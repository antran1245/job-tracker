const Note = require("../models/note.model");
const User = require("../models/user.model");

module.exports.createNote = (req, res) => {
    Note.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports.findNote = (req, res) => {
    const {_id, _jobId} = req.params
    User.findOne({_id: _id})
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
}