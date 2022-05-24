import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../../../Firebase/FirebaseConfig.init";
import Loading from "../../../Shared/Loading/Loading";
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

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          refetch();
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-600 mb-3">
        Total orders: {orders?.length}
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th> Ordered Quantity</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr>
                <td>{order.tool_name}</td>
                <td>{order.tool_quantity}</td>
                <td>
                  {order.unit_price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )}
                  {order.unit_price && order.paid && (
                      <p className="text-sm font-semibold">
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                  )}
                </td>
                <td>
                { !order.paid && <button
                    onClick={() => handleDelete(order._id)}
                    class="btn btn-sm btn-error"
                  >
                    Cancel
                  </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
