import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiLoader, FiShoppingBag, FiBox, FiCheck, FiX, FiShield, FiMapPin, FiSun, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import axios from 'axios';
import Calculator from '../components/Calculator';
import { useCart } from '../context/CartContext';
import SampleRedesignModal from '../components/SampleRedesignModal';
import { getImageUrl } from '../utils/imagePath';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeImage, setActiveImage] = useState(null);
    const [selectedColor, setSelectedColor] = useState('#E5E1D8');
    const { addToCart, addToSamples } = useCart();

    // Sample Modal State
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`/api/products/${id}`);
                setProduct(res.data);
                setActiveImage(res.data.image);
                // Set default color from API if available
                if (res.data.colors && res.data.colors.length > 0) {
                    setSelectedColor(res.data.colors[0]);
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setLoading(false);
            }
        };
        fetchProduct();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0B0B]">
            <FiLoader className="animate-spin text-[#C6A76B]" size={48} />
        </div>
    );

    if (!product) return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] gap-4">
            <h2 className="text-2xl font-black text-white">Product Not Found</h2>
            <button
                onClick={() => navigate('/collection')}
                className="px-8 py-3 bg-[#C6A76B] text-white rounded-sm font-bold uppercase tracking-widest hover:bg-[#b0945d] transition-all shadow-xl">
                Back to Collection
            </button>
        </div>
    );

    return (
        <div className="bg-[#111111] text-white min-h-screen font-sans pb-10">
            {/* HERO */}
            <div className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0A0A]">
                {/* Background ambient gradient */}
                <div className="absolute inset-0 z-0">
                    <img src={getImageUrl(activeImage)} className="w-full h-full object-cover opacity-10 blur-3xl scale-110" alt="" />
                    <div className="absolute inset-0 bg-[#111111]/80" />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C6A76B]/10 rounded-full blur-[150px] -mr-40 pointer-events-none" />
                </div>
                
                <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 w-full order-2 lg:order-1 pt-8 lg:pt-0">
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="bg-[#C6A76B] text-black font-black uppercase text-[10px] px-4 py-2 tracking-widest rounded-sm shadow-[0_0_15px_rgba(198,167,107,0.4)]">Top Rated</span>
                            <span className="border border-white/20 bg-black/40 backdrop-blur-sm text-white font-black uppercase text-[10px] px-4 py-2 tracking-[0.2em] rounded-sm">{product.type || 'Premium Quality'}</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            {product.name} <span className="text-transparent hidden md:inline ml-3" style={{ WebkitTextStroke: '2px #C6A76B' }}>FLOOR</span>
                        </h1>
                        
                        <div className="border-l-[3px] border-[#C6A76B] pl-6 md:pl-10 mb-12 max-w-xl py-2">
                            <p className="text-xl lg:text-3xl text-white/80 italic font-serif leading-relaxed">
                                "The ultimate foundation for your space. Engineered for those who demand raw luxury and precision craftsmanship."
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="#pricing" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-[#C6A76B] text-black px-12 py-5 font-black uppercase text-[12px] tracking-[0.3em] hover:bg-[#b0945d] transition-all shadow-[0_0_40px_rgba(198,167,107,0.3)] text-center w-full sm:w-auto"
                            >
                                View Pricing
                            </a>
                            <button onClick={() => window.open(`https://wa.me/442088080088?text=Hello, I have a question about ${product.name}`, '_blank')} className="border border-white/20 bg-[#111111]/50 backdrop-blur-sm text-white px-12 py-5 font-black uppercase text-[12px] tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center w-full sm:w-auto">
                                Ask A Question
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-[45%] xl:w-[50%] relative z-20 order-1 lg:order-2 mb-8 lg:mb-0">
                        <div className="relative aspect-video lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] group bg-[#161616]">
                            {product.discount > 0 && (
                                <div className="absolute top-6 left-6 z-30 bg-red-600 text-white text-[11px] font-black px-5 py-2 uppercase tracking-[0.2em] shadow-2xl rounded-sm border border-white/10">
                                    {product.discount}% OFF PROMOTION
                                </div>
                            )}
                            <img 
                                src={getImageUrl(activeImage)} 
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" 
                                alt={product.name} 
                            />
                            {/* Inner subtle glow ring */}
                            <div className="absolute inset-0 border border-[#C6A76B]/20 pointer-events-none mix-blend-overlay"></div>
                        </div>
                        {/* Decorative background element underneath the picture */}
                        <div className="absolute -inset-4 border border-[#C6A76B]/20 rounded-2xl pointer-events-none -z-10 hidden lg:block translate-x-4 translate-y-4"></div>
                    </div>
                </div>
            </div>

            {/* THE EXPERIENCE & QUICK STATS */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="flex-1 lg:w-2/3">
                        <h2 className="text-5xl font-black uppercase tracking-tighter mb-10 text-white">The Experience</h2>
                        <div className="space-y-8 text-[#BFBFBF] text-lg leading-relaxed mb-20 font-medium">
                            <p>{product.description || `Step onto the most luxurious surface in our collection. The ${product.name} is not just a floor; it's a purpose-built architectural foundation. With advanced materials that absorb impact and a high-performance finish that delivers instant elegance, this flooring allows you to elevate your home with confidence.`}</p>
                            <p>Whether you are an experienced interior designer looking for a masterpiece or a homeowner wanting the safest, most durable surface, this luxury option delivers. Our professional installation ensures you get the perfect fit through the varied spaces of your London home.</p>
                        </div>
                        
                        <h3 className="text-[#C6A76B] text-sm font-black uppercase tracking-[0.3em] mb-8">What's Included</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-[#161616] border border-white/5 p-8 rounded-xl flex items-start gap-5 hover:border-[#C6A76B]/30 transition-colors">
                                <div className="text-[#C6A76B] mt-1"><FiShield size={28} /></div>
                                <div>
                                    <h4 className="text-white font-black text-xl mb-2">Lifetime Warranty</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">Manufacturer peace of mind guarantee provided on all structural integrity.</p>
                                </div>
                            </div>
                            <div className="bg-[#161616] border border-white/5 p-8 rounded-xl flex items-start gap-5 hover:border-[#C6A76B]/30 transition-colors">
                                <div className="text-[#C6A76B] mt-1"><FiBox size={28} /></div>
                                <div>
                                    <h4 className="text-white font-black text-xl mb-2">Expert Fitting</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">Master craftsmen handle the complete layout and installation.</p>
                                </div>
                            </div>
                            <div className="bg-[#161616] border border-white/5 p-8 rounded-xl flex items-start gap-5 hover:border-[#C6A76B]/30 transition-colors">
                                <div className="text-[#C6A76B] mt-1"><FiCheck size={28} /></div>
                                <div>
                                    <h4 className="text-white font-black text-xl mb-2">Underlay Choice</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">Premium acoustic and thermal underlayment recommendations.</p>
                                </div>
                            </div>
                            <div className="bg-[#161616] border border-white/5 p-8 rounded-xl flex items-start gap-5 hover:border-[#C6A76B]/30 transition-colors">
                                <div className="text-[#C6A76B] mt-1"><FiShoppingBag size={28} /></div>
                                <div>
                                    <h4 className="text-white font-black text-xl mb-2">Waste Removal</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">Old flooring safely uplifted and completely taken away.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column / Quick Stats */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[#161616] border border-[#C6A76B]/30 rounded-2xl p-10 sticky top-32 shadow-2xl">
                            <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-10">Quick Stats</h3>
                            
                            <div className="space-y-6 mb-12">
                                <div className="flex justify-between items-center border-b border-white/10 pb-5">
                                    <span className="text-white/40 text-xs w-1/3 uppercase tracking-widest font-bold">Product ID</span>
                                    <span className="text-white font-black text-right">{product.name.substring(0,20)}...</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-5">
                                    <span className="text-white/40 text-xs w-1/3 uppercase tracking-widest font-bold">Category</span>
                                    <span className="text-white font-black text-right">{product.type}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-5">
                                    <span className="text-white/40 text-xs w-1/3 uppercase tracking-widest font-bold">Room Use</span>
                                    <span className="text-white font-black text-right">{product.roomSuitability || 'Heavy Domestic'}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-5">
                                    <span className="text-white/40 text-xs w-1/3 uppercase tracking-widest font-bold">Base Price</span>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 justify-end">
                                            {product.discount > 0 && (
                                                <span className="text-white/30 text-[10px] line-through uppercase tracking-widest">£{product.price}</span>
                                            )}
                                            <span className={`${product.discount > 0 ? 'text-red-500' : 'text-[#C6A76B]'} font-black text-lg`}>
                                                £{product.discount > 0 ? (product.price - (product.price * product.discount / 100)) : product.price} / m²
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-8 border-b border-white/10 pb-6">
                                <span className="text-white/40 text-xs uppercase tracking-widest font-bold block mb-4">Select Finish</span>
                                <div className="flex gap-2 flex-wrap">
                                    {(product.colors && product.colors.length > 0 ? product.colors : ['#E5E1D8', '#B7A99A', '#8D7E71', '#5C544E', '#2D2926']).map((color, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-sm border-2 transition-all flex items-center justify-center ${selectedColor === color ? 'border-[#C6A76B] scale-110 shadow-[0_0_10px_rgba(198,167,107,0.5)]' : 'border-white/10 hover:border-white/40'}`}
                                            style={{ backgroundColor: color }}
                                            title={`Finish Option ${i + 1}`}
                                        >
                                            {selectedColor === color && <FiCheck className="text-black drop-shadow-md" size={16} />}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 text-[#C6A76B] font-black uppercase tracking-[0.2em] mb-6">
                                    <span className="text-xl">⚠</span> <span>Requirements</span>
                                </div>
                                <ul className="text-white/60 text-sm space-y-4 list-none pl-1">
                                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-white/20 block rounded-full mt-1.5 shrink-0" /> Minimum 10% wastage allowance recommended.</li>
                                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-white/20 block rounded-full mt-1.5 shrink-0" /> Sub-floor moisture & level check inherently required.</li>
                                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-white/20 block rounded-full mt-1.5 shrink-0" /> Clear room 24hrs before installation.</li>
                                    <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-white/20 block rounded-full mt-1.5 shrink-0" /> Signed disclaimer form required upon survey.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DUBAI CONTEXT -> LONDON CONTEXT */}
            <div className="py-24 max-w-[1440px] mx-auto px-6 lg:px-12 border-t border-white/5">
                <div className="text-center mb-20">
                    <span className="text-[#C6A76B] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">LONDON CONTEXT</span>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white">Why This Floor For London?</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-[#161616] p-12 rounded-xl">
                        <div className="w-20 h-20 rounded-full bg-[#C6A76B] text-black flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(198,167,107,0.4)]">
                            <FiMapPin size={32} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">Conquer the Suburbs</h3>
                        <p className="text-white/50 leading-loose text-[15px]">
                            London's townhouses feature some of the highest daily foot traffic. This `{product.type}` is engineered to withstand modern daily wear without losing a fraction of its aesthetic appeal.
                        </p>
                    </div>
                    <div className="bg-[#161616] p-12 rounded-xl">
                        <div className="w-20 h-20 rounded-full bg-[#1A1A1A] border-2 border-[#C6A76B] text-[#C6A76B] flex items-center justify-center mx-auto mb-8">
                            <FiSun size={32} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">Built for Winters</h3>
                        <p className="text-white/50 leading-loose text-[15px]">
                            Designed for complex environments, this flooring works perfectly alongside modern underfloor heating systems, ensuring maximum comfort even during damp London winters.
                        </p>
                    </div>
                    <div className="bg-[#161616] p-12 rounded-xl">
                        <div className="w-20 h-20 rounded-full bg-[#C6A76B] text-black flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(198,167,107,0.4)]">
                            <FiStar size={32} className="fill-current" />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-6">The Golden Era</h3>
                        <p className="text-white/50 leading-loose text-[15px]">
                            Fitted exclusively by our expert team. Its seamless joints and flawless finishes ensure your space feels like a high-end Mayfair hotel, capturing that exact luxury vibe.
                        </p>
                    </div>
                </div>
            </div>

            {/* PRICING OPTIONS (FULL WIDTH YELLOW BG) */}
            <div id="pricing" className="bg-[#997F46] py-32 mt-12 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-black font-black uppercase tracking-[0.4em] text-[11px] mb-4 block">SELECT DURATION</span>
                        <h2 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-6">
                            PRICING <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}>OPTIONS</span>
                        </h2>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                        {/* Sample Card */}
                        <div className="bg-[#111111] p-8 rounded-xl w-full max-w-[380px] border border-white/10 text-center flex flex-col justify-between h-[380px] hover:border-white/30 transition-all">
                            <div>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tighter mb-2">Sample Piece</h3>
                                <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-[9px] mb-8">Touch & Feel</p>
                                
                                <div className="text-4xl text-[#C6A76B] font-black uppercase tracking-tighter mb-2">TRY FOR FREE</div>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest">Delivered To You</p>
                            </div>
                            
                            <button onClick={() => setIsModalOpen(true)} className="w-full border-2 border-white/20 text-white py-4 font-black uppercase tracking-[0.2em] text-[11px] rounded-sm hover:border-white hover:bg-white hover:text-black transition-all">
                                Request Sample
                            </button>
                        </div>
                        
                        {/* Supply & Fit */}
                        <div className="bg-[#111111] p-8 rounded-2xl w-full max-w-[420px] border-2 border-[#C6A76B] text-center flex flex-col justify-between h-[420px] relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:-translate-y-6">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C6A76B] text-black font-black uppercase tracking-widest text-[10px] py-2 px-6 rounded-full shadow-lg">
                                Most Popular
                            </div>
                            
                            <div className="mt-6">
                                <h3 className="text-white text-3xl font-black uppercase tracking-tighter mb-2">Supply & Measure</h3>
                                <p className="text-white/40 uppercase tracking-[0.2em] font-bold text-[9px] mb-8">Full House Experience</p>
                                
                                <div className="text-5xl text-[#C6A76B] font-black uppercase tracking-tighter mb-2">ASK FOR PRICE</div>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest">or calculate instantly</p>
                            </div>
                            
                            <button onClick={() => navigate('/calculator')} className="w-full bg-[#C6A76B] text-[#111111] py-5 font-black uppercase tracking-[0.2em] text-[12px] rounded-sm hover:bg-[#b0945d] transition-all shadow-xl">
                                Calculate Dimensions
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIDER REVIEWS */}
            <div className="py-32">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white">Client Reviews</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#161616] p-12 rounded-2xl">
                            <div className="flex text-[#C6A76B] mb-8 gap-1">
                                <FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" />
                            </div>
                            <p className="text-white/60 italic leading-loose text-lg font-serif mb-10">
                                "The {product.name} is exceptional! So much raw quality compared to standard options. The estimator let us browse thoroughly but kept the fitting swift."
                            </p>
                            <p className="text-white font-black uppercase tracking-widest text-xs">- James T. (UK)</p>
                        </div>
                        <div className="bg-[#161616] p-12 rounded-2xl">
                            <div className="flex text-[#C6A76B] mb-8 gap-1">
                                <FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" />
                            </div>
                            <p className="text-white/60 italic leading-loose text-lg font-serif mb-10">
                                "Worth every single penny for the complete installation. We completely redesigned the ground floor where no other floors stood a chance. Amazing."
                            </p>
                            <p className="text-white font-black uppercase tracking-widest text-xs">- Sarah L. (London)</p>
                        </div>
                        <div className="bg-[#161616] p-12 rounded-2xl">
                            <div className="flex text-[#C6A76B] mb-8 gap-1">
                                <FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" /><FiStar size={20} className="fill-current" />
                            </div>
                            <p className="text-white/60 italic leading-loose text-lg font-serif mb-10">
                                "The machine edge fitting was brand new and totally clean. The team at MFA Floors is deeply professional. Highly recommended."
                            </p>
                            <p className="text-white font-black uppercase tracking-widest text-xs">- Ahmed K. (UAE)</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Redesigned Sample Selection Modal */}
            <SampleRedesignModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                product={product}
            />
        </div>
    );
};

export default ProductDetail;