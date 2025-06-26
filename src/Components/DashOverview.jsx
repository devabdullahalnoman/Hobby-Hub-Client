import React, { useContext } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import { AuthContext } from "../Contexts/AuthContext";

const DashOverview = () => {
  const { groupsData } = useContext(GroupsContext);
  const { user } = useContext(AuthContext);
  const myGroups = groupsData.filter((group) => user.uid === group.creatorId);
  const myJoinedGroups = groupsData.filter((group) =>
    group.members?.some((member) => member.uid === user.uid)
  );
  console.log(myJoinedGroups);
  console.log(user);
  console.log(groupsData);
  return (
    <div className="lg:w-10/12 mx-auto">
      <h1 className="text-5xl md:text-7xl mt-5 font-extrabold">Welcome, {user.displayName}!</h1>
      <div className="lg:flex items-center justify-between my-10 rounded-2xl p-6 space-y-5 bg-base-200">
        <div className="avatar">
          <div className="w-50 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-4xl">{user.displayName}</h2>
          <h3 className="text-xl md:text-3xl">{user.email}</h3>
        </div>
      </div>
      <div className="rounded-2xl p-6 bg-base-200">
        <h1 className="text-5xl mb-5">Dashboard</h1>
      <div>
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          <div className="stats shadow w-full bg-base-300 border border-gray-300">
          <div className="stat">
            <div className="stat-title text-xl">Total Groups</div>
            <div className="stat-value text-center">{groupsData.length}</div>
          </div>
        </div>
        <div className="stats shadow w-full bg-base-300 border border-gray-300">
          <div className="stat">
            <div className="stat-title text-xl">My Created Groups</div>
            <div className="stat-value text-center">{myGroups.length}</div>
          </div>
        </div>
        <div className="stats shadow w-full bg-base-300 border border-gray-300">
          <div className="stat">
            <div className="stat-title text-xl">My Joined Groups</div>
            <div className="stat-value text-center">{myJoinedGroups.length}</div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DashOverview;
