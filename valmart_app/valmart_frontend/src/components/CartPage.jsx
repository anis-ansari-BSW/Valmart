import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Cart Items */}
                <div>
                    <h2 className="text-2xl font-bold">Cart Items</h2>
                    {cart.map((item, index) => (
                        <div key={index} className="flex items-center mb-4">
                            <img src={item.image_url} alt={item.title} className="w-32 h-32 object-contain mr-4" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p>Price: ${Number(item.final_price)}</p>
                                <p>Savings: ${Number(item.savings)}</p>
                                <div className="flex items-center mt-2">
                                    <button className="px-2 py-1 bg-gray-200" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button className="px-2 py-1 bg-gray-200" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                    <button className="ml-4 px-2 py-1 bg-red-500 text-white" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <p>{item.title}</p>
                                <p>Price: ${Number(item.final_price)}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right Column: Payment Section */}
                <div>
                    <h2 className="text-2xl font-bold">Payment</h2>
                    {/* Add payment form or details here */}
                </div>
            </div>
        </div>
    );
};

export default CartPage;