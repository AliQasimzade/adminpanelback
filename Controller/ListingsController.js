const { Listings } = require("../Model/ListingsModel.js");

const GetListings = async (req, res) => {
    const listings = await Listings.find();
    res.json(listings);
};

const addListing = async (req, res) => {
    const { address, 
        category,email,zipcode,listingTitle,
        facebook,linkedin,description,
        image,splashscreen,phone,price,
        previousprice,whatsapp,roadorstate,
        cityorstate,profileImage,website,
        tags,timeschedule,features,
        slogan,dribble,uploadlink,twitter
    } = req.body;
    try {
        const newListing = new Listings({
            address: address,
            category: category,
            email:email,
            zipcode:zipcode,
            twitter:twitter,
            uploadlink:uploadlink,
            listingTitle:listingTitle,
            facebook:facebook,
            dribble:dribble,
            linkedin:linkedin,
            description:description,
            image:image,
            splashscreen:splashscreen,
            phone:phone,
            price:price,
            previousprice:previousprice,
            whatsapp:whatsapp,
            roadorstate:roadorstate,
            cityorstate:cityorstate,
            profileImage:profileImage,
            slogan:slogan,
            website:website,
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
    const { address, splashscreen,
        category,email,zipcode,listingTitle,
        facebook,linkedin,description,
        image,profileImage,phone,price,
        previousprice,whatsapp,roadorstate,
        cityorstate,website,
        slogan,tags,timeschedule,features,uploadlink,twitter,dribble
    } = req.body;
    try {
        await Listings.findById(listing_id,(err,updated)=>{
            updated.address = address ? address:updated.address,
            updated.description = description ? description : updated.description,
            updated.price = price ? price : updated.price,
            updated.splashscreen = splashscreen ? splashscreen : updated.splashscreen,
            updated.profileImage = profileImage ? profileImage : updated.profileImage,
            updated.category = category ? category : updated.category,
            updated.email = email ? email : updated.email,
            updated.zipcode = zipcode ? zipcode : updated.zipcode,
            updated.listingTitle = listingTitle ? listingTitle : updated.listingTitle,
            updated.facebook = facebook ? facebook : updated.facebook,
            updated.linkedin = linkedin ? linkedin : updated.linkedin,
            updated.whatsapp = whatsapp ? whatsapp : updated.whatsapp,
            updated.phone = phone ? phone : updated.phone,
            updated.image = image ? image : updated.image,
            updated.previousprice = previousprice ? previousprice : updated.previousprice,
            updated.dribble = dribble ? dribble : updated.dribble,
            updated.roadorstate = roadorstate ? roadorstate : updated.roadorstate,
            updated.cityorstate = cityorstate ? cityorstate : updated.cityorstate,
            updated.slogan = slogan ? slogan : updated.slogan,
            updated.uploadlink = uploadlink ? uploadlink : updated.uploadlink,
            updated.website = website ? website : updated.website,
            updated.twitter = twitter ? twitter : updated.twitter,
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
