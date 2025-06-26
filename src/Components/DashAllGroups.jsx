import React, { use } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import { Link } from "react-router";

const DashAllGroups = () => {
  const { groupsData } = use(GroupsContext);

  return (
    <div className="lg:w-10/12 lg:mx-auto lg:min-h-screen">
      <h1 className="text-4xl text-center mb-6">All Groups</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Hobby Category</th>
              <th>Maximum Members</th>
              <th>Meeting Location</th>
              <th>Starting Date</th>
              <th>Visit</th>
            </tr>
          </thead>
          <tbody>
            {groupsData.map((group) => (
              <tr key={group._id}>
                <td>{group.groupName}</td>
                <td>{group.category}</td>
                <td>{group.maxMembers}</td>
                <td>{group.meetingLocation}</td>
                <td>{group.startDate}</td>
                <td>
                  <Link to={`/groupDetails/${group._id}`}>
                    <button className="btn btn-primary btn-sm text-base-content">
                      Visit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashAllGroups;
