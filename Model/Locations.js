const mongoose = require('mongoose')
const Schema = mongoose.Schema
const subcategorySchema = new Schema({
    name: {
      type: Object,
      required: true
    }
  });
const locations = new Schema({
    "name":{
        type:String,
        require:true
    },
    "image":{
        type:String,
        require:true
    },
    "categories":[subcategorySchema]
},{timestamps:true})

const Locations = mongoose.model('locations', locations)
module.exports = {Locations}