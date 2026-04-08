import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLoader } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import Calculator from '../components/Calculator';
import { useCart } from '../context/CartContext';
import { FiShoppingBag, FiBox, FiCheck, FiX } from 'react-icons/fi';
import SampleRedesignModal from '../components/SampleRedesignModal';
import { getImageUrl } from '../utils/imagePath';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState('#E5E1D8');
    const { addToCart, addToSamples } = useCart();

    // Sample Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`/api/products/${id}`);
                setProduct(res.data);
                setActiveImage(res.data.image);
                // Set default color from API if available
                if (res.data.colors && res.data.colors.length > 0) {
                    setSelectedColor(res.data.colors[0]);
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProduct();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0B0B]">
            <FiLoader className="animate-spin text-[#C6A76B]" size={48} />
        </div>
    );

    if (!product) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] gap-4">
            <h2 className="text-2xl font-black text-white">Product Not Found</h2>
            <button
                onClick={() => navigate('/collection')}
                className="px-8 py-3 bg-[#C6A76B] text-white rounded-sm font-bold uppercase tracking-widest hover:bg-[#b0945d] transition-all shadow-xl">
                Back to Collection
            </button>
        </div>
    );

    return (
        <div className="bg-[#0B0B0B] min-h-screen pt-24 pb-20 text-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-white/60 hover:text-[#C6A76B] font-black text-[10px] uppercase tracking-[0.3em] mb-12 transition-colors group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Collection
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
                    {/* LEFT IMAGE */}
                    <div className="relative aspect-square lg:aspect-auto h-full min-h-[400px] lg:h-[600px] rounded-sm overflow-hidden border border-white/5 shadow-2xl">
                        <img src={getImageUrl(activeImage)} className="w-full h-full object-cover" alt={product.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Premium Collection</span>
                            <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                                {product.name}
                            </h1>
                            <div className="inline-block bg-[#111111] border border-[#C6A76B]/20 px-8 py-4 rounded-sm">
                                <span className="text-3xl lg:text-4xl font-black text-[#C6A76B]">£{product.price}</span>
                                <span className="text-white/40 text-[12px] font-bold uppercase tracking-widest ml-3">/ m²</span>
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div className="space-y-4">
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] block">Select Surface Finish</span>
                            <div className="flex gap-3">
                                {(product.colors && product.colors.length > 0 ? product.colors : ['#E5E1D8', '#B7A99A', '#8D7E71', '#5C544E', '#2D2926']).map((color, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-sm border-2 transition-all flex items-center justify-center ${selectedColor === color ? 'border-[#C6A76B] scale-110' : 'border-white/10 hover:border-white/40'}`}
                                        style={{ backgroundColor: color }}
                                        title={`Finish Option ${i + 1}`}
                                    >
                                        {selectedColor === color && <FiCheck className="text-white drop-shadow-md" size={14} />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 text-[#BFBFBF] text-lg leading-relaxed">
                            <p>{product.description || `Experience the ultimate in flooring luxury with our ${product.name}. Designed for permanence and crafted from the finest materials, this collection brings architectural elegance to any London home.`}</p>
                            <ul className="space-y-3 pt-4">
                                <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C6A76B]">
                                    <span className="w-5 h-px bg-[#C6A76B]" /> Professional Installation Available
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C6A76B]">
                                    <span className="w-5 h-px bg-[#C6A76B]" /> Free Expert Consultation
                                </li>
                                <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C6A76B]">
                                    <span className="w-5 h-px bg-[#C6A76B]" /> Tottenham Showroom Exclusive
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 pt-6">
                                <button
                                    onClick={() => addToCart({ ...product, selectedColor })}
                                    className="bg-white text-black px-8 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.3em] hover:bg-[#C6A76B] hover:text-white transition-all flex items-center justify-center gap-3 shadow-xl"
                                >
                                    <FiShoppingBag size={18} />
                                    Add to Quote
                                </button>
                                <button
                                    onClick={() => {
                                        if (product.type?.trim().toLowerCase().includes('carpet')) {
                                            setIsModalOpen(true);
                                        } else {
                                            addToSamples({ ...product, selectedColor });
                                        }
                                    }}
                                    className="border border-white/20 text-white px-8 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
                                >
                                    <FiBox size={18} />
                                    {product.type?.trim().toLowerCase().includes('carpet') ? 'Order Sample' : 'Inquiry'}
                                </button>
                                <a
                                    href={`https://wa.me/442088080088?text=Hello, I am interested in the ${product.name} with finish ${selectedColor}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="sm:col-span-2 bg-[#25D366] text-white px-8 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.3em] hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-xl"
                                >
                                    <FaWhatsapp size={20} />
                                    Instant WhatsApp Chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CALCULATOR SECTION */}
                <div className="pt-24 border-t border-white/5">
                    <div className="max-w-[1000px] mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Precision Quote</span>
                            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Calculate Your Space</h2>
                            <p className="text-[#BFBFBF] tracking-widest uppercase text-xs">Get an instant estimate for materials & fitting</p>
                        </div>
                        <Calculator productPrice={product.price} productName={product.name} />
                    </div>
                </div>
            </div>

            {/* Redesigned Sample Selection Modal */}
            <SampleRedesignModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;