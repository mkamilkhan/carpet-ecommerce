const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
} = require('../controllers/productController');

const upload = require('../config/multer');

// Define routes
const cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'gallery', maxCount: 10 }]);

router.route('/').get(getProducts).post(cpUpload, createProduct);
router.get('/search/:keyword', searchProducts);
router.route('/:id').get(getProductById).put(cpUpload, updateProduct).delete(deleteProduct);

module.exports = router;
