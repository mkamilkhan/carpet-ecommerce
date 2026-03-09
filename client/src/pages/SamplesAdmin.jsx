import React, { useState, useEffect } from 'react';
import { FiEye, FiSearch, FiFilter, FiDownload, FiBox } from 'react-icons/fi';
import axios from 'axios';

const SamplesAdmin = () => {
    const [samples, setSamples] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSamples = async () => {
            try {
                const res = await axios.get('/api/samples');
                setSamples(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching samples:', err);
                setLoading(false);
            }
        };
        fetchSamples();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending': return 'bg-amber-400/10 text-amber-400 border-amber-400/20';
            case 'Processing': return 'bg-blue-400/10 text-blue-400 border-blue-400/20';
            case 'Dispatched': return 'bg-indigo-400/10 text-indigo-400 border-indigo-400/20';
            case 'Delivered': return 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20';
            default: return 'bg-brand-light/10 text-brand-light/60 border-brand-light/10';
        }
    };

    if (loading) return <div className="p-20 text-center text-brand-light/20 font-black uppercase tracking-[0.3em] text-[10px]">Synchronizing Samples...</div>;

    return (
        <div className="space-y-12 animate-fade-in text-brand-text pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h2 className="text-5xl font-black text-brand-text uppercase tracking-tighter italic">Sample Requests</h2>
                    <p className="text-brand-text/60 font-black uppercase tracking-widest text-[10px] mt-2">Manage artisan sample curation requests</p>
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
                            placeholder="SEARCH BY CUSTOMER OR EMAIL..."
                            className="w-full pl-12 pr-6 py-4 bg-brand-bg border border-brand-light/10 rounded-2xl focus:outline-none focus:ring-4 focus:ring-brand-light/5 focus:border-brand-light/20 transition-all text-[11px] font-black uppercase tracking-widest text-brand-light placeholder:text-brand-light/20"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto no-scrollbar">
                    <table className="w-full text-left">
                        <thead className="bg-brand-light/5 text-[10px] uppercase font-black tracking-[0.2em] text-brand-light/40 border-b border-brand-light/10">
                            <tr>
                                <th className="px-8 py-6">Date</th>
                                <th className="px-8 py-6">Customer</th>
                                <th className="px-8 py-6">Contact</th>
                                <th className="px-8 py-6">Requested Items</th>
                                <th className="px-8 py-6">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-light/5">
                            {samples.map((sample) => (
                                <tr key={sample._id} className="hover:bg-brand-light/5 transition-colors group text-brand-light">
                                    <td className="px-8 py-8 text-[11px] font-black text-brand-light/40 uppercase tracking-widest">
                                        {new Date(sample.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-brand-light/10 border border-brand-light/10 flex items-center justify-center text-brand-light font-black text-sm">
                                                {sample.customerName.charAt(0)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-black text-brand-light uppercase tracking-tighter text-sm italic">{sample.customerName}</span>
                                                <span className="text-[9px] font-bold text-brand-light/40 uppercase tracking-widest mt-1 truncate max-w-[150px]">{sample.customerAddress}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-black text-brand-light/60 uppercase tracking-widest">{sample.customerEmail}</span>
                                            <span className="text-[9px] font-bold text-brand-light/40 uppercase tracking-widest">{sample.customerPhone || 'N/A'}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex flex-col gap-2">
                                            {sample.items.map((item, idx) => (
                                                <span key={idx} className="text-[10px] font-black text-brand-light/60 uppercase tracking-widest flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full border border-white/20 shadow-sm" style={{ backgroundColor: item.selectedColor }} />
                                                    {item.productName} ({item.selectedColor})
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <select
                                            className={`px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border outline-none appearance-none cursor-pointer ${getStatusColor(sample.status)}`}
                                            value={sample.status}
                                            onChange={async (e) => {
                                                const newStatus = e.target.value;
                                                try {
                                                    await axios.put(`/api/samples/${sample._id}`, { status: newStatus });
                                                    setSamples(samples.map(s => s._id === sample._id ? { ...s, status: newStatus } : s));
                                                } catch (err) {
                                                    alert('Failed to update status');
                                                }
                                            }}
                                        >
                                            <option value="Pending" className="bg-[#111] text-amber-400">Pending</option>
                                            <option value="Processing" className="bg-[#111] text-blue-400">Processing</option>
                                            <option value="Dispatched" className="bg-[#111] text-indigo-400">Dispatched</option>
                                            <option value="Delivered" className="bg-[#111] text-emerald-400">Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {samples.length === 0 && (
                    <div className="py-24 text-center">
                        <div className="bg-brand-light/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-light/10 border border-brand-light/5">
                            <FiBox size={40} />
                        </div>
                        <p className="text-brand-light/20 font-black uppercase tracking-[0.3em] text-[10px]">No sample requests found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SamplesAdmin;
