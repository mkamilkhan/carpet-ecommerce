import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const FittingService = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Fitting</span>
                </div>

                <div className="space-y-16">
                    {/* Header */}
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Services</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            We can arrange fitting
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            Carpet fitting, along with laminate, LVT, vinyl, and engineered wood flooring installation, is a job best left to the experts. We've a little black book of professional fitters throughout the UK, and we trust them to fit your carpet or flooring quickly, efficiently, and perfectly. In many cases, we’re able to arrange delivery and fitting within days through the fitters.
                        </p>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed font-medium">
                            They’ll also take away your offcuts and give your new flooring a vacuum so it’s ready for you to enjoy straight away. Of course, you’re more than welcome to use your own carpet or flooring fitter - the choice is yours! At MFA Floors, a quote for new flooring is completely tailored to you so you only pay for the services you need.
                        </p>
                    </div>

                    {/* How much does fitting cost? */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">How much does fitting cost?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-8">
                            Fitting costs vary depending on the size of your room, where the floor is to be laid and the flooring type being installed. Prices start from £5.50 per m2 for carpet. As we use independent fitters, the cost for fitting is payable directly to the fitter on the day of installation.
                        </p>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-8">
                            Take a look at the table below for some indicative costs by room size. The costs include a small fee for arranging the fitting with professional fitters. Minimum charges apply, as do supplements in some product types (e.g. sisal), locations (e.g. London) and for complex fitting (e.g. herringbone, stairs). Ask one of the MFA Floors team to provide you with a tailored estimate based on your requirements.
                        </p>

                        <div className="overflow-x-auto border border-white/10 rounded-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#111111] text-[#C6A76B] text-xs font-black uppercase tracking-widest border-b border-white/10">
                                    <tr>
                                        <th className="p-4">Flooring type</th>
                                        <th className="p-4">Price from</th>
                                        <th className="p-4">Small Room (3x4m)</th>
                                        <th className="p-4">Medium Room (4x4m)</th>
                                        <th className="p-4">Large Room (5x4m)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#BFBFBF] text-sm font-bold">
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 uppercase tracking-widest text-white">Carpet</td>
                                        <td className="p-4 text-[#C6A76B]">£5.50 sqm</td>
                                        <td className="p-4">£66</td>
                                        <td className="p-4">£88</td>
                                        <td className="p-4">£110</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 uppercase tracking-widest text-white">Vinyl</td>
                                        <td className="p-4 text-[#C6A76B]">£6.75 sqm</td>
                                        <td className="p-4">£81</td>
                                        <td className="p-4">£108</td>
                                        <td className="p-4">£135</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 uppercase tracking-widest text-white">Laminate</td>
                                        <td className="p-4 text-[#C6A76B]">£15 sqm</td>
                                        <td className="p-4">£180</td>
                                        <td className="p-4">£240</td>
                                        <td className="p-4">£300</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 uppercase tracking-widest text-white">Click LVT</td>
                                        <td className="p-4 text-[#C6A76B]">£15 sqm</td>
                                        <td className="p-4">£180</td>
                                        <td className="p-4">£240</td>
                                        <td className="p-4">£300</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 uppercase tracking-widest text-white">Dryback LVT</td>
                                        <td className="p-4 text-[#C6A76B]">£17.50 sqm</td>
                                        <td className="p-4">£210</td>
                                        <td className="p-4">£280</td>
                                        <td className="p-4">£350</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 uppercase tracking-widest text-white">Engineered Wood</td>
                                        <td className="p-4 text-[#C6A76B]">£26 sqm</td>
                                        <td className="p-4">£312</td>
                                        <td className="p-4">£416</td>
                                        <td className="p-4">£520</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">How it works</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed">
                            Our flooring experts will ask if you need your new flooring fitted when they are putting together a full quote. If the answer is yes, you’ll receive a very excited email from us when your new flooring has arrived in-store, asking you to give the store a call so we can arrange a convenient fitting date with the independent fitters. You’ll then receive a confirmation email with your fitting date and the countdown to the floor of your dreams has begun!
                        </p>
                    </div>

                    {/* What can I expect on the day */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">What can I expect on the day?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6">
                            The day before installation, we’ll send an email reminding you that your new flooring is going to be fitted tomorrow – as if you’d forgotten! On the day of fitting, you'll receive a call from the fitter letting you know when they'll arrive. Please ensure rooms where flooring is being installed are as clear as possible, and empty out any furniture that needs moving.
                        </p>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed">
                            As part of our Delivery & Care package, the fitters are happy to move up to 5 pieces of empty furniture. Unfortunately, they won't be able to move plumbed or wired items, or really heavy items like pianos or pool tables. Please let us know if any items require two people to move them.
                        </p>
                    </div>

                    {/* What fitting services do you offer? */}
                    <div className="bg-[#111111] p-10 border border-white/10 rounded-sm">
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-8 text-[#C6A76B]">What fitting services do you offer?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-10">
                            The fitters offer a huge array of additional services to help get the perfect fit. From fitting your new carpet or flooring with underlay and accessories, to uplifting and removing your old flooring, MFA Floors can offer you a quote and arrange for the fitters to carry out these works for you. At MFA Floors – no mountain is too high! Just ask for these services at the time of ordering.
                        </p>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#C6A76B]" /> Fitting</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6">Whatever flooring you’ve chosen, be it carpet, vinyl, laminate, or LVT, the professional fitters have the skills and experience to get a perfect fit. They’ll also lay underlay and accessories like door bars, grippers, or stair rods. Fitting a new carpet can be done in as quickly as 30 minutes! Now that’s speedy!</p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#C6A76B]" /> Uplift & Removal</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6">Before your new gorgeous new carpet or flooring can be fitted, your old floor needs to be removed. It’s a messy and pretty dusty job but the fitters are happy to get stuck in! Prices start from £5.50 per m2 for uplift and disposal, a small price to pay for stress-free installation.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#C6A76B]" /> Subfloor preparation</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6 mb-4">A perfect new floor needs a smooth, solid foundation. From installing a DPM (damp proof membrane) to preparing your subfloor with ply board, screed or a latex smoothing compound, the fitters can get your subfloor ready for your new floor. We’ll try to assess the condition of your subfloor when we visit your house to measure up, but we won't be able to ascertain if your subfloor requires extra prep work if your existing flooring is in situ at the time of the inspection.</p>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6">If the fitters are installing your new floor and they do find that what’s underneath your existing floor needs work to make it right, in the majority of cases, they can help you resolve the problem. But there may be rare occasions where they advise you to bring in the services of a specialist contractor. Uneven floorboards, if left uncorrected, can adversely affect the appearance of your new flooring.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#C6A76B]" /> Door easing</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6">There are times when your doors may need some height adjustment easing. For example, if you go from a smooth floor to a thick, luxury carpet. At MFA Floors, we do our best to help and some, but not all, of the fitters can trim standard doors. However, fire, glass, panelled, hollow and chain doors would be best left to specialist carpenters. Let us know the type of doors you have so we can help with the best solution. Some of our showrooms can recommend local carpenters that are on hand to help too.</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#C6A76B]" /> Carpet whipping</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6">We can make any carpet into a rug or stair runner. Let us know the size you need and we’ll whip it into shape with our carpet whipping service! This specialist skill involves taping the edge of the cut carpet with a single, double, or piped border, in a variety of materials such as cotton, linen, and faux leather. This is also a great way to use good size off cuts from your new carpet to make little protective entrance mats that match. Ask your local MFA Floors store for details.</p>
                            </div>
                            
                            <div>
                                <h3 className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-2 mb-2"><FiCheckCircle className="text-[#C6A76B]" /> 10-year fitting guarantee</h3>
                                <p className="text-[#BFBFBF] text-base leading-relaxed pl-6">When your carpet, accessories and underlay are all purchased from MFA Floors and when your fitting service is arranged by us with recommended professional independent fitters, you qualify for a 10-year fitting guarantee. Hurrah! This means that should you encounter any issues with the installation within 10 years from the date on your invoice, we'll arrange for the fitters to rectify them free of charge. Please keep your receipt for proof of purchase. Your carpet must stay in the original location and not be moved or tampered with and should be used only according to our recommendations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Can I fit flooring myself */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">Can I fit flooring myself?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6">
                            If you want to try fitting your new flooring yourself, go for it! You’ll need a few tools and some take longer than others, but it’s a great way to learn a new skill. Our handy experts will give you simple step-by-step instructions on how to fit your new carpet, laminate, vinyl, or LVT.
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

export default FittingService;
