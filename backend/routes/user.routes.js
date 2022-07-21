const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {
    app.get('/api/user', authenticate, UserController.relogin);
    app.get('/api/user/logout', UserController.logout);
    app.post('/api/user/login', UserController.login);
    app.post('/api/user/register', UserController.register);
}