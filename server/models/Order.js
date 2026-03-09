const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    daysAgo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Delivered', 'Pending', 'Processing'],
        default: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
