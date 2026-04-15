import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiHome, FiMapPin, FiCalendar } from 'react-icons/fi';

const MeasuringPlanningService = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Measuring & Planning</span>
                </div>

                <div className="space-y-16">
                    {/* Header */}
                    <div className="bg-[#111111] p-12 lg:p-20 rounded-sm border border-white/10 relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A76B]/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block relative z-10">Our Services</span>
                        <h1 className="text-4xl lg:text-7xl font-black uppercase tracking-tighter mb-8 text-white leading-none relative z-10">
                            Free Measuring <br /> & Planning
                        </h1>
                        <p className="text-[#BFBFBF] text-lg lg:text-xl font-bold uppercase tracking-[0.2em] relative z-10">
                            Book a home visit and we'll bring our store to you!
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-8">
                            Hurrah! It's time to choose some gorgeous new flooring for your home. But before you start getting giddy about choosing <span className="text-[#C6A76B] font-bold">carpet</span> colours or vinyl patterns, the first thing you need to do is measure your floor. This is where our expert floorologists (say it slowly: floor-o-logists) come in. Many have over two decades of experience in the wonderful world of flooring, so they know their stuff. And when we come to measure, you can enjoy our 5-star service and flooring expertise in the comfort of your own home - for free!
                        </p>

                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white border-b border-[#C6A76B] pb-4">What's included in a home visit?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-8">
                            As part of our Measure & Planning service, we'll happily come to your home and measure your room (or rooms) for your new flooring to make sure any quote we give is 100% accurate. Our floorologists will bring along a ginormous collection of flooring samples so you can see exactly what the carpet, laminate, or vinyl you love will look like and feel like in your home. Using their flooring super-knowledge, they'll help you plan your space and get you one step closer to your dream floor. Call us Goldilocks - we'll make sure your new carpet, vinyl, laminate, or luxury vinyl is just right.
                        </p>

                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white border-b border-[#C6A76B] pb-4">Can I measure my floor myself?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-12">
                            We've also put together a measuring guide to help you learn how to measure your floors and stairs like a pro. All you need is a tape measure, a pen or pencil (popped behind your ear to look extra professional), a piece of paper, and a ruler, plus a helpful assistant, if you can find one. That's it - just pour yourself a cup of tea and you're ready to take a look at our simple step-by-step guide on how to measure a room or how to measure stairs, hallways and landings.
                        </p>
                    </div>

                    {/* Images Section Placeholder */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group">
                            <img src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800" alt="Measuring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                        </div>
                        <div className="aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group">
                            <img src="https://images.unsplash.com/photo-1595844730298-b960fa25e9e3?auto=format&fit=crop&q=80&w=800" alt="Planning" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                        </div>
                    </div>

                    {/* Booking Section */}
                    <div className="bg-[#111111] p-12 lg:p-20 text-center rounded-sm border border-white/10 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C6A76B]/5 blur-[100px] rounded-full -ml-32 -mb-32" />
                        <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-10 relative z-10 text-white">Ready for your <br /><span className="text-[#C6A76B]">Free Consultation?</span></h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                            <Link to="/contact" className="flex items-center justify-center gap-3 bg-[#C6A76B] text-white px-10 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#b0945d] transition-all shadow-xl">
                                <FiCalendar size={20} />
                                Book Free Home Visit
                            </Link>
                            <Link to="/contact" className="flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] hover:bg-white/10 transition-all">
                                <FiMapPin size={20} />
                                Find Your Store
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeasuringPlanningService;
