import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] text-white py-20 border-t border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
                    {/* Left */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <span className="text-3xl font-black uppercase tracking-tighter">
                                MFA <span className="text-[#C6A76B] italic font-serif text-3xl">Floors</span>
                            </span>
                        </Link>
                        <div className="space-y-1 text-[#BFBFBF] text-sm uppercase tracking-widest font-bold">
                            <p>Tottenham London</p>
                            <p>Since 2012</p>
                        </div>
                    </div>

                    {/* Center */}
                    <div>
                        <h4 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-10 pb-2 border-b border-[#C6A76B]/20 inline-block text-white/40">Navigation</h4>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                { name: 'Home', link: '/' },
                                { name: 'Shop', link: '/collection' },
                                { name: 'Calculator', link: '/calculator' },
                                { name: 'Gallery', link: '/gallery' },
                                { name: 'Contact', link: '/contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.link}
                                        className="text-[#BFBFBF] hover:text-[#C6A76B] transition-colors text-[11px] font-bold uppercase tracking-widest"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right */}
                    <div>
                        <h4 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-10 pb-2 border-b border-[#C6A76B]/20 inline-block text-white/40">Contact</h4>
                        <div className="space-y-6">
                            <a href="tel:02088080088" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-sm bg-[#111111] border border-white/5 flex items-center justify-center text-[#C6A76B] group-hover:bg-[#C6A76B] group-hover:text-white transition-all">
                                    <FiPhone size={18} />
                                </div>
                                <span className="text-[12px] font-bold tracking-widest text-[#BFBFBF]">020 8808 0088</span>
                            </a>
                            <a href="https://wa.me/442088080088" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-sm bg-[#111111] border border-white/5 flex items-center justify-center text-[#C6A76B] group-hover:bg-[#C6A76B] group-hover:text-white transition-all">
                                    <FaWhatsapp size={18} />
                                </div>
                                <span className="text-[12px] font-bold tracking-widest text-[#BFBFBF]">WhatsApp</span>
                            </a>
                            <a href="mailto:info@mfafloors.co.uk" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-sm bg-[#111111] border border-white/5 flex items-center justify-center text-[#C6A76B] group-hover:bg-[#C6A76B] group-hover:text-white transition-all">
                                    <FiMail size={18} />
                                </div>
                                <span className="text-[12px] font-bold tracking-widest text-[#BFBFBF]">info@mfafloors.co.uk</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">
                        © {new Date().getFullYear()} MFA FLOORS LONDON. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-white/20 text-[9px] font-bold uppercase tracking-[0.3em]">
                        <Link to="/privacy" className="hover:text-[#C6A76B] transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-[#C6A76B] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;