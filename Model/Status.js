const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const status = new Schema({
    content: {
      type: String,
      required: true
    },
    sharedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'allusers',
      required: true
    },
    userProfilePicture: {
      type: String,
      required: true
    }
  },{timestamps:true});

  const Status = mongoose.model('status', status);

  module.exports = {Status}