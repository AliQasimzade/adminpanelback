const express  = require('express');
const { getCompany,updateCompany }  = require('../Controller/Company.js');
const router = express.Router();

router.get('/api/company',getCompany);
router.put('/api/updatecompany/:id',updateCompany)
module.exports = router