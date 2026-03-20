import React from 'react';
import { FiCheck, FiAward, FiUsers, FiClock, FiShield, FiHeart, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import storyVideo from '../assets/StoryCarpet.mp4';

const ValueCard = ({ icon, title, description }) => (
    <div className="bg-[#111111] p-10 rounded-sm border border-white/5 hover:border-[#C6A76B]/30 transition-all group">
        <div className="text-[#C6A76B] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 inline-block">
            {icon}
        </div>
        <h3 className="text-xl font-black uppercase tracking-tighter mb-4 text-white">{title}</h3>
        <p className="text-[#BFBFBF]/80 text-sm leading-relaxed uppercase tracking-widest text-[11px] font-bold">{description}</p>
    </div>
);

const About = () => {
    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#0B0B0B] border-b border-white/5" data-reveal="fade">
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
                    <h1 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                        The <span className="text-[#C6A76B] italic font-serif leading-none">Heritage.</span>
                    </h1>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-24" data-reveal="up">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
                                Serving London <br /><span className="text-[#C6A76B]">Since 2012.</span>
                            </h2>
                            <div className="space-y-6 text-[#BFBFBF] leading-loose text-lg font-medium">
                                <p>
                                    Since 2012, MFA Floors has been delivering exceptional flooring solutions across London. From luxury homes to commercial projects, we combine craftsmanship and premium materials to create floors that stand the test of time.
                                </p>
                                <p>
                                    Our Tottenham showroom is trusted by customers across London seeking quality carpets and flooring with professional guidance. We believe that every floor tells a story of elegance and durability.
                                </p>
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

                        <div className="relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                                    alt="Showroom"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-[#C6A76B] p-10 hidden lg:block rounded-sm shadow-2xl">
                                <div className="flex items-center gap-4 text-white">
                                    <FiAward size={32} />
                                    <div>
                                        <p className="font-black uppercase tracking-widest text-xs">Certified</p>
                                        <p className="text-2xl font-black uppercase tracking-tighter">Artisans</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES grid */}
            <section className="py-24 bg-[#0F0F0F]" data-reveal="up">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">Our Values</span>
                        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter">The Foundations.</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ValueCard
                            icon={<FiAward size={40} />}
                            title="Unrivaled Quality"
                            description="We source only the finest materials from trusted brands like Quickstep and Karndean."
                        />
                        <ValueCard
                            icon={<FiShield size={40} />}
                            title="Master Installers"
                            description="Our professional fitting team ensures every millimeter is perfect, guaranteed for years."
                        />
                        <ValueCard
                            icon={<FiHeart size={40} />}
                            title="Bespoke Care"
                            description="From free measurements to post-install advice, our service is tailored to your home."
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#0B0B0B]" data-reveal="zoom">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">Experience the <br /><span className="text-[#C6A76B]">Excellence.</span></h2>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] hover:bg-[#b0945d] transition-all"
                    >
                        Visit Showroom
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;