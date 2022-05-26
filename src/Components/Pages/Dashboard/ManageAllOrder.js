import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import ManageOrderRow from "./ManageOrderRow";

const ManageAllOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
    error,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/get-orders`).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1 className="text-3xl mb-3">Total Orders :{orders.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Ordered Tool</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageOrderRow
                key={index}
                order={order}
                index={index}
                refetch={refetch}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrder;
