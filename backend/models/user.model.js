const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username already in used"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [3, "Password is at least 3 characters long."]
    },
    email : {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already used"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    jobs: [{}],
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notes"
        }
    ]
}, {timestamps: true})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    })
})
const User = mongoose.model("Users", UserSchema);
module.exports = User;