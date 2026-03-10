import React, { useState, useEffect } from 'react';

const Calculator = () => {
    const [roomSize, setRoomSize] = useState({ width: '', length: '', area: 0 });
    const [shape, setShape] = useState('Rectangle');
    const [unit, setUnit] = useState('Meters');
    const [flooringType, setFlooringType] = useState('Carpet');
    const [coveragePerBox, setCoveragePerBox] = useState(2.5);
    const [underlay, setUnderlay] = useState('Standard');
    const [extras, setExtras] = useState({
        doorBars: false,
        adhesive: false,
        grippers: false,
        skirting: false,
    });
    const [wastage, setWastage] = useState(10);
    const [installation, setInstallation] = useState('Supply + Fit');
    const [pricePerM2, setPricePerM2] = useState(25);
    const [results, setResults] = useState({
        materialCost: 0,
        underlayCost: 0,
        extrasCost: 0,
        installationCost: 0,
        boxesNeeded: 0,
        totalPrice: 0,
    });

    const flooringPrices = {
        'Carpet': 25,
        'Laminate': 20,
        'Vinyl': 22,
        'Engineered Wood': 45,
        'Solid Wood': 65,
    };

    const underlayPrices = {
        'Standard': 5,
        'Premium': 8,
        'Soundproof': 12,
    };

    const extraPrices = {
        doorBars: 15,
        adhesive: 25,
        grippers: 10,
        skirting: 40,
    };

    const installationPricePerM2 = 12;

    useEffect(() => {
        let area = 0;
        if (unit === 'Feet') {
            area = (parseFloat(roomSize.width || 0) * parseFloat(roomSize.length || 0)) / 10.764;
        } else {
            area = parseFloat(roomSize.width || 0) * parseFloat(roomSize.length || 0);
        }

        const areaWithWastage = area * (1 + wastage / 100);
        const materialCost = areaWithWastage * (flooringPrices[flooringType] || 0);
        const underlayCost = areaWithWastage * (underlayPrices[underlay] || 0);

        let extrasCost = 0;
        if (extras.doorBars) extrasCost += extraPrices.doorBars;
        if (extras.adhesive) extrasCost += extraPrices.adhesive;
        if (extras.grippers) extrasCost += extraPrices.grippers;
        if (extras.skirting) extrasCost += extraPrices.skirting;

        const installationCost = installation === 'Supply + Fit' ? areaWithWastage * installationPricePerM2 : 0;
        const boxesNeeded = Math.ceil(areaWithWastage / coveragePerBox);

        const totalPrice = materialCost + underlayCost + extrasCost + installationCost;

        setResults({
            materialCost: materialCost.toFixed(2),
            underlayCost: underlayCost.toFixed(2),
            extrasCost: extrasCost.toFixed(2),
            installationCost: installationCost.toFixed(2),
            boxesNeeded: boxesNeeded,
            totalPrice: totalPrice.toFixed(2),
        });
    }, [roomSize, shape, unit, flooringType, coveragePerBox, underlay, extras, wastage, installation]);

    return (
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Inputs */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Room Size & Type</h3>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {['Rectangle', 'L Shape', 'Custom Size'].map(s => (
                                <button
                                    key={s}
                                    onClick={() => setShape(s)}
                                    className={`py-3 px-2 text-[10px] font-black uppercase tracking-widest border transition-all ${shape === s ? 'bg-[#C6A76B] border-[#C6A76B] text-white' : 'bg-black/50 border-white/10 text-white/40'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Width ({unit === 'Meters' ? 'm' : 'ft'})</label>
                                <input
                                    type="number"
                                    value={roomSize.width}
                                    onChange={(e) => setRoomSize({ ...roomSize, width: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all"
                                    placeholder="0.00"
                                />
                            </div>
                            <div>
                                <label className="text-white/40 text-[10px] uppercase tracking-widest block mb-2">Length ({unit === 'Meters' ? 'm' : 'ft'})</label>
                                <input
                                    type="number"
                                    value={roomSize.length}
                                    onChange={(e) => setRoomSize({ ...roomSize, length: e.target.value })}
                                    className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Units</h3>
                            <div className="flex gap-2">
                                {['Meters', 'Feet'].map(u => (
                                    <button
                                        key={u}
                                        onClick={() => setUnit(u)}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest border transition-all ${unit === u ? 'bg-[#C6A76B] border-[#C6A76B] text-white' : 'bg-black/50 border-white/10 text-white/40'}`}
                                    >
                                        {u}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Flooring Type</h3>
                            <select
                                value={flooringType}
                                onChange={(e) => setFlooringType(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all"
                            >
                                {Object.keys(flooringPrices).map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Coverage per Box (m²)</h3>
                            <input
                                type="number"
                                value={coveragePerBox}
                                onChange={(e) => setCoveragePerBox(parseFloat(e.target.value))}
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all font-bold"
                            />
                        </div>
                        <div>
                            <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Underlay</h3>
                            <select
                                value={underlay}
                                onChange={(e) => setUnderlay(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all"
                            >
                                {Object.keys(underlayPrices).map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Extras</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {Object.keys(extras).map(extra => (
                                <label key={extra} className="flex items-center gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={extras[extra]}
                                        onChange={(e) => setExtras({ ...extras, [extra]: e.target.checked })}
                                        className="hidden"
                                    />
                                    <div className={`w-4 h-4 rounded-sm border ${extras[extra] ? 'bg-[#C6A76B] border-[#C6A76B]' : 'border-white/20'} transition-all`} />
                                    <span className={`text-[10px] uppercase tracking-widest ${extras[extra] ? 'text-white' : 'text-white/40'}`}>
                                        {extra.replace(/([A-Z])/g, ' $1')}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Wastage</h3>
                            <select
                                value={wastage}
                                onChange={(e) => setWastage(parseInt(e.target.value))}
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all"
                            >
                                <option value={5}>5%</option>
                                <option value={10}>10%</option>
                                <option value={15}>15%</option>
                            </select>
                        </div>
                        <div>
                            <h3 className="text-[#C6A76B] text-[10px] font-black uppercase tracking-[0.3em] mb-4">Installation</h3>
                            <select
                                value={installation}
                                onChange={(e) => setInstallation(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-sm p-3 text-white focus:border-[#C6A76B] outline-none transition-all"
                            >
                                <option value="Supply Only">Supply Only</option>
                                <option value="Supply + Fit">Supply + Fit</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Box */}
                <div className="bg-black border border-[#C6A76B]/20 rounded-xl p-8 flex flex-col justify-between shadow-inner">
                    <div>
                        <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Estimate Summary</h3>
                        <div className="space-y-5">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/40 uppercase tracking-widest">Material Cost</span>
                                <span className="text-white font-black">£{results.materialCost}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/40 uppercase tracking-widest">Boxes Needed</span>
                                <span className="text-white font-black">{results.boxesNeeded}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/40 uppercase tracking-widest">Underlay Cost</span>
                                <span className="text-white font-black">£{results.underlayCost}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-white/40 uppercase tracking-widest">Extras</span>
                                <span className="text-white font-black">£{results.extrasCost}</span>
                            </div>
                            {installation === 'Supply + Fit' && (
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-white/40 uppercase tracking-widest">Installation</span>
                                    <span className="text-white font-black">£{results.installationCost}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-[#C6A76B]/20">
                        <div className="flex justify-between items-end mb-8">
                            <span className="text-[#C6A76B] text-[12px] font-black uppercase tracking-[0.4em]">TOTAL PRICE</span>
                            <span className="text-5xl font-black text-white tracking-tighter">£{results.totalPrice}</span>
                        </div>
                        <button className="w-full bg-[#C6A76B] text-white py-5 rounded-sm font-black text-[12px] uppercase tracking-[0.4em] hover:bg-[#b0945d] transition-all shadow-xl">
                            Download Instant Quote PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
