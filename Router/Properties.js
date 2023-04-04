const express = require('express')
const {getProperties,updateProperty,createProperty,deleteProperty} = require('../Controller/Properties.js')
const router = express.Router()


router.get("/api/properties",getProperties)
router.post('/api/createproperty',createProperty)
router.put('/api/updateproperty/:id', updateProperty)
router.delete('/api/deleteproperty/:id',deleteProperty)

module.exports = router