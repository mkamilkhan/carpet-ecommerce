const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a product name'],
        trim: true
    },
    type: {
        type: String,
        required: [true, 'Please add a product type'],
        trim: true
    },
    roomSuitability: {
        type: String,
        required: [true, 'Please select room suitability'],
        enum: [
            'Bedroom', 'Conservatory', 'Dining', 'Home Office', 'Hall', 'Living Room', 'Stairs',
            'Lounge', 'Stair Runners', 'Kitchen', 'Bathroom', 'Hallway', 'Herringbone', 'Oak',
            'Grass Carpet', 'Wood Effect', 'Marble Effect', 'Tile Effect', 'Stone Effect',
            'Patterned', 'Terrazzo', 'Victorian', 'Rustic', 'Natural', 'Wall-to-Wall Carpet',
            'Brushed & Oiled', 'Lacquered'
        ],
        default: 'Living Room'
    },
    size: {
        type: String,
        required: [true, 'Please add a product size'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Please add a price']
    },
    colors: [String],
    stock: {
        type: Number,
        required: [true, 'Please add stock quantity'],
        default: 0
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    gallery: [String],
    status: {
        type: String,
        enum: ['In Stock', 'Low Stock', 'Out of Stock'],
        default: 'In Stock'
    },
    discount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
