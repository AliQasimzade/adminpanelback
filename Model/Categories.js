const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categories = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    require: true
  },
  icon: {
    type: String,
    require: true
  },
  color: {
    type: String,
    default: "#eee"
  }
}, { timestamps: true })

const Categories = mongoose.model('allcategories', categories)
module.exports = { Categories }
