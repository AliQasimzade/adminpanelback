const express = require('express');
const router = express.Router();
const {getStatus,createStatus,deleteStatus,updateStatus,getAllStatus} = require('../Controller/Status.js')

router.get('/api/status', getAllStatus);
router.post('/api/createstatus',createStatus)
router.get('/api/status/:id', getStatus);
router.patch('/api/updatestatus/:id', updateStatus);
router.delete('/api/deletestatus/:id', deleteStatus);

module.exports = router;