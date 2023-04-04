const { Events } = require('../Model/Events.js');


const getAllEvents = async (req, res) => {
    try {
        const events = await Events.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEventById = async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const createEvent = async (req, res) => {
    const { name, description, locationName, locationAddress, startDate, endDate, entryPrice, contactInfo, details } = req.body;

    try {
        const event = new Events({
            name,
            description,
            locationName,
            locationAddress,
            startDate,
            endDate,
            entryPrice,
            contactInfo,
            details
        });

        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


const updateEvent = async (req, res) => {
    const { name, description, locationName, locationAddress, startDate, endDate, entryPrice, contactInfo, details } = req.body;

    try {
        const event = await Events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        event.name = name ? name : event.name;
        event.description = description ? description : event.description;
        event.locationName = locationName ? locationName : event.locationName;
        event.locationAddress = locationAddress ? locationAddress : event.locationAddress;
        event.startDate = startDate ? startDate : event.startDate;
        event.endDate = endDate ? endDate : event.endDate;
        event.entryPrice = entryPrice ? entryPrice : event.entryPrice;
        event.contactInfo = contactInfo ? contactInfo : event.contactInfo;
        event.details = details ? details : event.details;

        const updatedEvent = await event.save();
        res.status(200).json(updatedEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        await event.remove();
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    updateEvent,
    deleteEvent,
    createEvent,
    getAllEvents,
    getEventById
}
