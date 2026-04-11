const Product = require('../models/Product');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}).sort({ createdAt: -1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
    try {
        const { name, type, roomSuitability, size, price, stock, description, status, colors, discount } = req.body;

        // Handle images from req.files
        const image = req.files && req.files['image'] ? req.files['image'][0].path : undefined;
        let gallery = [];
        if (req.files && req.files['gallery']) {
            gallery = req.files['gallery'].map(file => file.path);
        }

        if (!name || !type || !roomSuitability || !size || !price || !stock || !description) {
            return res.status(400).json({ message: 'Please include all required fields' });
        }

        // Handle colors string to array
        const colorArray = colors ? colors.split(',').map(c => c.trim()) : [];

        const product = await Product.create({
            name,
            type,
            roomSuitability,
            size,
            price,
            stock,
            description,
            image,
            gallery,
            colors: colorArray,
            discount: discount || 0,
            status: status || (stock > 10 ? 'In Stock' : stock > 0 ? 'Low Stock' : 'Out of Stock')
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updateData = { ...req.body };

        if (req.files && req.files['image']) {
            updateData.image = req.files['image'][0].path;
        }

        if (req.files && req.files['gallery']) {
            updateData.gallery = req.files['gallery'].map(file => file.path);
        }

        if (req.body.colors) {
            updateData.colors = req.body.colors.split(',').map(c => c.trim());
        }

        if (req.body.discount) {
            updateData.discount = Number(req.body.discount);
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.deleteOne();
        res.status(200).json({ id: req.params.id, message: 'Product removed' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Search products
// @route   GET /api/products/search/:keyword
// @access  Public
const searchProducts = async (req, res) => {
    try {
        const { keyword } = req.params;
        const products = await Product.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { type: { $regex: keyword, $options: 'i' } }
            ]
        }).limit(6).select('name image type');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
};
