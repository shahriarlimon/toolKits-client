import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const tool = {
      name: e.target.name.value,
      available_quantity: e.target.available_quantity.value,
      minimum_order_quantity: e.target.minimum_order_quantity.value,
      unit_price: e.target.unit_price.value,
      img: e.target.img.value,
      description: e.target.description.value,
    };
    fetch(" https://enigmatic-bastion-29863.herokuapp.com/add-tool", {
      method: "POST",
      body: JSON.stringify(tool),
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
          if(data.status){
              toast(data.message);
              e.target.reset();
          }
    });
  };
  return (
    <div class="max-w-2xl mx-auto bg-white p-16 mt-5">
      <h1 className="text-2xl font-bold text-center text-gray-500 mb-5 ">
        Add Product
      </h1>

      <form onSubmit={handleSubmit}>
        <div class="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
            <label
              for="tool_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tool name
            </label>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={"BLACK+DECKER 4V MAX Cordless Screwdriver "}
              required
              disabled
              name="name"
            />
          </div>
          <div>
            <label
              for="available_quantity"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Available Quantity
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Available Quantity"
              required
              name="available_quantity"
            />
          </div>
          <div>
            <label
              for="minimum_order_quantity"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Minimum Order Quantity
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Minimum Order Quantity"
              required
              name="minimum_order_quantity"
            />
          </div>
          <div>
            <label
              for="price"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Per Unit Price
            </label>
            <input
              type="number"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price per unit"
              required
              name="unit_price"
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="tool_image"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tool's Image Url
          </label>
          <input
            type="url"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={
              "https://m.media-amazon.com/images/I/518Q-OcLcwS._AC_SX425_.jpg"
            }
            disabled
            name="img"
          />
        </div>
        <div class="mb-6">
          <label
            for="tool_description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tool Description
          </label>
          <textarea
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={
              "Assembling furniture, fixing toys, hanging pictures—all of these everyday to-dos can be frustrating when you’re searching for bits. But thanks to BLACK+DECKER’s ROTO-BIT 4V MAX* cordless screwdriver with bit storage kit, you’ll easily take care of those tasks without the frustration. This cordless screwdriver is equipped with an 8-bit storage cartridge, so every bit is always on hand, while an on-board magnet holds extra screws while you work. It’s also designed with an LED that illuminates your worksurface and includes a rechargeable 4V MAX* lithium ion battery that holds its charge for up to 18 months. *Maximum initial battery voltage (measured without a workload) is 4 volts. Nominal voltage is 3.6 volts."
            }
            disabled
            name="description"
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
