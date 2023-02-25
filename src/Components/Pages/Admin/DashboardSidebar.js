import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = ({ children }) => {
    return (
        <div class='drawer drawer-mobile mt-8 bg-green-200'>
            <input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
            <div class='drawer-content flex flex-col items-center justify-center'>
                {children}
            </div>
            <div class='drawer-side bg-slate-100 '>
                <label for='dashboard-sidebar' class='drawer-overlay '></label>
                <ul class='menu p-4 overflow-y-auto w-60 text-base-content'>
                    <li>
                        <Link to="/admin/dashboard/my-profile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/manage-all-orders">Manage All Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/add-product">Add Product</Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/make-admin">Make Admin</Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard/manage-product">Manage Product</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;