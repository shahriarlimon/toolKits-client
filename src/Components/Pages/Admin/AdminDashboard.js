import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const AdminDashboard = () => {
    return (
        <div className="h-screen bg-white">
            <DashboardSidebar>
                <Outlet />
            </DashboardSidebar>
        </div>
    );
};

export default AdminDashboard;