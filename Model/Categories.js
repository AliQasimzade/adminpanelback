const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categories = new Schema({
    name: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      icon: {
        type: String
      }
},{timestamps:true})

const Categories = mongoose.model('allcategories',categories)
module.exports = {Categories}
