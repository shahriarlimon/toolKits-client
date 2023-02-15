import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { MdPayment } from "react-icons/md"

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      console.log(paymentMethod);
      // Handle successful payment here
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-6 border rounded-lg shadow-lg mt-5">
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Pay with Credit Card <MdPayment className='text-orange-500 ml-2' /></h2>

      <div className="mb-4">
        <label htmlFor="card-element" className="block text-gray-700 font-bold mb-2">
          Credit or Debit Card 
        </label>
        <div className="border border-gray-300 rounded-lg px-3 py-2">
          <CardElement id="card-element" options={{}} />
        </div>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
