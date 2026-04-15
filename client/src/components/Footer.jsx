import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiInstagram, FiFacebook, FiTwitter, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const aboutLinks = [
        { name: 'About MFA Floors', link: '/about' },
        { name: 'Trust', link: '/trust' },
        { name: 'Get in touch', link: '/contact' },
        { name: 'Help Centre', link: '/help' },
        { name: 'Careers', link: '/careers' },
        { name: 'Charity', link: '/charity' },
    ];

    const servicesLinks = [
        { name: 'Book your Home Visit', link: '/contact' },
        { name: 'Find your nearest store', link: '/contact' },
        { name: 'Measuring & Planning', link: '/services' },
        { name: 'Fitting', link: '/services' },
        { name: 'Uplift & Removal', link: '/services' },
        { name: 'Interest Free Credit', link: '/services' },
        { name: 'Wear guarantee', link: '/services' },
        { name: 'Business to Business', link: '/services' },
    ];

    const usefulLinks = [
        { name: 'Carpet', link: '/collection?category=Carpets' },
        { name: 'Vinyl Flooring', link: '/collection?category=Vinyl' },
        { name: 'Laminate Flooring', link: '/collection?category=Laminate' },
        { name: 'Luxury Vinyl Tiles', link: '/collection?category=Vinyl' },
        { name: 'Engineered Wood Flooring', link: '/collection?category=Wood' },
        { name: 'Herringbone Flooring', link: '/collection?category=Wood' },
        { name: 'Rugs', link: '/collection?category=Rugs' },
        { name: 'Flooring Guide', link: '/about' },
    ];

    const shopByRoom = [
        { name: 'Bedroom Flooring', link: '/collection?room=Bedroom' },
        { name: 'Bathroom Flooring', link: '/collection?room=Bathroom' },
        { name: 'Kitchen Flooring', link: '/collection?room=Kitchen' },
        { name: 'Living Room Flooring', link: '/collection?room=Lounge' },
        { name: 'Flooring for Stairs', link: '/collection?room=Stairs' },
        { name: 'Hallway Flooring', link: '/collection?room=Hall' },
        { name: 'Dining Room Flooring', link: '/collection?room=Dining' },
        { name: 'Home Office Flooring', link: '/collection?room=Home Office' },
    ];

    const bottomLinks = [
        { name: 'Terms of Use', link: '/terms' },
        { name: 'Privacy Policy', link: '/privacy' },
        { name: 'Press Office', link: '/press' },
        { name: 'HTML Sitemap', link: '/sitemap' },
        { name: 'Anti-Modern Slavery Statement', link: '/anti-slavery' },
        { name: 'Terms and Conditions of Purchase', link: '/terms' },
        { name: 'Tax Strategy', link: '/tax' },
    ];

    const socialLinks = [
        { icon: <FiFacebook />, link: '#' },
        { icon: <FiInstagram />, link: '#' },
        { icon: <FiTwitter />, link: '#' },
        { icon: <FiYoutube />, link: '#' },
        { icon: <FiLinkedin />, link: '#' },
    ];

    const renderLinks = (links) => {
        if (!links || links.length === 0) {
            return <p className="text-[#C6A76B] text-[11px] font-black uppercase tracking-[0.2em] mt-2 mb-4 bg-white/5 inline-block px-3 py-1.5 border border-[#C6A76B]/20 rounded-sm">No Data Available</p>;
        }
        return (
            <ul className="space-y-3">
                {links.map((item, idx) => (
                    <li key={idx}>
                        <Link to={item.link} className="text-[#BFBFBF] hover:text-[#C6A76B] transition-colors text-[13px] font-medium tracking-wide block truncate">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 border-t border-white/5 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    
                    {/* Column 1: About */}
                    <div>
                        <h4 className="text-white text-[13px] font-black uppercase tracking-wider mb-6">About MFA Floors</h4>
                        {renderLinks(aboutLinks)}
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-white text-[13px] font-black uppercase tracking-wider mb-6">Our Services</h4>
                        {renderLinks(servicesLinks)}
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h4 className="text-white text-[13px] font-black uppercase tracking-wider mb-6">Useful Links</h4>
                        {renderLinks(usefulLinks)}
                    </div>

                    {/* Column 4: Shop by Room */}
                    <div>
                        <h4 className="text-white text-[13px] font-black uppercase tracking-wider mb-6">Shop by Room</h4>
                        {renderLinks(shopByRoom)}
                    </div>

                    {/* Column 5: Newsletter */}
                    <div>
                        <h4 className="text-white text-[13px] font-black uppercase tracking-wider mb-6">Sign up for our newsletter</h4>
                        <p className="text-[#BFBFBF] text-[13px] leading-relaxed mb-6">
                            Receive the latest offers, promotions and MFA Floors news delivered straight to your inbox with our exclusive email newsletter.
                        </p>
                        <form className="relative border-b border-[#BFBFBF] hover:border-[#C6A76B] focus-within:border-[#C6A76B] transition-colors pb-2">
                            <input 
                                type="email" 
                                placeholder="Enter email address" 
                                className="w-full bg-transparent outline-none text-white placeholder:text-[#BFBFBF]/60 text-[14px]"
                                required
                            />
                            <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C6A76B] hover:text-white transition-colors">
                                <FiChevronRight size={22} />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
                    {/* Bottom Links */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
                        {bottomLinks.map((item, idx) => (
                            <Link key={idx} to={item.link} className="text-[#BFBFBF] hover:text-[#C6A76B] transition-colors text-[11px] font-bold">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Socials & Copyright */}
                    <div className="flex items-center gap-6 text-[#BFBFBF]">
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href={social.link} className="hover:text-[#C6A76B] transition-colors border border-white/10 p-2 rounded-full bg-[#111111] hover:border-[#C6A76B]">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center lg:text-left text-white/30 text-[10px] font-medium tracking-widest uppercase">
                    © {new Date().getFullYear()} MFA Floors London. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;