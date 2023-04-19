const { Listings } = require("../Model/ListingsModel.js");
const nodemailer = require('nodemailer');

const GetListings = async (req, res) => {
    const listings = await Listings.find();
    res.json(listings);
};

const addListing = async (req, res) => {
    const { address,
        category, email, zipcode, listingTitle,
        facebook, linkedin, description,
        gallery, splashscreen, phone, price,
        previousprice, whatsapp, roadorstate,
        cityorstate, profileImage, website,
        tags, timeschedule, features,
        slogan, uploadlink, twitter, locationCoords, type, reviews,verify
    } = req.body;
    let ratingCounts;
    let sumCounts;
    let avg;
    if (reviews) {
        ratingCounts = reviews.map(review => review.rating_count)
        sumCounts = ratingCounts.reduce((acc, num) => acc + num, 0)
        avg = Number(sumCounts / ratingCounts.length).toFixed(1)
    } else {
        avg = 0
    }

    try {

        const newListing = new Listings({
            address: address,
            category: category,
            type: type,
            rating_avg: avg,
            reviews: reviews ? reviews : [],
            email: email,
            zipcode: zipcode,
            verify:verify,
            twitter: twitter,
            locationCoords: locationCoords,
            uploadlink: uploadlink,
            listingTitle: listingTitle,
            facebook: facebook,
            linkedin: linkedin,
            description: description,
            gallery: gallery,
            splashscreen: splashscreen,
            phone: phone,
            price: price,
            previousprice: previousprice,
            whatsapp: whatsapp,
            roadorstate: roadorstate,
            cityorstate: cityorstate,
            profileImage: profileImage,
            slogan: slogan,
            website: website,
            tags: tags,
            features: features,
            timeschedule: timeschedule
        })
        newListing.save();
        let transporter = nodemailer.createTransport({
            host: "mail.restwell.az",
            port: 465,
            secure: true,
            service: 'restwell.az',
            auth: {
                user: 'info@restwell.az', // replace with your email
                pass: 'RestWell!=2023' // replace with your password
            }
        });
        
        // setup email data with unicode symbols
        let mailOptions = {
            from: email, // sender address
            to: 'info@restwell.az', // list of receivers
            subject: 'New listing added', // Subject line
            text: 'Your new listing has been added successfully!', // plain text body
        };
        
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.status(200).json({ message: "Lisintg added succesfully", listing: newListing })

    } catch (error) {
        console.log("error at listing adding")
    }
}

const deleteListing = async (req, res) => {
    const listing_id = req.params.id;
    await Listings.deleteOne({ _id: listing_id });
    return res.status(200).json({ message: "Listing deleted succesfully", listing: listing_id })

}

const newReview = async (req, res) => {
    const review = req.body
    const listing_id = req.params.id
    try {
        await Listings.findByIdAndUpdate(listing_id, { $push: { reviews: review } })

        const listings = await Listings.findById(listing_id)
        const ratingCounts = listings.reviews.map(review => review.rating_count)
        const totalRatings = listings.reviews.reduce(
            (acc, curr) => acc + curr.rating_count,
            0
        )
        const avg = Number(totalRatings / ratingCounts.length).toFixed(1)
        await Listings.findByIdAndUpdate(listing_id, { $set: { rating_avg: avg } })

        return res.status(200).json({ message: `${listing_id} new review added succesfully`,listing: listings })
    } catch (err) {
        console.log("error")
    }
}


const updateListing = async (req, res) => {
    const listing_id = req.params.id
    try {
        await Listings.findByIdAndUpdate(listing_id, req.body)
        return res.status(200).json({ message: `${listing_id} listing updated succesfully` })
    } catch (error) {
        console.log("error at update listing")
    }
}

module.exports = {
    GetListings,
    addListing,
    deleteListing,
    updateListing,
    newReview
}