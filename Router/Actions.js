const express = require("express")
const {getAllActions} = require('../Controller/Actions.js')
const router = express.Router()

router.get('/api/actions',getAllActions)
module.exports = router