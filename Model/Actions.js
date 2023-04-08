const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
    action_id: {
      type: String,
      required: true
    },
    hook: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    scheduled_date_gmt: {
      type: Date,
      required: true
    },
    scheduled_date_local: {
      type: Date,
      required: true
    },
    args: {
      type: String,
      required: true
    },
    schedule: {
      type: String,
      required: true
    },
    group_id: {
      type: String,
      required: true
    },
    attempts: {
      type: Number,
      required: true
    },
    last_attempt_gmt: {
      type: Date,
      required: true
    },
    last_attempt_local: {
      type: Date,
      required: true
    },
    claim_id: {
      type: String,
      required: true
    },
    extended_args: {
      type: String
    }
  });

  const Actions = mongoose.model('actions', mySchema)
  module.exports = {Actions}