const {Banners} = require('../Model/Banners.js')

const getBanners = async (req, res) => {
    try {
        const banners = await Banners.find();
        res.status(200).json(banners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createBanner = async (req, res) => {
    const { image} = req.body;

    try {
        const banner = new Banners({
           image
        });

        const newBanner = await banner.save();
        res.status(201).json(newBanner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateBanner = async (req, res) => {
    const { image } = req.body;

    try {
        const banner = await Banners.findById(req.params.id);
        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        banner.image = image ? image : banner.image;

        const updatedBanner = await banner.save();
        res.status(200).json(updatedBanner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteBanner = async (req,res) => {
    try {
        const banner = await Banners.findById(req.params.id);
        if (!banner) {
            return res.status(404).json({ message: 'Banner not found' });
        }

        await banner.remove();
        res.status(200).json({ message: 'Banner deleted successfully' });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

module.exports = {
    getBanners,
    createBanner,
    updateBanner,
    deleteBanner
}