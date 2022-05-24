import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../Firebase/FirebaseConfig.init";
import Loading from "../../Shared/Loading/Loading";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
    error,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/get-orders/${user.email}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Tootal orders: {orders?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr>
                <td>{order.tool_name}</td>
                <td>{order.tool_quantity}</td>
                <td>unpaid</td>
                <td>delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
