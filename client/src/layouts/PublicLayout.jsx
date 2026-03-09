import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import useScrollReveal from '../hooks/useScrollReveal';

const PublicLayout = () => {
    // Global scroll reveal — applies to ALL public pages automatically.
    // MutationObserver inside the hook also catches async-loaded elements.
    useScrollReveal();

    return (
        <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
