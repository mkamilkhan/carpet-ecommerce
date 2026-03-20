import React, { useState } from "react";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiSend,
    FiArrowRight,
    FiClock,
} from "react-icons/fi";
import contactVideo from '../assets/homecarpet.mp4';

const InfoCard = ({ icon, label, lines }) => (
    <div className="flex items-start gap-4 p-6 rounded-sm bg-[#111111] border border-white/5 hover:border-[#C6A76B]/40 transition-all duration-300">
        <div className="w-12 h-12 rounded-sm bg-[#C6A76B]/10 flex items-center justify-center text-[#C6A76B]">
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C6A76B]/60 mb-2">
                {label}
            </p>
            {lines.map((line, i) => (
                <p key={i} className="text-sm text-white font-bold uppercase tracking-widest">
                    {line}
                </p>
            ))}
        </div>
        <FiArrowRight className="text-white/20" size={16} />
    </div>
);

const FloatingInput = ({ label, type = "text", placeholder, rows, value, onChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#C6A76B] font-black">
                {label}
            </label>
            {rows ? (
                <textarea
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-sm text-white outline-none focus:border-[#C6A76B] transition placeholder-white/10 text-sm"
                />
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 rounded-sm text-white outline-none focus:border-[#C6A76B] transition placeholder-white/10 text-sm"
                />
            )}
        </div>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [selectedService, setSelectedService] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const services = [
        "Carpet Installation",
        "Laminate Flooring",
        "Herringbone Design",
        "Luxury Vinyl",
        "Free Measurement",
        "Commercial Projects",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white">
            <div className="relative h-[45vh] lg:h-[55vh] flex items-center pt-20 overflow-hidden" data-reveal="fade">
                <div className="absolute inset-0 z-0">
                    <video
                        src={contactVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] z-10" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#C6A76B] mb-6 block font-black">
                        Contact Our Atelier
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-white">
                        Let’s Build <span className="text-[#C6A76B] italic">Classics</span>
                    </h1>
                    <p className="text-[#BFBFBF] max-w-2xl mx-auto text-lg tracking-wide uppercase font-bold text-xs opacity-80">
                        Connecting your vision with our craftsmanship. Our experts are ready to ground your home in luxury.
                    </p>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-5 gap-16">
                <div className="lg:col-span-2 space-y-8" data-reveal="left">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">
                        The <span className="text-[#C6A76B] italic">Atelier</span>
                    </h2>

                    <InfoCard
                        icon={<FiMail size={20} />}
                        label="Email"
                        lines={["sales@mfafloors.co.uk", "info@mfafloors.co.uk"]}
                    />
                    <InfoCard
                        icon={<FiPhone size={20} />}
                        label="Phone"
                        lines={["020 8808 0088"]}
                    />
                    <InfoCard
                        icon={<FiMapPin size={20} />}
                        label="Address"
                        lines={["545 High Road", "Tottenham, London N17 6SB"]}
                    />

                    <div className="p-8 rounded-sm bg-[#111111] border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <FiClock className="text-[#C6A76B]" size={18} />
                            <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#C6A76B]">
                                Showroom Hours
                            </p>
                        </div>
                        <div className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-white/60">
                            <div className="flex justify-between pb-2 border-b border-white/5">
                                <span>Mon – Fri</span>
                                <span className="text-white">09:00 – 18:00</span>
                            </div>
                            <div className="flex justify-between pb-2 border-b border-white/5">
                                <span>Saturday</span>
                                <span className="text-white">10:00 – 16:00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sunday</span>
                                <span className="text-[#C6A76B] italic font-serif">Closed</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 bg-[#111111] border border-white/5 rounded-sm p-8 lg:p-12 shadow-2xl" data-reveal="right">
                    {submitted ? (
                        <div className="text-center py-20 flex flex-col items-center">
                            <div className="w-20 h-20 bg-[#C6A76B]/10 rounded-full flex items-center justify-center text-[#C6A76B] mb-8">
                                <FiSend size={32} />
                            </div>
                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                                Message Received
                            </h3>
                            <p className="text-[#BFBFBF] uppercase tracking-widest text-[10px] font-bold">
                                Our artisans will contact you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <FloatingInput
                                    label="Full Name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                                <FloatingInput
                                    label="Email Address"
                                    type="email"
                                    placeholder="email@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A76B] mb-6 font-black">
                                    Service Required
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            onClick={() => setSelectedService(service)}
                                            className={`px-4 py-4 text-[10px] uppercase font-black tracking-widest rounded-sm border transition-all ${selectedService === service
                                                ? "bg-[#C6A76B] text-white border-[#C6A76B]"
                                                : "bg-black/20 border-white/5 text-white/40 hover:border-white/20"
                                                }`}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <FloatingInput
                                label="Project Details"
                                placeholder="Describe your requirements..."
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />

                            <button
                                type="submit"
                                className="w-full bg-[#C6A76B] hover:bg-[#b0945d] text-white py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] transition-all shadow-xl shadow-[#C6A76B]/10"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;