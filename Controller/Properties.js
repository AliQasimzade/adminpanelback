const {Properties} = require('../Model/Properties.js')

const getProperties = async (req, res) => {
    try {
        const properties = await Properties.find();
        res.status(200).json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createProperty = async (req, res) => {
    const { icon,name} = req.body;

    try {
        const property = new Properties({
           icon,
           name
        });

        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateProperty = async (req, res) => {
    const { name,icon } = req.body;

    try {
        const property = await Properties.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        property.icon = icon ? icon : property.icon;
        property.name = name ? name : property.name;

        const updatedProperty = await property.save();
        res.status(200).json(updatedProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


const deleteProperty = async (req,res) => {
    try {
        const property = await Properties.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        await property.remove();
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}


module.exports = {
    getProperties,
    createProperty,
    updateProperty,
    deleteProperty
}