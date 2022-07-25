const Job = require('../models/job.model');

module.exports.createRecord = (req, res) => {
    Job.create(req.body)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}