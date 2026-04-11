import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import homeVideo from '../assets/homecarpet.mp4';

const DefaultHero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        { title: 'Premium Carpets', image: 'https://alaqsacarpets.com/wp-content/uploads/2025/04/Product-Roll-Carpet-Premium-H2-scaled.jpeg' },
        { title: 'Luxury Laminate', image: 'https://wwwfuzionflooring-1c124.kxcdn.com/app/uploads/2024/06/Room-Scene-Euro-Select-Narrow-Saffron.jpg' },
        { title: 'Stunning Vinyl', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200' },
        { title: 'Hardwood Floors', image: 'https://dam.thdstatic.com/content/production/QrxgpUgjo68bNe3SeWj4Eg/Mcft1kaKFJqUqBun4Ok93w/Original%20file/568af90a-90b1-476e-aed2-8dcf26de8b5f_Natural_New_Heart_Pine_Room.jpeg?im=Crop,rect=(0.2621701493534224,231.9999999999999,5749.30959748175,5746.000000000001);Resize=(703,703)' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [heroSlides.length]);

    return (
        <section className="relative min-h-screen flex items-center pt-[140px] pb-20 lg:pt-[160px] lg:pb-0" data-reveal="fade">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src={homeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            </div>

            <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center z-20">
                <div className="space-y-6 lg:space-y-10" data-reveal="left">
                    <h1 className="text-2xl md:text-4xl lg:text-[56px] font-black leading-[1.1] lg:leading-tight uppercase tracking-tighter text-white">
                        Luxury Flooring <br />
                        <span className="text-[#C6A76B]">Installed Across London</span>
                    </h1>
                    <div className="space-y-3 lg:space-y-4">
                        <p className="text-white/60 text-xs md:text-base lg:text-lg max-w-lg leading-relaxed font-bold uppercase tracking-widest">
                            Carpets • Laminate • Vinyl • Wood Flooring
                        </p>
                        <p className="text-white/40 text-[10px] md:text-sm lg:text-base font-black uppercase tracking-[0.2em]">
                            Professional Installation Since 2012
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-2 lg:pt-4">
                        <Link
                            to="/calculator"
                            className="bg-[#C6A76B] text-white px-6 lg:px-10 py-4 lg:py-5 rounded-sm font-black text-[10px] lg:text-[12px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all text-center shadow-2xl"
                        >
                            Calculate Flooring Cost
                        </Link>
                        <Link
                            to="/contact"
                            className="border-2 border-white/20 text-white px-6 lg:px-10 py-4 lg:py-5 rounded-sm font-black text-[10px] lg:text-[12px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all text-center"
                        >
                            Book Free Measurement
                        </Link>
                    </div>
                </div>

                <div className="relative mt-16 lg:mt-0" data-reveal="right">
                    <div className="relative h-[280px] md:h-[400px] rounded-sm overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group bg-black">
                        {heroSlides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide.image}
                                alt={slide.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                            />
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 space-y-1 md:space-y-2 z-20">
                            <span className="text-[#C6A76B] text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] block transition-all">Premium Selection</span>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white transition-all transform">
                                {heroSlides[currentSlide].title}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DefaultHero;
