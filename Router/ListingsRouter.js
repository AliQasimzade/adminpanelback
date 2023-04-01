const express  = require('express');
const { GetListings }  = require('../Controller/ListingsController.js');
const router = express.Router();
router.get('/api/listings',GetListings);

module.exports = router