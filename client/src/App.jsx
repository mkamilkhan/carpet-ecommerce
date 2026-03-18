import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
// import Gallery from './pages/Gallery';
import CalculatorPage from './pages/CalculatorPage';

import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import SamplesAdmin from './pages/SamplesAdmin';

function App() {
  return (
    <>
      {/* ── Global dot-grid texture — fixed, above all bg colours, never blocks clicks ── */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(198,167,107,0.14) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <Routes>
        {/* Public Client Website Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="collection" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="samples" element={<Samples />} />
          <Route path="services" element={<Services />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          <Route path="calculator" element={<CalculatorPage />} />
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
    </>
  );
}

export default App;
