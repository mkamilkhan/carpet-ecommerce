import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiStar, FiMapPin, FiAward, FiUsers, FiArrowRight } from 'react-icons/fi';
import Calculator from '../components/Calculator';

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
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const brands = ['Quickstep', 'Karndean', 'Amtico', 'Victoria Carpets'];

    const galleryWork = [
        { title: 'Carpet jobs', src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80' },
        { title: 'Laminate', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_7G91Tt055tSGrtLcYepL2NAeULWkswxfg&s' },
        { title: 'Stairs', src: 'https://www.thepaintedhinge.com/wp-content/uploads/2025/10/scuklpted-light-staircase.png' },
        { title: 'Herringbone', src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80' },
    ];

    return (
        <div className="bg-[#0B0B0B] text-white overflow-hidden">

            {/* 3. HERO SECTION */}
            <section className="relative h-[90vh] lg:h-[100vh] flex items-center pt-[100px]" data-reveal="fade">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-[56px] font-black leading-tight uppercase tracking-tighter">
                            Luxury Flooring <br />
                            <span className="text-[#C6A76B]">Installed Across London</span>
                        </h1>
                        <div className="space-y-2">
                            <p className="text-[#BFBFBF] text-lg lg:text-[18px] max-w-lg leading-relaxed">
                                Carpets • Laminate • Vinyl • Wood Flooring
                            </p>
                            <p className="text-[#BFBFBF] text-lg lg:text-[18px] font-bold uppercase tracking-widest">
                                Professional Installation Since 2012
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                to="/calculator"
                                className="bg-[#C6A76B] text-white px-8 py-4 rounded-sm font-black text-[12px] uppercase tracking-[0.3em] hover:bg-[#b0945d] transition-all text-center shadow-xl"
                            >
                                Calculate Flooring Cost
                            </Link>
                            <Link
                                to="/contact"
                                className="border border-white text-white px-8 py-4 rounded-sm font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center"
                            >
                                Book Free Measurement
                            </Link>
                        </div>
                    </div>

                    <div className="relative h-[200px] lg:h-[450px] rounded-[6px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-[#C6A76B] text-[10px] uppercase tracking-[0.5em] mb-1 block">Premium Selection</span>
                                    <h3 className="text-2xl font-bold uppercase tracking-widest">{slide.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Background ambient light */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C6A76B]/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            </section>

            {/* 4. TRUST STRIP */}
            <section className="h-[90px] bg-[#111111] border-y border-white/5 flex items-center" data-reveal="up">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full">
                    <div className="flex flex-wrap justify-between items-center gap-4 text-[11px] lg:text-[13px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-3"><FiStar className="text-[#C6A76B]" size={18} /> <span className="text-white">5 Star Rated in London</span></div>
                        <div className="flex items-center gap-3"><FiMapPin className="text-[#C6A76B]" size={18} /> <span className="text-white">Tottenham Showroom</span></div>
                        <div className="flex items-center gap-3"><FiAward className="text-[#C6A76B]" size={18} /> <span className="text-white">12+ Years Experience</span></div>
                        <div className="flex items-center gap-3"><FiUsers className="text-[#C6A76B]" size={18} /> <span className="text-white">10,000+ Floors Installed</span></div>
                    </div>
                </div>
            </section>

            {/* 5. PREMIUM CALCULATOR */}
            <section id="calculator" className="py-24 bg-[#0B0B0B]" data-reveal="up">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Instant Flooring Cost Calculator</h2>
                        <p className="text-[#BFBFBF] tracking-widest uppercase text-xs">Calculate materials and installation instantly</p>
                    </div>
                    <Calculator />
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
                        <img
                            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                            alt="MFA Floors Showroom"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                            <FiMapPin className="text-[#C6A76B]" /> Showroom Photo
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
