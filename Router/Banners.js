const express = require("express")
const {getBanners,createBanner,updateBanner,deleteBanner} = require('../Controller/Banners.js');
const router = express.Router()

router.get('/api/banners',getBanners)
router.post('/api/createbanner',createBanner)
router.patch('/api/updatebanner/:id',updateBanner)
router.delete('/api/deletebanner/:id',deleteBanner)

module.exports = router