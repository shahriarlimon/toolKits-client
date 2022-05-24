import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../../../Firebase/FirebaseConfig.init";
import Loading from "../../../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1864C3bN1bJ0Ttm2VCqO6pzQOanBfTy9mzMkjGW0lATQRqjHMM1CgRVd54BEnU9lZjW4QrE0gnChYHqwcO399H00gMpO11bW"
);
const Payment = () => {
  const [user] = useAuthState(auth)
  const { id } = useParams();
  const url = `http://localhost:5000/get-order/${id}`;
  const { data: order, isLoading } = useQuery(["order-payment", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
 if(isLoading){
     return <Loading/>
 }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, {order?.user_name}</p>
          <h2 class="text-2xl">Please pay for  <span className="text-purple-500">{order.tool_name}</span></h2>
          <p>Please pay  ${parseInt(order.tool_quantity) * parseInt(order.unit_price)} for Total {order.tool_quantity} unit</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

/* import React from 'react';

const Payment = () => {
    return (
        <div>
             <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium ea neque cupiditate eaque eum numquam porro nostrum eius deleniti!</h1> 
        </div>
    );
};

export default Payment; */