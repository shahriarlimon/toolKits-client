import React from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
  return (
    <div class='drawer drawer-mobile mt-16 bg-green-200'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        {children}
      </div>
      <div class='drawer-side '>
        <label for='my-drawer-2' class='drawer-overlay'></label>
        <ul class='menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content'>
        <li>
            <Link to="/dashboard/my-order">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add a review</Link>
          </li>
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-all-order">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/make-admin">Make Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-product">Manage Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;