const { Locations } = require("../Model/Locations.js")

const getAllLocations = async (req, res) => {
    try {
        const locations = await Locations.find();
        res.status(200).json(locations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getByLocationId = async (req, res) => {
    try {
        const location = await Locations.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }
        res.status(200).json(location);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createLocation = async (req, res) => {
    const { image, name, categories } = req.body;

    try {
        const location = new Locations({
            image,
            name,
            categories
        });

        const newLocation = await location.save();
        res.status(201).json(newLocation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateLocation = async (req, res) => {
    const { name, image, categories } = req.body;

    try {
        const location = await Locations.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }

        location.name = name ? name : location.name;
        location.image = image ? image : location.image;
        location.categories = categories ? categories : location.categories;

        const updatedEvent = await location.save();
        res.status(200).json(updatedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteLocation = async (req, res) => {
    try {
        const location = await Locations.findById(req.params.id);
        if (!location) {
            return res.status(404).json({ message: 'Location not found' });
        }

        await location.remove();
        res.status(200).json({ message: 'Location deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const createSubcategory = async (req, res) => {
    try {
        const location = await Locations.findById(req.params.locationId);
        location.categories.push({ name: req.body.name });
        await location.save();
        res.status(201).json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateSubcategory = async (req, res) => {
    try {
        const location = await Locations.findById(req.params.locationId);
        const subcategory = location.categories.id(req.params.id);
        subcategory.name = req.body.name;
        await location.save();
        res.json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


const deleteSubcategory = async (req, res) => {
    try {
        const location = await Locations.findById(req.params.locationId);
        location.categories.id(req.params.id).remove();
        await location.save();
        res.json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = {
    getAllLocations,
    getByLocationId,
    createLocation,
    updateLocation,
    deleteLocation,
    createSubcategory,
    updateSubcategory,
    deleteSubcategory,
    
}