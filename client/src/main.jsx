import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
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
