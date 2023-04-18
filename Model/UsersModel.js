const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const users = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }
}, { timestamps: true })

const Users = mongoose.model('allusers', users);

module.exports = { Users }