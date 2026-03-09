const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const products = [
    {
        name: 'Royal Persian Red',
        type: 'Wool',
        roomSuitability: 'Living Room',
        size: '2x3m',
        price: 850,
        colors: ['Red', 'Gold'],
        stock: 15,
        description: 'A luxurious Royal Persian rug with intricate patterns and vibrant red hues.',
        status: 'In Stock',
        image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Modern Silk Grey',
        type: 'Silk',
        roomSuitability: 'Bedroom',
        size: '1.5x2m',
        price: 1200,
        colors: ['Grey', 'Silver'],
        stock: 8,
        description: 'Elegant grey silk carpet, perfect for modern bedrooms and minimalist spaces.',
        status: 'Low Stock',
        image: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Hand-Woven Kilim',
        type: 'Cotton',
        roomSuitability: 'Hall',
        size: '1x4m',
        price: 450,
        colors: ['Multi', 'Beige'],
        stock: 25,
        description: 'Durable hand-woven kilim, ideal for high-traffic hallways and corridors.',
        status: 'In Stock',
        image: 'https://images.unsplash.com/photo-1493920258296-1929d8a2df32?auto=format&fit=crop&w=800&q=80'
    },
    {
        name: 'Vintage Turkish Blue',
        type: 'Vintage',
        roomSuitability: 'Dining',
        size: '3x4m',
        price: 3200,
        colors: ['Blue', 'Teal'],
        stock: 2,
        description: 'Authentic vintage Turkish carpet with a unique faded blue look.',
        status: 'Low Stock',
        image: 'https://images.unsplash.com/photo-1520614930128-3e432130ecda?auto=format&fit=crop&w=800&q=80'
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for seeding products...');

        await Product.deleteMany();
        console.log('Products cleared...');

        await Product.insertMany(products);
        console.log('Sample products seeded!');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedProducts();
