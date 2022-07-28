const Job = require('../models/job.model');

module.exports.createRecord = (req, res) => {
    console.log(req.body)
    Job.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports.allRecords = (req, res) => {
    Job.find({})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports.findRecord = (req, res) => {
    const { _id } = req.params
    User.findOne({_id:_id})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}