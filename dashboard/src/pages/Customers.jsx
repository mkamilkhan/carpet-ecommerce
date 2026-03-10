import React, { useState, useEffect } from 'react';
import { FiMail, FiMoreVertical, FiSearch, FiUsers, FiStar, FiFilter } from 'react-icons/fi';
import axios from 'axios';

const statusStyle = {
    VIP: 'bg-amber-400/10 text-amber-400 border-amber-400/20',
    Active: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    Inactive: 'bg-brand-light/5 text-brand-light/30 border-brand-light/10',
};

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const res = await axios.get('/api/orders');
                const orders = res.data;

                // Build patron map from real orders
                const patronMap = {};
                orders.forEach(order => {
                    const name = order.customerName || 'Unknown';
                    if (!patronMap[name]) {
                        patronMap[name] = {
                            id: name,
                            name,
                            email: order.customerEmail || `${name.toLowerCase().replace(/\s+/g, '.')}@patron.com`,
                            orders: 0,
                            spent: 0,
                        };
                    }
                    patronMap[name].orders += 1;
                    patronMap[name].spent += order.amount || 0;
                });

                // Assign VIP / Active / Inactive tiers
                const patrons = Object.values(patronMap).map(p => ({
                    ...p,
                    status: p.spent > 3000 ? 'VIP' : p.orders > 1 ? 'Active' : 'Inactive',
                }));

                // Sort by spend descending
                patrons.sort((a, b) => b.spent - a.spent);
                setCustomers(patrons);
            } catch (err) {
                console.error('Error fetching patrons:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchCustomers();
    }, []);

    const filters = ['All', 'VIP', 'Active', 'Inactive'];
    const filtered = customers.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase());
        const matchesFilter = filter === 'All' || c.status === filter;
        return matchesSearch && matchesFilter;
    });

    const totalSpend = customers.reduce((s, c) => s + c.spent, 0);
    const vipCount = customers.filter(c => c.status === 'VIP').length;
    const activeCount = customers.filter(c => c.status === 'Active').length;

    if (loading) return (
        <div className="p-12 text-center text-brand-light/30 font-black uppercase tracking-[0.4em] animate-pulse">
            Loading Patron Registry…
        </div>
    );

    return (
        <div className="space-y-10 pb-12">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-title/60 mb-2 block">Client Management</span>
                    <h2 className="text-5xl font-black text-brand-text uppercase tracking-tighter italic leading-none">Patron Registry</h2>
                    <p className="text-brand-text/30 text-sm font-medium mt-2">Manage relationships with your premium artisan clientele.</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/30" size={14} />
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search patrons…"
                            className="pl-10 pr-5 py-3 bg-brand-card border border-brand-light/10 rounded-xl text-brand-light text-[10px] font-black uppercase tracking-widest placeholder-brand-light/20 outline-none focus:border-brand-title/40 focus:ring-2 focus:ring-brand-title/10 transition-all w-52"
                        />
                    </div>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Patrons', value: customers.length, color: 'text-brand-text' },
                    { label: 'VIP Clientele', value: vipCount, color: 'text-amber-400' },
                    { label: 'Active', value: activeCount, color: 'text-emerald-400' },
                    { label: 'Combined Spend', value: `£${totalSpend.toLocaleString()}`, color: 'text-brand-title' },
                ].map(stat => (
                    <div key={stat.label} className="bg-brand-card border border-brand-light/10 rounded-2xl p-6">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-brand-light/30 mb-2">{stat.label}</p>
                        <p className={`text-3xl font-black italic tracking-tighter ${stat.color}`}>{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all duration-300 ${filter === f
                                ? 'bg-brand-light text-brand-btn border-brand-light'
                                : 'text-brand-light/30 border-brand-light/10 hover:border-brand-light/30 hover:text-brand-light/60 bg-transparent'
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Patron Cards */}
            {filtered.length === 0 ? (
                <div className="py-20 text-center text-brand-light/20 font-black uppercase tracking-[0.3em]">
                    No patrons found
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((customer) => (
                        <div
                            key={customer.id}
                            className="bg-brand-card p-8 rounded-[2rem] shadow-2xl border border-brand-light/10 hover:border-brand-light/25 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* VIP glow */}
                            {customer.status === 'VIP' && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-amber-400/10 transition-colors" />
                            )}

                            <div className="relative z-10">
                                {/* Top Row */}
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-2xl bg-brand-bg border border-brand-light/10 flex items-center justify-center text-brand-title font-black text-xl shadow-inner">
                                            {customer.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="font-black text-lg text-brand-light tracking-tighter uppercase">{customer.name}</h3>
                                            <span className={`inline-flex items-center gap-1 mt-1 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border ${statusStyle[customer.status] || statusStyle.Inactive}`}>
                                                {customer.status === 'VIP' && <FiStar size={8} />}
                                                {customer.status}
                                            </span>
                                        </div>
                                    </div>
                                    <button className="p-2 text-brand-light/20 hover:text-brand-light transition-colors rounded-lg hover:bg-brand-light/5">
                                        <FiMoreVertical size={16} />
                                    </button>
                                </div>

                                {/* Contact */}
                                <div className="mb-8 space-y-2">
                                    <div className="flex items-center gap-3 p-3 bg-brand-bg/60 rounded-xl border border-brand-light/5">
                                        <FiMail className="text-brand-light/20 shrink-0" size={13} />
                                        <span className="text-[10px] font-bold text-brand-light/40 uppercase tracking-widest truncate">{customer.email}</span>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="pt-6 border-t border-brand-light/5 grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-[9px] font-black text-brand-light/20 uppercase tracking-[0.25em] mb-1">Acquisitions</p>
                                        <p className="text-2xl font-black text-brand-light italic tracking-tighter">
                                            {customer.orders}
                                            <span className="text-[9px] text-brand-light/20 not-italic ml-1">orders</span>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[9px] font-black text-brand-light/20 uppercase tracking-[0.25em] mb-1">Total Spend</p>
                                        <p className="text-2xl font-black text-brand-title italic tracking-tighter">
                                            £{customer.spent.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Customers;
