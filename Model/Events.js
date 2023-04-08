const mongoose = require('mongoose');
const Schema = mongoose.Schema

const events = Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    locationName: {
      type: String,
      required: true
    },
    image:{
      type:String,
      require:true
    },
    locationAddress: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    entryPrice: {
      type: Number,
      required: true
    },
    contactInfo: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    }
  });

const Events = mongoose.model('allevents', events)

module.exports = {Events}