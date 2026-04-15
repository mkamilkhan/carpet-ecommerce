import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiMapPin, FiAward, FiUsers, FiArrowRight, FiHome, FiBox, FiLayers, FiAlignJustify, FiGrid, FiMaximize, FiTag } from 'react-icons/fi';

import carpetsImg from '../assets/categories/carpets.png';
import laminateImg from '../assets/categories/laminate.png';
import vinylImg from '../assets/categories/vinyl.png';
import woodImg from '../assets/categories/wood.png';
import engineeredWoodImg from '../assets/categories/engineered_wood.png';
import homeVideo from '../assets/homecarpet.mp4';
import storyVideo from '../assets/StoryCarpet.mp4';
import DefaultHero from '../components/DefaultHero';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const heroSlides = [
        {
            image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=1920&q=80',
            title: 'Carpet',
        },
        {
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80',
            title: 'Laminate',
        },
        {
            image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1920&q=80',
            title: 'Herringbone',
        },
        {
            image: 'https://image.made-in-china.com/202f0j00KtsYirGIufph/Cheap-Price-Deco-Floor-Plastic-Spc-Flooring-Decoration-Vinyl-Floor-Tile.webp',
            title: 'Vinyl',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    const brands = ['Quickstep', 'Karndean', 'Amtico', 'Victoria Carpets'];

    const galleryWork = [
        { title: 'Carpet jobs', src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80' },
        { title: 'Laminate', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_7G91Tt055tSGrtLcYepL2NAeULWkswxfg&s' },
        { title: 'Stairs', src: 'https://www.thepaintedhinge.com/wp-content/uploads/2025/10/scuklpted-light-staircase.png' },
        { title: 'Herringbone', src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80' },
    ];

    const categories = [
        { title: 'Carpets', image: carpetsImg },
        { title: 'Laminate', image: laminateImg },
        { title: 'Vinyl', image: vinylImg },
        { title: 'Wood Flooring', image: woodImg },
        { title: 'Engineered Wood', image: engineeredWoodImg },
        { title: 'Rugs', image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <div className="bg-[#0B0B0B] text-white overflow-hidden">

            {/* 3. HERO SECTION */}
            <DefaultHero />

            {/* 4. TRUST STRIP */}
            <section className="h-[90px] mt-32 bg-[#111111] border-y border-white/5 flex items-center" data-reveal="up">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
                    <div className="flex flex-wrap justify-between items-center gap-4 text-[11px] lg:text-[13px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-3"><FiStar className="text-[#C6A76B]" size={18} /> <span className="text-white">5 Star Rated in London</span></div>
                        <div className="flex items-center gap-3"><FiMapPin className="text-[#C6A76B]" size={18} /> <span className="text-white">Tottenham Showroom</span></div>
                        <div className="flex items-center gap-3"><FiAward className="text-[#C6A76B]" size={18} /> <span className="text-white">12+ Years Experience</span></div>
                        <div className="flex items-center gap-3"><FiUsers className="text-[#C6A76B]" size={18} /> <span className="text-white">10,000+ Floors Installed</span></div>
                    </div>
                </div>
            </section>

            {/* 5. OUR FLOORING OPTIONS - THE COLLECTION */}
            <section id="categories" className="py-24 bg-[#0B0B0B] overflow-hidden" data-reveal="up">
                <style>
                    {`
                    @keyframes slideLeft {
                        from { transform: translateX(0); }
                        to { transform: translateX(-50%); }
                    }
                    .marquee-track {
                        display: flex;
                        width: max-content;
                        animation: slideLeft 40s linear infinite;
                    }
                    .marquee-track:hover {
                        animation-play-state: paused;
                    }
                    .marquee-item {
                        padding-right: 2rem; /* Replaces flex gap */
                    }
                    `}
                </style>

                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
                        <div>
                            <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">THE COLLECTION</span>
                            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-white">Our Flooring Options</h2>
                        </div>
                        <p className="text-white/40 tracking-widest uppercase text-[10px] md:text-[11px] font-bold max-w-xs md:text-right">
                            Premium flooring solutions for modern homes and commercial spaces.
                        </p>
                    </div>
                </div>

                {/* Infinite Scroll Marquee Container */}
                <div className="relative">
                    {/* Left & Right shadow fade effects */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none" />

                    <div className="marquee-track pl-4">
                        {/* We duplicate the array to create a perfect seamless loop (5 + 5 items) */}
                        {[...categories, ...categories].map((cat, i) => (
                            <Link to={`/collection?category=${encodeURIComponent(cat.title)}`} key={i} className="marquee-item group cursor-pointer w-[300px] lg:w-[450px] flex-shrink-0">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-6 border border-white/5 transition-all duration-500 hover:border-[#C6A76B]/40 hover:shadow-[0_0_40px_rgba(198,167,107,0.15)] shadow-2xl bg-[#111111]">

                                    <div className="absolute inset-0 bg-[#C6A76B]/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110"
                                    />

                                    {/* Bottom dark gradient for text legibility */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-80" />

                                    <div className="absolute bottom-8 left-8 right-8 z-20 flex items-end justify-between overflow-hidden">
                                        <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter text-white translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                                            {cat.title}
                                        </h3>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 hover:bg-[#C6A76B] hover:text-black">
                                            <FiArrowRight size={20} />
                                        </div>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUR WORK (Gallery) */}
            <section id="gallery" className="py-24 bg-[#0F0F0F]" data-reveal="up">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Our Recent Work Across London</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryWork.map((img, i) => (
                            <div key={i} className="relative aspect-[4/3] rounded-sm overflow-hidden group cursor-pointer border border-white/5">
                                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-white font-black uppercase tracking-[0.3em] text-[10px] border border-white/20 px-6 py-2 backdrop-blur-sm">{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. PREMIUM BRANDS */}
            <section className="py-24 bg-white" data-reveal="fade">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
                    <h2 className="text-black text-sm font-black uppercase tracking-[0.5em] mb-16">Trusted Flooring Brands</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24">
                        {brands.map((brand, i) => (
                            <div key={i} className="group cursor-default">
                                <span className="text-gray-400 group-hover:text-[#C6A76B] font-black uppercase tracking-tighter text-2xl lg:text-3xl transition-all duration-500">
                                    {brand}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. ABOUT MFA FLOORS */}
            <section id="about" className="py-24 bg-[#0B0B0B]" data-reveal="up">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none">About <br /> <span className="text-[#C6A76B]">MFA Floors</span></h2>
                        <div className="space-y-6 text-[#BFBFBF] leading-relaxed text-lg">
                            <p>Since 2012, MFA Floors has been delivering exceptional flooring solutions across London.</p>
                            <p>From luxury homes to commercial projects, we combine craftsmanship and premium materials to create floors that stand the test of time.</p>
                            <p>Our Tottenham showroom is trusted by customers across London seeking quality carpets and flooring with professional guidance.</p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5 h-[400px]">
                        <video
                            src={storyVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                            <FiMapPin className="text-[#C6A76B]" /> Our Story
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. REVIEWS SECTION */}
            <section className="py-24 bg-[#0F0F0F]" data-reveal="up">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">What London Customers Say</h2>
                        <div className="flex justify-center items-center gap-4">
                            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-6" />
                            <div className="flex text-[#C6A76B] text-xs"><FiStar /><FiStar /><FiStar /><FiStar /><FiStar /></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Sarah L.', text: 'Excellent service and installation. Highly recommended for any flooring project.', stars: 5 },
                            { name: 'Robert M.', text: 'The calculator was so helpful to estimate costs before visiting the showroom. Great quality carpets!', stars: 5 },
                            { name: 'David K.', text: 'Professional fitters, clean work, and amazing herringbone flooring. 5 stars!', stars: 5 }
                        ].map((rev, i) => (
                            <div key={i} className="bg-[#111111] border border-white/5 p-8 rounded-xl shadow-xl hover:border-[#C6A76B]/30 transition-all">
                                <div className="flex text-[#C6A76B] mb-4 text-xs">
                                    {[...Array(rev.stars)].map((_, i) => <FiStar key={i} />)}
                                </div>
                                <p className="text-[#BFBFBF] italic mb-6 leading-relaxed">"{rev.text}"</p>
                                <p className="font-bold uppercase tracking-widest text-[11px] text-white underline underline-offset-4 decoration-[#C6A76B]">{rev.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. FREE MEASUREMENT SECTION */}
            <section className="py-24 bg-[#0B0B0B]" data-reveal="up">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                    <div className="bg-[#111111] border border-white/5 rounded-3xl p-12 lg:p-20 shadow-3xl">
                        <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-10">Book Your Free <br /> Home Measurement</h2>
                        <Link
                            to="/contact"
                            className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[14px] uppercase tracking-[0.4em] hover:bg-[#b0945d] transition-all shadow-2xl"
                        >
                            BOOK NOW
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
