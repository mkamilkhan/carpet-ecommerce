import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiShield, FiTag, FiSearch } from 'react-icons/fi';

const PricePromise = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Price Promise</span>
                </div>

                <div className="space-y-16">
                    {/* Header */}
                    <div className="relative">
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Guarantees</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            Our Carpet Price Promise
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            One of the many ways we like to spread a bit of satisfaction is by ensuring our customers receive excellent service, at the best price for a beautifully fitted new carpet flooring. That’s why we pledge to beat any ‘totally fitted/on the floor’ bespoke carpet quote from another multiple retailer.
                        </p>
                    </div>

                    {/* The Pledge */}
                    <div className="bg-[#111111] p-10 lg:p-16 border border-white/10 rounded-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A76B] opacity-[0.03] rotate-45 transform translate-x-16 -translate-y-16" />
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-[#C6A76B] flex items-center gap-4">
                            <FiTag /> Our Price Pledge
                        </h2>
                        <div className="space-y-6">
                            <p className="text-[#BFBFBF] text-lg leading-relaxed">
                                All items within the competitor quote need to be for the exact same carpet, underlay and accessories with identical product specifications including weight, dimensions and available widths, so we can compare apples with apples.
                            </p>
                            <p className="text-[#BFBFBF] text-lg leading-relaxed">
                                Many retailers, including MFA Floors, rename the collections we sell, so if you’re able to provide us with the manufacturer product names or a sample, this will really help us to check if we have the exact same carpet within our collections.
                            </p>
                            <div className="inline-block px-6 py-3 bg-[#C6A76B]/10 border border-[#C6A76B]/20 rounded-full">
                                <span className="text-[#C6A76B] text-xs font-black uppercase tracking-widest">Valid for 14 days after order confirmation</span>
                            </div>
                        </div>
                    </div>

                    {/* Fine Print */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-white">The Fine Print</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#111111] p-8 border border-white/5 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                                <h3 className="text-sm font-black uppercase tracking-widest text-[#C6A76B] mb-4">Identical Specs</h3>
                                <p className="text-[#BFBFBF]/60 text-sm leading-relaxed">
                                    The competitor’s flooring must be to the same specification, completely identical, like-for-like, can’t tell them apart with your eyes closed.
                                </p>
                            </div>
                            <div className="bg-[#111111] p-8 border border-white/5 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                                <h3 className="text-sm font-black uppercase tracking-widest text-[#C6A76B] mb-4">Fully Fitted Price</h3>
                                <p className="text-[#BFBFBF]/60 text-sm leading-relaxed">
                                    The competitor’s quotation must be for the fully fitted price, which includes any extras like underlay and accessories as well.
                                </p>
                            </div>
                            <div className="bg-[#111111] p-8 border border-white/5 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                                <h3 className="text-sm font-black uppercase tracking-widest text-[#C6A76B] mb-4">Manufacturer Names</h3>
                                <p className="text-[#BFBFBF]/60 text-sm leading-relaxed">
                                    Providing us with the manufacturer product names or a sample will really help us to check if we have the exact same carpet within our collections.
                                </p>
                            </div>
                            <div className="bg-[#111111] p-8 border border-white/5 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                                <h3 className="text-sm font-black uppercase tracking-widest text-[#C6A76B] mb-4">14 Day Validity</h3>
                                <p className="text-[#BFBFBF]/60 text-sm leading-relaxed">
                                    The promise to beat any carpet quote is valid for 14 days after your order is confirmed.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing statement */}
                    <div className="text-center py-10">
                        <p className="text-[#BFBFBF] text-lg leading-relaxed max-w-2xl mx-auto italic">
                            "We believe that nothing should stand between you and your dream floor, which is why we also offer interest free credit, a free measuring and planning service, an uplift and removal service, and master fitting. Just relax and let us take care of everything!"
                        </p>
                    </div>

                    {/* Call to Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                           <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Book an Appointment</span>
                           <span className="text-2xl font-black uppercase">Store Visit</span>
                        </Link>
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                           <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Get a Quote</span>
                           <span className="text-2xl font-black uppercase">Expert Review</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricePromise;
