import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiBox, FiShoppingBag, FiClock, FiChevronRight } from 'react-icons/fi';
import { FaBed, FaCouch, FaBath, FaUtensils, FaHome, FaStar, FaBuilding } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import BookingModal from './BookingModal';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const { cartItems, sampleItems } = useCart();

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

    return (
        <nav 
            className="fixed top-0 z-[100] w-full shadow-lg"
            onMouseLeave={() => setHoveredMenu(null)}
        >
            {/* 1. LUXURY TOP BAR */}
            <div className="h-[35px] bg-[#0F0F0F] flex items-center justify-center overflow-hidden gap-4">
                <FiClock className="text-[#C6A76B]/60" size={14} />
                <span className="text-[#C6A76B] text-[10px] lg:text-[12px] font-medium tracking-wider uppercase">
                    Free Home Measurement Across London | Since 2012
                </span>
            </div>

            {/* 2. PREMIUM HEADER */}
            <div className="bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5 h-[75px] lg:h-[85px] flex items-center relative">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex justify-between items-center h-full">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white">
                            MFA <span className="text-[#C6A76B] italic font-serif text-3xl">Floors</span>
                        </span>
                    </Link>

                    {/* Center Menu: Desktop */}
                    <div className="hidden lg:flex items-center gap-6 h-full">
                        {normalMenuItems.slice(0, 1).map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="relative group text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-[#C6A76B] transition-all duration-300 h-full flex items-center"
                                onMouseEnter={() => setHoveredMenu(null)}
                            >
                                {item.name}
                                <span className="absolute bottom-[28px] left-0 w-0 h-px bg-[#C6A76B] transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        ))}
                        
                        {/* Mega Menu Triggers */}
                        {categoryMenus.map(cat => (
                            <div
                                key={cat}
                                onMouseEnter={() => setHoveredMenu(cat)}
                                className="relative group text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 h-full flex items-center cursor-pointer"
                            >
                                <Link onClick={() => setHoveredMenu(null)} to={`/collection?category=${encodeURIComponent(cat)}`}>
                                    <span className={hoveredMenu === cat ? "text-[#C6A76B]" : "text-white/70 group-hover:text-[#C6A76B]"}>
                                        {cat}
                                    </span>
                                </Link>
                                <span className={`absolute bottom-[28px] left-0 h-px bg-[#C6A76B] transition-all duration-300 ease-out ${hoveredMenu === cat ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </div>
                        ))}

                        {normalMenuItems.slice(1).map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="relative group text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-[#C6A76B] transition-all duration-300 h-full flex items-center"
                                onMouseEnter={() => setHoveredMenu(null)}
                            >
                                {item.name}
                                <span className="absolute bottom-[28px] left-0 w-0 h-px bg-[#C6A76B] transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Utility Icons & CTA */}
                    <div className="flex items-center gap-3 lg:gap-6" onMouseEnter={() => setHoveredMenu(null)}>
                        <button
                            onClick={() => setIsBookingModalOpen(true)}
                            className="hidden md:block bg-[#C6A76B] text-white px-6 py-2.5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-[#b0945d] transition-all shadow-lg"
                        >
                            Book an appointment
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-white hover:text-[#C6A76B]"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* MEGA MENU MODAL */}
                <AnimatePresence>
                    {hoveredMenu && megaMenuData[hoveredMenu] && (
                        <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-[100%] left-0 w-full bg-[#111111] text-white shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-t border-[#C6A76B]/20 overflow-hidden"
                            onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                            onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <div className="flex max-w-[1440px] mx-auto min-h-[400px]">
                                {/* Middle Content - Room Grid */}
                                <div className="flex-1 p-10 bg-[#0B0B0B] relative">
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C6A76B]/5 rounded-full blur-[100px] pointer-events-none" />
                                    <div className="relative z-10 grid grid-cols-4 gap-6">
                                        {megaMenuData[hoveredMenu].rooms.map(room => (
                                            <Link onClick={() => setHoveredMenu(null)} to={`/collection?category=${encodeURIComponent(hoveredMenu)}&room=${encodeURIComponent(room.name)}`} key={room.name} className="group bg-[#161616] rounded-xl p-8 flex flex-col items-center justify-center shadow-lg border border-white/5 transition-all duration-300 hover:border-[#C6A76B]/40 hover:shadow-[0_0_30px_rgba(198,167,107,0.15)] hover:-translate-y-1">
                                                <div className="text-white/30 group-hover:text-[#C6A76B] transition-colors duration-300 mb-4 scale-110 group-hover:scale-125">
                                                    {React.cloneElement(room.icon, { className: 'currentColor' })}
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 text-center group-hover:text-white transition-colors">{room.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                {/* Right Promo Box */}
                                <div className="w-[400px] bg-[#111111] p-10 flex flex-col border-l border-white/5 relative z-10">
                                    <span className="text-[#C6A76B] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Design Guide</span>
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
                                            <Link onClick={() => setHoveredMenu(null)} to={`/collection`} className="self-start px-8 py-3 bg-transparent border border-[#C6A76B] text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#C6A76B] hover:text-black transition-all rounded-sm">
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
                                className="bg-[#C6A76B] text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest mt-4"
                            >
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