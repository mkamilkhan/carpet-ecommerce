import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiShield, FiCheckCircle } from 'react-icons/fi';

const WearGuarantee = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Flooring Guarantees</span>
                </div>

                <div className="space-y-16">
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Services</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            Flooring Guarantees
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed font-medium">
                            Most MFA Floors carpets come with a free manufacturers' threadbare guarantee, which promises that your carpet will not wear out within a certain amount of time, so you can be rest assured the warranty has you (and your floor) covered for a long time to come - often as many as 10 or 15 years. That's extra peace of mind so you can put your feet up and relax.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#111111] p-10 border border-white/10 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                            <FiShield className="text-[#C6A76B] mb-4" size={32} />
                            <h2 className="text-xl font-black uppercase tracking-tight mb-4 text-white">How long is the guarantee?</h2>
                            <p className="text-[#BFBFBF] text-base leading-relaxed">
                                The length of the guarantee varies from carpet to carpet as each one is different. It depends what material the floor is made from, how it's constructed, and its unique properties, before they calculate how long a floor will last before it's worn out.
                            </p>
                        </div>
                        <div className="bg-[#111111] p-10 border border-white/10 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                            <FiCheckCircle className="text-[#C6A76B] mb-4" size={32} />
                            <h2 className="text-xl font-black uppercase tracking-tight mb-4 text-white">What's covered?</h2>
                            <p className="text-[#BFBFBF] text-base leading-relaxed">
                                Normal wear and tear is covered - like carpet pile flattening in busy areas. However, stains, scratches, scrapes and marks are not covered by the guarantee. Regular cleaning will help to keep your carpet looking its best.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#111111] p-10 border-l-4 border-[#C6A76B] rounded-sm">
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-4">
                            Over time the appearance of your carpet may deteriorate depending on how you use it and this will vary from home to home. If you're not entirely satisfied, please return to the MFA Floors store you purchased your flooring from with your invoice and receipt, and we'll visit your home to assess the condition of your floor.
                        </p>
                        <p className="text-[#C6A76B] font-black uppercase tracking-widest text-sm">
                            We also have wear guarantees on laminate, vinyl and LVT too!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                            <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Book an Appointment</span>
                            <span className="text-2xl font-black uppercase">Store Visit</span>
                        </Link>
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                            <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Book a Free</span>
                            <span className="text-2xl font-black uppercase">Home Visit</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WearGuarantee;
