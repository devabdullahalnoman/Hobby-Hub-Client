import React from "react";

const Members = ({ member }) => {
  return (
    <div className="card bg-base-100 w-fit p-4 rounded-lg">
      <h1 className="text-xl">
        <span className="text-lg font-medium mr-2">User Name:</span>
        {member.userName}
      </h1>
      <h1 className="text-xl">
        <span className="text-lg font-medium mr-2">User Email:</span>
        {member.email}
      </h1>
    </div>
  );
};

export default Members;
