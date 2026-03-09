import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'

// Set globally for production
if (import.meta.env.VITE_API_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
}
import React from 'react';

class GlobalErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    fetch('http://localhost:5002', { method: 'POST', body: error.stack + '\n\n' + errorInfo.componentStack })
      .catch(() => { });
  }
  render() { return this.props.children; }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </GlobalErrorBoundary>
  </StrictMode>,
)
