import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';

import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

import PublicLayout from './layouts/PublicLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Samples from './pages/Samples';
import Services from './pages/Services';
import CalculatorPage from './pages/CalculatorPage';

import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import SamplesAdmin from './pages/SamplesAdmin';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Client Website Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="collection" element={<PageTransition><Shop /></PageTransition>} />
          <Route path="product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
          <Route path="about" element={<PageTransition><About /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="cart" element={<PageTransition><Cart /></PageTransition>} />
          <Route path="samples" element={<PageTransition><Samples /></PageTransition>} />
          <Route path="services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="calculator" element={<PageTransition><CalculatorPage /></PageTransition>} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="samples" element={<SamplesAdmin />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
