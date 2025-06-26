import React from "react";
import DashSideBar from "../Components/DashSideBar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 w-10/12 mx-auto py-10 md:min-h-screen">
      <div className="col-span-1 lg:sticky top-18 self-start">
        <DashSideBar></DashSideBar>
      </div>
      <div className="col-span-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
