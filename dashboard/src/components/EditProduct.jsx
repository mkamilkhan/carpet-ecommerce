import React, { useState, useEffect } from 'react';
import { FiX, FiUploadCloud, FiPlus, FiLoader, FiInfo, FiCheck } from 'react-icons/fi';
import axios from 'axios';
import { getImageUrl } from '../utils/imagePath';

const EditProduct = ({ isOpen, onClose, onProductUpdated, product, showNotification }) => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        roomSuitability: '',
        size: '',
        price: '',
        stock: '',
        colors: '',
        description: '',
        status: '',
        discount: 0
    });
    const [image, setImage] = useState(null);
    const [gallery, setGallery] = useState([]);
    const [preview, setPreview] = useState(null);
    const [galleryPreviews, setGalleryPreviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                type: product.type || '',
                roomSuitability: product.roomSuitability || 'Living Room',
                size: product.size || '',
                price: product.price,
                stock: product.stock,
                colors: product.colors ? product.colors.join(', ') : '',
                description: product.description,
                status: product.status,
                discount: product.discount || 0
            });
            setPreview(product.image);
            setGalleryPreviews(product.gallery || []);
            setSuccess('');
            setError('');
        }
    }, [product]);

    if (!isOpen || !product) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setGallery(files);
            const previews = files.map(file => URL.createObjectURL(file));
            setGalleryPreviews(previews);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('type', formData.type);
        data.append('roomSuitability', formData.roomSuitability);
        data.append('size', formData.size);
        data.append('price', formData.price);
        data.append('stock', formData.stock);
        data.append('colors', formData.colors);
        data.append('description', formData.description);
        data.append('status', formData.status);
        data.append('discount', formData.discount);

        if (image && typeof image !== 'string') {
            data.append('image', image);
        }
        gallery.forEach(file => {
            data.append('gallery', file);
        });

        try {
            await axios.put(`/api/products/${product._id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setSuccess('Product Updated Successfully');
            if (onProductUpdated) onProductUpdated();
            if (showNotification) showNotification('Product changes saved successfully');
            
            setTimeout(() => {
                onClose();
                setSuccess('');
            }, 1000);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[150] p-4 lg:p-8 overflow-hidden">
            <div className="bg-[#1A1A1A] rounded-3xl w-full max-w-5xl max-h-full overflow-hidden shadow-2xl border border-white/10 flex flex-col animate-scale-in">
                
                {/* Header */}
                <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
                    <div>
                        <h2 className="text-3xl font-extrabold text-white tracking-tight italic">Modify <span className="text-[#CB9F3B]">Product</span></h2>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mt-2">Inventory Management Suite</p>
                    </div>
                    <button onClick={onClose} className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-rose-500 hover:text-white text-white/40 rounded-full transition-all active:scale-90">
                        <FiX size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                    {/* Feedback */}
                    {error && (
                        <div className="bg-rose-500/10 text-rose-500 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-rose-500/20 flex items-center gap-4 mb-10 animate-shake">
                            <FiInfo size={16} /> {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-emerald-500/10 text-emerald-400 p-5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-emerald-400/20 flex items-center gap-4 mb-10 animate-fade-in">
                            <FiCheck className="animate-pulse" size={16} />
                            {success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        {/* Primary Information */}
                        <div className="lg:col-span-7 space-y-10">
                            <div>
                                <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Core Identification</label>
                                <div className="space-y-6">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-semibold placeholder:text-white/20"
                                        placeholder="Product Name"
                                    />
                                    
                                    <div className="grid grid-cols-2 gap-6">
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-semibold appearance-none cursor-pointer"
                                        >
                                            <option value="">Select Category</option>
                                            <option value="Carpet">Carpet</option>
                                            <option value="Vinyl">Vinyl</option>
                                            <option value="Laminate">Laminate</option>
                                            <option value="Engineered Wood">Engineered Wood</option>
                                            <option value="Commercial Carpet">Commercial Carpet</option>
                                            <option value="Commercial Vinyl">Commercial Vinyl</option>
                                            <option value="Rugs">Rugs</option>
                                        </select>

                                        <select
                                            name="roomSuitability"
                                            value={formData.roomSuitability}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-semibold appearance-none cursor-pointer"
                                        >
                                            <option value="Living Room">Living Room</option>
                                            <option value="Bedroom">Bedroom</option>
                                            <option value="Dining Room">Dining Room</option>
                                            <option value="Kitchen">Kitchen</option>
                                            <option value="Bathroom">Bathroom</option>
                                            <option value="Hallway">Hallway</option>
                                            <option value="Stairs">Stairs</option>
                                            <option value="Office">Office</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Technical Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all resize-none font-semibold placeholder:text-white/20 shadow-inner"
                                    placeholder="Provide detailed description..."
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Dimensions</label>
                                    <input
                                        type="text"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-semibold placeholder:text-white/20"
                                        placeholder="e.g. 4m & 5m Widths"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Stock Level</label>
                                    <input
                                        type="number"
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-semibold placeholder:text-white/20"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Financial & Media */}
                        <div className="lg:col-span-5 space-y-10">
                            <div className="p-8 bg-white/[0.03] rounded-3xl border border-white/5 space-y-8">
                                <div>
                                    <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Pricing Architecture</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative">
                                            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#CB9F3B] font-bold">£</span>
                                            <input
                                                type="number"
                                                name="price"
                                                value={formData.price}
                                                onChange={handleChange}
                                                required
                                                min="0"
                                                className="w-full pl-10 pr-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-black text-xl"
                                            />
                                        </div>
                                        <div className="relative">
                                            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 font-bold">%</span>
                                            <input
                                                type="number"
                                                name="discount"
                                                value={formData.discount}
                                                onChange={handleChange}
                                                min="0"
                                                max="100"
                                                className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-bold text-xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {formData.type === 'Carpet' && (
                                    <div className="animate-fade-in">
                                        <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Color DNA (HEX Codes)</label>
                                        <input
                                            type="text"
                                            name="colors"
                                            value={formData.colors}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-[#0F0F0F] border border-white/10 rounded-2xl text-white/60 focus:ring-2 focus:ring-[#CB9F3B]/20 focus:border-[#CB9F3B] outline-none transition-all font-mono text-xs"
                                            placeholder="#434443, #ffffff (comma separated)"
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-[#CB9F3B] uppercase tracking-[0.2em] mb-4">Media Assets</label>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="relative aspect-video rounded-3xl border-2 border-dashed border-white/10 overflow-hidden group hover:border-[#CB9F3B]/50 transition-all cursor-pointer bg-white/[0.02]">
                                        {preview ? (
                                            <img 
                                                src={(typeof preview === 'string' && !preview.startsWith('blob:')) ? getImageUrl(preview) : preview} 
                                                alt="Primary" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                                <FiUploadCloud size={24} className="text-white/20" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Primary Visual</span>
                                            </div>
                                        )}
                                        <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                    </div>

                                    <div className="relative h-24 rounded-2xl border-2 border-dashed border-white/10 overflow-hidden group hover:border-[#CB9F3B]/50 transition-all cursor-pointer bg-white/[0.02] flex items-center justify-center px-6">
                                        {galleryPreviews.length > 0 ? (
                                            <div className="flex gap-2 overflow-hidden h-full py-3">
                                                {galleryPreviews.map((p, i) => (
                                                    <img 
                                                        key={i} 
                                                        src={(typeof p === 'string' && !p.startsWith('blob:')) ? getImageUrl(p) : p} 
                                                        className="h-full aspect-square object-cover rounded-lg border border-white/10" 
                                                    />
                                                ))}
                                                {galleryPreviews.length > 5 && <div className="h-full aspect-square bg-white/5 rounded-lg flex items-center justify-center text-[10px] font-bold">+{galleryPreviews.length - 5}</div>}
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-4 text-white/20 group-hover:text-[#CB9F3B] transition-colors">
                                                <FiPlus size={20} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">Update Gallery Imagery</span>
                                            </div>
                                        )}
                                        <input type="file" multiple onChange={handleGalleryChange} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Footer Actions */}
                <div className="p-8 border-t border-white/5 flex justify-end items-center gap-8 bg-white/[0.02]">
                    <button type="button" onClick={onClose} className="text-white/40 hover:text-white font-bold uppercase tracking-[0.2em] text-[10px] transition-colors">Discard</button>
                    <button 
                        onClick={handleSubmit}
                        disabled={loading || success} 
                        className="px-12 py-5 bg-[#CB9F3B] hover:bg-white text-white hover:text-[#CB9F3B] rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-2xl disabled:opacity-50 flex items-center gap-4 min-w-[240px] justify-center scale-100 active:scale-95"
                    >
                        {loading ? (
                            <>
                                <FiLoader className="animate-spin" size={16} />
                                System Synchronizing...
                            </>
                        ) : success ? (
                            'Changes Commited'
                        ) : (
                            'Authenticate Modifications'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
