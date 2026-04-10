import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('carpet_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [sampleItems, setSampleItems] = useState(() => {
        const savedSamples = localStorage.getItem('carpet_samples');
        return savedSamples ? JSON.parse(savedSamples) : [];
    });

    useEffect(() => {
        localStorage.setItem('carpet_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('carpet_samples', JSON.stringify(sampleItems));
    }, [sampleItems]);

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item._id === product._id);
            if (existingItem) {
                return prev.map(item =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item._id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const addToSamples = (product, color) => {
        setSampleItems(prev => {
            // Check if this specific product + color combo already exists
            const exists = prev.find(item => item._id === product._id && item.selectedColor === color);
            if (exists) return prev;

            // Limit to 3 samples
            if (prev.length >= 3) {
                alert('You can only order up to 3 samples.');
                return prev;
            }

            return [...prev, { ...product, selectedColor: color }];
        });
    };

    const removeFromSamples = (productId, color) => {
        setSampleItems(prev => prev.filter(item => !(item._id === productId && item.selectedColor === color)));
    };

    const clearSamples = () => {
        setSampleItems([]);
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    
    // Calculate total discount
    const totalDiscount = cartItems.reduce((total, item) => {
        const price = Number(item.price) || 0;
        const discount = Number(item.discount) || 0;
        const quantity = Number(item.quantity) || 1;
        const discountAmount = (price * discount / 100) * quantity;
        return total + discountAmount;
    }, 0);

    const finalTotal = cartTotal - totalDiscount;
    const samplesCount = sampleItems.length;

    const value = React.useMemo(() => ({
        cartItems, addToCart, removeFromCart, clearCart, cartCount, cartTotal, totalDiscount, finalTotal,
        sampleItems, addToSamples, removeFromSamples, clearSamples, samplesCount
    }), [cartItems, sampleItems, cartCount, cartTotal, totalDiscount, finalTotal, samplesCount]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
