import React from "react";
import DashSideBar from "../Components/DashSideBar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-5 w-11/12 mx-auto py-12 h-screen">
      <div className="col-span-1 sticky top-18 self-start">
        <DashSideBar></DashSideBar>
      </div>
      <div className="col-span-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
