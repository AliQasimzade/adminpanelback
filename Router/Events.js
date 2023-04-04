const express  = require('express');
const { getAllEvents,getEventById,updateEvent,createEvent,deleteEvent }  = require('../Controller/Events.js');
const router = express.Router();

router.get('/api/ ',getAllEvents);
router.post('/api/createevent',createEvent)
router.put('/api/eventid/:id',getEventById)
router.put('/api/updateevent/:id',updateEvent)
router.delete('/api/deleteevent/:id',deleteEvent)
module.exports = router