import React, { useState, useEffect } from 'react';
import { FiSearch, FiBell, FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [time, setTime] = useState(new Date());
    const [notifOpen, setNotifOpen] = useState(false);

    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 60000);
        return () => clearInterval(t);
    }, []);

    const dateStr = time.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    const notifications = [
        { id: 1, text: 'New order received — Royal Persian Red', time: '2m ago', dot: 'bg-emerald-400' },
        { id: 2, text: 'Low stock alert — Vintage Turkish Blue', time: '18m ago', dot: 'bg-amber-400' },
        { id: 3, text: 'New patron registered — James H.', time: '1h ago', dot: 'bg-blue-400' },
    ];

    return (
        <header className="h-20 bg-brand-bg border-b border-brand-light/30 flex items-center justify-between px-8 sticky top-0 z-[60]">
            {/* Left: Search */}
            <div className="flex items-center gap-6">
                {/* <div className="relative w-80 hidden sm:block">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/20" size={14} />
                    <input
                        type="text"
                        placeholder="Search patrons, assets, orders…"
                        className="w-full pl-11 pr-5 py-3 bg-brand-card border border-brand-light/5 rounded-xl focus:border-brand-light/20 focus:ring-4 focus:ring-brand-light/5 transition-all text-[10px] font-black uppercase tracking-widest text-brand-light outline-none placeholder:text-brand-light/20"
                    />
                </div>
                <div className="hidden lg:block">
                    <p className="text-[8px] font-black uppercase tracking-[0.35em] text-brand-light/20">{dateStr}</p>
                </div> */}
            </div>

            {/* Right: Notifications + Avatar */}
            <div className="flex items-center gap-3">
                {/* Notification Bell */}
                <div className="relative">
                    <button
                        onClick={() => setNotifOpen(v => !v)}
                        className="relative p-3 bg-brand-card rounded-xl border border-brand-light/50 text-[#9CA3AF] hover:text-brand-light hover:border-brand-light/15 transition-all duration-300"
                        aria-label="Notifications"
                    >
                        <FiBell size={17} />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-brand-bg animate-pulse" />
                    </button>

                    {/* Notification Dropdown */}
                    {notifOpen && (
                        <>
                            <div className="fixed inset-0 z-10" onClick={() => setNotifOpen(false)} />
                            <div className="absolute right-0 top-14 w-80 bg-brand-card border border-brand-light/10 rounded-2xl shadow-2xl shadow-black/40 z-20 overflow-hidden animate-fade-in">
                                <div className="px-6 py-4 border-b border-brand-light/5 flex items-center justify-between">
                                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Notifications</p>
                                    <span className="bg-rose-500/10 text-rose-400 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-rose-500/20">{notifications.length} New</span>
                                </div>
                                <div className="divide-y divide-brand-light/5">
                                    {notifications.map(n => (
                                        <div key={n.id} className="px-6 py-4 flex items-start gap-4 hover:bg-brand-light/5 transition-colors cursor-pointer group">
                                            <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${n.dot}`} />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-bold text-brand-light/90 leading-snug group-hover:text-brand-light transition-colors">{n.text}</p>
                                                <p className="text-[8px] font-black uppercase tracking-widest text-[#9CA3AF] mt-1">{n.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-6 py-4 border-t border-brand-light/5">
                                    <button className="w-full text-[8px] font-black uppercase tracking-[0.3em] text-brand-title hover:text-brand-light transition-colors">
                                        View All Alerts
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Settings shortcut */}
                {/* <button
                    onClick={() => navigate('/admin/settings')}
                    className="p-3 bg-brand-card rounded-xl border border-brand-light/5 text-brand-light/40 hover:text-brand-light hover:border-brand-light/15 transition-all duration-300"
                    aria-label="Settings"
                >
                    <FiSettings size={17} />
                </button> */}

                {/* Admin Avatar */}
                <button
                    // onClick={() => navigate('/admin')}
                    className="flex items-center gap-3 pl-1 pr-4 py-1 bg-brand-card border border-brand-light/50 rounded-xl hover:border-brand-light/20 transition-all duration-300 group"
                >
                    <div className="w-9 h-9 rounded-lg bg-brand-title flex items-center justify-center text-brand-btn font-black text-sm shadow-inner">
                        A
                    </div>
                    <div className="text-left hidden sm:block">
                        <p className="text-[9px] font-black uppercase tracking-widest text-white group-hover:text-brand-light transition-colors leading-none">Admin</p>
                        <p className="text-[7px] font-bold uppercase tracking-widest text-white mt-0.5">Curator Portal</p>
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Header;
