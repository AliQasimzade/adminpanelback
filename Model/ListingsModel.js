const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listings = new Schema({
    email: {
        type: String,
        require: true
    },
    twitter: {
        type: String,
        require: true
    },
    locationCoords: {
        type: Object,
        require: true

    },

    rating_avg:{
        type:Number
    },
    reviews:{
        type:Object,
    },
    type: {
        type: String,
        require: true
    },
    uploadlink: {
        type: String,
        require: true
    },
    verify: {
        type:Boolean,
        default: false
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    zipcode: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    linkedin: {
        type: String,
        require: true
    },
    facebook: {
        type: String,
        require: true
    },
    whatsapp: {
        type: String,
        require: true
    },
    website: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    listingTitle: {
        type: String,
        require: true
    },
    gallery: {
        type: Object,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    previousprice: {
        type: Number,
        require: true
    },

    roadorstate: {
        type: String,
        require: true
    },
    cityorstate: {
        type: String,
        require: true
    },
    splashscreen: {
        type: String,
        require: true
    },
    profileImage: {
        type: String,
        require: true
    },
    features: {
        type: Object,
        require: true
    },
    slogan: {
        type: String,
        require: true
    },
    tags: {
        type: Object,
        require: true
    },
    timeschedule: {
        type: Object,
        require: true
    }
}, { timestamps: true })


const Listings = mongoose.model("listings", listings);

module.exports = { Listings }