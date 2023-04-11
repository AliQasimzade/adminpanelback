const express  = require('express');
const { GetListings,addListing,deleteListing,updateListing,newReview }  = require('../Controller/ListingsController.js');
const router = express.Router();
router.get('/api/listings',GetListings);
router.post('/api/addnewlisting',addListing);
router.delete('/api/deletelisting/:id',deleteListing);
router.post('/api/newreview/:id', newReview)
router.put('/api/updatelisting/:id', updateListing)
module.exports = router