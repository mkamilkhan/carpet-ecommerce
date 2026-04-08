import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiShoppingBag, FiSearch, FiFilter, FiX, FiChevronDown, FiPlus, FiArrowLeft, FiArrowRight, FiInfo, FiHeart, FiShare2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import SampleRedesignModal from '../components/SampleRedesignModal';
import { getImageUrl } from '../utils/imagePath';
import shopVideo from '../assets/shopCarpet.mp4';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const location = useLocation();

    // Sample Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSampleProduct, setSelectedSampleProduct] = useState(null);

    const { addToCart, addToSamples, cartItems, sampleItems } = useCart();

    const categories = ['All', 'Carpet', 'Vinyl', 'Laminate', 'Engineered Wood', 'Commercial Carpet', 'Commercial Vinyl', 'Rugs'];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const res = await axios.get('/api/products');
                setProducts(res.data);
                setFilteredProducts(res.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const catParam = queryParams.get('category');
        if (catParam) {
            const matchedCat = categories.find(c => c.toLowerCase() === catParam.toLowerCase());
            if (matchedCat && category === 'All') {
                setCategory(matchedCat);
            }
        }
    }, [location.search, categories, category]);

    useEffect(() => {
        let result = products;

        const queryParams = new URLSearchParams(location.search);
        const roomParam = queryParams.get('room');

        if (category && category !== 'All') {
            result = result.filter(p =>
                p.type?.trim().toLowerCase() === category.trim().toLowerCase()
            );
        }

        if (roomParam) {
            result = result.filter(p =>
                p.roomSuitability?.trim().toLowerCase() === roomParam.trim().toLowerCase()
            );
        }

        if (searchTerm) {
            result = result.filter(p =>
                p.name?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredProducts(result);

    }, [category, searchTerm, products, location.search]);

    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white pb-40 relative">
            {/* HERO / HEADER SECTION */}
            <section className="relative h-[50vh] lg:h-[70vh] flex items-center pt-20" data-reveal="fade">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        src={shopVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] z-10" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 mt-23 w-full">
                    <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.6em]   ">Exquisite Selection</span>
                    <h1 className="text-5xl lg:text-9xl font-black uppercase tracking-tighter leading-none ">
                        The <span className="text-[#C6A76B] italic font-serif">Collection.</span>
                    </h1>
                    <p className="text-[#BFBFBF] text-lg lg:text-[20px] max-w-xl leading-relaxed font-bold uppercase tracking-widest text-xs opacity-60">
                        Explore our curated range of professional-grade flooring. Exceptional quality for London's finest spaces.
                    </p>
                </div>
            </section>

            <div className="max-w-[1440px] mx-auto px-2 lg:px-12 mt-10 lg:mt-32 relative z-20" data-reveal="up">
                {/* TOOLBAR */}
                <div className="bg-[#111111] border border-white/5 p-4 lg:p-6 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl rounded-sm">
                    <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-4 overflow-x-auto no-scrollbar w-full md:w-auto">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`px-6 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap ${category === cat ? 'bg-[#C6A76B] text-white' : 'bg-black/40 text-white/40 border border-white/5 hover:border-[#C6A76B]/30'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <input
                            type="text"
                            placeholder="SEARCH REFERENCE..."
                            className="w-full bg-black/40 border border-white/5 rounded-sm py-3 px-12 text-[10px] font-black tracking-widest text-[#C6A76B] placeholder:text-white/20 focus:border-[#C6A76B]/50 outline-none transition-all uppercase"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                    </div>
                </div>

                {/* PRODUCT GRID */}
                {loading ? (
                    <div className="flex justify-center items-center py-40">
                        <div className="w-12 h-12 border-4 border-white/5 border-t-[#C6A76B] rounded-full animate-spin" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                        {filteredProducts.map((p) => (
                            <div key={p._id} className="group flex flex-col h-full bg-[#111111] border border-white/5 hover:border-[#C6A76B]/30 transition-all duration-700">
                                <Link to={`/product/${p._id}`} className="relative aspect-[4/5] overflow-hidden bg-[#0F0F0F]">
                                    <img
                                        src={getImageUrl(p.image)}
                                        alt={p.name}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                        <span className="bg-[#C6A76B] text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 block text-center">View Specification</span>
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[#C6A76B] text-[8px] font-black uppercase tracking-[0.4em] px-2 py-1 bg-white/5 border border-white/5">
                                            {p.type}
                                        </span>
                                        <span className="text-white/10 text-[8px] font-black uppercase tracking-[0.4em] italic leading-none">Artisan Collection</span>
                                    </div>
                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white group-hover:text-[#C6A76B] transition-colors">{p.name}</h3>

                                    {/* Color Options - Only show for Carpets */}
                                    {p.type?.trim().toLowerCase().includes('carpet') && (
                                        <div className="flex gap-1.5 mb-6">
                                            {(p.colors && p.colors.length > 0 ? p.colors : ['#E5E1D8', '#B7A99A', '#8D7E71', '#5C544E', '#2D2926']).slice(0, 5).map((color, i) => (
                                                <div
                                                    key={i}
                                                    className="w-8 h-8 rounded border border-white/10 shadow-sm"
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-baseline gap-2 mb-8 border-t border-white/5 pt-6 mt-auto">
                                        <span className="text-2xl font-black text-white">£{p.price}</span>
                                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">/ m²</span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 font-black">
                                        {p.type?.trim().toLowerCase().includes('carpet') ? (
                                            <button
                                                onClick={() => {
                                                    setSelectedSampleProduct(p);
                                                    setIsModalOpen(true);
                                                }}
                                                className="bg-transparent border border-white/10 text-white uppercase tracking-widest text-[9px] py-4 rounded-sm hover:bg-white hover:text-black transition-all"
                                            >
                                                Order Free Samples
                                            </button>
                                        ) : (
                                            <Link
                                                to={`/product/${p._id}`}
                                                className="bg-transparent border border-white/10 text-white uppercase tracking-widest text-[9px] py-4 rounded-sm hover:bg-white hover:text-black transition-all text-center flex items-center justify-center"
                                            >
                                                View Details
                                            </Link>
                                        )}
                                        <button
                                            onClick={() => {
                                                const message = `Hello, I'm interested in the ${p.name} (${p.type}) flooring.`;
                                                window.open(`https://wa.me/442088080088?text=${encodeURIComponent(message)}`, '_blank');
                                            }}
                                            className="bg-white text-black uppercase tracking-widest text-[9px] py-4 rounded-sm hover:bg-[#C6A76B] hover:text-white transition-all shadow-xl flex items-center justify-center gap-2"
                                        >
                                            <FaWhatsapp size={14} />
                                            Book on WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA */}
            <section className="mt-40 border-t border-white/5 pt-32 text-center max-w-4xl mx-auto px-6" data-reveal="up">
                <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">Cannot Find Your <br /><span className="text-[#C6A76B]">Masterwork?</span></h2>
                <p className="text-[#BFBFBF] tracking-[0.3em] uppercase text-xs font-bold mb-12 opacity-60">
                    Our private showroom holds over 5,000 exclusive designs. Consult with an artisan today.
                </p>
                <Link to="/contact" className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] hover:bg-[#b0945d] transition-all">
                    Visit Our London Showroom
                </Link>
            </section>

            {/* Redesigned Sample Selection Modal */}
            <SampleRedesignModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={selectedSampleProduct}
            />
        </div>
    );
};

export default Shop;
