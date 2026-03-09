const Sample = require('../models/Sample');

// @desc    Get all sample requests
// @route   GET /api/samples
// @access  Public
const getSamples = async (req, res) => {
    try {
        const samples = await Sample.find({}).sort({ createdAt: -1 });
        res.json(samples);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a sample request
// @route   POST /api/samples
// @access  Public
const createSample = async (req, res) => {
    try {
        const { customerName, customerEmail, customerPhone, customerAddress, items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: 'No sample items' });
        }

        const sample = new Sample({
            customerName,
            customerEmail,
            customerPhone,
            customerAddress,
            items
        });

        const createdSample = await sample.save();

        res.status(201).json(createdSample);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update sample status
// @route   PUT /api/samples/:id
// @access  Public
const updateSampleStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const sample = await Sample.findById(req.params.id);

        if (sample) {
            sample.status = status;
            const updatedSample = await sample.save();
            res.json(updatedSample);
        } else {
            res.status(404).json({ message: 'Sample not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getSamples,
    createSample,
    updateSampleStatus,
};
