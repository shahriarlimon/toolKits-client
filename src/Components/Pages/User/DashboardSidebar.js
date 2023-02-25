import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import { ImProfile } from 'react-icons/im';
import { MdPreview } from 'react-icons/md';
import { BiPurchaseTagAlt } from 'react-icons/bi'


const DashboardSidebar = ({ children }) => {
    return (
        <div class='drawer drawer-mobile mt-8 bg-white'>
            <input id='dashboard-sidebar' type='checkbox' class='drawer-toggle' />
            <div class='drawer-content flex flex-col'>
                {children}
            </div>
            <div class='drawer-side bg-white '>
                <label for='dashboard-sidebar' class='drawer-overlay '></label>
                <ul class='menu p-4 overflow-y-auto w-60 text-base-content'>
                    <li>
                        <Link to="/dashboard/myOrder"><BiPurchaseTagAlt className="text-orange-500" />My Orders</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/add-review"><MdPreview className="text-orange-500" />Add a review</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/my-profile"> <ImProfile className="text-orange-500" />My Profile</Link>
                    </li>
                    <li className="">
                        <Link to="/dashboard/manage-all-order"><AiOutlineLogout className="text-orange-500" />Logout</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;