const express  = require('express');
const { getCompany,updateCompany,createCompany,deleteCompany }  = require('../Controller/Company.js');
const router = express.Router();

router.get('/api/company',getCompany);
router.post('/api/createcompany', createCompany)
router.put('/api/updatecompany/:id',updateCompany)
router.delete('/api/deletecompany/:id', deleteCompany)
module.exports = router