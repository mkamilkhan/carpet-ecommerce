import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiMapPin } from 'react-icons/fi';
import homeVideo from '../assets/homecarpet.mp4';

const OffersHero = () => {
    return (
        <section className="relative h-[80vh] lg:h-screen flex items-center justify-center pt-20 overflow-hidden" data-reveal="fade">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src={homeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 scale-105"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />
            </div>

            <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center z-20 text-center">
                <div className="space-y-4" data-reveal="up">
                    <div className="inline-block bg-[#E31E24] mt-32 text-white px-6 py-2 rounded-none text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-xl">
                        Limited Time: 50% OFF 100s of Carpets
                    </div>

                    <h1 className="text-2xl md:text-4xl lg:text-[64px] font-black leading-[1.1] lg:leading-[1] uppercase tracking-tighter text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        The flooring people <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A76B] via-[#EAD6B5] to-[#C7A76B] bg-[length:200%_auto] animate-shimmer">you can TRUST</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-center pt-8">
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-3 bg-[#C7A76B] text-black px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-widest hover:bg-white transition-all shadow-[0_20px_40px_rgba(199,167,107,0.3)] hover:-translate-y-1"
                        >
                            <FiHome size={22} />
                            Book a FREE home visit
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center justify-center gap-3 bg-transparent border-2 border-[#C7A76B] text-[#C7A76B] px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-widest hover:bg-[#C7A76B] hover:text-black transition-all shadow-[0_20px_40px_rgba(199,167,107,0.1)] hover:-translate-y-1"
                        >
                            <FiMapPin size={22} />
                            Find your nearest store
                        </Link>
                    </div>

                    <div className="pt-20 flex flex-wrap justify-center items-center gap-4 lg:gap-10">
                        {[
                            { name: 'Carpets', link: '/collection?category=Carpets' },
                            { name: 'Vinyl', link: '/collection?category=Vinyl' },
                            { name: 'Laminate', link: '/collection?category=Laminate' },
                            { name: 'Luxury Vinyl', link: '/collection?category=Vinyl' },
                            { name: 'Engineered Wood', link: '/collection?category=Wood' }
                        ].map(cat => (
                            <Link 
                                key={cat.name} 
                                to={cat.link}
                                className="text-white hover:text-[#C7A76B] text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-4 group transition-colors"
                            >
                                <span className="w-1.5 h-1.5 bg-[#C7A76B] rounded-full group-hover:scale-150 transition-transform" />
                                <span>{cat.name}</span>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OffersHero;
