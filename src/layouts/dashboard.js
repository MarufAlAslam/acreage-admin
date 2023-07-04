import React from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-8 items-center">
      <div className="md:w-2/12 w-full">
        <Sidebar />
      </div>

      <div className="md:w-10/12 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
