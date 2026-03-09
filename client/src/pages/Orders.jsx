import React, { useState, useEffect } from 'react';
import { FiEye, FiSearch, FiFilter, FiDownload } from 'react-icons/fi';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('/api/orders');
                setOrders(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching orders:', err);
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-amber-400/10 text-amber-400 border-amber-400/20';
            case 'Processing': return 'bg-blue-400/10 text-blue-400 border-blue-400/20';
            case 'Shipped': return 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20';
            case 'Delivered': return 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20';
            case 'Cancelled': return 'bg-rose-400/10 text-rose-400 border-rose-400/20';
            default: return 'bg-brand-light/10 text-brand-light/60 border-brand-light/10';
        }
    };

    if (loading) return <div className="p-20 text-center text-brand-light/20 font-black uppercase tracking-[0.3em] text-[10px]">Synchronizing Ledger...</div>;

    return (
        <div className="space-y-12 animate-fade-in text-brand-text pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-5xl font-black text-brand-text uppercase tracking-tighter italic">Ledger</h2>
                    <p className="text-brand-text/60 font-black uppercase tracking-widest text-[10px] mt-2">Real-time artisan transaction tracking</p>
                </div>
                <button className="flex items-center gap-3 bg-brand-btn text-brand-light hover:opacity-90 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all shadow-xl border border-brand-light/10">
                    <FiDownload size={16} />
                    Export Records
                </button>
            </div>

            <div className="bg-brand-card rounded-[2rem] shadow-2xl border border-brand-light/10 overflow-hidden">
                <div className="p-8 border-b border-brand-light/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-light/5">
                    <div className="relative w-full max-w-lg">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/20" />
                        <input
                            type="text"
                            placeholder="SEARCH BY ORDER ID, CUSTOMER..."
                            className="w-full pl-12 pr-6 py-4 bg-brand-bg border border-brand-light/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 transition-all text-[11px] font-black uppercase tracking-widest text-brand-light placeholder:text-brand-light/20"
                        />
                    </div>
                    <div className="flex gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-brand-light bg-brand-bg hover:bg-brand-btn rounded-2xl border border-brand-light/10 transition-all">
                            <FiFilter />
                            Refine
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left">
                        <thead className="bg-brand-light/5 text-[10px] uppercase font-black tracking-[0.2em] text-brand-light/40 border-b border-brand-light/10">
                            <tr>
                                <th className="px-8 py-6">Origin Date</th>
                                <th className="px-8 py-6">Customer Profile</th>
                                <th className="px-8 py-6">Product SKU</th>
                                <th className="px-8 py-6">Valuation</th>
                                <th className="px-8 py-6">Workflow State</th>
                                <th className="px-8 py-6 text-right">Insight</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-light/5">
                            {orders.map((order) => (
                                <tr key={order._id} className="hover:bg-brand-light/5 transition-colors group text-brand-light">
                                    <td className="px-8 py-8 text-[11px] font-black text-brand-light/40 uppercase tracking-widest">
                                        {new Date(order.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-brand-light/10 border border-brand-light/10 flex items-center justify-center text-brand-light font-black text-sm">
                                                {order.customerName.charAt(0)}
                                            </div>
                                            <span className="font-black text-brand-light uppercase tracking-tighter text-sm italic">{order.customerName}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <span className="text-[11px] font-bold text-brand-light/60 uppercase tracking-widest">{order.productName}</span>
                                    </td>
                                    <td className="px-8 py-8 font-black text-brand-light text-xl">£{order.amount}</td>
                                    <td className="px-8 py-8">
                                        <span className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-8 text-right">
                                        <button className="p-3 bg-brand-light/5 border border-brand-light/10 hover:border-brand-light hover:text-brand-light text-brand-light/20 rounded-xl transition-all shadow-sm group-hover:shadow-2xl" title="View Detailed Audit">
                                            <FiEye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {orders.length === 0 && (
                    <div className="py-24 text-center">
                        <div className="bg-brand-light/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-light/10 border border-brand-light/5">
                            <FiShoppingBag size={40} />
                        </div>
                        <p className="text-brand-light/20 font-black uppercase tracking-[0.3em] text-[10px]">The archive is currently void of records.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Orders;
