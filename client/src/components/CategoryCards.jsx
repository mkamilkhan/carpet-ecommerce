import React from 'react';
import { Link } from 'react-router-dom';
import { FiBox, FiLayers, FiAlignJustify, FiGrid, FiMaximize, FiTag } from 'react-icons/fi';

const CategoryCards = () => {
    const cards = [
        { title: 'Carpets', icon: <FiBox size={36} />, link: '/collection?category=Carpets' },
        { title: 'Vinyl', icon: <FiLayers size={36} />, link: '/collection?category=Vinyl Flooring' },
        { title: 'Laminate', icon: <FiAlignJustify size={36} />, link: '/collection?category=Laminate Flooring' },
        { title: 'Engineered Wood', icon: <FiMaximize size={36} />, link: '/collection?category=Engineered Wood Flooring' },
        { title: '50% OFF', icon: <FiTag size={36} />, link: '/collection?onSale=true', isPromo: true },
    ];

    return (
        <div className="absolute -bottom-16 left-0 w-full z-30 transition-all hidden lg:block">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-center gap-2 lg:gap-4">
                {cards.map((card, idx) => (
                    <Link
                        key={idx}
                        to={card.link}
                        className={`w-[210px] h-[190px] flex flex-col items-center justify-center gap-6 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${card.isPromo ? 'bg-[#EF4444] text-white' : 'bg-white text-[#333333]'
                            }`}
                    >
                        <div className={`${card.isPromo ? 'text-white' : 'text-[#333333]/40'} mb-2`}>
                            {card.icon}
                        </div>
                        <span className="text-[14px] font-black uppercase tracking-widest text-center">{card.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryCards;
