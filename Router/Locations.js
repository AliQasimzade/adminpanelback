const express = require('express')
const { getAllLocations, getByLocationId, createLocation, createSubcategory, updateLocation, updateSubcategory, deleteLocation, deleteSubcategory } = require('../Controller/Locations.js')

const router = express.Router()

router.get('/api/locations', getAllLocations)
router.get('/api/locations/:id', getByLocationId)
router.post('/api/createlocation',createLocation)
router.put('/api/updatelocation/:id', updateLocation)
router.delete('/api/deletelocation/:id', deleteLocation)
router.post('/api/locations/:locationId/subcategories', createSubcategory)
router.put('/api/locations/:locationId/subcategories/:id',updateSubcategory)
router.delete('/api/locations/:locationId/deletesubcategory/:id', deleteSubcategory)

module.exports = router