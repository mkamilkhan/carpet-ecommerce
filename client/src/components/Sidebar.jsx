import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiPackage } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        // { name: 'Dashboard', icon: <RxDashboard />, path: '/admin' },
        { name: 'Products', icon: <HiOutlineShoppingBag />, path: '/admin/products' },
        { name: 'Samples', icon: <BiPackage />, path: '/admin/samples' },
    ];

    return (
        <div className="h-screen w-64 bg-brand-btn text-brand-light flex flex-col shadow-2xl border-r border-brand-light/5">
            <div className="p-8">
                <h1 className="text-2xl font-black text-[#CB9F3B] tracking-tighter italic">
                    MFA<span className="text-white">FLOORS.</span>
                </h1>
            </div>

            <nav className="flex-1 px-6 space-y-3 mt-8">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center gap-4 text-brand-light bg-white px-6 py-4 rounded-xl transition-all duration-300 group uppercase text-[10px] font-black tracking-widest
                            ${location.pathname === item.path
                                ? 'bg-white text-black shadow-2xl shadow-brand-light/10'
                                : 'text-brand-light hover:bg-white hover:text-brand-light'
                            }`}
                    >
                        <span className="text-lg group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-6 border-t border-brand-light/5">
                <div className="flex items-center gap-4 px-4 py-4 bg-brand-light/5 rounded-2xl border border-brand-light/5">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-brand-light">
                        JD
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-tight text-white">Admin</p>
                        <p className="text-[8px] font-black uppercase tracking-widest text-[#C49938]">Head Curator</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
