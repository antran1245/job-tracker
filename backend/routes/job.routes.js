const JobController = require('../controllers/job.controller')

module.exports = (app) => {
    app.get('/api/jobs', JobController.allRecords);
    app.get('/api/job/:_id', JobController.findRecord);
    app.post('/api/job/new', JobController.createRecord);
}