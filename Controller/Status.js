const {Status} = require('../Model/Status.js');

const createStatus = async (req, res) => {
    try {
      const { content, sharedBy, userProfilePicture,image } = req.body;
      const status = new Status({ content, sharedBy, userProfilePicture,image });
      await status.save();
      res.status(201).json(status);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  const getAllStatus = async (req, res) => {
    try {
        const events = await Status.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
  };
  const getStatus = async (req, res) => {
    try {
      const status = await Status.findById(req.params.id);
      if (!status) {
        return res.status(404).json({ message: 'Status not found' });
      }
      res.json(status);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const updateStatus = async (req, res) => {
    try {
      const { content, sharedBy, userProfilePicture,image } = req.body;
      const status = await Status.findById(req.params.id);
      if (!status) {
        return res.status(404).json({ message: 'Status not found' });
      }
      status.content = content ? content : status.content;
      status.sharedBy = sharedBy ? sharedBy : status.sharedBy;
      status.image = image ? image : status.image;
      status.userProfilePicture = userProfilePicture ? userProfilePicture : status.userProfilePicture;
      await status.save();
      res.json(status);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  const deleteStatus = async (req, res) => {
    try {
      const status = await Status.findById(req.params.id);
      if (!status) {
        return res.status(404).json({ message: 'Status not found' });
      }
      await status.remove();
      res.json({ message: 'Status deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = {
    createStatus,
    getStatus,
    updateStatus,
    deleteStatus,
    getAllStatus
  };