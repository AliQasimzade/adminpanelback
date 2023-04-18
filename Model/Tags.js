const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tags = new Schema({
    name:{
        type:String,
        require:true
    }
}, {timestamps:true})

const Tags = mongoose.model('alltags', tags)

module.exports = {Tags}