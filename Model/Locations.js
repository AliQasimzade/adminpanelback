const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locations = new Schema({
    "name":{
        type:String,
        require:true
    },
    "image":{
        type:String,
        require:true
    }
},{timestamps:true})

const Locations = mongoose.model('locations', locations)
module.exports = {Locations}