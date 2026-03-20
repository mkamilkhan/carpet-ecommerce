import React from 'react';
import Calculator from '../components/Calculator';
import calcVideo from '../assets/shopCarpet.mp4';

const CalculatorPage = () => {
    return (
        <div className="bg-[#0B0B0B] min-h-screen pt-32 pb-40">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="relative h-[45vh] lg:h-[55vh] flex items-center pt-20 overflow-hidden" data-reveal="fade">
                <div className="absolute inset-0 z-0">
                    <video
                        src={calcVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0B0B]/40 to-[#0B0B0B] z-10" />
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center">
                    <span className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.6em] mb-6 block">Precision Estimation</span>
                    <h1 className="text-6xl lg:text-[84px] font-black uppercase tracking-tighter mb-10 leading-none text-white">The <span className="text-[#C6A76B] italic font-serif leading-none">Quotation.</span></h1>
                    <p className="text-[#BFBFBF] text-lg uppercase tracking-[0.2em] font-bold text-xs opacity-80 max-w-2xl mx-auto">
                        Engineer your project's foundation with our master estimation tool. Instant valuations.
                    </p>
                </div>
            </div>

                <div className="max-w-[1100px] mx-auto">
                    <Calculator />
                </div>

                <div className="mt-32 text-center p-12 bg-[#111111] border border-white/5 rounded-sm shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A76B]/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 relative z-10 italic">Require a Professional Survey?</h2>
                    <p className="text-white/40 uppercase tracking-[0.4em] text-[11px] font-bold mb-10 relative z-10">Our master surveyors visit your residence with Laser-Precision tools for an exact architectural blueprint.</p>
                    <a href="/contact" className="inline-block bg-[#C6A76B] text-white px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.5em] hover:bg-[#b0945d] transition-all relative z-10 shadow-xl">
                        Book Master Survey
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CalculatorPage;
