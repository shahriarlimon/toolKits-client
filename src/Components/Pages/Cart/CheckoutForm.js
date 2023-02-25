import React, { useEffect, useRef, useState } from 'react';
import { CardElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { MdPayment } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { clearErrors, createOrder } from '../../../redux/actions/orderActions';

const CheckoutForm = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const payBtn = useRef(null);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart)
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useSelector((state) => state.user);
  const { error } = useSelector((state) => state.newOrder);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),

  }
  let order = {
    shippingInfo: { ...shippingInfo },
    orderItems: cartItems,
    totalPrice: (orderInfo.totalPrice).toFixed(2)
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    payBtn.current.disabled = true;
    try {
      const config = {
        Headers: {
          "Content-Type": "application/json"
        },
        withCredential: true
      }
      const { data } = await axios.post("http://localhost:5000/api/v1/payment/process/payment", paymentData, config)
      const client_secret = data.client_secret
      if (!elements || !stripe) return;
      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          type: 'card',
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.name,
            email: user?.email,
            address: {
              line1: shippingInfo?.address,
              city: shippingInfo?.city,
              state: shippingInfo?.state,
              postal_code: shippingInfo?.zipCode,
              country: shippingInfo?.country
            }
          }
        }
      })
      if (result.error) {
        payBtn.current.disabled = false
        toast.error(result?.error?.message)
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          console.log('getting the intended result')
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status
          }
          dispatch(createOrder(order));
          navigate('/order/success')
        } else {
          toast.error("There's some issues while processing payment")
        }

      }

    } catch (error) {
      toast.error(error?.response?.data?.message)
      payBtn.current.disabled = false;

    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch])

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

      <button ref={payBtn} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
        Pay Now
      </button>
    </form>
  );
};

export default CheckoutForm;
