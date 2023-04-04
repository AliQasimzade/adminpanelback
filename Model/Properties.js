const mongoose = require('mongoose');
const Schema = mongoose.Schema

const properties = Schema({
    name: {
        type: String,
        require: true
    },
    icon: {
        type: String,
        require: true
    }
}, { timestamps:true })

const Properties = mongoose.model('allproperties', properties)

module.exports = {Properties}