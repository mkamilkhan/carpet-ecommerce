import React from 'react';
import { useCart } from '../context/CartContext';
import { getImageUrl } from '../utils/imagePath';
import { FiTrash2, FiShoppingBag, FiArrowRight, FiCheck } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (cartItems.length === 0) return;

        try {
            for (const item of cartItems) {
                await axios.post('/api/orders', {
                    customerName: 'Guest Client',
                    productName: item.name,
                    amount: item.price * (item.quantity || 1),
                    daysAgo: 'just now',
                    status: 'Pending'
                });
            }
            alert('Your inquiry has been placed successfully. An artisan will contact you.');
            clearCart();
            navigate('/');
        } catch (err) {
            console.error('Checkout error:', err);
            alert('Failed to process selection.');
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex flex-col items-center justify-center text-white px-6 pt-20">
                <div className="w-24 h-24 bg-[#111111] border border-white/5 rounded-full flex items-center justify-center mb-12">
                    <FiShoppingBag size={32} className="text-[#C6A76B]/40" />
                </div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none text-center">
                    Your Portfolio <br />
                    <span className="text-white/10 uppercase italic">is Empty.</span>
                </h2>
                <p className="text-[#BFBFBF] font-black uppercase tracking-[0.4em] text-[10px] mb-12 max-w-sm text-center opacity-60">
                    Begin your collection of architectural-grade flooring by visiting our latest masterworks.
                </p>
                <Link to="/collection" className="bg-[#C6A76B] text-white px-12 py-6 rounded-sm font-black uppercase tracking-[0.5em] text-[11px] shadow-2xl transition-all active:scale-95 flex items-center gap-4">
                    Explore Collection <FiArrowRight size={18} />
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
                        src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920"
                        alt="Luxury Flooring Portfolio"
                        className="w-full h-full object-cover opacity-10 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#C6A76B]/90 via-[#0B0B0B]/95 to-[#0B0B0B]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full lg:px-12">
                    <span className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-[#C6A76B] px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.5em] mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A76B] animate-pulse" />
                        Curated Selections
                    </span>
                    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        Your <br />
                        <span className="text-[#C6A76B] italic font-serif leading-none">Portfolio.</span>
                    </h1>
                </div>
            </section>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LIST */}
                    <div className="lg:col-span-8 space-y-6">
                        {cartItems.map((item) => (
                            <div
                                key={item._id}
                                className="group flex flex-col md:flex-row gap-8 p-8 bg-[#111111] rounded-sm border border-white/5 shadow-2xl items-center transition-all duration-700 hover:border-[#C6A76B]/20"
                            >
                                <div className="w-full md:w-48 h-48 rounded-sm overflow-hidden border border-white/5 bg-[#0B0B0B]">
                                    <img src={getImageUrl(item.image)} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                        <span className="text-[#C6A76B] text-[9px] font-black uppercase tracking-[0.4em]">
                                            {item.type}
                                        </span>
                                        <span className="text-white/10 text-[9px] font-black uppercase tracking-[0.4em] italic leading-none">Artisan Series</span>
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">{item.name}</h3>

                                    {/* Color Options - Only show for Carpets */}
                                    {item.type?.trim().toLowerCase() === 'carpets' && (
                                        <div className="flex gap-2 mb-6">
                                            {(item.colors && item.colors.length > 0 ? item.colors : ['#E5E1D8', '#B7A99A', '#8D7E71', '#5C544E', '#2D2926']).slice(0, 5).map((color, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-8 h-8 rounded border border-white/10 shadow-sm ${item.selectedColor === color ? 'ring-2 ring-[#C6A76B] ring-offset-2 ring-offset-[#111111]' : ''}`}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="flex items-center justify-center md:justify-start gap-6 mb-2">
                                        <p className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-none">Valuation: <span className="text-white font-black">£{item.price}</span> / m²</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item._id)}
                                    className="w-12 h-12 bg-white/5 text-white/20 rounded-sm hover:bg-rose-500 hover:text-white transition-all flex items-center justify-center border border-white/5 active:scale-90"
                                >
                                    <FiTrash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <div className="bg-[#111111] p-12 rounded-sm shadow-2xl border border-white/5 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C6A76B]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-10 border-b border-white/5 pb-8">Valuation Summary</h3>

                            <div className="space-y-6 mb-12">
                                <div className="flex justify-between items-center">
                                    <span className="text-white/30 font-black uppercase text-[10px] tracking-[0.4em]">Sub-total</span>
                                    <span className="text-white font-black text-xl tracking-tighter leading-none">£{cartTotal}.00</span>
                                </div>
                                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                                    <span className="text-white/30 font-black uppercase text-[10px] tracking-[0.4em]">Fitting</span>
                                    <span className="text-[#C6A76B] font-black text-[10px] uppercase tracking-[0.4em]">To be Quoted</span>
                                </div>
                            </div>

                            <div className="mb-12">
                                <p className="text-white/10 font-black uppercase text-[10px] tracking-[0.6em] mb-4 text-center">Estimated Total</p>
                                <p className="text-6xl font-black text-[#C6A76B] tracking-tighter leading-none text-center">£{cartTotal}</p>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="w-full bg-[#C6A76B] hover:bg-[#b0945d] text-white py-6 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-6"
                            >
                                Secure Inquiry <FiArrowRight size={20} />
                            </button>

                            <div className="mt-12 space-y-4">
                                <div className="flex items-center gap-3 text-white/40">
                                    <FiCheck className="text-[#C6A76B]" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Master Installation Advice</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/40">
                                    <FiCheck className="text-[#C6A76B]" />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Bespoke Color Matching</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
