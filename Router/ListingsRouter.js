const express  = require('express');
const { GetListings,addListing,deleteListing,updateListing }  = require('../Controller/ListingsController.js');
const router = express.Router();
router.get('/api/listings',GetListings);
router.post('/api/addnewlisting',addListing);
router.delete('/api/deletelisting/:id',deleteListing);
router.put('/api/updatelisting/:id', updateListing)
module.exports = router