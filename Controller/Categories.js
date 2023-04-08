const {Categories} = require('../Model/Categories.js')

const getAllCategories = async (req, res) => {
    try {
      const categories = await Categories.find();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getCategoryById = async (req, res) => {
    try {
      const category = await Categories.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


  const createCategory = async (req, res) => {
    const { name, image, icon,color } = req.body;
  
    const category = new Categories({
      name,
      image,
      icon,
      color
    });
  
    try {
      const newCategory = await category.save();
      res.status(201).json(newCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  const updateCategory = async (req, res) => {
    const { name, image, icon,color } = req.body;
  
    try {
      const category = await Categories.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      category.name = name ? name : category.name;
      category.image = image ? image : category.image;
      category.icon = icon ? icon : category.icon;
      category.color = color ? color : category.color;
  
      const updatedCategory = await category.save();
      res.status(200).json(updatedCategory);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  

  
const deleteCategory = async (req, res) => {
    try {
      const category = await Categories.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      await category.remove();
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  module.exports = {
    deleteCategory,
    updateCategory,
    getAllCategories,
    createCategory,
    getCategoryById
  }