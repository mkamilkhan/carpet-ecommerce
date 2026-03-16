import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';
import EditProduct from '../components/EditProduct';
import { getImageUrl } from '../utils/imagePath';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const location = useLocation();

    const fetchProducts = async () => {
        try {
            const res = await axios.get('/api/products');
            setProducts(res.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
        if (location.state?.openCreateModal) {
            setIsCreateModalOpen(true);
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    const handleDelete = async (id) => {
        if (window.confirm('Delete this product?')) {
            try {
                await axios.delete(`/api/products/${id}`);
                setProducts(products.filter(p => p._id !== id));
            } catch (err) {
                console.error(err);
            }
        }
    };

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsEditModalOpen(true);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedProducts = products.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className="space-y-8 pb-10">

            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
                <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-brand-title block mb-3">
                        Management Suite
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight">
                        Private <span className="text-brand-title italic">Inventory</span>
                    </h2>
                    <p className="text-[#9CA3AF]/40 text-sm mt-3 italic">
                        Overseeing premium records.
                    </p>
                </div>

                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="flex hover:bg-[white] hover:text-[#CB9F3B] items-center gap-3 bg-[#CB9F3B]  text-white px-6 py-3 rounded-sm font-bold uppercase tracking-wider text-xs transition"
                >
                    <FiPlus size={16} />
                    Add Product
                </button>
            </div>

            <CreateProduct
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onProductAdded={fetchProducts}
            />

            <EditProduct
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onProductUpdated={fetchProducts}
                product={selectedProduct}
            />

            {/* Table Card */}
            <div className="bg-brand-card rounded-1xl border border-white/5 overflow-hidden">

                {/* Search */}
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <div className="relative w-72">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-title/40" size={16} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 bg-brand-bg/50 border border-white/10 rounded-sm text-xs text-[#9CA3AF] outline-none"
                        />
                    </div>
                </div>

                {/* Loading */}
                {loading ? (
                    <div className="p-16 text-center">
                        <div className="inline-block w-8 h-8 border-4 border-brand-title/20 border-t-brand-title rounded-full animate-spin mb-4" />
                        <p className="text-[#9CA3AF]/30 text-xs uppercase">
                            Loading...
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead className="bg-white/[0.02] uppercase text-brand-title tracking-wider border-b border-white/5">
                                <tr>
                                    <th className="px-6 py-4">Image</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Type</th>
                                    <th className="px-6 py-4">Size</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {paginatedProducts.length > 0 ? (
                                    paginatedProducts.map((product) => (
                                        <tr key={product._id} className="hover:bg-white/[0.02]">
                                            <td className="px-6 py-4">
                                                <img
                                                    src={product.image ? getImageUrl(product.image) : "https://via.placeholder.com/80"}
                                                    alt=""
                                                    className="w-14 h-14 object-cover rounded-lg"
                                                />
                                            </td>
                                            <td className="px-6 py-4 font-semibold text-[#9CA3AF]">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 text-[#9CA3AF]">
                                                {product.type}
                                            </td>
                                            <td className="px-6 py-4 text-[#9CA3AF]">
                                                {product.size}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-[#9CA3AF]">
                                                £{product.price}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => handleEditClick(product)}
                                                        className="w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center"
                                                    >
                                                        <FiEdit2 size={14} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(product._id)}
                                                        className="w-8 h-8 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 rounded-lg flex items-center justify-center"
                                                    >
                                                        <FiTrash2 size={14} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-10 text-center text-[#9CA3AF]/30">
                                            No products found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {!loading && products.length > itemsPerPage && (
                    <div className="p-6 border-t border-white/5 flex justify-between items-center text-xs">
                        <span className="text-[#9CA3AF]/40">
                            {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, products.length)} of {products.length}
                        </span>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-white/5 rounded-lg disabled:opacity-30"
                            >
                                Prev
                            </button>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-white/5 rounded-lg disabled:opacity-30"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;