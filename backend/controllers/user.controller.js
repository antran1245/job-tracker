const User = require('../models/user.model');
const bcrypt = require('bcrypt');

module.exports.login = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email: email})
        const validPassword = await bcrypt.compare(password, user.password);
        if(validPassword) {
            res.json({message: 'ok', user: user});
        } else {
            res.status(400).json({message: "Invalid Email/Password"})
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports.register = async(req, res) => {
    const {username, password, email} = req.body;
    try {
        let user = await User.create({
            username,
            password,
            email
        })
        res.json(user)
    } catch (err) {
        res.json(err)
    }
}