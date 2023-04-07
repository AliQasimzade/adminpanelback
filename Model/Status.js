const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = new Schema({
    content: {
      type: String,
      required: true
    },
    image:{
      type:String,
      require:true
    },
    sharedBy: {
      type: String,
      required: true
    },
    userProfilePicture: {
      type: String,
      required: true
    },
    createdAt: { type: Date, default: Date.now, expires: '1d' }
  },{timestamps:true});

  const Status = mongoose.model('status', status);

  module.exports = {Status}