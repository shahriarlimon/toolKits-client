/* import React, { useState } from "react";
import { toast } from "react-toastify";

const ManageOrderRow = ({ order, index, refetch }) => {
    const [ship,setShip] = useState('');
  const { user_name, tool_name, _id } = order;
  const handleDelete = () => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(` https://enigmatic-bastion-29863.herokuapp.com/delete-order-by-admin/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(` Ordered ${tool_name} is deleted.`);
            refetch();
          }
        });
    }
  };
  const handleShipment = ()=>{
    fetch(` https://enigmatic-bastion-29863.herokuapp.com/ship-order/${_id}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }).then((res) => res.json())
      .then((data) => {
          toast.success(` Ordered ${tool_name} is set to ship.`);
          setShip('shipped')
          refetch();
      });

  }
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user_name}</td>
      <td>{tool_name}</td>
      {order?.paid ? (
        <td>
          <button className=" btn btn-xs btn-success">{ship?{ship}:'Pending'}</button>
        </td>
      ) : (
        <td>
          <button className=" btn btn-xs">Unpaid</button>
        </td>
      )}

      <td>
        <label
          onClick={handleDelete}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
 */