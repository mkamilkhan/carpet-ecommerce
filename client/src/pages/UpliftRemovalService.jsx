import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const UpliftRemovalService = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Uplift & Removal</span>
                </div>

                <div className="space-y-16">
                    {/* Header */}
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Services</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            Uplift & Removal Service
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            Getting rid of your old flooring might seem like an easy DIY task, but it’s one of those jobs that can be more hassle than it’s worth. At MFA Floors, we can arrange for professional independent fitters to give you the perfect fit. One of the additional services they offer is Uplift and Removal. Please note, we only offer this service if you've placed an order for new flooring with us.
                        </p>
                    </div>

                    {/* What’s included... */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">What’s included in the Uplift & Removal service?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-8">
                            Once you’ve placed an order with us, the fitter will need to take up the old flooring before your beautiful new flooring can go down. Removing old flooring is a messy job, and there’s also the old accessories to get rid of, such as underlay, grippers, and carpet tacks. Once they’ve been removed, the subfloor beneath needs to be inspected to see if any work needs doing. Finally, the subfloor needs to be swept and vacuumed so it’s free from dust and dirt, ready for the new flooring to be installed. The fitter will also remove and dispose of your old flooring in a safe and sensible manner. All of this is included in the Uplift and Removal fee, so you can sit back and relax. 
                        </p>
                    </div>

                    {/* How long does it take... */}
                    <div className="bg-[#111111] p-10 border border-white/10 rounded-sm">
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-[#C6A76B]">How long does it take to remove old flooring?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed">
                            The time it takes to remove your old floor depends on what type of flooring it is and how it’s been fitted. Carpet is very quick to remove, maybe even less than 10 minutes for an average-sized room, so this will normally take place on the day of fitting. Vinyl flooring that’s only stuck down at the edges can also be ripped up within minutes. Smooth flooring like luxury vinyl or laminate needs to be removed plank by plank so therefore takes a bit longer, and depends on other variables, such as whether the room is empty, whether any subfloor work needs doing, or in the case of dryback luxury vinyl, how well it’s stuck down and to what! All of this can be assessed by a MFA Floors home consultant when they visit.
                        </p>
                    </div>

                    {/* How much does it cost */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">How much does it cost?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6">
                            That depends on what the fitters have to do. But don’t worry, we’ll give you a clear quote and, once you’re happy to go ahead, we can make arrangements with the fitter so you can breathe a sigh of relief that the old flooring will be gone before your new one is installed. Simple pay the fitter directly for this service on the day they fit your new carpet or flooring.
                        </p>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed font-bold">
                            Do you need your new flooring fitted? We can arrange fitting with professional independent fitters around the UK.
                        </p>
                    </div>

                    {/* Call to Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                           <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Book an Appointment</span>
                           <span className="text-2xl font-black uppercase">Store Visit</span>
                        </Link>
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                           <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Book a Free</span>
                           <span className="text-2xl font-black uppercase">Home Visit</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UpliftRemovalService;
