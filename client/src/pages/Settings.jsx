import React from 'react';
import { FiUser, FiLock, FiBell, FiGlobe } from 'react-icons/fi';

const Settings = () => {
    return (
        <div className="space-y-12 pb-10">
            <div>
                <h2 className="text-5xl font-black text-brand-text uppercase tracking-tighter italic">Preferences</h2>
                <p className="text-brand-text/60 text-sm font-medium mt-1">Configure your artisan dashboard and account security.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-72 space-y-3">
                    <button className="w-full flex items-center gap-4 px-6 py-4 bg-brand-light text-brand-btn font-black uppercase text-[10px] tracking-widest rounded-xl shadow-2xl shadow-brand-light/10">
                        <FiUser size={16} /> Profile
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-brand-light/40 hover:bg-brand-light/5 hover:text-brand-light font-black uppercase text-[10px] tracking-widest rounded-xl transition-all border border-brand-light/5">
                        <FiLock size={16} /> Security
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-brand-light/40 hover:bg-brand-light/5 hover:text-brand-light font-black uppercase text-[10px] tracking-widest rounded-xl transition-all border border-brand-light/5">
                        <FiBell size={16} /> Notifications
                    </button>
                    <button className="w-full flex items-center gap-4 px-6 py-4 text-brand-light/40 hover:bg-brand-light/5 hover:text-brand-light font-black uppercase text-[10px] tracking-widest rounded-xl transition-all border border-brand-light/5">
                        <FiGlobe size={16} /> Language
                    </button>
                </div>

                <div className="flex-1 bg-brand-card p-10 rounded-[2rem] shadow-2xl border border-brand-light/10">
                    <h3 className="text-3xl font-black text-brand-light uppercase tracking-tighter mb-10 italic">Profile Credentials</h3>

                    <div className="space-y-10 max-w-lg">
                        <div className="flex items-center gap-8">
                            <div className="w-24 h-24 bg-brand-bg border border-brand-light/10 rounded-full flex items-center justify-center text-3xl text-brand-light font-black italic shadow-inner">JD</div>
                            <button className="px-6 py-3 border border-brand-light/20 rounded-xl text-[10px] font-black uppercase tracking-widest text-brand-light hover:bg-brand-light/5 transition-all">Change Identity</button>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-[10px] font-black text-brand-light/40 uppercase tracking-widest mb-3">Given Name</label>
                                <input type="text" defaultValue="John" className="w-full px-5 py-4 bg-brand-bg border border-brand-light/10 rounded-xl text-brand-light focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-brand-light/40 uppercase tracking-widest mb-3">Family Name</label>
                                <input type="text" defaultValue="Doe" className="w-full px-5 py-4 bg-brand-bg border border-brand-light/10 rounded-xl text-brand-light focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-brand-light/40 uppercase tracking-widest mb-3">Digital Mail</label>
                            <input type="email" defaultValue="john.doe@carpetco.com" className="w-full px-5 py-4 bg-brand-bg border border-brand-light/10 rounded-xl text-brand-light focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 outline-none transition-all font-medium" />
                        </div>

                        <div>
                            <label className="block text-[10px] font-black text-brand-light/40 uppercase tracking-widest mb-3">Authority Level</label>
                            <input type="text" defaultValue="Administrator" disabled className="w-full px-5 py-4 bg-brand-bg/50 border border-brand-light/5 rounded-xl text-brand-light/20 font-black uppercase tracking-widest text-[10px]" />
                        </div>

                        <div className="pt-6">
                            <button className="bg-brand-btn hover:opacity-90 text-brand-light px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all shadow-xl border border-brand-light/10 active:scale-95">
                                Synchronize Assets
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
