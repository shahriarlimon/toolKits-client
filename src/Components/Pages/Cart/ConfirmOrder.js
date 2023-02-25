import React from "react";
import { useSelector } from "react-redux";

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart)
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price).toFixed(2), 0);

  return (
    <div className="container mx-auto my-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Confirm Order</h2>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Shipping Address</h3>
          <p>{shippingInfo?.address}</p>
          <p>{shippingInfo?.city}, {shippingInfo?.state} {shippingInfo?.zipCode}</p>
          <p>{shippingInfo?.country}</p>
          <p>{shippingInfo?.phone}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Cart Items</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
                <div>
                  <p>{item.name}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${totalPrice.toFixed(2)}</p>
        </div>

        <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
