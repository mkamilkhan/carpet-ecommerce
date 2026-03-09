import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FiTrendingUp, FiShoppingBag, FiBox, FiActivity, FiDatabase, FiInfo, FiUsers, FiSettings, FiChevronRight } from 'react-icons/fi';
import axios from 'axios';

const StatCard = ({ title, value, change, isPositive, icon, description }) => (
    <div className="bg-brand-card p-6 rounded-2xl shadow-xl border border-brand-light/10 hover:border-brand-light/20 transition-all duration-500 group">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-brand-light/5 rounded-xl text-brand-light group-hover:scale-110 transition-transform">
                {icon}
            </div>
            {change && (
                <div className={`flex items-center text-[10px] font-black ${isPositive ? 'text-emerald-400' : 'text-rose-400'} bg-brand-light/5 px-3 py-1.5 rounded-full border border-brand-light/5`}>
                    {isPositive ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                    {change}
                </div>
            )}
        </div>
        <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-light/40 mb-1">{title}</p>
            <h3 className="text-4xl font-black text-brand-light italic tracking-tighter mb-2">{value}</h3>
            {description && <p className="text-[9px] font-medium text-brand-light/30 leading-tight uppercase tracking-widest">{description}</p>}
        </div>
    </div>
);

const Dashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalOrders: 0,
        totalRevenue: 0,
        totalPatrons: 0,
        recentOrders: [],
        conversionRate: '3.2%' // Placeholder but could be calculated
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsRes, ordersRes] = await Promise.all([
                    axios.get('/api/products'),
                    axios.get('/api/orders')
                ]);

                const products = productsRes.data;
                const orders = ordersRes.data;
                const revenue = orders.reduce((sum, order) => sum + order.amount, 0);

                // Calculate unique patrons
                const uniquePatrons = new Set(orders.map(o => o.customerName)).size;

                setStats({
                    totalProducts: products.length,
                    totalOrders: orders.length,
                    totalRevenue: revenue,
                    totalPatrons: uniquePatrons,
                    recentOrders: orders.slice(0, 5),
                    conversionRate: orders.length > 0 ? `${((orders.length / 500) * 100).toFixed(1)}%` : '0%' // Dummy conversion logic
                });
                setLoading(false);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <div className="p-8 text-center text-brand-light/40 font-black uppercase tracking-[0.4em] animate-pulse">Synchronizing Artisan Data...</div>;

    return (
        <div className="space-y-12 text-brand-text pb-20 animate-fade-in">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-title mb-2 block">Enterprise Overview</span>
                    <h2 className="text-6xl font-black text-brand-text uppercase tracking-tighter italic leading-none">Curator <span className="text-brand-title">Portal</span></h2>
                </div>
                <div className="flex gap-4">
                    {/* <button
                        onClick={() => navigate('/admin/settings')}
                        className="bg-brand-card hover:bg-brand-light/5 text-brand-light px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[9px] transition-all border border-brand-light/10"
                    >
                        Security Audit
                    </button> */}
                    <button
                        onClick={() => navigate('/admin/products', { state: { openCreateModal: true } })}
                        className="bg-brand-title hover:opacity-90 text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest text-[9px] transition-all shadow-2xl border border-brand-light/10 shadow-black/40 active:scale-95"
                    >
                        Register New Asset
                    </button>
                </div>
            </div>

            {/* Main Stats Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Revenue"
                    value={`£${stats.totalRevenue.toLocaleString()}`}
                    change="+12.5%"
                    isPositive={true}
                    icon={<FiTrendingUp size={20} />}
                    description="Gross archival earnings"
                />
                <StatCard
                    title="Total Orders"
                    value={stats.totalOrders}
                    change="+8.1%"
                    isPositive={true}
                    icon={<FiShoppingBag size={20} />}
                    description="Successful acquisitions"
                />
                <StatCard
                    title="Total Products"
                    value={stats.totalProducts}
                    change="+2.3%"
                    isPositive={true}
                    icon={<FiBox size={20} />}
                    description="Active inventory items"
                />
                <StatCard
                    title="Conversion Rate"
                    value={stats.conversionRate}
                    change="+1.1%"
                    isPositive={true}
                    icon={<FiActivity size={20} />}
                    description="Visits to acquisition"
                />
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders Table */}
                <div className="bg-brand-card p-10 rounded-[2.5rem] shadow-2xl border border-brand-light/10 lg:col-span-2 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <FiDatabase size={120} />
                    </div>
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-3xl font-black text-brand-light uppercase tracking-tighter italic">Ledger</h3>
                            <p className="text-[10px] font-bold text-brand-light/30 uppercase tracking-[0.2em] mt-1">Real-time artisan transaction tracking</p>
                        </div>
                        <button onClick={() => navigate('/admin/orders')} className="text-[10px] font-black uppercase tracking-widest text-brand-light/40 hover:text-brand-light border border-brand-light/10 px-4 py-2 rounded-lg transition-all">View Archive</button>
                    </div>

                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left">
                            <thead className="border-b border-brand-light/10">
                                <tr>
                                    <th className="px-4 py-6 text-[10px] font-black text-brand-light/40 uppercase tracking-widest">Patron</th>
                                    <th className="px-4 py-6 text-[10px] font-black text-brand-light/40 uppercase tracking-widest">Asset</th>
                                    <th className="px-4 py-6 text-[10px] font-black text-brand-light/40 uppercase tracking-widest">Valuation</th>
                                    <th className="px-4 py-6 text-[10px] font-black text-brand-light/40 uppercase tracking-widest">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-brand-light/5">
                                {stats.recentOrders.length > 0 ? (
                                    stats.recentOrders.map((order) => (
                                        <tr key={order._id} className="hover:bg-brand-light/5 transition-colors group">
                                            <td className="px-4 py-7">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-brand-light/5 flex items-center justify-center text-[10px] font-black text-brand-light/40">{order.customerName.charAt(0)}</div>
                                                    <span className="font-bold text-brand-light text-sm">{order.customerName}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-7 text-brand-light/60 text-sm italic">{order.productName}</td>
                                            <td className="px-4 py-7 font-black text-brand-light">£{order.amount.toLocaleString()}</td>
                                            <td className="px-4 py-7">
                                                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase border tracking-widest ${order.status === 'Delivered' ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20' :
                                                    order.status === 'Pending' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' :
                                                        'bg-blue-400/10 text-blue-400 border-blue-400/20'
                                                    }`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-4 py-12 text-center text-brand-light/20 font-black uppercase tracking-[0.3em]">No active acquisitions indexed</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Analysis & Extra Cards */}
                <div className="space-y-8">
                    {/* Expert Analysis */}
                    <div className="bg-brand-card p-10 rounded-[2.5rem] shadow-2xl border border-brand-light/10 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black text-brand-light uppercase tracking-tighter mb-8 italic">Expert Analysis</h3>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-black text-brand-light/40 uppercase tracking-[0.2em]">Inventory Health</span>
                                        <span className="text-emerald-400 font-black text-[10px] uppercase italic tracking-widest">Optimized</span>
                                    </div>
                                    <div className="w-full bg-brand-bg rounded-full h-2 p-0.5 overflow-hidden border border-brand-light/10">
                                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full w-[88%] shadow-lg shadow-emerald-500/20"></div>
                                    </div>
                                </div>
                                <div className="p-8 bg-brand-bg/50 rounded-3xl border border-brand-light/5 relative">
                                    <FiInfo className="absolute top-4 right-4 text-brand-light/10" size={20} />
                                    <p className="text-xs text-brand-light/60 font-medium leading-relaxed italic text-center">
                                        "Archival performance has scaled 20% beyond projections. Current stock rotation is in optimal equilibrium."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Patrons Card */}
                    <div
                        onClick={() => navigate('/admin/customers')}
                        className="bg-brand-card p-8 rounded-[2rem] shadow-xl border border-brand-light/10 flex items-center justify-between cursor-pointer hover:border-brand-light/30 transition-all group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-brand-light/5 rounded-2xl flex items-center justify-center text-brand-light group-hover:scale-110 transition-transform">
                                <FiUsers size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-brand-light uppercase tracking-tighter italic">Patrons</h4>
                                <p className="text-[8px] font-bold text-brand-light/30 uppercase tracking-[0.2em] mt-0.5">Manage elite relationships</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-3xl font-black text-brand-light">{stats.totalPatrons}</span>
                            <FiChevronRight className="inline-block ml-2 text-brand-light/20" />
                        </div>
                    </div>

                    {/* Preferences Card */}
                    <div
                        onClick={() => navigate('/admin/settings')}
                        className="bg-brand-card p-8 rounded-[2rem] shadow-xl border border-brand-light/10 flex items-center justify-between cursor-pointer hover:border-brand-light/30 transition-all group"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-brand-light/5 rounded-2xl flex items-center justify-center text-brand-light group-hover:rotate-45 transition-transform">
                                <FiSettings size={24} />
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-brand-light uppercase tracking-tighter italic">Preferences</h4>
                                <p className="text-[8px] font-bold text-brand-light/30 uppercase tracking-[0.2em] mt-0.5">System & Security Tuning</p>
                            </div>
                        </div>
                        <FiChevronRight className="text-brand-light/20" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
