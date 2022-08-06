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
                        jobs: resp._id
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
    Job.findById(req.params._id).populate("jobs")
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}

module.exports.findRecord = (req, res) => {
    const { _id } = req.params
    User.findOne({_id:_id})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
}