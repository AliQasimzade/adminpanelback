const {Actions} = require('../Model/Actions.js')

const getAllActions = async (req, res) => {
    try {
        const actions = await Actions.find();
        res.status(200).json(actions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllActions
}