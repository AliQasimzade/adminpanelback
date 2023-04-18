const {Tags} = require('../Model/Tags.js');



const getAllTags = async (req, res) => {
    try {
      const tags = await Tags.find();
      res.status(200).json(tags);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


  const createTag = async (req, res) => {
    const { name } = req.body;
  
    const tag = new Tags({
      name
    });
  
    try {
      const newTag = await tag.save();
      res.status(201).json(newTag);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };




  const updateTag = async (req, res) => {
    const { name } = req.body;
  
    try {
      const tag = await Tags.findById(req.params.id);
      if (!tag) {
        return res.status(404).json({ message: 'Tag not found' });
      }
  
      tag.name = name ? name : tag.name;
  
      const updatedTag = await tag.save();
      res.status(200).json(updatedTag);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

  
const deleteTag = async (req, res) => {
    try {
      const tag = await Tags.findById(req.params.id);
      if (!tag) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      await tag.remove();
      res.status(200).json({ message: 'Tag deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


  module.exports = {
    getAllTags,
    updateTag,
    createTag,
    deleteTag
  }
