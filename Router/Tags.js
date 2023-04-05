const express = require('express')

const { getAllTags, createTag, deleteTag, updateTag } = require('../Controller/Tags.js');

const router = express.Router();

router.get('/api/tags', getAllTags);
router.post('/api/createtag', createTag)
router.put('/api/updatetag/:id', updateTag)
router.delete('/api/deletetag/:id', deleteTag)
module.exports = router;
