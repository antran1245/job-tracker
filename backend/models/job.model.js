const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: [true, "Job Title is required"]
    },
    position: {
        type: String,
        required: [true, "Position is required"]
    },
    appliedDate: {
        type: Date,
        required: [true, "Date is required"]
    },
    status: {
        type: String,
        default: "applied",
        enum: ['applied', 'interview', 'rejected']
    }
}, {timestamps: true})

const Job = mongoose.model('Users', UserScehma);

module.exports = Job;