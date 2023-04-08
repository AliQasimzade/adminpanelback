const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listings = new Schema({
    post_author: { type: String },
    post_date: { type: Date, default: Date.now },
    post_date_gmt: { type: Date, default: Date.now },
    post_content: { type: String },
    post_title: { type: String },
    post_excerpt: { type: String },
    post_status: { type: String },
    comment_status: { type: String },
    ping_status: { type: String },
    post_password: { type: String },
    post_name: { type: String },
    to_ping: { type: String },
    pinged: { type: String },
    post_modified: { type: Date, default: Date.now },
    post_modified_gmt: { type: Date, default: Date.now },
    post_content_filtered: { type: String },
    post_parent: { type: Number },
    guid: { type: String },
    menu_order: { type: Number },
    post_type: { type: String },
    post_mime_type: { type: String },
    comment_count: { type: Number },
    filter: { type: String },
    address: { type: String },
    phone: { type: String },
    status: { type: String },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    links:{
     self: {
        href: {
            type:String
        }
     },
     collection:{
        href:{
            type:String
        }
     }
    },
    rating_avg: { type: Number, default: 0 },
    rating_count: { type: Number, default: 0 },
    wishlist: { type: Boolean, default: false },
    booking_use: { type: Boolean, default: false },
    booking_style: { type: String },
    booking_price: { type: String },
    booking_price_display: { type: String }
});


const Listings = mongoose.model("listings", listings);

module.exports = { Listings }