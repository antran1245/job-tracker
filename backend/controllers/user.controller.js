const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config();


module.exports.login = async(req, res) => {
    const {email, password} = req.body;
    try {
        // Find a user by email
        const user = await User.findOne({email: email})

        // Valid password by compare a hash password with an unhash password
        const validPassword = await bcrypt.compare(password, user.password);
        if(validPassword) {

            // A set of fields to include in the token
            const payload = {
                _id: user._id,
                username: user.username
            }
            // Generate the token
            const userToken = jwt.sign(payload, process.env.SECRET_KEY);
            
            // Set the cookie with a name of "usertoken"
            res.cookie("usertoken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            })

            // response message to client
            .json({message: 'ok', user: {_id: user.id, username: user.username}});
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
        // Create a user account to the mongoDB
        let user = await User.create({
            username,
            password,
            email
        })

        // A set of fields to include in the token
        const payload = {
            _id: user._id,
            username: user.username,
        }
        // Generate a token
        const userToken = jwt.sign(payload , process.env.SECRET_KEY)
        res.cookie('usertoken', userToken, process.env.SECRET_KEY, {
            httpOnly: true
        })
        .json({message: "ok", user: {_id: user.id, username: user.username}})
    } catch (err) {
        res.json(err)
    }
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.relogin = (req, res) => {
    const { _id } = res.locals.payload
    User.findOne({ _id: _id })
    .then(user => res.json({message: "ok", user: { _id: user.id, username: user.username }}))
    .catch(err => res.json(err))
}