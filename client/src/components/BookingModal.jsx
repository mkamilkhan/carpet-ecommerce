import React, { useState } from 'react';
import { FiX, FiHome, FiCheck } from 'react-icons/fi';
import { FaStore } from 'react-icons/fa';

const BookingModal = ({ isOpen, onClose }) => {
    const [view, setView] = useState('selection'); // 'selection', 'homeForm'

    if (!isOpen) return null;

    const handleClose = () => {
        onClose();
        setTimeout(() => setView('selection'), 300); // reset after close animation
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>

            <div className="relative bg-[#0F0F0F] border border-white/10 w-full max-w-[1000px] rounded-sm shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-fade-in flex flex-col max-h-[95vh]">
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 text-white/40 hover:text-[#C6A76B] transition-colors z-20"
                >
                    <FiX size={24} />
                </button>

                <div className="overflow-y-auto custom-scrollbar flex-1 p-8 lg:p-14">
                    {/* SELECTION VIEW */}
                    {view === 'selection' && (
                        <div className="flex flex-col items-center">
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Concierge Service</span>
                            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">Book an appointment</h2>
                            <p className="text-white/40 text-xs tracking-widest uppercase mb-12 text-center max-w-lg">
                                Smart ways to shop with MFA Floors. Select a convenient appointment model.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-center">
                                {/* AT HOME */}
                                <div className="bg-[#111111] group hover:bg-[#161616] transition-colors rounded-sm overflow-hidden flex flex-col border border-white/5 hover:border-[#C6A76B]/30 relative">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C6A76B] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                                    <div className="p-10 flex flex-col items-center flex-1">
                                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#C6A76B]">
                                            <FiHome size={28} />
                                        </div>
                                        <h3 className="font-black text-xl text-white uppercase tracking-wider mb-2">Free Home Visit</h3>
                                        <div className="text-[#C6A76B] text-[10px] font-black uppercase tracking-widest mb-6">
                                            Signature At-Home Experience
                                        </div>

                                        <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
                                            Our flooring artisan will help you find your dream floor in the comfort of your own home.
                                        </p>

                                        <div className="text-xl font-black text-white tracking-[0.2em] mb-8 border-b border-white/10 pb-4 w-full">FREE</div>

                                        <button
                                            onClick={() => setView('homeForm')}
                                            className="w-full bg-[#C6A76B] hover:bg-[#b0945d] text-white text-[11px] font-black uppercase tracking-[0.2em] py-5 rounded-sm transition-all mb-8 shadow-xl"
                                        >
                                            Book Home Visit
                                        </button>

                                        <ul className="text-left text-xs uppercase tracking-wider text-white/50 space-y-4 w-full mb-8 font-bold">
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> Request a visit online</li>
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> We'll curate a convenient time</li>
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> Mobile selection library brought to you</li>
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> Browse in your architectural lighting</li>
                                        </ul>
                                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-auto">
                                            Available 7-days. Approx. 90 minutes.
                                        </p>
                                    </div>
                                </div>

                                {/* IN STORE */}
                                <div className="bg-[#111111] group hover:bg-[#161616] transition-colors rounded-sm overflow-hidden flex flex-col border border-white/5 hover:border-[#C6A76B]/30 relative">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C6A76B] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                                    <div className="p-10 flex flex-col items-center flex-1">
                                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#C6A76B]">
                                            <FaStore size={26} />
                                        </div>
                                        <h3 className="font-black text-xl text-white uppercase tracking-wider mb-2">Showroom Visit</h3>
                                        <div className="text-[#C6A76B] text-[10px] font-black uppercase tracking-widest mb-6">
                                            Private In-Store Consultation
                                        </div>

                                        <p className="text-white/60 text-sm leading-relaxed mb-6 font-medium">
                                            Reserve exclusive time with our flooring artisans to review thousands of premium samples.
                                        </p>

                                        <div className="text-xl font-black text-white tracking-[0.2em] mb-8 border-b border-white/10 pb-4 w-full">FREE</div>

                                        <button
                                            className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 text-[11px] font-black uppercase tracking-[0.2em] py-5 rounded-sm transition-all mb-8 shadow-sm"
                                        >
                                            Book Showroom Visit
                                        </button>

                                        <ul className="text-left text-xs uppercase tracking-wider text-white/50 space-y-4 w-full mb-8 font-bold">
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> Reserve private access online</li>
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> Bespoke tailoring & project advice</li>
                                            <li className="flex items-start gap-4"><span className="text-[#C6A76B] mt-0.5">■</span> Instant processing & fitting arrangements</li>
                                        </ul>
                                        <p className="text-[10px] text-white/30 uppercase tracking-widest mt-auto">
                                            Available 7-days. Approx. 45 minutes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* HOME FORM VIEW */}
                    {view === 'homeForm' && (
                        <div className="max-w-[700px] mx-auto bg-[#111111] p-10 lg:p-14  rounded-sm  relative">
                            <button
                                onClick={() => setView('selection')}
                                className="absolute top-10 left-10 text-white/40 hover:text-[#C6A76B] text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-2"
                            >
                                ← Back
                            </button>

                            <div className="text-center mb-12 mt-8">
                                <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Concierge Intake</span>
                                <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tighter mb-4">Book a Home Visit</h2>
                                <p className="text-white/40 text-xs tracking-widest uppercase mb-12 max-w-lg mx-auto">
                                    Our master fitter will bring the gallery directly to your residence.
                                </p>
                            </div>

                            <div className="space-y-6 mb-12">
                                <div className="flex gap-6 items-center p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                                    <div className="w-10 h-10 rounded-full border border-[#C6A76B]/30 bg-[#C6A76B]/10 flex items-center justify-center shrink-0 text-[#C6A76B]">
                                        <FiCheck size={16} />
                                    </div>
                                    <p className="text-white/70 text-sm tracking-wide leading-relaxed">Exclusive collection portfolio delivered to your foyer for ambient selection.</p>
                                </div>
                                <div className="flex gap-6 items-center p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                                    <div className="w-10 h-10 rounded-full border border-[#C6A76B]/30 bg-[#C6A76B]/10 flex items-center justify-center shrink-0 text-[#C6A76B]">
                                        <FiCheck size={16} />
                                    </div>
                                    <p className="text-white/70 text-sm tracking-wide leading-relaxed">Laser-accurate spacial measurements and professional architectural advice.</p>
                                </div>
                                <div className="flex gap-6 items-center p-6 bg-white/[0.02] border border-white/5 rounded-sm">
                                    <div className="w-10 h-10 rounded-full border border-[#C6A76B]/30 bg-[#C6A76B]/10 flex items-center justify-center shrink-0 text-[#C6A76B]">
                                        <FiCheck size={16} />
                                    </div>
                                    <p className="text-white/70 text-sm tracking-wide leading-relaxed">Immediate, transparent pricing generated with zero obligations.</p>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-12">
                                <h3 className="font-black text-white uppercase tracking-wider text-xl mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-[#C6A76B] inline-block"></span>
                                    Client Credentials
                                    <span className="flex-1 h-[1px] bg-white/5 inline-block"></span>
                                </h3>

                                <form onSubmit={(e) => { e.preventDefault(); handleClose(); }} className="space-y-8">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                                            Electronic Mail <span className="text-[#C6A76B]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Enter your premium email address..."
                                            className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-white outline-none focus:border-[#C6A76B]/50 focus:bg-white/10 transition-all placeholder:text-white/20 tracking-wide text-sm"
                                        />
                                    </div>

                                    <div className="pt-6">
                                        <button type="submit" className="w-full bg-[#C6A76B] hover:bg-[#b0945d] text-white font-black text-[11px] uppercase tracking-[0.3em] py-5 rounded-sm transition-all shadow-[0_0_30px_rgba(198,167,107,0.2)]">
                                            Begin Consultation Process
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
