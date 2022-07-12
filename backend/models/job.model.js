const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: [true, "Job Title is required"]
    },
    position: {
        type: String
    },
    appliedDate: {
        type: Date
    },
    status: {
        type: String
    }
}, {timestamps: true})

const Job = mongoose.model('Users', UserScehma);

module.exports = Job;