import React from 'react';
import { FiClock, FiSettings, FiCheckCircle, FiShield, FiTag, FiTruck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import serviceVideo from '../assets/servicCarpet.mp4';

const Services = () => {
    const bannerItems = [
        { icon: <FiClock size={24} />, label: "Express Fitting" },
        { icon: <FiSettings size={24} />, label: "Uplift & Removal" },
        { icon: <FiCheckCircle size={24} />, label: "Laser Measure" },
        { icon: <FiShield size={24} />, label: "0% Finance" },
        { icon: <FiTag size={24} />, label: "Price Promise" },
        { icon: <FiTruck size={24} />, label: "Care Package" },
    ];

    const servicesGrid = [
        {
            title: "Expert Fitting",
            desc: "Our master installers ensure every plank and thread is laid with absolute precision, delivering a finish that defines architectural excellence.",
            img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
            tag: "Precision"
        },
        {
            title: "Uplift & Disposal",
            desc: "Let us handle the complexity of removal. We efficiently uplift and dispose of your existing flooring, leaving a clean canvas for your new installation.",
            img: "https://images.unsplash.com/photo-1595844730298-b960fa25e9e3?auto=format&fit=crop&q=80&w=800",
            tag: "Efficiency"
        },
        {
            title: "Home Consultation",
            desc: "Our experts bring the showroom to your sanctuary. Professional measuring and design advice tailored to your specific lighting and space.",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
            tag: "Bespoke"
        },
        {
            title: "0% APR Finance",
            desc: "Investment in luxury made accessible. Spread the cost of your premium flooring with our flexible interest-free credit options.",
            img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
            tag: "Investment"
        },
        {
            title: "Atelier Guarantee",
            desc: "Peace of mind for the next decade. We provide comprehensive 10-year guarantees on all professional installations across London.",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
            tag: "Longevity"
        },
        {
            title: "Custom Whipping",
            desc: "Transform your favorite textures into bespoke runners and rugs. Our artisan whipping service adds the final touch of luxury to your project.",
            img: "https://images.unsplash.com/photo-1620641788421-7a1c34a6a43d?auto=format&fit=crop&q=80&w=800",
            tag: "Artisanal"
        }
    ];

    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white">
            {/* TOP PREMIUM STRIP */}
            <div className="bg-[#111111] py-12 border-b border-white/5 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-6 flex flex-wrap justify-between gap-12">
                    {bannerItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group transition-all">
                            <div className="w-12 h-12 rounded-sm border border-[#C6A76B]/20 flex items-center justify-center text-[#C6A76B] bg-[#C6A76B]/5 group-hover:bg-[#C6A76B] group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-black group-hover:text-[#C6A76B] transition-colors">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* HEADER SECTION */}
            <div className="relative h-[45vh] lg:h-[55vh] flex items-center pt-20 overflow-hidden" data-reveal="fade">
                <div className="absolute inset-0 z-0">
                    <video
                        src={serviceVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] z-10" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C6A76B] mb-6 block">Our Capabilities</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none text-white">
                        Uncompromising <br /><span className="text-[#C6A76B] italic">Service.</span>
                    </h1>
                    <p className="text-[#BFBFBF] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto uppercase tracking-wide text-xs opacity-80 font-bold">
                        From initial concept to master fitting, we manage every detail of your project. Luxury that extends beyond the product.
                    </p>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-[1440px] mx-auto px-6 pb-32" data-reveal="up">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesGrid.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111111] border border-white/5 rounded-sm overflow-hidden group hover:border-[#C6A76B]/30 transition-all duration-700 shadow-2xl"
                        >
                            <div className="relative h-[300px] overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-6 left-6 px-4 py-2 bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 rounded-sm">
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C6A76B]">{service.tag}</span>
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#C6A76B] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#BFBFBF]/60 text-sm leading-relaxed mb-10 min-h-[60px]">
                                    {service.desc}
                                </p>
                                <a href="/contact" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#C6A76B] hover:gap-5 transition-all">
                                    Enquire Now <FiArrowRight />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-[#111111] border border-white/5 rounded-sm p-12 lg:p-20 text-center relative overflow-hidden" data-reveal="zoom">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A76B]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">Need a expert home <br /><span className="text-[#C6A76B]">Consultation?</span></h2>
                        <p className="text-[#BFBFBF]/60 text-lg mb-12 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">Our master consultants visit your sanctuary to provide laser-accurate measurements and style guidance.</p>
                        <Link to="/contact" className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#b0945d] transition-all shadow-xl">
                            Book Free Home Visit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
