import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';

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

      {/* Admin Login */}
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

      {/* Catch-all redirect to admin */}
      <Route path="*" element={<Navigate to="/admin/products" replace />} />
    </Routes>
  );
}

export default App;
