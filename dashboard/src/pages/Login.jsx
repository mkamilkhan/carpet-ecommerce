import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'admin@gmail.com' && password === 'admin123') {
            localStorage.setItem('adminAuth', 'true');
            navigate('/admin/products');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center p-4">
            <div className="bg-[#1A1A1A] p-8 rounded-lg shadow-2xl w-full max-w-md border border-white/10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
                    <p className="text-gray-400">Sign in to access the dashboard</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded text-white focus:outline-none focus:border-[#C6A76B] transition-colors"
                            placeholder="admin@gmail.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-[#0F0F0F] border border-white/10 rounded text-white focus:outline-none focus:border-[#C6A76B] transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#C6A76B] text-white font-bold py-3 px-4 rounded hover:bg-[#b0945d] transition-colors mt-4"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
