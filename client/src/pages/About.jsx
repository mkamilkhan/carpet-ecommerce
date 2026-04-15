import React from 'react';
import { FiCheck, FiAward, FiUsers, FiClock, FiShield, FiHeart, FiArrowRight, FiMapPin, FiStar, FiTrendingUp, FiEye, FiPackage } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import storyVideo from '../assets/StoryCarpet.mp4';

const About = () => {
    const values = [
        { icon: <FiAward size={32} />, title: "Quality First", desc: "We source only from trusted suppliers and insist on rigorous standards. Every flooring product we offer undergoes close inspection and quality checks before reaching you." },
        { icon: <FiUsers size={32} />, title: "Customer-Centered", desc: "We listen first. Every space is unique, and we tailor solutions to match your design vision, budget, and performance needs." },
        { icon: <FiShield size={32} />, title: "Integrity & Transparency", desc: "From pricing to timeline, we believe in clear communication. No hidden costs, no surprises — just honest advice and fair deals." },
        { icon: <FiStar size={32} />, title: "Craftsmanship & Expertise", desc: "Our team is trained, experienced, and passionate. Whether installing hardwood or laying SPC, we treat each job as a craft, not just a task." },
        { icon: <FiHeart size={32} />, title: "Sustainability & Longevity", desc: "We choose eco-friendly options, durable materials, and best practices to minimize waste and extend the lifespan of your floors." },
        { icon: <FiTrendingUp size={32} />, title: "Value for Money", desc: "Premium quality doesn't have to break the bank. We offer competitive pricing across all our products and services." },
    ];

    const products = [
        { name: "Carpets", desc: "A wide selection of styles, textures, and densities for homes, offices, and hospitality settings" },
        { name: "Hardwood Flooring", desc: "Engineered and solid wood options in various species, finishes, and dimensions" },
        { name: "LVT (Luxury Vinyl Tile)", desc: "Stylish, resilient, low-maintenance vinyl solutions that mimic wood, stone, and designer finishes" },
        { name: "SPC (Stone Plastic Composite)", desc: "An ultra-durable, rigid-core format built to resist moisture, impact, and wear" },
    ];

    const whyUs = [
        { label: "Comprehensive Product Range", desc: "Carpets, hardwoods, LVT, SPC — we cover all your flooring needs" },
        { label: "Professional Installations", desc: "Our skilled crews ensure flawless, timely installation" },
        { label: "Warranty & Support", desc: "We stand behind our work and assist with care, maintenance, and aftersales" },
        { label: "Design Support", desc: "We offer guidance, samples, and project planning to help you visualize and select intelligently" },
        { label: "Local Know-How, Global Quality", desc: "Grounded in the local market, but informed by international trends and standards" },
    ];

    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#0B0B0B] border-b border-white/5" data-reveal="fade">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        src={storyVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] z-10" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full lg:px-12 pt-20">
                    <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Our Narrative</span>
                    <h1 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
                        Our <span className="text-[#C6A76B] italic font-serif leading-none">Story.</span>
                    </h1>
                    <p className="text-[#BFBFBF]/70 text-base lg:text-lg font-medium max-w-xl leading-relaxed">
                        From humble beginnings to London's trusted flooring destination — discover the craftsmanship and passion behind every floor we lay.
                    </p>
                </div>
            </section>

            {/* LUXURY CARPETS INTRO */}
            <section className="py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div>
                                <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Our Products</span>
                                <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                                    Luxury Carpets That <span className="text-[#C6A76B]">Define Comfort</span>
                                </h2>
                                <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6">
                                    Our premium carpets are more than just flooring – they become a centerpiece of your home. Crafted with high-quality fibers, rich colors, and timeless patterns, they bring warmth, elegance, and sophistication to any room. Whether it's your living space, office, or prayer area, our carpets create the perfect blend of comfort and style.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-[#C6A76B] mb-4">Endless Choices, Timeless Designs</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed">
                                    From classic Persian-inspired motifs to modern minimalist patterns, our collection offers something for every taste. With multiple textures, vibrant colors, and flawless finishing, our carpets are crafted to elevate any interior. More than just flooring, they're a lifestyle upgrade—adding elegance and personality to every space.
                                </p>
                            </div>
                            <Link to="/collection" className="inline-flex items-center gap-3 bg-[#C6A76B] text-white px-10 py-4 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#b0945d] transition-all">
                                View Collection <FiArrowRight />
                            </Link>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                                alt="Luxury Carpet"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0B0B0B] to-transparent">
                                <p className="text-[#C6A76B] font-black uppercase tracking-widest text-xs">Premium Hardwood Floors by MFA Floors</p>
                                <p className="text-white text-lg font-black uppercase tracking-tighter">Discover the elegance and durability of our premium hardwood flooring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT US */}
            <section className="py-24 bg-[#0F0F0F] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div>
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">About Us</span>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                                Serving London <span className="text-[#C6A76B]">Since 2012.</span>
                            </h2>
                            <div className="space-y-6 text-[#BFBFBF] text-base leading-relaxed mb-10">
                                <p>
                                    At MFA Floors, we've been transforming homes and businesses with beautiful, durable flooring solutions for over 12 years. Our family-owned business takes pride in delivering exceptional craftsmanship and personalized service.
                                </p>
                                <p>
                                    From initial consultation to final installation, we work closely with you to ensure your vision becomes reality.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mb-10">
                                {["Quality First", "Customer-Centered", "Value for Money"].map((v, i) => (
                                    <span key={i} className="px-5 py-2 border border-[#C6A76B]/30 text-[#C6A76B] text-[10px] font-black uppercase tracking-widest rounded-full">
                                        {v}
                                    </span>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                <div>
                                    <p className="text-4xl font-black text-[#C6A76B] mb-2 tracking-tighter">12+</p>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-white/40">Years Excellence</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-[#C6A76B] mb-2 tracking-tighter">10k+</p>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-white/40">Floors Installed</p>
                                </div>
                            </div>
                        </div>

                        {/* Who We Are */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-[#C6A76B] mb-4 pb-4 border-b border-[#C6A76B]/20">Who We Are</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed">
                                    Founded in 2012, MFA Floors was built on a vision to deliver high-quality, durable, and beautiful flooring options while placing customer satisfaction at the heart of everything we do. Over the years, we have grown from a small, ambitious firm into a leading name in the region for commercial and residential flooring solutions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase tracking-tight text-[#C6A76B] mb-6 pb-4 border-b border-[#C6A76B]/20">What We Do</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                                    At MFA Floors, we believe that the right floor transforms a space — not just functionally, but in terms of aesthetic, comfort, and longevity. We specialize in:
                                </p>
                                <div className="space-y-4">
                                    {products.map((p, i) => (
                                        <div key={i} className="flex gap-4 p-4 bg-[#111111] border border-white/5 rounded-sm">
                                            <FiCheck className="text-[#C6A76B] shrink-0 mt-1" size={16} />
                                            <div>
                                                <span className="text-white font-black uppercase tracking-widest text-xs block mb-1">{p.name}</span>
                                                <span className="text-[#BFBFBF]/60 text-xs leading-relaxed">{p.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR VALUES */}
            <section className="py-24 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Our Approach</span>
                        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter">Our Approach & Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="bg-[#111111] p-10 rounded-sm border border-white/5 hover:border-[#C6A76B]/30 transition-all group">
                                <div className="text-[#C6A76B] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 inline-block">
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-black uppercase tracking-tighter mb-4 text-white">{v.title}</h3>
                                <p className="text-[#BFBFBF]/70 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE MFA */}
            <section className="py-24 bg-[#0F0F0F] border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Our Advantages</span>
                            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
                                Why Choose <span className="text-[#C6A76B]">MFA Floors</span>
                            </h2>
                            <div className="space-y-5">
                                {whyUs.map((w, i) => (
                                    <div key={i} className="flex gap-4 p-5 bg-[#111111] border border-white/5 rounded-sm hover:border-[#C6A76B]/30 transition-all">
                                        <FiCheck className="text-[#C6A76B] shrink-0 mt-1" size={18} />
                                        <div>
                                            <span className="text-white font-black uppercase tracking-widest text-xs block mb-1">{w.label}</span>
                                            <span className="text-[#BFBFBF]/60 text-sm">{w.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                                alt="Showroom"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0B0B0B] to-transparent">
                                <p className="text-white/60 text-sm font-medium leading-relaxed">
                                    We look forward to meeting you in store or at your home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FREE MEASUREMENTS CTA */}
            <section className="py-32 bg-[#0B0B0B]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Get Started</span>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
                        Free <span className="text-[#C6A76B]">Measurements</span>
                    </h2>
                    <p className="text-[#BFBFBF] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                        We offer a free home advice, measuring & estimating service. A visit from our flooring experts will help you choose the perfect flooring.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] hover:bg-[#b0945d] transition-all shadow-xl"
                        >
                            Request A Quote
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-block border border-white/20 text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] hover:bg-white/5 transition-all"
                        >
                            Book A Home Visit
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;