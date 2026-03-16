import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiBox, FiShoppingBag, FiClock } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { cartItems, sampleItems } = useCart();

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Shop', link: '/collection' },
        { name: 'Our Story', link: '/about' },
        // { name: 'Gallery', link: '/gallery' },
        { name: 'Services', link: '/services' },
        { name: 'Calculator', link: '/calculator' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <nav className="fixed top-0 z-[100] w-full shadow-lg">
            {/* 1. LUXURY TOP BAR */}
            <div className="h-[35px] bg-[#0F0F0F] flex items-center justify-center overflow-hidden gap-4">
                <FiClock className="text-[#C6A76B]/60" size={14} />
                <span className="text-[#C6A76B] text-[10px] lg:text-[12px] font-medium tracking-wider uppercase">
                    Free Home Measurement Across London | Since 2012
                </span>
            </div>

            {/* 2. PREMIUM HEADER */}
            <div className="bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-white/5 h-[65px] lg:h-[75px] flex items-center">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex justify-between items-center">
                    {/* Left: Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white">
                            MFA <span className="text-[#C6A76B] italic font-serif text-3xl">Floors</span>
                        </span>
                    </Link>

                    {/* Center Menu: Desktop */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="relative group text-[11px] font-bold uppercase tracking-[0.15em] text-white/70 hover:text-[#C6A76B] transition-all duration-300"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C6A76B] transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Utility Icons & CTA */}
                    <div className="flex items-center gap-3 lg:gap-6">
                        <div className="hidden lg:flex items-center gap-6 mr-4 pr-6 border-r border-white/10 text-white/40">
                            <Link to="/samples" className="relative hover:text-[#C6A76B] transition-colors">
                                <FiBox size={20} />
                                {sampleItems?.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-white text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg border border-black/10">
                                        {sampleItems.length}
                                    </span>
                                )}
                            </Link>
                            <Link to="/cart" className="relative hover:text-[#C6A76B] transition-colors">
                                <FiShoppingBag size={20} />
                                {cartItems?.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-[#C6A76B] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                        </div>

                        <Link
                            to="/contact"
                            className="hidden md:block bg-[#C6A76B] text-white px-6 py-2.5 rounded-sm text-[11px] font-black uppercase tracking-widest hover:bg-[#b0945d] transition-all shadow-lg"
                        >
                            BOOK FREE MEASURE
                        </Link>

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

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 top-[100px] bg-[#0B0B0B] z-40">
                    <div className="flex flex-col items-center py-10 space-y-6">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="relative group text-lg font-bold uppercase tracking-[0.2em] text-white hover:text-[#C6A76B] transition-all"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#C6A76B] transition-all duration-300 ease-out group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-[#C6A76B] text-white px-10 py-4 rounded-sm text-sm font-bold uppercase tracking-widest mt-4"
                            onClick={() => setMobileOpen(false)}
                        >
                            BOOK FREE MEASURE
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;