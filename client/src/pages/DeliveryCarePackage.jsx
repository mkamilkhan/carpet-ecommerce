import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiPackage } from 'react-icons/fi';

const DeliveryCarePackage = () => {
    const included = [
        "Preparing, packaging, and delivering your new flooring",
        "Removing a reasonable amount of empty furniture and replacing them afterwards",
        "A complimentary tidy-up to ensure you can enjoy your new flooring right away",
        "Removing any offcuts leftover from the installation (or keeping them if you prefer)",
        "8 weeks of storage from the point of order"
    ];

    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Delivery & Care Package</span>
                </div>

                <div className="space-y-16">
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Services</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            Delivery & Care Package
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            Buying new flooring from MFA Floors is a bit like being a kid in a sweet shop. You can pick from our selection of additional services to create a tailored quote that's unique to you. It's how we keep our prices low - there are no hidden costs built into the overall price of our flooring so you only pay for what you need.
                        </p>
                    </div>

                    {/* What's included */}
                    <div className="bg-[#111111] p-10 lg:p-16 border border-white/10 rounded-sm">
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-[#C6A76B] flex items-center gap-4">
                            <FiPackage /> What's Included?
                        </h2>
                        <div className="space-y-4">
                            {included.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-5 bg-[#0B0B0B] border border-white/5 rounded-sm">
                                    <FiCheckCircle className="text-[#C6A76B] shrink-0 mt-1" size={18} />
                                    <p className="text-[#BFBFBF] text-base leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-5 bg-[#C6A76B]/5 border border-[#C6A76B]/20 rounded-sm">
                            <p className="text-[#C6A76B] text-sm font-black uppercase tracking-widest">
                                Choosing our Delivery & Care package also qualifies you for the 10-year fitting guarantee!
                            </p>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#111111] p-10 border border-white/10 rounded-sm text-center">
                            <h3 className="text-sm font-black uppercase tracking-widest text-[#BFBFBF]/60 mb-4">Package Cost</h3>
                            <div className="text-6xl font-black text-[#C6A76B] mb-4">£39.99</div>
                            <p className="text-[#BFBFBF] text-sm">Anywhere in the UK, no matter how big your order</p>
                        </div>
                        <div className="bg-[#111111] p-10 border border-white/10 rounded-sm">
                            <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-white">Do I have to get this package?</h3>
                            <p className="text-[#BFBFBF] text-base leading-relaxed">
                                Not at all! We want to offer you the flexibility of choosing who installs your new flooring. If you're planning to fit the carpet yourself or making your own arrangements, there's no need to purchase our Delivery & Care package. You'll need to arrange collection or pay a delivery charge starting from £25.
                            </p>
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

export default DeliveryCarePackage;
