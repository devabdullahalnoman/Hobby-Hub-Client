import React from "react";
import { Link } from "react-router";

const DashSideBar = () => {
  return (
    <div className="card card-lg p-7 text-base-content lg:w-11/12 h-fit bg-base-300">
      <h1 className="card-title text-3xl">Navigation</h1>
      <ul className="text-xl flex flex-col gap-3 mt-5">
        <li>
          <Link to="/dashboard">Overview</Link>
        </li>
        <hr className="w-full" />
        <li>
          <Link to="dashAllGroups">All Groups</Link>
        </li>
        <hr className="w-full" />
        <li>
          <Link to="createGroup">Create Group</Link>
        </li>
        <hr className="w-full" />
        <li>
          <Link to="myGroups">My Groups</Link>
        </li>
        <hr className="w-full" />
        <li>
          <Link to="myJoinedGroups">My Joined Groups</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashSideBar;
