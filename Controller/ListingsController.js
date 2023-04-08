const { Listings } = require("../Model/ListingsModel.js");

const GetListings = async (req, res) => {
    const listings = await Listings.find();
    res.json(listings);
};

const addListing = async (req, res) => {
 
    try {
        const newListing = new Listings(req.body)
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
    try {
        await Listings.findByIdAndUpdate(listing_id,req.body)
        return res.status(200).json({message:`${listing_id} listing updated succesfully`})     
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