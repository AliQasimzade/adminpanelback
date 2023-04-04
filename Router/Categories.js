const express = require('express')
const {getAllCategories,createCategory,deleteCategory,updateCategory,getCategoryById} = require('../Controller/Categories.js')

const router = express.Router()

router.get('/api/categories', getAllCategories)
router.get('/api/categories/:id', getCategoryById)
router.post('/api/createcategory', createCategory)
router.put('/api/updatecategory/:id', updateCategory)
router.delete('/api/deletecategory/:id', deleteCategory)

module.exports = router