import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { GroupsContext } from "../Contexts/GroupsContext";
import MyGroupsTableData from "./MyGroupsTableData";

const MyGroups = () => {
  const { user } = use(AuthContext);
  const { groupsData, setGroupsData } = use(GroupsContext);

  const myGroups = groupsData.filter((group) => user.uid === group.creatorId);

  return (
    <div className="lg:w-10/12 mx-auto lg:min-h-screen">
      <h1 className="text-4xl text-center mb-6">My Groups</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Hobby Category</th>
              <th>Maximum Members</th>
              <th>Meeting Location</th>
              <th>Starting Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myGroups.map((group) => (
              <MyGroupsTableData
                group={group}
                groupsData={groupsData}
                setGroupsData={setGroupsData}
                key={group._id}
              ></MyGroupsTableData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
