const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Order = require('./models/Order');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '.env') });

const orders = [
    {
        customerName: 'Ahmad Khan',
        productName: 'Royal Persian Red',
        amount: 850,
        daysAgo: '2 hours ago',
        status: 'Pending'
    },
    {
        customerName: 'Sarah Johnson',
        productName: 'Modern Silk Grey',
        amount: 1200,
        daysAgo: '5 hours ago',
        status: 'Processing'
    },
    {
        customerName: 'Michael Brown',
        productName: 'Hand-Woven Kilim',
        amount: 450,
        daysAgo: '1 day ago',
        status: 'Delivered'
    },
    {
        customerName: 'Emily Davis',
        productName: 'Vintage Turkish Blue',
        amount: 3200,
        daysAgo: '2 days ago',
        status: 'Delivered'
    }
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected for seeding...');

        await Order.deleteMany();
        console.log('Orders cleared...');

        await Order.insertMany(orders);
        console.log('Sample orders seeded!');

        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedData();
