import React from 'react';
import OffersHero from '../components/OffersHero';
import CategoryCards from '../components/CategoryCards';

const Offers = () => {
    return (
        <div className="bg-[#0B0B0B] text-white overflow-hidden">
            <div className="relative">
                <OffersHero />
                {/* <CategoryCards /> */}
                {/* <div className="h-32 lg:h-40 bg-[#0B0B0B]" /> */}
            </div>

            {/* You can add more offers-specific content here */}
        </div>
    );
};

export default Offers;
