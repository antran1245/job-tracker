const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: [true, "Job Title is required"]
    },
    company: {
        type: String,
        required: [true, "Company is required"]
    },
    position: {
        type: String,
    },
    experience: {
        type: String
    },
    appliedDate: {
        type: Date,
        required: [true, "Date is required"]
    },
    status: {
        type: String,
        default: "applied",
        enum: ['applied', 'interview', 'rejected']
    },
    interviewNote: {
        type: String
    },
    note: {
        type: String
    }
}, {timestamps: true})

const Job = mongoose.model('Jobs', JobSchema);

module.exports = Job;