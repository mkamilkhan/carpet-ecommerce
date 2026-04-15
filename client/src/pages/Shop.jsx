import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingBag, FiSearch, FiFilter, FiX, FiChevronDown, FiPlus, FiArrowLeft, FiArrowRight, FiInfo, FiHeart, FiShare2 } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import SampleRedesignModal from '../components/SampleRedesignModal';
import { getImageUrl } from '../utils/imagePath';
import shopVideo from '../assets/shopCarpet.mp4';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const location = useLocation();

    // Sample Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSampleProduct, setSelectedSampleProduct] = useState(null);

    const { addToCart, addToSamples, cartItems, sampleItems } = useCart();

    const categories = ['All', 'Carpets', 'Vinyl Flooring', 'Laminate Flooring', 'Engineered Wood Flooring', 'Commercial Carpet', 'Commercial Vinyl', 'Rugs'];

    const accordionData = [
        {
            category: 'Carpets',
            subcategories: ['Stairs', 'Bedroom', 'Lounge', 'Stair Runners', 'Hall', 'Dining', 'Conservatory', 'Home Office', 'Grass Carpet', 'Wall-to-Wall Carpet']
        },
        {
            category: 'Vinyl Flooring',
            subcategories: ['Wood Effect', 'Marble Effect', 'Tile Effect', 'Stone Effect', 'Patterned', 'Terrazzo', 'Victorian']
        },
        {
            category: 'Laminate Flooring',
            subcategories: ['Lounge', 'Kitchen', 'Bathroom', 'Bedroom', 'Hallway', 'Conservatory', 'Dining']
        },
        {
            category: 'Engineered Wood Flooring',
            subcategories: ['Herringbone', 'Oak', 'Brushed & Oiled', 'Lacquered', 'Rustic', 'Natural']
        },
        {
            category: 'Commercial Carpet',
            subcategories: []
        },
        {
            category: 'Commercial Vinyl',
            subcategories: []
        },
        {
            category: 'Rugs',
            subcategories: []
        }
    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (cat) => {
        setOpenAccordion(openAccordion === cat ? null : cat);
    };

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
            // Find right category case-insensitively, and broadly handling plural "s"
            const paramBase = catParam.toLowerCase().replace(/s$/, '');
            const matchedCat = categories.find(c => c.toLowerCase().replace(/s$/, '') === paramBase);
            if (matchedCat && matchedCat !== category) {
                setCategory(matchedCat);
            }
        } else {
            if (category !== 'All') {
                setCategory('All');
            }
        }
    }, [location.search, categories, category]);

    const filteredProducts = useMemo(() => {
        let result = products;

        const queryParams = new URLSearchParams(location.search);
        const roomParam = queryParams.get('room');

        if (category && category !== 'All') {
            const catLower = category.toLowerCase();
            result = result.filter(p => {
                const typeLower = (p.type || '').toLowerCase();

                // Flexible mapping
                if (catLower.includes('carpet') && typeLower.includes('carpet')) return true;
                if (catLower.includes('vinyl') && typeLower.includes('vinyl')) return true;
                if (catLower.includes('wood') && typeLower.includes('wood')) return true;
                if (catLower.includes('laminate') && typeLower.includes('laminate')) return true;
                if (catLower.includes('rug') && typeLower.includes('rug')) return true;

                // Fallback to strict base matching
                const catBase = catLower.replace(/s$/, '').trim();
                const typeBase = typeLower.replace(/s$/, '').trim();
                return catBase === typeBase;
            });
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

        return result;
    }, [category, searchTerm, products, location.search]);

    useEffect(() => {
        setCurrentPage(1);
    }, [category, searchTerm, location.search]);

    // Pagination calculations
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 500, behavior: 'smooth' });
    };

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
                    <div
                        className="absolute inset-0 z-10 pointer-events-none opacity-60"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(198,167,107,0.14) 1px, transparent 1px)',
                            backgroundSize: '22px 22px',
                        }}
                    />
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

            <div className="max-w-[1440px] mx-auto px-6 lg:px-6 mt-10 lg:mt-32 relative z-20 flex flex-col lg:flex-row gap-1 items-start" data-reveal="up">
                {/* LEFT SIDEBAR (Accordion) */}
                <div className="w-full lg:w-72 shrink-0 bg-[#111111] border border-white/5 shadow-2xl rounded-sm p-6 lg:p-8 lg:sticky lg:top-32 z-[40]">
                    <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.4em] mb-8 border-b border-white/5 pb-4">Refine Search</h3>

                    {/* SEARCH */}
                    <div className="mb-10 relative w-full border-b border-white/5 pb-8">
                        <input
                            type="text"
                            placeholder="SEARCH REFERENCE..."
                            className="w-full bg-black/40 border border-white/5 rounded-sm py-3 px-10 text-[10px] font-black tracking-widest text-[#C6A76B] placeholder:text-white/20 focus:border-[#C6A76B]/50 outline-none transition-all uppercase"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-[28px] text-white/20" size={14} />
                    </div>

                    {/* ACCORDION / SUB-FILTERS */}
                    <h4 className="text-white/40 text-[9px] font-black uppercase tracking-[0.3em] mb-4">Rooms & Styles</h4>
                    <div className="space-y-2 mb-4">
                        <div className="border-b border-white/10 pb-2 mb-4">
                            <Link
                                to={`/collection`}
                                onClick={() => {
                                    setOpenAccordion(null);
                                    setCategory('All');
                                }}
                                className={`w-full flex justify-between items-center py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${category === 'All' && (!location.search || !location.search.includes('category')) ? 'text-[#C6A76B]' : 'text-white hover:text-[#C6A76B]'}`}
                            >
                                <span>View All Collections</span>
                                <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50">{products.length}</span>
                            </Link>
                        </div>
                        {accordionData.map((item) => {
                            const catBase = item.category.trim().toLowerCase().replace(/s$/, '');
                            const catProducts = products.filter(p => p.type?.trim().toLowerCase().replace(/s$/, '') === catBase);
                            const catCount = catProducts.length;

                            // Check if this category is currently active in the URL
                            const queryParams = new URLSearchParams(location.search);
                            const activeCat = queryParams.get('category');
                            const activeRoom = queryParams.get('room');
                            const isCatActive = activeCat && activeCat.toLowerCase().replace(/s$/, '') === catBase;

                            return (
                                <div key={item.category} className="border-b border-white/5 last:border-0 pb-2">
                                    <button
                                        onClick={() => toggleAccordion(item.category)}
                                        className={`w-full flex justify-between items-center py-4 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${isCatActive ? 'text-[#C6A76B]' : 'text-white/70 hover:text-[#C6A76B]'}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {item.category}
                                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full border transition-all ${isCatActive ? 'bg-[#C6A76B] border-[#C6A76B] text-black font-black' : 'bg-white/5 border-white/10 text-white/50'}`}>
                                                {catCount}
                                            </span>
                                        </div>
                                        <FiChevronDown className={`transition-transform duration-300 ${openAccordion === item.category ? 'rotate-180' : ''} ${isCatActive ? 'text-[#C6A76B]' : ''}`} />
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${openAccordion === item.category ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <div className="flex flex-col gap-3 pb-6 pt-2">
                                            <Link
                                                to={`/collection?category=${encodeURIComponent(item.category)}`}
                                                className={`group flex justify-between items-center text-[10px] font-bold uppercase tracking-widest transition-colors mb-2 ${isCatActive && !activeRoom ? 'text-[#C6A76B]' : 'text-[#C6A76B]/60 hover:text-white'}`}
                                            >
                                                <span>View All {item.category}</span>
                                                <span className={`text-[8px] px-1.5 py-0.5 rounded-full border transition-all ${isCatActive && !activeRoom ? 'bg-[#C6A76B] border-[#C6A76B] text-black' : 'bg-[#C6A76B]/10 border-[#C6A76B]/30 group-hover:border-white/30 group-hover:text-white'}`}>{catCount}</span>
                                            </Link>
                                            {item.subcategories.map(sub => {
                                                const subCount = catProducts.filter(p => p.roomSuitability?.trim().toLowerCase() === sub.trim().toLowerCase()).length;
                                                const isSubActive = isCatActive && activeRoom && activeRoom.toLowerCase() === sub.toLowerCase();

                                                return (
                                                    <Link
                                                        key={sub}
                                                        to={`/collection?category=${encodeURIComponent(item.category)}&room=${encodeURIComponent(sub)}`}
                                                        className={`group text-[10px] font-bold uppercase tracking-widest transition-colors pl-4 border-l-2 flex justify-between items-center ${isSubActive ? 'text-[#C6A76B] border-[#C6A76B]' : 'text-white/50 hover:text-[#C6A76B] border-white/10 hover:border-[#C6A76B]'}`}
                                                    >
                                                        <span>{sub}</span>
                                                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full border transition-all ${isSubActive ? 'bg-[#C6A76B] border-[#C6A76B] text-black' : 'bg-black/50 border border-white/5 group-hover:border-[#C6A76B]/50 group-hover:text-[#C6A76B]'}`}>
                                                            {subCount}
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* MAIN CONTENT (Grid) */}
                <div className="flex-1 w-full flex flex-col">
                    {/* PRODUCT GRID */}
                    {loading ? (
                        <div className="flex justify-center items-center py-40">
                            <div className="w-12 h-12 border-4 border-white/5 border-t-[#C6A76B] rounded-full animate-spin" />
                        </div>
                    ) : currentProducts.length === 0 ? (
                        <div className="flex flex-col justify-center items-center py-32 border border-white/5 bg-[#111111] rounded-sm shadow-xl">
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Inventory Notice</span>
                            <h2 className="text-3xl font-black uppercase tracking-widest text-white">No Data Available</h2>
                            <p className="text-white/40 mt-4 text-[12px] uppercase tracking-widest text-center max-w-sm leading-relaxed font-bold">
                                We currently do not have any products that match this collection.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-12">
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-x-3 lg:gap-y-12"
                            >
                                <AnimatePresence mode="popLayout">
                                    {currentProducts.map((p) => (
                                        <motion.div
                                            key={p._id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.4 }}
                                            className="group relative aspect-square overflow-hidden bg-[#0F0F0F] border border-white/5 hover:border-[#C6A76B]/30 transition-all duration-700 flex flex-col justify-end"
                                        >
                                            {/* DISCOUNT BADGE */}
                                            {p.discount > 0 && (
                                                <div className="absolute top-4 right-4 z-20 bg-red-600 text-white text-[9px] font-black px-3 py-1.5 uppercase tracking-widest shadow-2xl border border-white/10 rounded-sm">
                                                    {p.discount}% OFF
                                                </div>
                                            )}
                                            <Link to={`/product/${p._id}`} className="absolute inset-0 z-0">
                                                <img
                                                    src={getImageUrl(p.image)}
                                                    alt={p.name}
                                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />
                                            </Link>

                                            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-end h-full pointer-events-none">
                                                <div className="flex items-center gap-3 mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <span className="text-[#C6A76B] text-[8px] font-black uppercase tracking-[0.4em] px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10">
                                                        {p.type}
                                                    </span>
                                                </div>
                                                <Link to={`/product/${p._id}`} className="pointer-events-auto">
                                                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-2 text-white group-hover:text-[#C6A76B] transition-colors translate-y-4 group-hover:translate-y-0 duration-500 delay-75">
                                                        {p.name}
                                                    </h3>
                                                </Link>

                                                <div className="flex items-center gap-3 mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className={`text-xl font-black ${p.discount > 0 ? 'text-red-500' : 'text-white'}`}>
                                                            £{p.discount > 0 ? (p.price - (p.price * p.discount / 100)) : p.price}
                                                        </span>
                                                        {p.discount > 0 && (
                                                            <span className="text-[10px] font-black text-white/40 line-through">£{p.price}</span>
                                                        )}
                                                        <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">/ m²</span>
                                                    </div>
                                                </div>

                                                <div className="grid gap-2 pointer-events-auto opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150">
                                                    {p.type?.trim().toLowerCase().includes('carpet') ? (
                                                        <button
                                                            onClick={() => {
                                                                setSelectedSampleProduct(p);
                                                                setIsModalOpen(true);
                                                            }}
                                                            className="bg-transparent border border-white/20 text-white uppercase tracking-widest text-[9px] py-4 rounded-sm hover:bg-white hover:text-black transition-all shadow-xl"
                                                        >
                                                            Order Free Samples
                                                        </button>
                                                    ) : (
                                                        <Link
                                                            to={`/product/${p._id}`}
                                                            className="bg-transparent border border-white/20 text-white uppercase tracking-widest text-[9px] py-4 rounded-sm hover:bg-white hover:text-black transition-all text-center flex items-center justify-center shadow-xl"
                                                        >
                                                            View Details
                                                        </Link>
                                                    )}
                                                    <button
                                                        onClick={() => {
                                                            const message = `Hello, I'm interested in the ${p.name} (${p.type}) flooring.`;
                                                            window.open(`https://wa.me/442088080088?text=${encodeURIComponent(message)}`, '_blank');
                                                        }}
                                                        className="bg-[#C6A76B] text-white uppercase tracking-widest text-[9px] py-4 rounded-sm hover:bg-[#b0945d] transition-all shadow-xl flex items-center justify-center gap-2"
                                                    >
                                                        <FaWhatsapp size={14} />
                                                        Book on WhatsApp
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            {/* PAGINATION */}
                            {totalPages > 1 && (
                                <div className="flex justify-center items-center gap-3 pt-12">
                                    <button
                                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white hover:border-[#C6A76B] hover:text-[#C6A76B] transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                                    >
                                        <FiArrowLeft size={16} />
                                    </button>

                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => paginate(i + 1)}
                                            className={`w-10 h-10 rounded-sm border font-black text-[10px] transition-all ${currentPage === i + 1 ? 'bg-[#C6A76B] border-[#C6A76B] text-black shadow-[0_0_20px_rgba(198,167,107,0.3)]' : 'border-white/10 text-white hover:border-white/40'}`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}

                                    <button
                                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white hover:border-[#C6A76B] hover:text-[#C6A76B] transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                                    >
                                        <FiArrowRight size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
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
