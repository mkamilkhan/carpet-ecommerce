import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const TenYearGuarantee = () => {
    const conditions = [
        "Carpet, underlay, and accessories must all be from MFA Floors and installed by a professional fitter we arranged",
        "Your carpet must stay in the original location and not be moved or tampered with",
        "Your flooring should be used only according to our recommendations",
        "Please keep your receipt for proof of purchase (shows invoice date)"
    ];

    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">10-Year Fitting Guarantee</span>
                </div>

                <div className="space-y-16">
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Guarantees</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            10-Year Fitting Guarantee
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            A lot can change in a decade. Smaller, faster, and better technology. Different (and questionable) fashion trends. Maybe even your job and your home. But aside from the expected daily wear and tear, what shouldn't change too much is your carpet. Therefore, we're delighted to offer a 10-year fitting guarantee on all carpets purchased from MFA Floors with fitting arranged by us. If it's not a perfect fit, we'll arrange to fix it!
                        </p>
                    </div>

                    <div className="bg-[#111111] p-10 lg:p-16 border border-white/10 rounded-sm">
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-[#C6A76B]">What does a 10-year fitting guarantee mean?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-10">
                            When your carpet, accessories and underlay are all purchased from us and fitting has been arranged by us, you'll qualify for our 10-year fitting guarantee. Hurrah! This means that should you encounter any issues with the installation within 10 years from the date on your invoice, we'll arrange for them to be fixed free of charge.
                        </p>
                        <p className="text-[#BFBFBF] text-base mb-8 font-bold uppercase tracking-widest">There are a few things to remember to ensure your guarantee remains valid:</p>
                        <div className="space-y-4">
                            {conditions.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 bg-[#0B0B0B] p-5 border border-white/5 rounded-sm">
                                    <FiCheckCircle className="text-[#C6A76B] shrink-0 mt-1" size={18} />
                                    <p className="text-[#BFBFBF] text-base leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#111111] p-8 border-l-4 border-yellow-500/60 rounded-sm flex gap-4">
                        <FiAlertCircle className="text-yellow-500/60 shrink-0 mt-1" size={20} />
                        <p className="text-[#BFBFBF]/70 text-sm leading-relaxed italic">
                            Please note this guarantee relates to fitting issues only; for any wear issues, check the product warranty for details. For more information about our 10-year fitting guarantee, talk to a member of the MFA Floors team in-store.
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

export default TenYearGuarantee;
