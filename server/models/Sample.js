const mongoose = require('mongoose');

const sampleSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    customerPhone: {
        type: String,
        required: false
    },
    customerAddress: {
        type: String,
        required: true
    },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        productName: { type: String, required: true },
        selectedColor: { type: String, required: true }
    }],
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Dispatched', 'Delivered'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sample', sampleSchema);
