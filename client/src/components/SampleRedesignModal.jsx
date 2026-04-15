import React, { useState } from 'react';
import { FiX, FiCheck, FiChevronLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';

const SampleRedesignModal = ({ isOpen, onClose, product }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        customerAddress: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const defaultColors = [
        { name: 'Tallow', hex: '#E5E1D8' },
        { name: 'Sandstone', hex: '#B7A99A' },
        { name: 'Driftwood', hex: '#8D7E71' },
        { name: 'Pebble', hex: '#5C544E' },
        { name: 'Onyx', hex: '#2D2926' },
        { name: 'Slate', hex: '#373A40' }
    ];

    const colors = (product?.colors && product.colors.length > 0)
        ? product.colors.map((c, i) => ({ name: `Option ${i + 1}`, hex: c }))
        : defaultColors;

    const [selectedColors, setSelectedColors] = useState([]);
    const [previewColor, setPreviewColor] = useState(colors[0]);

    if (!isOpen || !product) return null;

    const toggleColor = (color) => {
        setPreviewColor(color);
        if (selectedColors.some(c => c.hex === color.hex)) {
            setSelectedColors(selectedColors.filter(c => c.hex !== color.hex));
        } else {
            if (selectedColors.length < 3) {
                setSelectedColors([...selectedColors, color]);
            }
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitSampleRequest = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const items = selectedColors.length > 0 ? selectedColors.map(color => ({
                productId: product._id,
                productName: product.name,
                selectedColor: color.hex
            })) : [{
                productId: product._id,
                productName: product.name,
                selectedColor: 'Standard'
            }];

            await axios.post('/api/samples', { ...formData, items });
            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setStep(1);
                setSelectedColors([]);
                setFormData({ customerName: '', customerEmail: '', customerPhone: '', customerAddress: '' });
            }, 3000);
        } catch (error) {
            console.error(error);
            alert('Failed to submit request');
        } finally {
            setSubmitting(false);
        }
    };

    const handleWhatsApp = () => {
        const url = `https://wa.me/442088080088?text=Hello, I would like to order samples for ${product.name}. Selected colors: ${selectedColors.map(c => c.name).join(', ')}`;
        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md overflow-y-auto py-10">
            <div className="bg-[#111111] border border-[#C6A76B]/30 rounded-xl w-full max-w-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative animate-reveal-up text-white my-auto">
                
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors z-[210] hover:bg-white/10 rounded-full"
                >
                    <FiX size={24} />
                </button>

                {step === 1 ? (
                    <div className="p-8 md:p-12">
                        <div className="text-center mb-6">
                            <span className="text-[#C6A76B] text-[10px] uppercase font-black tracking-[0.3em] mb-3 block">Complimentary Service</span>
                            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none mb-4">Request Samples</h2>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-md mx-auto">
                                Select up to 3 finishes to experience the quality in your own space.
                            </p>
                        </div>

                        {/* Large Preview Box */}
                        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden border-2 border-white/10 mb-8 transition-colors duration-500 shadow-inner group">
                            <div 
                                className="absolute inset-0 transition-all duration-500"
                                style={{ 
                                    backgroundColor: previewColor.hex,
                                    backgroundImage: `url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')`,
                                    backgroundBlendMode: 'multiply'
                                }}
                            />
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-sm pointer-events-none">
                                <span className="text-white font-black uppercase tracking-widest text-[11px] block">{previewColor.name}</span>
                                <span className="text-[#C6A76B] font-bold text-[9px] uppercase tracking-widest">{previewColor.hex}</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-8">
                            {colors.map((color, i) => {
                                const isSelected = selectedColors.some(c => c.hex === color.hex);
                                return (
                                    <button
                                        key={i}
                                        onClick={() => toggleColor(color)}
                                        onMouseEnter={() => setPreviewColor(color)}
                                        className={`relative group rounded-lg overflow-hidden border-2 transition-all aspect-square flex flex-col items-center justify-end pb-3 hover:-translate-y-1 ${
                                            isSelected ? 'border-[#C6A76B] shadow-[0_0_15px_rgba(198,167,107,0.4)]' : 'border-white/10 hover:border-white/30'
                                        }`}
                                        style={{ backgroundColor: color.hex }}
                                    >
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors opacity-0 group-hover:opacity-100" />
                                        {isSelected && (
                                            <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1 border border-[#C6A76B]">
                                                <FiCheck size={12} className="text-[#C6A76B]" />
                                            </div>
                                        )}
                                        <span className="text-[9px] font-black uppercase text-white tracking-widest bg-black/60 px-2 py-1 rounded-sm w-[80%] truncate text-center blur-none z-10 border border-white/10">
                                            {color.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/10 pt-8">
                            <div className="text-sm font-bold text-white/50 w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
                                <span className="text-[#C6A76B] text-lg font-black">{selectedColors.length}</span> / 3 Selected
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <button
                                    onClick={handleWhatsApp}
                                    className="px-6 py-4 rounded-sm font-black text-[11px] uppercase tracking-[0.2em] transition-all bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center gap-3 border border-[#25D366]/30 shadow-xl"
                                >
                                    <FaWhatsapp size={16} /> WhatsApp
                                </button>
                                <button
                                    onClick={() => setStep(2)}
                                    disabled={selectedColors.length === 0}
                                    className="px-10 py-4 rounded-sm font-black text-[11px] uppercase tracking-[0.2em] transition-all bg-[#C6A76B] text-black hover:bg-[#b0945d] disabled:opacity-50 disabled:hover:bg-[#C6A76B] shadow-[0_0_20px_rgba(198,167,107,0.2)]"
                                >
                                    Proceed details
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="p-8 md:p-12 animate-fade-in relative">
                        {success ? (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 bg-[#C6A76B]/10 border border-[#C6A76B] text-[#C6A76B] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(198,167,107,0.3)]">
                                    <FiCheck size={40} />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">Order Confirmed</h3>
                                <p className="text-white/40 text-[12px] font-bold uppercase tracking-widest text-center leading-loose">
                                    Your samples have been dispatched.<br/> They will reach you within 48 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={submitSampleRequest}>
                                <div className="mb-10 text-center relative">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase text-[#C6A76B] flex items-center gap-2 hover:text-white transition-colors p-2"
                                    >
                                        <FiChevronLeft size={16} /> Back
                                    </button>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-none">Delivery</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                                    {selectedColors.map((c, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-[#1A1A1A] border border-white/10 px-3 py-1.5 rounded-full">
                                            <div className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                                            <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">{c.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-5">
                                    <input
                                        type="text"
                                        name="customerName"
                                        required
                                        placeholder="FULL NAME"
                                        value={formData.customerName}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#161616] border border-white/10 rounded-sm py-4 px-6 text-[12px] font-bold tracking-widest text-white placeholder:text-white/30 outline-none uppercase transition-all focus:border-[#C6A76B] focus:bg-[#1A1A1A]"
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <input
                                            type="email"
                                            name="customerEmail"
                                            required
                                            placeholder="EMAIL ADDRESS"
                                            value={formData.customerEmail}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#161616] border border-white/10 rounded-sm py-4 px-6 text-[12px] font-bold tracking-widest text-white placeholder:text-white/30 outline-none uppercase transition-all focus:border-[#C6A76B] focus:bg-[#1A1A1A]"
                                        />
                                        <input
                                            type="tel"
                                            name="customerPhone"
                                            placeholder="PHONE NUMBER"
                                            value={formData.customerPhone}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#161616] border border-white/10 rounded-sm py-4 px-6 text-[12px] font-bold tracking-widest text-white placeholder:text-white/30 outline-none uppercase transition-all focus:border-[#C6A76B] focus:bg-[#1A1A1A]"
                                        />
                                    </div>
                                    <textarea
                                        name="customerAddress"
                                        required
                                        placeholder="FULL DELIVERY ADDRESS"
                                        value={formData.customerAddress}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="w-full bg-[#161616] border border-white/10 rounded-sm py-4 px-6 text-[12px] font-bold tracking-widest text-white placeholder:text-white/30 outline-none uppercase transition-all resize-none focus:border-[#C6A76B] focus:bg-[#1A1A1A]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full mt-8 bg-[#C6A76B] text-black py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-[0_0_20px_rgba(198,167,107,0.2)] hover:bg-[#b0945d] active:scale-95 flex justify-center"
                                >
                                    {submitting ? (
                                        <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                    ) : (
                                        'Request Delivery'
                                    )}
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
