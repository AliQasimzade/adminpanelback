const { Listings } = require("../Model/ListingsModel.js");

const GetListings = async (req, res) => {
    const listings = await Listings.find();
    res.json(listings);
};

const addListing = async (req, res) => {
    const { address, bathroom, bedroom, 
        category,email,zipcode,listingTitle,
        facebook,linkedin,description,
        image,livingarea,phone,price,
        previousprice,publishdate,roadorstate,
        cityorstate,garageorparkingslot,yearinbuilt,website,
        listingKeywords,tags,timeschedule,features
    } = req.body;
    try {
        const newListing = new Listings({
            address: address,
            bedroom: bedroom,
            bathroom: bathroom,
            category: category,
            email:email,
            zipcode:zipcode,
            listingTitle:listingTitle,
            facebook:facebook,
            linkedin:linkedin,
            description:description,
            image:image,
            livingarea:livingarea,
            phone:phone,
            price:price,
            previousprice:previousprice,
            publishdate:publishdate,
            roadorstate:roadorstate,
            cityorstate:cityorstate,
            garageorparkingslot:garageorparkingslot,
            yearinbuilt:yearinbuilt,
            website:website,
            listingKeywords:listingKeywords,
            tags:tags,
            features:features,
            timeschedule:timeschedule
        })
        newListing.save();
        res.status(200).json({ message: "Lisintg added succesfully", listing: newListing })

    } catch (error) {
        console.log("error at listing adding")
    }
}

const deleteListing = async (req,res) => {
    const listing_id = req.params.id;
    await Listings.deleteOne({_id:listing_id});
    return res.status(200).json({message:"Listing deleted succesfully",listing:listing_id})

}


const updateListing = async (req,res) => {
    const listing_id = req.params.id
    const { address, bathroom, bedroom, 
        category,email,zipcode,listingTitle,
        facebook,linkedin,description,
        image,livingarea,phone,price,
        previousprice,publishdate,roadorstate,
        cityorstate,garageorparkingslot,yearinbuilt,website,
        listingKeywords,tags,timeschedule,features
    } = req.body;
    try {
        await Listings.findById(listing_id,(err,updated)=>{
            updated.address = address ? address:updated.address,
            updated.description = description ? description : updated.description,
            updated.price = price ? price : updated.price,
            updated.bathroom = bathroom ? bathroom : updated.bathroom,
            updated.bedroom = bedroom ? bedroom : updated.bedroom,
            updated.category = category ? category : updated.category,
            updated.email = email ? email : updated.email,
            updated.zipcode = zipcode ? zipcode : updated.zipcode,
            updated.listingTitle = listingTitle ? listingTitle : updated.listingTitle,
            updated.facebook = facebook ? facebook : updated.facebook,
            updated.linkedin = linkedin ? linkedin : updated.linkedin,
            updated.livingarea = livingarea ? livingarea : updated.livingarea,
            updated.phone = phone ? phone : updated.phone,
            updated.image = image ? image : updated.image,
            updated.previousprice = previousprice ? previousprice : updated.previousprice,
            updated.publishdate = publishdate ? publishdate : updated.publishdate,
            updated.roadorstate = roadorstate ? roadorstate : updated.roadorstate,
            updated.cityorstate = cityorstate ? cityorstate : updated.cityorstate,
            updated.garageorparkingslot = garageorparkingslot ? garageorparkingslot : updated.garageorparkingslot,
            updated.yearinbuilt = yearinbuilt ? yearinbuilt : updated.yearinbuilt,
            updated.website = website ? website : updated.website,
            updated.listingKeywords = listingKeywords ? listingKeywords : updated.listingKeywords,
            updated.tags = tags ? tags : updated.tags,
            updated.timeschedule = timeschedule ? timeschedule : updated.timeschedule,
            updated.features = features ? features : updated.features,

            updated.save();

            return res.status(200).json({message:`${listing_id} listing updated succesfully`})
        })
        
    } catch (error) {
        console.log("error at update listing")   
    }
}

module.exports = {
    GetListings,
    addListing,
    deleteListing,
    updateListing
}
