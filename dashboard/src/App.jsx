import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
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
import Gallery from './pages/Gallery';
import CalculatorPage from './pages/CalculatorPage';

import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import SamplesAdmin from './pages/SamplesAdmin';

function App() {
  return (
    <Routes>
      {/* Redirect root to Admin Products */}
      <Route path="/" element={<Navigate to="/admin/products" replace />} />

      {/* Public Client Website Routes */}
      <Route path="/public" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Shop />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="samples" element={<Samples />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="calculator" element={<CalculatorPage />} />
        {/* Add more public routes here like /shop, /about, /contact */}
      </Route>

      {/* Public Login */}
      <Route path="/login" element={<Login />} />

      {/* Admin Dashboard Routes */}
      <Route path="/admin" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="samples" element={<SamplesAdmin />} />
        <Route path="customers" element={<Customers />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
