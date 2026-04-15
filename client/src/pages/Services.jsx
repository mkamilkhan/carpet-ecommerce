import React from 'react';
import { FiClock, FiSettings, FiCheckCircle, FiShield, FiTag, FiTruck, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import serviceVideo from '../assets/servicCarpet.mp4';

const Services = () => {
    const bannerItems = [
        { icon: <FiClock size={24} />, label: "Express Fitting" },
        { icon: <FiSettings size={24} />, label: "Uplift & Removal" },
        { icon: <FiCheckCircle size={24} />, label: "Laser Measure" },
        { icon: <FiShield size={24} />, label: "0% Finance" },
        { icon: <FiTag size={24} />, label: "Price Promise" },
        { icon: <FiTruck size={24} />, label: "Care Package" },
    ];

    const servicesGrid = [
        {
            title: "We can arrange fitting",
            desc: "Sit back, relax and let professional fitters install your new flooring – we can arrange delivery and fitting in days",
            img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800",
            tag: "Expert Fit",
            link: "/services/fitting"
        },
        {
            title: "Uplift & Removal Service",
            desc: "It’s out with the old floor and in with the new! We can arrange for the hard work to be taken care of.",
            img: "https://contenu.nyc3.cdn.digitaloceanspaces.com/journalist%2F9b9c4465-a87c-4c9d-ab18-7fd47943cb0f%2Fthumbnail.jpeg",
            tag: "Hassle-Free",
            link: "/services/uplift-and-disposal"
        },
        {
            title: "Free Measuring & Planning",
            desc: "Book a home visit and we’ll bring our store to you!",
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
            tag: "Planning",
            link: "/services/measuring-and-planning"
        },
        {
            title: "Interest Free Credit",
            desc: "There’s no deposit to pay and 0% APR with our interest free credit option.",
            img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
            tag: "Finance",
            link: "/services/interest-free-credit"
        },
        {
            title: "Our Carpet Price Promise",
            desc: "Get the carpet of your dreams and save money at the same time!",
            img: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
            tag: "Value",
            link: "/services/our-carpet-price-promise"
        },
        {
            title: "Flooring guarantees",
            desc: "Enjoy peace of mind for years to come with free guarantees on many of our carpets and floors",
            img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
            tag: "Security",
            link: "/services/wear-guarantee"
        },
        {
            title: "10-year Fitting Guarantee",
            desc: "We promise to fix any carpet installation issues for free!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb1jDJWEht-8_ct5z8V5rKpZgfdlq5oyMx8Q&s",
            tag: "Guarantee",
            link: "/services/10-year-fitting-guarantee"
        },
        {
            title: "Carpet Whipping",
            desc: "Create made-to-measure rugs and stair runners from your favourite carpet.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlF0xCQ6yhuIVgCPcVX0aZA8sF4s88d-vCAA&s",
            tag: "Bespoke",
            link: "/services/carpet-whipping"
        },
        {
            title: "Delivery & Care Package",
            desc: "From delivery to your door to arranging hassle-free fitting, let us take care of everything!",
            img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
            tag: "Complete",
            link: "/services/delivery-and-care-package"
        }
    ];

    return (
        <div className="bg-[#0B0B0B] min-h-screen text-white">


            {/* HEADER SECTION */}
            <div className="relative min-h-[80vh] flex items-center pt-32 pb-16 overflow-hidden" data-reveal="fade">
                <div className="absolute inset-0 z-0">
                    <video
                        src={serviceVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] z-10" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#C6A76B] mb-6 block">Our Capabilities</span>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none text-white">
                        Uncompromising <br /><span className="text-[#C6A76B] italic">Service.</span>
                    </h1>
                    <p className="text-[#BFBFBF] text-base md:text-lg leading-relaxed max-w-3xl mx-auto opacity-80 font-medium mb-6">
                        We have a huge selection of extra services to choose from when you buy your flooring from us. Did you know we can arrange to remove and dispose of your old flooring before fitting your new one? We also offer a free measuring and planning service, as well as interest free credit, to make it as easy as possible to turn your dream floor into a reality.
                    </p>
                    <p className="text-[#C6A76B] text-sm font-black uppercase tracking-widest">
                        Whatever you need, MFA Floors will come to the rescue!
                    </p>
                </div>
            </div>
            {/* TOP PREMIUM STRIP */}
            <div className="bg-[#111111] py-12 border-b border-white/5 overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-12 flex flex-wrap justify-between gap-6">
                    {bannerItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 group transition-all">
                            <div className="w-12 h-12 rounded-sm border border-[#C6A76B]/20 flex items-center justify-center text-[#C6A76B] bg-[#C6A76B]/5 group-hover:bg-[#C6A76B] group-hover:text-white transition-all duration-500">
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] font-black group-hover:text-[#C6A76B] transition-colors">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* SERVICES GRID */}
            <div className="max-w-[1440px] mx-auto px-6 pb-32" data-reveal="up">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesGrid.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-[#111111] border border-white/5 rounded-sm overflow-hidden group hover:border-[#C6A76B]/30 transition-all duration-700 shadow-2xl"
                        >
                            <div className="relative h-[300px] overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-6 left-6 px-4 py-2 bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10 rounded-sm">
                                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C6A76B]">{service.tag}</span>
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#C6A76B] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#BFBFBF]/60 text-sm leading-relaxed mb-10 min-h-[60px]">
                                    {service.desc}
                                </p>
                                <Link to={service.link || '/contact'} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.5em] text-[#C6A76B] hover:gap-5 transition-all">
                                    Read More <FiArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 bg-[#111111] border border-white/5 rounded-sm p-12 lg:p-20 text-center relative overflow-hidden" data-reveal="zoom">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A76B]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-6">Need a expert home <br /><span className="text-[#C6A76B]">Consultation?</span></h2>
                        <p className="text-[#BFBFBF]/60 text-lg mb-12 max-w-2xl mx-auto uppercase tracking-widest text-[10px] font-bold">Our master consultants visit your sanctuary to provide laser-accurate measurements and style guidance.</p>
                        <Link to="/contact" className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#b0945d] transition-all shadow-xl">
                            Book Free Home Visit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
