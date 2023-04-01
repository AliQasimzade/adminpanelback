const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const listings = new Schema()

const Listings = mongoose.model("listings",listings);

module.exports = {Listings}