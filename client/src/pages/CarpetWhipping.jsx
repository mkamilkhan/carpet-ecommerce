import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const CarpetWhipping = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Carpet Whipping</span>
                </div>

                <div className="space-y-16">
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Services</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            Carpet Whipping
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            If you need a specific sized rug but can't find what you're looking for, you've come to the right place! With our carpet whipping service, we can make any carpet from our collection into a beautiful bespoke rug or stair runner. Whatever size or shape of rug you need, just let us know and we'll whip it into shape!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#111111] p-10 border border-white/10 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                            <h2 className="text-xl font-black uppercase tracking-tight mb-4 text-[#C6A76B]">What is carpet whipping?</h2>
                            <p className="text-[#BFBFBF] text-base leading-relaxed">
                                Carpet whipping is a specialist skill that involves overlocking the edge of the carpet with yarn for a highly professional finish. We also offer carpet binding, where the edge of the cut carpet is taped with a single, double, or piped border for a more contemporary look. The tape comes in a variety of materials such as cotton, linen, and faux leather in a range of colours to match your décor.
                            </p>
                        </div>
                        <div className="bg-[#111111] p-10 border border-white/10 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                            <h2 className="text-xl font-black uppercase tracking-tight mb-4 text-[#C6A76B]">Can I use offcuts to make a rug?</h2>
                            <p className="text-[#BFBFBF] text-base leading-relaxed mb-4">
                                This is a great idea to make sure your offcuts don't go to waste! Carpet whipping is a cost effective and eco-friendly way to use off cuts from your new carpet to make matching protective entrance mats.
                            </p>
                            <p className="text-[#BFBFBF] text-base leading-relaxed">
                                For more information about our carpet whipping service, ask your local MFA Floors store for details.
                            </p>
                        </div>
                    </div>

                    <div className="relative rounded-sm overflow-hidden border border-white/10 h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1620641788421-7a1c34a6a43d?auto=format&fit=crop&q=80&w=1200"
                            alt="Carpet Whipping"
                            className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-4xl font-black uppercase tracking-tighter text-white">Bespoke Rugs &</p>
                                <p className="text-4xl font-black uppercase tracking-tighter text-[#C6A76B]">Stair Runners</p>
                            </div>
                        </div>
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

export default CarpetWhipping;
