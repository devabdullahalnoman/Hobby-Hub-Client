import React from "react";
import { Link } from "react-router";

const DashSideBar = () => {
  return (
    <div className="card card-lg p-7 text-base-content border w-fit h-fit bg-base-300">
      <h1 className="card-title">Dashboard Pages</h1>
      <ul className="card-body text-xl">
        <li>
          <Link to="/dashboard">Overview</Link>
        </li>
        <li>
          <Link to="/dashAllGroups">All Groups</Link>
        </li>
        <li>
          <Link to="createGroup">Create Group</Link>
        </li>
        <li>
          <Link to="myGroups">My Groups</Link>
        </li>
        <li>
          <Link to="joinedGroups">My Joined Groups</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashSideBar;
