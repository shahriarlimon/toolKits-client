import React from 'react';
import { useSelector } from 'react-redux';

const CartItem = ({ item }) => {
    const totalPrice = item.price * item.quantity;
   

    return (
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center flex-1">
                <img src={item?.image} alt={item?.name} className="w-12 h-12 object-contain mr-4" />
                <div>
                    <h3 className="font-bold">{item?.name}</h3>
                    <p className="text-gray-700">${item?.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center">
                <p className="text-gray-700">{item?.quantity} =</p>
                <p className="text-gray-700 ml-4">${totalPrice?.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default CartItem;
