import React from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const ShippingDetailsPreview = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4">Shipping Details Preview</h1>
            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <p className="text-gray-700">{"shahriar limon"}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Address
                        </label>
                        <p className="text-gray-700">{"payerKhola"}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Phone
                        </label>
                        <p className="text-gray-700">{"3489297891"}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            City
                        </label>
                        <p className="text-gray-700">{"comilla"}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            State
                        </label>
                        <p className="text-gray-700">{"chittagong"}</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Zip
                        </label>
                        <p className="text-gray-700">{"12353"}</p>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1">
                    <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
                    {cartItems.map((item) => (
                        <CartItem key={item._id} item={item} />
                    ))}
                    <div className="flex justify-between mt-4">
                        <p className='text-xl font-bold'>Total : <span className='text-orange-400'>${subtotal}</span> </p>
                        <button onClick={()=>navigate("/process/payment")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShippingDetailsPreview;
