import React, { useContext } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import { AuthContext } from "../Contexts/AuthContext";

const DashOverview = () => {
  const { groupsData, loading } = useContext(GroupsContext);
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(groupsData);
  return (
    <div>
      <h1 className="text-7xl">Welcome, {user.displayName}!</h1>
      <div className="avatar">
        <div className="w-full rounded-full">
          <img src={user.photoURL ? user.photoURL : <p>A</p>} />
        </div>
      </div>
      <h2 className="text-4xl">{user.displayName}</h2>
      <h3 className="text-3xl">{user.email}</h3>
      <h1 className="text-5xl">Dashboard</h1>
      <div>
        
      </div>
    </div>
  );
};

export default DashOverview;
