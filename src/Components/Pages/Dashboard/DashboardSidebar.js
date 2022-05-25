import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../Firebase/FirebaseConfig.init";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = ({ children }) => {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
    <div class='drawer drawer-mobile mt-8 bg-green-200'>
      <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
      <div class='drawer-content flex flex-col items-center justify-center'>
        {children}
      </div>
      <div class='drawer-side bg-slate-100 '>
        <label for='my-drawer-2' class='drawer-overlay '></label>
        <ul class='menu p-4 overflow-y-auto w-80 text-base-content'>
       { (user && !admin) && <>
        <li>
            <Link to="/dashboard/my-order">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-review">Add a review</Link>
          </li>
       </>}
         {  (user || admin) &&
           <>
             <li>
            <Link to="/dashboard/my-profile">My Profile</Link>
          </li>
           </>
         }
        { admin &&
          <>
             <li>
            <Link to="/dashboard/manage-all-order">Manage All Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/dashboard/make-admin">Make Admin</Link>
          </li>
          <li>
            <Link to="/dashboard/manage-product">Manage Product</Link>
          </li>
          
          </>
        }
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;