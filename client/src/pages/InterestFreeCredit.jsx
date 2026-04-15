import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle, FiCreditCard, FiPercent, FiCalendar } from 'react-icons/fi';

const InterestFreeCredit = () => {
    return (
        <div className="bg-[#0B0B0B] text-white min-h-screen pt-24 font-sans">
            <div className="max-w-[1000px] mx-auto px-6 lg:px-12 py-16">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 mb-12">
                    <Link to="/services" className="hover:text-[#C6A76B] transition-colors">Services</Link>
                    <FiChevronRight />
                    <span className="text-white">Interest Free Credit</span>
                </div>

                <div className="space-y-16">
                    {/* Header */}
                    <div>
                        <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Services</span>
                        <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-8 text-white leading-none">
                            Interest Free Credit
                        </h1>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed mb-6 font-medium">
                            We know that buying new flooring for your home can be an investment, so we’re here to make everything go as smoothly as possible for you. Now, there’s no need to wait until you’ve saved up those pennies in your piggy bank before you buy a new carpet or flooring – get the floor you adore today with 0% APR and no deposit!
                        </p>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed font-medium">
                            At MFA Floors, we’re delighted to be able to offer you a range of interest free payment options on all purchases of £500 or more (excluding fitting costs). It's so quick to sort out and you'll have a decision in less time than it takes to make a cup of tea!
                        </p>
                    </div>

                    {/* How does it work? */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#111111] p-10 lg:p-16 border border-white/10 rounded-sm">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white text-[#C6A76B]">How does interest free credit work?</h2>
                            <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                                Once we’ve got the green light, we’ll set up a direct debit with your bank and you can decide how long you’d like to pay the balance off. You can choose to spread your payments across either 6, 10, 20 or 30 monthly interest free instalments (provided you’ve reached the minimum spend required).
                            </p>
                            <p className="text-[#BFBFBF] text-base leading-relaxed">
                                These monthly payments don’t include the cost of fitting your flooring as it’s carried out by third parties, so that’s the only thing you’ll need to pay for at the time of having your flooring fitted.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-48 h-48 rounded-full border-4 border-[#C6A76B]/20 flex items-center justify-center relative">
                                <div className="absolute inset-0 border-4 border-[#C6A76B] border-t-transparent rounded-full animate-spin-slow" />
                                <FiPercent size={64} className="text-[#C6A76B]" />
                            </div>
                        </div>
                    </div>

                    {/* Pricing Table */}
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white text-center">How much will it cost me?</h2>
                        <div className="overflow-x-auto border border-white/10 rounded-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#111111] text-[#C6A76B] text-xs font-black uppercase tracking-widest border-b border-white/10">
                                    <tr>
                                        <th className="p-4">Plans</th>
                                        <th className="p-4">Minimum Credit</th>
                                        <th className="p-4">Deposit</th>
                                        <th className="p-4">Monthly Payment</th>
                                        <th className="p-4">Amount of Credit</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#BFBFBF] text-sm font-bold">
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 text-white uppercase tracking-widest">6 Months</td>
                                        <td className="p-4">£500</td>
                                        <td className="p-4">£0</td>
                                        <td className="p-4 text-[#C6A76B]">£83.33</td>
                                        <td className="p-4">£500</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 text-white uppercase tracking-widest">10 Months</td>
                                        <td className="p-4">£1000</td>
                                        <td className="p-4">£0</td>
                                        <td className="p-4 text-[#C6A76B]">£100</td>
                                        <td className="p-4">£1000</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 text-white uppercase tracking-widest">20 Months</td>
                                        <td className="p-4">£2000</td>
                                        <td className="p-4">£0</td>
                                        <td className="p-4 text-[#C6A76B]">£100</td>
                                        <td className="p-4">£2000</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-[#111111]/50 transition-colors">
                                        <td className="p-4 text-white uppercase tracking-widest">30 Months</td>
                                        <td className="p-4">£3000</td>
                                        <td className="p-4">£0</td>
                                        <td className="p-4 text-[#C6A76B]">£100</td>
                                        <td className="p-4">£3000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Representative Example */}
                    <div className="bg-[#111111] p-10 border-l-4 border-[#C6A76B] rounded-sm">
                        <h3 className="text-xl font-black uppercase tracking-widest mb-6 text-white">Representative Example</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#BFBFBF]/60 mb-1">Cash Price</span>
                                <span className="text-lg font-black text-[#C6A76B]">£2000</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#BFBFBF]/60 mb-1">Deposit</span>
                                <span className="text-lg font-black text-[#C6A76B]">£0</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#BFBFBF]/60 mb-1">Payments</span>
                                <span className="text-lg font-black text-[#C6A76B]">20</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#BFBFBF]/60 mb-1">Monthly</span>
                                <span className="text-lg font-black text-[#C6A76B]">£100</span>
                            </div>
                            <div>
                                <span className="block text-[10px] uppercase tracking-widest text-[#BFBFBF]/60 mb-1">APR</span>
                                <span className="text-lg font-black text-[#C6A76B]">0% Rep</span>
                            </div>
                        </div>
                        <p className="mt-6 text-[10px] text-[#BFBFBF]/40 italic uppercase tracking-widest">Interest rate 0% fixed</p>
                    </div>

                    {/* Eligibility */}
                    <div className="space-y-8">
                        <h2 className="text-2xl lg:text-3xl font-black uppercase tracking-tight mb-6 text-white">Who is eligible for interest free credit?</h2>
                        <p className="text-[#BFBFBF] text-lg leading-relaxed">To take advantage of our interest free credit payment option, you must tick the following four boxes:</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Minimum age of 18 years",
                                "UK Resident of more than 3 years",
                                "Personal bank account for Direct Debit",
                                "Personal purchase use (not landlords)"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-[#111111] p-4 border border-white/5 rounded-sm">
                                    <FiCheckCircle className="text-[#C6A76B]" />
                                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#BFBFBF] text-lg pt-4">You must also be either:</p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                "Permanently employed (16h+ p/w)",
                                "Self-employed",
                                "Retired",
                                "On disability allowance",
                                "Registered carer",
                                "Houseperson with working spouse"
                            ].map((item, idx) => (
                                <span key={idx} className="px-4 py-2 bg-[#111111] border border-[#C6A76B]/20 text-[10px] font-black uppercase tracking-widest text-[#C6A76B] rounded-full">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Legal Footer */}
                    <div className="pt-12 border-t border-white/10 opacity-40">
                         <p className="text-[10px] leading-relaxed uppercase tracking-widest font-medium">
                            Terms and Conditions: Credit excludes fitting and service charges. £500 minimum credit value. No deposit required. Terms and conditions apply. Subject to status and affordability. MFA Floors Ltd, registered in London. MFA Floors is authorised and registered by the Financial Conduct Authority.
                        </p>
                    </div>

                    {/* Call to Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-white/10">
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                           <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Book an Appointment</span>
                           <span className="text-2xl font-black uppercase">Store Visit</span>
                        </Link>
                        <Link to="/contact" className="bg-[#111111] hover:bg-[#C6A76B] text-white p-8 rounded-sm text-center transition-colors group">
                           <span className="block text-[#C6A76B] group-hover:text-white font-black uppercase tracking-widest text-xs mb-2">Inquire Online</span>
                           <span className="text-2xl font-black uppercase">Expert Advice</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InterestFreeCredit;
