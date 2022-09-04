const Job = require('../models/job.model');
const User = require('../models/user.model');

module.exports.createRecord = (req, res) => {
    // console.log(req.params._id)
    Job.create(req.body)
    .then(resp => 
        {
            User.findByIdAndUpdate(
                req.params._id,
                {
                    $push: {
                        jobs: resp
                    }
                },
                {new: true, useFindAndModify: false})
            .then(() => res.json(resp))
            .catch(err => res.json(err))
            // res.json(resp)
        })
    .catch(err => res.json(err))
}

module.exports.allRecords = (req, res) => {
    const { _id } = req.params
    User.findOne({_id:_id})
    .populate("jobs")
    .then(jobs => res.json(jobs))
    .catch(err => res.json(err))
}

module.exports.findRecord = (req, res) => {
    const { _id } = req.params
    User.findOne({_id:_id})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports.updateStatus = (req, res) => {
    const { _id, status } = req.body
    Job.findOneAndUpdate(
        {_id:_id},
        {status: status},
        {new:true})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}