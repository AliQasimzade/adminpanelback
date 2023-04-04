const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const banners = new Schema({
    image: {
        type:String,
        require:true
    }
},{timestamps:true})

const Banners = mongoose.model('allbanners',banners)

module.exports = { Banners }