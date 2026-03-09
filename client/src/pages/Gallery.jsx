import React from 'react';

const Gallery = () => {
    const galleryItems = [
        { src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80', title: 'Silk Weave Collection', category: 'Luxury Carpet' },
        { src: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&w=800&q=80', title: 'Aged Oak Artisan', category: 'Laminate' },
        { src: 'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&w=800&q=80', title: 'Belgravia Runner', category: 'Stairs' },
        { src: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80', title: 'French Herringbone', category: 'Wood' },
        { src: 'https://images.unsplash.com/photo-1581850518616-bcb8186c3988?auto=format&fit=crop&w=800&q=80', title: 'Industrial Gray', category: 'Vinyl' },
        { src: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80', title: 'Royal Plush Velvet', category: 'Carpet' },
        { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80', title: 'Chelsea Penthouse', category: 'Laminate' },
        { src: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5ea?auto=format&fit=crop&w=800&q=80', title: 'Architectural Stone', category: 'Vinyl' },
        { src: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&w=800&q=80', title: 'Master Sanctuary', category: 'Carpet' },
    ];

    return (
        <div className="bg-[#0B0B0B] min-h-screen pt-32 pb-40">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="text-center mb-32 max-w-3xl mx-auto" data-reveal="fade">
                    <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Visual Inspiration</span>
                    <h1 className="text-6xl lg:text-9xl font-black uppercase tracking-tighter mb-10 leading-none">The <span className="text-[#C6A76B] italic font-serif">Portfolio.</span></h1>
                    <p className="text-[#BFBFBF]/60 text-lg uppercase tracking-[0.2em] font-bold text-xs">
                        A curated archive of our most prestigious installations across London's finest residences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" data-reveal="up">
                    {galleryItems.map((item, i) => (
                        <div key={i} className="group relative rounded-sm overflow-hidden border border-white/5 cursor-crosshair">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
                                <span className="text-[#C6A76B] text-[9px] font-black uppercase tracking-[0.4em] mb-3 block">{item.category}</span>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-white leading-none">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-40 border-t border-white/5 pt-20 text-center">
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">Your masterwork <br /><span className="text-[#C6A76B]">Starts here.</span></h2>
                    <a href="/contact" className="inline-block text-[#C6A76B] border-b border-[#C6A76B] pb-2 text-[11px] font-black uppercase tracking-[0.5em] hover:text-white hover:border-white transition-all">
                        Consult with an Artisan
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
