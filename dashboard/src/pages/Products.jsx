import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiCheck, FiInfo } from 'react-icons/fi';
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
    const [searchTerm, setSearchTerm] = useState('');
    const [notification, setNotification] = useState(null);
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

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`/api/products/${id}`);
                setProducts(products.filter(p => p._id !== id));
                showNotification('Product deleted successfully');
            } catch (err) {
                console.error(err);
                showNotification('Failed to delete product', 'error');
            }
        }
    };

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setIsEditModalOpen(true);
    };

    // Filtering
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
            
            {/* Notification */}
            {notification && (
                <div className={`fixed top-6 right-6 z-[200] flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl border animate-slide-in-right ${
                    notification.type === 'error' 
                    ? 'bg-rose-500/10 border-rose-500/20 text-rose-500' 
                    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'
                }`}>
                    {notification.type === 'error' ? <FiInfo size={18} /> : <FiCheck size={18} />}
                    <span className="text-sm font-semibold uppercase tracking-wider">{notification.message}</span>
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <p className="text-[#CB9F3B] text-xs font-bold uppercase tracking-[0.3em] mb-2">Inventory Management</p>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                        Product <span className="text-[#CB9F3B] italic">Collection</span>
                    </h1>
                </div>

                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="group relative flex items-center gap-3 bg-[#CB9F3B] hover:bg-white text-white hover:text-[#CB9F3B] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg hover:shadow-[#CB9F3B]/20"
                >
                    <FiPlus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    New Product
                </button>
            </div>

            <CreateProduct
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onProductAdded={fetchProducts}
                showNotification={showNotification}
            />

            <EditProduct
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onProductUpdated={fetchProducts}
                product={selectedProduct}
                showNotification={showNotification}
            />

            {/* Table Section */}
            <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 shadow-2xl overflow-hidden">
                
                {/* Search & Stats */}
                <div className="p-8 border-b border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="relative w-full sm:w-80 group">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#CB9F3B] transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Find products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-[#0F0F0F] border border-white/10 rounded-xl text-sm text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all"
                        />
                    </div>
                    <div className="text-[#9CA3AF] text-xs font-medium uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full">
                        Total Items: <span className="text-white ml-1 font-bold">{filteredProducts.length}</span>
                    </div>
                </div>

                {/* Content */}
                {loading ? (
                    <div className="p-24 text-center">
                        <div className="inline-block w-10 h-10 border-4 border-white/5 border-t-[#CB9F3B] rounded-full animate-spin mb-6" />
                        <p className="text-white/20 text-xs font-bold uppercase tracking-[0.2em]">Synchronizing Archive</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-white/[0.02] text-white/40 uppercase text-[10px] font-black tracking-[0.2em] border-b border-white/5">
                                <tr>
                                    <th className="px-8 py-5">Item</th>
                                    <th className="px-8 py-5">Category</th>
                                    <th className="px-8 py-5">Dimensions</th>
                                    <th className="px-8 py-5">Pricing</th>
                                    <th className="px-8 py-5 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {paginatedProducts.length > 0 ? (
                                    paginatedProducts.map((product) => (
                                        <tr key={product._id} className="group hover:bg-white/[0.01] transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/5 shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                                                        <img
                                                            src={getImageUrl(product.image)}
                                                            alt=""
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-white font-bold tracking-wide group-hover:text-[#CB9F3B] transition-colors uppercase text-sm mb-1">{product.name}</p>
                                                        <div className="flex items-center gap-2">
                                                            <span className={`w-2 h-2 rounded-full ${product.stock > 0 ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                                                            <span className="text-[10px] text-white/40 font-bold uppercase">{product.stock > 0 ? `${product.stock} in inventory` : 'Out of Stock'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="px-3 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white/60 font-black uppercase tracking-wider">{product.type}</span>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-white/60 font-medium">{product.size}</td>
                                            <td className="px-8 py-6">
                                                <p className="text-white font-black text-lg">£{product.price}</p>
                                                {product.discount > 0 && (
                                                    <span className="text-emerald-500 text-[10px] font-black uppercase">Save {product.discount}%</span>
                                                )}
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                                    <button
                                                        onClick={() => handleEditClick(product)}
                                                        className="w-10 h-10 bg-white/5 hover:bg-[#CB9F3B] text-white/40 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95"
                                                        title="Edit Product"
                                                    >
                                                        <FiEdit2 size={16} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(product._id)}
                                                        className="w-10 h-10 bg-rose-500/5 hover:bg-rose-500 text-rose-500 hover:text-white border border-rose-500/10 rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95"
                                                        title="Delete Product"
                                                    >
                                                        <FiTrash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-20 text-center">
                                            <p className="text-white/20 text-xs font-black uppercase tracking-widest">No matching products discovered</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Pagination */}
                {!loading && filteredProducts.length > itemsPerPage && (
                    <div className="p-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">
                            Showing <span className="text-white/60">{indexOfFirstItem + 1}</span> - <span className="text-white/60">{Math.min(indexOfLastItem, filteredProducts.length)}</span> of <span className="text-white/60">{filteredProducts.length}</span> assets
                        </span>

                        <div className="flex gap-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 disabled:hover:bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white disabled:opacity-30 disabled:hover:bg-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95"
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
;