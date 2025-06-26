import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { GroupsContext } from "../Contexts/GroupsContext";
import { Link } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

const MyJoinedGroups = () => {
  const { user } = use(AuthContext);
  //   const { groupsData } = use(GroupsContext);

  const [groupsData, setGroupsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hobby-hub-server-chi.vercel.app/")
      .then((res) => res.json())
      .then((data) => {
        setGroupsData(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const myJoinedGroups = groupsData.filter((group) =>
    group.members?.some((member) => member.uid === user.uid)
  );

  return (
    <div className="lg:w-10/12 mx-auto mb-6 lg:min-h-screen">
      <h1 className="text-4xl text-center my-6">My Joined Groups</h1>
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
            {myJoinedGroups.map((group) => (
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

export default MyJoinedGroups;
