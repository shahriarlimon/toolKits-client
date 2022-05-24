import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from '../../../Firebase/FirebaseConfig.init'

const Dashboard = () => {
  const [user] = useAuthState(auth);

  return (
    <div class="drawer drawer-mobile">
      <input id="side-bar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col bg-green-200">
        {/* <!-- Page content here --> */}
        <h1 className="text-4xl ">Welcome Back <span className="text-purple-500">{user?.displayName}</span></h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="side-bar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          {/*  <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add a review</Link>
          </li>
          <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-all-orders">Manage All Orders</Link>
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

export default Dashboard;
