import React, { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight, FiCheck, FiShoppingBag, FiArrowRight } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SampleRedesignModal = ({ isOpen, onClose, product }) => {
    const { addToSamples, sampleItems, clearSamples } = useCart();
    const navigate = useNavigate();

    const [step, setStep] = useState(1); // 1: Color Selection, 2: Delivery Details
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        customerAddress: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    // Default colors if none provided
    const defaultColors = [
        { name: 'Tallow', hex: '#E5E1D8' },
        { name: 'Sandstone', hex: '#B7A99A' },
        { name: 'Driftwood', hex: '#8D7E71' },
        { name: 'Pebble', hex: '#5C544E' },
        { name: 'Onyx', hex: '#2D2926' }
    ];

    const colors = (product?.colors && product.colors.length > 0)
        ? product.colors.map((c, i) => ({ name: `Option ${i + 1}`, hex: c }))
        : defaultColors;

    const [currentIndex, setCurrentIndex] = useState(0);
    const selectedColor = colors[currentIndex];

    if (!isOpen || !product) return null;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % colors.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + colors.length) % colors.length);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitSampleRequest = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const items = [{
                productId: product._id,
                productName: product.name,
                selectedColor: selectedColor.hex
            }];

            await axios.post('/api/samples', { ...formData, items });
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setStep(1);
                setFormData({ customerName: '', customerEmail: '', customerPhone: '', customerAddress: '' });
            }, 3000);
        } catch (error) {
            console.error(error);
            alert('Failed to submit request');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md">
            <div className="bg-white rounded-sm w-full max-w-xl overflow-hidden shadow-2xl relative animate-reveal-up text-black">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-black/40 hover:text-black transition-colors z-[210]"
                >
                    <FiX size={28} />
                </button>

                {step === 1 ? (
                    <>
                        {/* Header as per screenshot */}
                        <div className="pt-10 pb-6 text-center border-b border-black/5">
                            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none mb-2">Samples</h2>
                            <p className="text-[12px] font-bold text-black/40 uppercase tracking-widest leading-none">
                                {colors.length} colours available
                            </p>
                        </div>

                        {/* Texture Display Area */}
                        <div className="relative aspect-[16/9] bg-[#F5F5F5] group">
                            <div
                                className="absolute inset-0 transition-all duration-700 ease-in-out"
                                style={{
                                    backgroundColor: selectedColor.hex,
                                    backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')`,
                                    backgroundBlendMode: 'multiply'
                                }}
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/90 text-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-sm"
                            >
                                <FiChevronLeft size={32} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/90 text-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-sm"
                            >
                                <FiChevronRight size={32} />
                            </button>

                            {/* Dot indicators */}
                            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                                {colors.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Footer / Actions */}
                        <div className="p-8 text-center space-y-6">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter text-[#1A1A1A]">{selectedColor.name}</h3>
                                <div className="flex justify-center gap-2 mt-2">
                                    <span className="text-[9px] font-black uppercase bg-black text-white px-2 py-0.5 rounded-full">{selectedColor.hex}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full bg-[#405161] text-white hover:bg-[#2A3540] py-5 px-8 rounded-sm font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl active:scale-95"
                                >
                                    Select this colour
                                </button>

                                <button
                                    className="w-full bg-[#FFBC3F] hover:bg-[#E5A939] text-[#2D2926] py-5 px-8 rounded-sm font-black text-[11px] uppercase tracking-[0.3em] transition-all shadow-xl flex items-center justify-center gap-4 active:scale-95"
                                >
                                    Visualise this in your room <FiArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="p-10 md:p-12 animate-fade-in">
                        {success ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FiCheck size={32} />
                                </div>
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-[#1A1A1A]">Request Sent!</h3>
                                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest text-center">Your sample will reach you in 48 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={submitSampleRequest} className="space-y-6">
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="text-[10px] font-black uppercase text-[#CB9F3B] mb-4 flex items-center gap-2"
                                    >
                                        <FiChevronLeft /> Back to selection
                                    </button>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none mb-2">Delivery Details</h3>
                                    <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">
                                        You selected: <span className="text-[#CB9F3B]">{selectedColor.name}</span>
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        name="customerName"
                                        required
                                        placeholder="FULL NAME"
                                        value={formData.customerName}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#F5F5F5] border border-black/5 rounded-sm py-4 px-6 text-[11px] font-bold tracking-widest text-[#1A1A1A] placeholder:text-black/20 outline-none uppercase transition-all"
                                    />
                                    <input
                                        type="email"
                                        name="customerEmail"
                                        required
                                        placeholder="EMAIL ADDRESS"
                                        value={formData.customerEmail}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#F5F5F5] border border-black/5 rounded-sm py-4 px-6 text-[11px] font-bold tracking-widest text-[#1A1A1A] placeholder:text-black/20 outline-none uppercase transition-all"
                                    />
                                    <input
                                        type="tel"
                                        name="customerPhone"
                                        placeholder="PHONE NUMBER"
                                        value={formData.customerPhone}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#F5F5F5] border border-black/5 rounded-sm py-4 px-6 text-[11px] font-bold tracking-widest text-[#1A1A1A] placeholder:text-black/20 outline-none uppercase transition-all"
                                    />
                                    <textarea
                                        name="customerAddress"
                                        required
                                        placeholder="FULL DELIVERY ADDRESS"
                                        value={formData.customerAddress}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full bg-[#F5F5F5] border border-black/5 rounded-sm py-4 px-6 text-[11px] font-bold tracking-widest text-[#1A1A1A] placeholder:text-black/20 outline-none uppercase transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full bg-[#1A1A1A] text-white py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl active:scale-95 disabled:opacity-50"
                                >
                                    {submitting ? 'Submitting...' : 'Complete My Request'}
                                </button>
                            </form>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SampleRedesignModal;
