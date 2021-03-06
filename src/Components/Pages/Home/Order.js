import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/FirebaseConfig.init";
import Loading from "../../Shared/Loading/Loading";

const Order = () => {
  const { id } = useParams();
  const [tool, setTool] = useState({});
  const [user, userLoading] = useAuthState(auth);
  const [quantityError, setQuantityError] = useState("");
  const [quantity, setQuantity] = useState(tool?.minimum_order_quantity);

  useEffect(() => {
    const url = ` https://enigmatic-bastion-29863.herokuapp.com/get-tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
      });
  }, [id]);
  const verifQuantity = (e) => {
    const inputValue = e.target.value;
    setQuantity(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      tool_name: tool.name,
      tool_id: tool._id,
      tool_quantity: parseInt(e.target.ordered_quantity.value),
      unit_price: tool.unit_price,
      img: tool.img,
      email: user.email,
      user_name: user.displayName,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    fetch(" https://enigmatic-bastion-29863.herokuapp.com/create-order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        authorization: `${user.email} ${localStorage.getItem("access_token")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          e.target.reset();
          toast(data.message);
        } else {
          e.target.reset();
          toast(data.message);
        }
      });
  };
  if (userLoading) {
    return <Loading />;
  }
  return (
    <div class="hero min-h-min bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <div class="card lg:max-w-max bg-base-100 shadow-xl flex-1">
          <div class="card-body">
            <h1 className="text-center text-3xl">
              Welcome <span className="text-blue-500">{user?.displayName}</span>
            </h1>
            <p className="text-center text-2xl mb-3">
              Email: <span className="text-purple-500"> {user?.email}</span>
            </p>
            <h2 class="card-title">{tool.name}</h2>
            <p> Unit Price: ${tool.unit_price}</p>
            <p>Available Quantity: {tool.available_quantity}</p>
            <p>Minimum Order Quantity: {tool.minimum_order_quantity}</p>
            <p>Description: {tool.description}</p>
          </div>
          <figure>
            <img className="h-[200px]" src={tool?.img} alt="Shoes" />
          </figure>
        </div>
        <form
          onSubmit={handleSubmit}
          class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1"
        >
          <div class="card-body">
            <h1 className="text-2xl font-semibold text-gray-600">
              {" "}
              Fill up to place the order
            </h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">User Name</span>
              </label>
              <input
                readOnly
                disabled
                name="user_name"
                type="text"
                value={user?.displayName}
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                disabled
                readOnly
                type="text"
                value={user?.email}
                name="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Quantity</span>
              </label>
              <input
                onChange={verifQuantity}
                name="ordered_quantity"
                type="number"
                defaultValue={tool?.minimum_order_quantity}
                class="input input-bordered"
              />
              {quantity >= tool?.available_quantity && (
                <p className="text-sm text-red-500 mt-2">
                  Input value cann't be larger than available quantity
                </p>
              )}
              {quantity < tool?.minimum_order_quantity && (
                <p className="text-sm text-red-500 mt-2">
                  Input value cann't be smaller than min available quantity
                </p>
              )}
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Address</span>
              </label>
              <input
                required
                name="address"
                type="text"
                placeholder="Address"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Phone</span>
              </label>
              <input
                required
                name="phone"
                type="number"
                placeholder="Number"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary"
                disabled={
                  quantity >= tool?.available_quantity ||
                  quantity < tool?.minimum_order_quantity
                }
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Order;
