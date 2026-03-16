import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiArrowRight, FiInfo, FiTruck, FiBox, FiMessageSquare, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Samples = () => {
    const { sampleItems, removeFromSamples, clearSamples } = useCart();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        customerAddress: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleWhatsAppHelp = () => {
        const message = "Hi, I have some samples in my portfolio and I'd like some help choosing the right one.";
        window.open(`https://wa.me/442088080088?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitSampleRequest = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const items = sampleItems.map(item => ({
                productId: item._id,
                productName: item.name,
                selectedColor: item.selectedColor
            }));

            await axios.post('/api/samples', { ...formData, items });
            setSuccess(true);
            setTimeout(() => {
                clearSamples();
                setIsModalOpen(false);
                setSuccess(false);
                navigate('/');
            }, 3000);
        } catch (error) {
            console.error(error);
            alert('Failed to submit request');
        } finally {
            setLoading(false);
        }
    };

    if (sampleItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex flex-col items-center justify-center text-white px-6 pt-20">
                <div className="w-24 h-24 bg-[#111111] border border-white/5 rounded-full flex items-center justify-center mb-12">
                    <FiBox size={32} className="text-[#C6A76B]/40" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-center">
                    Sample Portfolio <br />
                    <span className="text-white/10 uppercase italic">is Empty.</span>
                </h2>
                <p className="text-[#BFBFBF] font-black uppercase tracking-[0.4em] text-[10px] mb-12 max-w-sm text-center opacity-60">
                    Select up to 3 complimentary artisan carpet swatches from our latest private collection.
                </p>
                <Link to="/collection" className="bg-[#C6A76B] text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.5em] text-[11px] transition-all shadow-2xl flex items-center gap-4 active:scale-95">
                    Browse Collection <FiArrowRight size={18} />
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white pb-40">
            {/* HERO SECTION */}
            <section className="relative h-[45vh] flex items-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1920"
                        alt="Sample Portfolio"
                        className="w-full h-full object-cover opacity-10 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#C6A76B]/90 via-[#0B0B0B]/95 to-[#0B0B0B]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-[#C6A76B] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A76B] animate-pulse" />
                            Complimentary Selection
                        </span>
                        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Artisan <br />
                            <span className="text-[#C6A76B] italic font-serif leading-none">Swatches.</span>
                        </h1>
                    </div>

                    <div className="bg-[#111111] p-10 rounded-sm shadow-2xl border border-white/5 flex flex-col items-center gap-4 min-w-[280px]">
                        <div className="flex items-baseline gap-2">
                            <span className="text-6xl font-black text-[#C6A76B] leading-none tracking-tighter">{sampleItems.length}</span>
                            <span className="text-2xl font-black text-white/10 uppercase tracking-tighter">/ 3</span>
                        </div>
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em]">Reserved Slots</span>
                        <div className="w-full h-1 bg-[#0B0B0B] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#C6A76B] transition-all duration-1000 shadow-[0_0_15px_rgba(198,167,107,0.5)]"
                                style={{ width: `${(sampleItems.length / 3) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LIST */}
                    <div className="lg:col-span-8 space-y-6">
                        {sampleItems.map((item, idx) => (
                            <div
                                key={`${item._id}-${item.selectedColor}`}
                                className="group bg-[#111111] rounded-sm border border-white/5 shadow-2xl flex flex-col md:flex-row overflow-hidden hover:border-[#C6A76B]/20 transition-all duration-700"
                            >
                                <div className="md:w-[30%] aspect-[4/3] md:aspect-auto relative overflow-hidden bg-[#0B0B0B] border-r border-white/5">
                                    <div
                                        className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
                                        style={{
                                            backgroundColor: item.selectedColor,
                                            backgroundImage: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')`,
                                            backgroundBlendMode: 'overlay'
                                        }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 via-transparent to-transparent"></div>
                                </div>

                                <div className="p-10 flex-grow flex flex-col relative">
                                    <button
                                        onClick={() => removeFromSamples(item._id, item.selectedColor)}
                                        className="absolute top-8 right-8 w-12 h-12 bg-white/5 text-white/10 rounded-sm hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center border border-white/5"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>

                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-[#C6A76B] text-[9px] font-black uppercase tracking-[0.4em]">
                                            {item.type}
                                        </span>
                                        <span className="text-white/10 text-[9px] font-black uppercase tracking-[0.4em] italic">Artisan '26</span>
                                    </div>

                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-none">{item.name}</h3>

                                    {/* Color Options - Only show for Carpets */}
                                    {item.type?.trim().toLowerCase() === 'carpets' && (
                                        <div className="flex gap-2 mb-8">
                                            {(item.colors && item.colors.length > 0 ? item.colors : ['#E5E1D8', '#B7A99A', '#8D7E71', '#5C544E', '#2D2926']).slice(0, 5).map((color, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-8 h-8 rounded border border-white/10 shadow-sm ${item.selectedColor === color ? 'ring-2 ring-[#C6A76B] ring-offset-2 ring-offset-[#111111]' : ''}`}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center gap-6 mb-8">
                                        <div className="w-8 h-8 rounded-sm shadow-xl border border-white/10" style={{ backgroundColor: item.selectedColor }}></div>
                                        <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Selected Ref: {item.selectedColor}</span>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                                        <button
                                            onClick={() => navigate(`/product/${item._id}`)}
                                            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C6A76B] hover:translate-x-3 transition-all flex items-center gap-4"
                                        >
                                            View Piece <FiArrowRight size={16} />
                                        </button>
                                        <div className="flex items-center gap-3 text-white/20">
                                            <FiTruck size={14} />
                                            <span className="text-[9px] font-black uppercase tracking-widest leading-none">Dispatched from London</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
                        <div className="bg-[#111111] rounded-sm p-12 shadow-2xl border border-white/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C6A76B]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-sm flex items-center justify-center text-[#C6A76B]">
                                        <FiTruck size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-1">Logistics</p>
                                        <h4 className="text-2xl font-black uppercase tracking-tighter leading-none">Swift Delivery.</h4>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-12 border-y border-white/5 py-10">
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
                                        <span className="text-white/40">Item Total</span>
                                        <span className="text-white italic">Complimentary</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em]">
                                        <span className="text-white/40">Courier</span>
                                        <span className="text-emerald-500 italic uppercase">Included</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-6 text-[#C6A76B]">
                                        <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em]">Payable</span>
                                        <span className="text-5xl font-black tracking-tighter leading-none italic">£0.00</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full bg-[#C6A76B] hover:bg-[#b0945d] text-white py-6 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-6">
                                    Confirm Request <FiArrowRight size={20} />
                                </button>

                                <p className="text-center text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mt-8 italic">
                                    Arrival in 48-72 Hours.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#111111] rounded-sm p-10 border border-white/5 shadow-2xl flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-white/5 rounded-sm flex items-center justify-center text-[#C6A76B] mb-8 border border-white/5">
                                <FiMessageSquare size={24} />
                            </div>
                            <h5 className="text-xl font-black uppercase tracking-tighter mb-4 italic">Design Consultation</h5>
                            <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest leading-loose mb-10">
                                Our design artisans are available to help refine your choice on WhatsApp.
                            </p>
                            <button
                                onClick={handleWhatsAppHelp}
                                className="w-full bg-[#0B0B0B] hover:bg-white/5 text-[#C6A76B] py-5 rounded-sm font-black text-[10px] uppercase tracking-[0.4em] transition-all border border-[#C6A76B]/20 flex items-center justify-center gap-4"
                            >
                                <FaWhatsapp size={16} /> Chat with Artisan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#111111] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl w-full max-w-lg relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                        >
                            <FiX size={24} />
                        </button>

                        {success ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiBox size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Request Confirmed</h3>
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Your artisan samples are being prepared.</p>
                            </div>
                        ) : (
                            <form onSubmit={submitSampleRequest} className="space-y-6">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Delivery <span className="text-[#C6A76B]">Details.</span></h3>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="customerName"
                                        required
                                        placeholder="FULL NAME"
                                        value={formData.customerName}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/40 border border-white/5 rounded-sm py-4 px-6 text-[10px] font-black tracking-widest text-white placeholder:text-white/20 focus:border-[#C6A76B]/50 outline-none uppercase transition-all"
                                    />
                                    <input
                                        type="email"
                                        name="customerEmail"
                                        required
                                        placeholder="EMAIL ADDRESS"
                                        value={formData.customerEmail}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/40 border border-white/5 rounded-sm py-4 px-6 text-[10px] font-black tracking-widest text-white placeholder:text-white/20 focus:border-[#C6A76B]/50 outline-none uppercase transition-all"
                                    />
                                    <input
                                        type="tel"
                                        name="customerPhone"
                                        placeholder="PHONE NUMBER (OPTIONAL)"
                                        value={formData.customerPhone}
                                        onChange={handleInputChange}
                                        className="w-full bg-black/40 border border-white/5 rounded-sm py-4 px-6 text-[10px] font-black tracking-widest text-white placeholder:text-white/20 focus:border-[#C6A76B]/50 outline-none uppercase transition-all"
                                    />
                                    <textarea
                                        name="customerAddress"
                                        required
                                        placeholder="FULL DELIVERY ADDRESS"
                                        value={formData.customerAddress}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full bg-black/40 border border-white/5 rounded-sm py-4 px-6 text-[10px] font-black tracking-widest text-white placeholder:text-white/20 focus:border-[#C6A76B]/50 outline-none uppercase transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#C6A76B] hover:bg-[#b0945d] disabled:bg-[#C6A76B]/50 text-white py-5 mt-4 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] transition-all shadow-xl active:scale-95"
                                >
                                    {loading ? 'Processing...' : 'Complete Request'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Samples;
