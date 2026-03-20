import React, { useState, useEffect } from 'react';
import { FiX, FiUploadCloud, FiPlus, FiLoader, FiInfo, FiCheck } from 'react-icons/fi';
import axios from 'axios';
import { getImageUrl } from '../utils/imagePath';

const EditProduct = ({ isOpen, onClose, onProductUpdated, product }) => {
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
            setSuccess('Carpet updated successfully! ✨');
            onProductUpdated();
            setTimeout(() => {
                onClose();
                setSuccess('');
            }, 1500);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update product');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-brand-btn/80 backdrop-blur-md flex items-center justify-center z-[150] p-4">
            <div className="bg-brand-card rounded-sm w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] animate-fade-in text-brand-light/70 border border-brand-light/50 flex flex-col">
                <div className="p-8 border-b border-brand-light/50 flex justify-between items-center bg-brand-light/5">
                    <div>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">Modify Archive</h2>
                        <p className="text-[10px] font-black text-[#CB9F3B] uppercase tracking-widest mt-2 leading-none">Update technical specifications for {formData.name}</p>
                    </div>
                    <button onClick={onClose} className="p-4 bg-white hover:bg-brand-btn text-black hover:text-brand-light/70 rounded-sm border border-brand-light/50 transition-all active:scale-95">
                        <FiX size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-10 space-y-10 custom-scrollbar">
                    {error && (
                        <div className="bg-rose-500/10 text-rose-500 p-5 rounded-sm text-[10px] font-black uppercase tracking-widest border border-rose-500/20 flex items-center gap-4 animate-shake">
                            <FiInfo size={16} /> {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-white text-white p-5 rounded-sm text-[10px] font-black uppercase tracking-widest border border-emerald-400/20 flex items-center gap-4 animate-fade-in">
                            <FiCheck className="animate-pulse" size={16} />
                            {success}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Asset Designation *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium placeholder:text-brand-light/70/10"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Classification *</label>
                                <select
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium appearance-none cursor-pointer"
                                >
                                    <option value="Carpets" className="bg-brand-card">Carpets</option>
                                    <option value="Vinyl Flooring" className="bg-brand-card">Vinyl Flooring</option>
                                    <option value="Laminate Flooring" className="bg-brand-card">Laminate Flooring</option>
                                    <option value="Luxury Vinyl Tiles" className="bg-brand-card">Luxury Vinyl Tiles</option>
                                    <option value="Engineered Wood" className="bg-brand-card">Engineered Wood</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Architectural Intent *</label>
                                <select
                                    name="roomSuitability"
                                    value={formData.roomSuitability}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium appearance-none cursor-pointer"
                                >
                                    <option value="Bedroom" className="bg-brand-card">Bedroom</option>
                                    <option value="Conservatory" className="bg-brand-card">Conservatory</option>
                                    <option value="Dining" className="bg-brand-card">Dining</option>
                                    <option value="Home Office" className="bg-brand-card">Home Office</option>
                                    <option value="Hall" className="bg-brand-card">Hall</option>
                                    <option value="Living Room" className="bg-brand-card">Living Room</option>
                                    <option value="Stairs" className="bg-brand-card">Stairs</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Dimensions *</label>
                                    <input
                                        type="text"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Price Base *</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                        min="0"
                                        className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Promotional Discount (%)</label>
                                    <input
                                        type="number"
                                        name="discount"
                                        value={formData.discount}
                                        onChange={handleChange}
                                        min="0"
                                        max="100"
                                        className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Inventory Count *</label>
                                <input
                                    type="number"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Chromatic DNA (Hex, Comma separated)</label>
                                <input
                                    type="text"
                                    name="colors"
                                    value={formData.colors}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium text-xs"
                                    placeholder="#434443, #ffffff"
                                />
                            </div>

                            <div>
                                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Narrative Outline</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    className="w-full px-5 py-4 bg-brand-bg border border-brand-light/50 rounded-sm text-brand-light/70 focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all resize-none font-medium"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Lead Visual</label>
                                    <div className="relative border-2 border-dashed border-brand-light/50 rounded-sm h-36 flex flex-col items-center justify-center text-brand-light/70/20 cursor-pointer hover:bg-brand-light/5 hover:border-brand-light/20 transition-all overflow-hidden bg-brand-bg/50 group">
                                        {preview ? (
                                            <img src={(typeof preview === 'string' && !preview.startsWith('blob:')) ? getImageUrl(preview) : preview} alt="Preview" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                        ) : (
                                            <>
                                                <FiUploadCloud size={24} className="mb-2 group-hover:text-brand-light/70 transition-colors" />
                                                <span className="text-[9px] font-black uppercase tracking-widest">Primary Texture</span>
                                            </>
                                        )}
                                        <input type="file" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-3">Ensemble Assets</label>
                                    <div className="relative border-2 border-dashed border-brand-light/50 rounded-sm h-36 flex flex-col items-center justify-center text-brand-light/70/20 cursor-pointer hover:bg-brand-light/5 hover:border-brand-light/20 transition-all overflow-hidden bg-brand-bg/50 group">
                                        {galleryPreviews.length > 0 ? (
                                            <div className="grid grid-cols-2 w-full h-full p-1 gap-1">
                                                {galleryPreviews.slice(0, 4).map((p, i) => (
                                                    <img key={i} src={(typeof p === 'string' && !p.startsWith('blob:')) ? getImageUrl(p) : p} className="w-full h-full object-cover rounded-md" />
                                                ))}
                                            </div>
                                        ) : (
                                            <>
                                                <FiPlus size={24} className="mb-2 group-hover:text-brand-light/70 transition-colors" />
                                                <span className="text-[9px] font-black uppercase tracking-widest">Sample Matrix</span>
                                            </>
                                        )}
                                        <input type="file" multiple onChange={handleGalleryChange} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 border-t border-brand-light/50 flex justify-end gap-6 bg-brand-light/5 mt-auto">
                        <button type="button" onClick={onClose} className="px-8 py-4 text-white hover:text-brand-light/70 font-black uppercase tracking-widest text-[10px] transition-all">Cancel</button>
                        <button type="submit" disabled={loading || success} className="px-10 py-4 bg-brand-btn hover:opacity-90 text-brand-light/70 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl border border-brand-light/50 active:scale-95 disabled:opacity-50 flex items-center gap-4 min-w-[200px] justify-center">
                            {loading ? (
                                <>
                                    <FiLoader className="animate-spin" size={16} />
                                    Updating Archive...
                                </>
                            ) : success ? (
                                'Archive Synchronized'
                            ) : (
                                'Commit Modifications'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
