import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const DashSideBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="card card-lg p-4 xl:p-7 text-base-content lg:w-full xl:w-11/12 h-fit bg-base-300">
      <div className="flex flex-col items-center justify-center my-10 rounded-2xl p-6 space-y-5 bg-base-200 col-span-1">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-lg">{user.displayName}</h2>
          <h3 className="">{user.email}</h3>
        </div>
      </div>
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
