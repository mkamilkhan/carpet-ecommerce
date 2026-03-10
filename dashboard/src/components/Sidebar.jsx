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
        <div className="h-screen w-64 bg-[#0B0B0B] flex flex-col shadow-2xl border-r border-white/5 relative z-50">
            <div className="h-[75px] flex items-center px-8 border-b border-white/5">
                <h1 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter text-white flex items-center gap-1">
                    MFA <span className="text-[#C6A76B] italic font-serif text-3xl">Floors</span>
                </h1>
            </div>

            <nav className="flex-1 px-6 space-y-2 mt-8">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center gap-4 px-6 py-4 rounded-sm transition-all duration-300 group uppercase text-[11px] font-black tracking-widest
                            ${location.pathname === item.path
                                ? 'bg-[#C6A76B] text-white shadow-lg'
                                : 'text-white/60 hover:bg-[#1A1A1A] hover:text-[#C6A76B]'
                            }`}
                    >
                        <span className="text-lg transition-transform">{item.icon}</span>
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-6 border-t border-white/5">
                <div className="flex items-center gap-4 px-4 py-4 bg-[#1A1A1A] rounded-sm border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-[#C6A76B] flex items-center justify-center text-[10px] font-black text-white">
                        AD
                    </div>
                    <div>
                        <p className="text-xs font-black uppercase tracking-tight text-white">Admin</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-white/50">Dashboard Portal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
