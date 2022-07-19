const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.post('/api/user/user', UserController.login);
    app.post('/api/user/register', UserController.register);
}