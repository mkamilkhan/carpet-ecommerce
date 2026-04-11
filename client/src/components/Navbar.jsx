import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiBox, FiShoppingBag, FiClock, FiChevronRight, FiCalendar, FiMapPin, FiHeart, FiSearch } from 'react-icons/fi';
import { FaBed, FaCouch, FaBath, FaUtensils, FaHome, FaStar, FaBuilding } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import BookingModal from './BookingModal';
import { motion, AnimatePresence } from 'framer-motion';
import { getImageUrl } from '../utils/imagePath';
import axios from 'axios';

const Navbar = () => {
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('OFFERS');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const { cartItems, sampleItems } = useCart();

    // Synchronize active tab with current URL
    useEffect(() => {
        const path = location.pathname;
        const search = location.search;
        
        if (path === '/') setActiveTab('OFFERS');
        else if (path === '/home') setActiveTab('Home');
        else if (path === '/about') setActiveTab('Our Story');
        else if (path === '/services') setActiveTab('Services');
        else if (path === '/calculator') setActiveTab('Calculator');
        else if (path.includes('/collection')) {
            const params = new URLSearchParams(search);
            const cat = params.get('category');
            if (cat) {
                // Capitalize to match tab names
                const formattedCat = cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase();
                setActiveTab(formattedCat);
            }
        }
    }, [location]);

    const navTabs = [
        { name: 'OFFERS', link: '/' },
        { name: 'Home', link: '/home' },
        { name: 'Carpets', link: '/collection?category=Carpets' },
        { name: 'Laminate', link: '/collection?category=Laminate' },
        { name: 'Vinyl', link: '/collection?category=Vinyl' },
        { name: 'Wood', link: '/collection?category=Wood' },
        { name: 'Our Story', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Calculator', link: '/calculator' },
    ];

    const normalMenuItems = [
        { name: 'Home', link: '/' },
        { name: 'Our Story', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Calculator', link: '/calculator' },
    ];

    const categoryMenus = ['Carpets', 'Laminate', 'Vinyl', 'Wood'];

    const megaMenuData = {
        'Carpets': {
            sidebar: ['Room', 'Colour', 'Design', 'Style', 'Fibre', 'Features', 'Price'],
            rooms: [
                { name: 'Stairs', icon: <FaBuilding size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Bedroom', icon: <FaBed size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Lounge', icon: <FaCouch size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Stair Runners', icon: <FaBuilding size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Hall', icon: <FaHome size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Dining', icon: <FaUtensils size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Conservatory', icon: <FaStar size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Home Office', icon: <FiClock size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
            ],
            promoImage: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600',
            promoTitle: 'How to measure stairs & landing for carpet',
            promoText: 'Follow our step-by-step guide for the perfect fit.',
            link: '/collection?category=carpets'
        },
        'Laminate': {
            sidebar: ['Room', 'Designs', 'Features', 'Colour', 'Price', 'Ideas Hub', 'More +'],
            rooms: [
                { name: 'Lounge', icon: <FaCouch size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Kitchen', icon: <FaUtensils size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Bathroom', icon: <FaBath size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Bedroom', icon: <FaBed size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Hallway', icon: <FaHome size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Conservatory', icon: <FaStar size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Dining', icon: <FaUtensils size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
            ],
            promoImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600',
            promoTitle: 'What is laminate?',
            promoText: 'Learn why this durable, budget-friendly, wood-look flooring is right for you.',
            link: '/collection?category=laminate'
        },
        'Vinyl': {
            sidebar: ['Style', 'Design', 'Room', 'Colour', 'Features', 'Ideas Hub', 'More +'],
            rooms: [
                { name: 'Wood Effect', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Marble Effect', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Tile Effect', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Stone Effect', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Patterned', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Terrazzo', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Victorian', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
            ],
            promoImage: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=600',
            promoTitle: 'Do you need underlay for vinyl flooring?',
            promoText: 'Find out your options with our handy guide.',
            link: '/collection?category=vinyl'
        },
        'Wood': {
            sidebar: ['Design', 'Room', 'Colour', 'Price', 'More +', 'Ideas Hub'],
            rooms: [
                { name: 'Herringbone', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Oak', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Brushed & Oiled', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Lacquered', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Rustic', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
                { name: 'Natural', icon: <FiBox size={32} className="text-black/60 mb-2 group-hover:text-[#C6A76B] transition-colors" /> },
            ],
            promoImage: 'https://images.unsplash.com/photo-1542385262-cdf06b2abcb8?q=80&w=600',
            promoTitle: 'Oiled vs Lacquered Engineered Wood',
            promoText: 'Find out which of these finishes will work better in your space.',
            link: '/collection?category=wood'
        }
    };

    useEffect(() => {
        const fetchResults = async () => {
            if (searchQuery.length < 2) {
                setSearchResults([]);
                setIsSearching(false);
                return;
            }

            setIsSearching(true);
            try {
                const baseUrl = import.meta.env.VITE_API_URL || '';
                const { data } = await axios.get(`${baseUrl}/api/products/search/${searchQuery}`);
                setSearchResults(data);
            } catch (error) {
                console.error('Search error:', error);
            } finally {
                setIsSearching(false);
            }
        };

        const timer = setTimeout(fetchResults, 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    return (
        <nav 
            className="fixed top-0 z-[100] w-full shadow-lg"
            onMouseLeave={() => setHoveredMenu(null)}
        >
            {/* 1. RED PROMOTIONAL TOP BAR */}
            <div className="h-[35px] bg-[#E31E24] flex items-center justify-center overflow-hidden gap-1">
                <span className="text-white text-[11px] lg:text-[13px] font-bold uppercase tracking-widest leading-none">
                    <span className="font-black">50% OFF</span> 100s of carpets — 
                    <Link to="/collection?onSale=true" className="underline ml-1">Browse Here</Link>
                    <span className="ml-1 opacity-90">— Many Offers End Tuesday</span>
                </span>
            </div>

            {/* 2. PREMIUM HEADER */}
            <div className="bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5 h-[75px] lg:h-[85px] flex items-center relative z-50">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full h-full grid grid-cols-1 lg:grid-cols-3 items-center">
                    {/* Left: Search (Desktop only) */}
                    <div className="hidden lg:flex items-center relative z-50 group">
                        <div className="relative w-full max-w-[280px]">
                            <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search"
                                className="w-full bg-transparent border-b border-white/20 pb-1.5 pl-8 text-sm font-medium text-white placeholder:text-white/40 outline-none focus:border-[#C7A76B] transition-all"
                            />

                            {/* SEARCH RESULTS DROPDOWN */}
                            <AnimatePresence>
                                {searchQuery.length >= 2 && (searchResults.length > 0 || isSearching) && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-[400px] bg-white text-black mt-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-sm overflow-hidden z-[500] border border-black/5"
                                    >
                                        <div className="max-h-[500px] overflow-y-auto custom-scrollbar bg-white">
                                            {isSearching ? (
                                                <div className="p-8 text-[11px] font-black uppercase tracking-[0.2em] text-[#333333]/40 animate-pulse text-center">Searching our collection...</div>
                                            ) : (
                                                <div className="bg-white">
                                                    <div className="px-6 py-4 bg-[#F9F9F9] border-b border-black/5">
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Products Found</span>
                                                    </div>
                                                    <div className="divide-y divide-black/5">
                                                        {searchResults.map((product) => (
                                                            <Link
                                                                key={product._id}
                                                                to={`/product/${product._id}`}
                                                                onClick={() => {
                                                                    setSearchQuery('');
                                                                    setSearchResults([]);
                                                                }}
                                                                className="flex items-center justify-between p-6 hover:bg-[#F9F9F9] transition-all group/item bg-white"
                                                            >
                                                                <div className="flex-1 pr-6">
                                                                    <h4 className="text-[13px] font-black text-black leading-snug group-hover/item:text-[#C7A76B] transition-colors uppercase tracking-tight">{product.name}</h4>
                                                                    <p className="text-[9px] font-bold text-[#C7A76B] uppercase tracking-widest mt-1.5">{product.type}</p>
                                                                </div>
                                                                <div className="w-14 h-14 rounded-sm overflow-hidden flex-shrink-0 border border-black/5 shadow-sm transform transition-transform duration-500 group-hover/item:scale-105">
                                                                    <img 
                                                                        src={getImageUrl(product.image)} 
                                                                        alt={product.name} 
                                                                        className="w-full h-full object-cover" 
                                                                    />
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <Link 
                                                        to={`/collection?search=${searchQuery}`}
                                                        onClick={() => {
                                                            setSearchQuery('');
                                                            setSearchResults([]);
                                                        }}
                                                        className="block p-5 text-center bg-[#0B0B0B] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C7A76B] transition-colors"
                                                    >
                                                        Show All Results
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex justify-start lg:justify-center items-center">
                        <Link to="/home" className="flex items-center">
                            <span className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white">
                                MFA <span className="text-[#C6A76B] italic font-serif text-3xl">Floors</span>
                            </span>
                        </Link>
                    </div>

                    {/* Right Side: Utility Icons */}
                    <div className="flex items-center justify-end gap-3 lg:gap-8" onMouseEnter={() => setHoveredMenu(null)}>
                        {/* Utility Icons: Desktop */}
                        <div className="hidden lg:flex items-center gap-8">
                            <Link to="/contact" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
                                <FiMapPin size={18} className="text-[#C6A76B]/60 group-hover:text-[#C6A76B]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Nearest store</span>
                            </Link>

                            <button
                                onClick={() => setIsBookingModalOpen(true)}
                                className="flex items-center gap-2 text-white hover:text-[#C6A76B] transition-colors group"
                            >
                                <FiCalendar size={18} className="text-[#C6A76B]" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Book an appointment</span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-white hover:text-[#C6A76B]"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. CATEGORY NAVIGATION BAR */}
            <div className="hidden lg:block bg-white border-b border-black/5 overflow-x-auto no-scrollbar">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex items-center h-[55px] gap-2">
                    {navTabs.map((tab) => {
                        const isCategory = categoryMenus.includes(tab.name);
                        const isActive = activeTab === tab.name || (isCategory && hoveredMenu === tab.name);
                        
                        return (
                            <div
                                key={tab.name}
                                onMouseEnter={() => isCategory ? setHoveredMenu(tab.name) : setHoveredMenu(null)}
                                className="relative h-full flex items-center cursor-pointer group"
                            >
                                <Link
                                    to={tab.link}
                                    onClick={() => {
                                        setHoveredMenu(null);
                                        setActiveTab(tab.name);
                                    }}
                                    className={`h-full px-6 flex items-center text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                                        tab.name === 'OFFERS' 
                                            ? (isActive ? 'bg-[#E31E24] text-white' : 'text-[#333333] hover:text-[#E31E24]')
                                            : (isActive ? 'text-[#E31E24]' : 'text-[#333333] hover:text-[#E31E24]')
                                    }`}
                                >
                                    {tab.name}
                                </Link>
                                {isCategory && (
                                    <span className={`absolute bottom-0 left-0 h-1 bg-[#E31E24] transition-all duration-300 ${hoveredMenu === tab.name ? 'w-full' : 'w-0'}`} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* MEGA MENU MODAL (Positioned relative to the category bar) */}
            <div className="relative">
                <AnimatePresence>
                    {hoveredMenu && megaMenuData[hoveredMenu] && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-0 left-0 w-full bg-[#111111] text-white shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-t border-[#E31E24]/20 overflow-hidden"
                            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            {/* Same content as before ... */}
                            {/* ... but with red accents instead of gold ... */}
                            <div className="flex max-w-[1440px] mx-auto min-h-[400px]">
                                <div className="flex-1 p-10 bg-[#0B0B0B] relative">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C7A76B]/5 rounded-full blur-[100px] pointer-events-none" />
                                    <div className="relative z-10 grid grid-cols-4 gap-6">
                                        {megaMenuData[hoveredMenu].rooms.map(room => (
                                            <Link onClick={() => setHoveredMenu(null)} to={`/collection?category=${encodeURIComponent(hoveredMenu)}&room=${encodeURIComponent(room.name)}`} key={room.name} className="group bg-[#161616] rounded-xl p-8 flex flex-col items-center justify-center shadow-lg border border-white/5 transition-all duration-300 hover:border-[#C7A76B]/40 hover:shadow-[0_0_30px_rgba(199,167,107,0.15)] hover:-translate-y-1">
                                                <div className="text-white/30 group-hover:text-[#C7A76B] transition-colors duration-300 mb-4 scale-110 group-hover:scale-125">
                                                    {React.cloneElement(room.icon, { className: 'currentColor' })}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 text-center group-hover:text-white transition-colors">{room.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-[400px] bg-[#111111] p-10 flex flex-col border-l border-white/5 relative z-10">
                                    <span className="text-[#C7A76B] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Design Guide</span>
                                    <div className="flex-1 bg-[#161616] rounded-xl overflow-hidden flex flex-col border border-white/5 group">
                                        <div className="h-[220px] overflow-hidden relative">
                                            <div className="absolute inset-0 bg-[#111111]/40 mix-blend-multiply z-10" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent z-10 opacity-70" />
                                            <img src={megaMenuData[hoveredMenu].promoImage} alt={megaMenuData[hoveredMenu].promoTitle} className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                                        </div>
                                        <div className="p-8 flex flex-col justify-between flex-1 relative z-20 -mt-8">
                                            <div>
                                                <h3 className="text-[18px] font-black text-white leading-tight mb-3">
                                                    {megaMenuData[hoveredMenu].promoTitle}
                                                </h3>
                                                <p className="text-[13px] text-white/50 mb-8 leading-relaxed font-medium">
                                                    {megaMenuData[hoveredMenu].promoText}
                                                </p>
                                            </div>
                                            <Link onClick={() => setHoveredMenu(null)} to={`/collection`} className="self-start px-8 py-3 bg-transparent border border-[#C7A76B] text-[#C7A76B] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#C7A76B] hover:text-white transition-all rounded-sm">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden fixed inset-0 top-[110px] bg-[#0B0B0B] z-40 overflow-y-auto pb-20"
                    >
                        <div className="flex flex-col items-center py-10 space-y-6">
                            <Link to="/" className="text-lg font-bold uppercase tracking-[0.2em] text-white hover:text-[#C6A76B]" onClick={() => setMobileOpen(false)}>Home</Link>
                            {categoryMenus.map(cat => (
                                <Link key={cat} to={`/collection`} className="text-lg font-bold uppercase tracking-[0.2em] text-white hover:text-[#C6A76B]" onClick={() => setMobileOpen(false)}>{cat}</Link>
                            ))}
                            {normalMenuItems.slice(1).map(item => (
                                <Link key={item.name} to={item.link} className="text-lg font-bold uppercase tracking-[0.2em] text-white hover:text-[#C6A76B]" onClick={() => setMobileOpen(false)}>{item.name}</Link>
                            ))}
                            <button
                                onClick={() => {
                                    setMobileOpen(false);
                                    setIsBookingModalOpen(true);
                                }}
                                className="flex items-center gap-3 bg-[#C6A76B] text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest mt-4"
                            >
                                <FiCalendar size={18} />
                                Book an appointment
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </nav>
    );
};

export default Navbar;