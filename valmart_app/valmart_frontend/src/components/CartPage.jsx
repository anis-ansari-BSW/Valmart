import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleRemoveItem = (productId) => {
        removeFromCart(productId);
    };

    const handleIncreaseQuantity = (productId) => {
        const item = cart.find(item => item.id === productId);
        if (item) {
            updateQuantity(productId, item.quantity + 1);
        }
    };

    const handleDecreaseQuantity = (productId) => {
        const item = cart.find(item => item.id === productId);
        if (item && item.quantity > 1) {
            updateQuantity(productId, item.quantity - 1);
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + (Number(item.final_price) * item.quantity);
        }, 0);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Cart Items */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
                    {cart.length === 0 ? (
                        <p className="text-gray-500">Your cart is empty</p>
                    ) : (
                        cart.map((item, index) => (
                            <div key={index} className="flex items-center mb-4 p-4 border rounded-lg shadow-sm">
                                <img src={item.image_url} alt={item.title} className="w-32 h-32 object-contain mr-4" />
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">Price: ${Number(item.final_price)}</p>
                                    <p className="text-green-600">Savings: ${Number(item.savings)}</p>
                                    <div className="flex items-center mt-2">
                                        <button 
                                            className="px-3 py-1 bg-gray-200 rounded-l hover:bg-gray-300" 
                                            onClick={() => handleDecreaseQuantity(item.id)}
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                                        <button 
                                            className="px-3 py-1 bg-gray-200 rounded-r hover:bg-gray-300" 
                                            onClick={() => handleIncreaseQuantity(item.id)}
                                        >
                                            +
                                        </button>
                                        <button 
                                            className="ml-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600" 
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                {/* Right Column: Order Summary */}
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between font-bold">
                            <span>Total:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;