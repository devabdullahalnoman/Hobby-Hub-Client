import React, { useContext, useEffect, useState } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import { AuthContext } from "../Contexts/AuthContext";
import MyContributionChart from "./MyContributionChart";
import MyJoinedChart from "./MyJoinedChart";

const DashOverview = () => {
  const { groupsData } = useContext(GroupsContext);
  const { user } = useContext(AuthContext);
  // const myGroups = groupsData.filter((group) => user.uid === group.creatorId);
  // const myJoinedGroups = groupsData.filter((group) =>
  //   group.members?.some((member) => member.uid === user.uid)
  // );

  const [myGroups, setMyGroups] = useState([]);
  const [myJoinedGroups, setMyJoinedGroups] = useState([]);

  useEffect(() => {
    const created = groupsData.filter((group) => user.uid === group.creatorId);
    const joined = groupsData.filter((group) =>
      group.members?.some((member) => member.uid === user.uid)
    );

    setMyGroups(created);
    setMyJoinedGroups(joined);
  }, [groupsData, user.uid]);

  return (
    <div>
      <h1 className="text-5xl md:text-7xl mt-5 font-extrabold">
        Welcome, {user.displayName}!
      </h1>
      <div className="rounded-2xl p-6 bg-base-200 mt-15 col-span-3">
        <h1 className="text-5xl mb-5">Dashboard</h1>
        <div>
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <div className="stats shadow w-full bg-base-300 border border-gray-300">
              <div className="stat">
                <div className="stat-title text-xl">Total Groups</div>
                <div className="stat-value text-center">
                  {groupsData.length}
                </div>
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
                <div className="stat-value text-center">
                  {myJoinedGroups.length}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex justify-center gap-4">
            <MyContributionChart
              totalGroups={groupsData.length}
              myCreatedGroups={myGroups.length}
            />
            <MyJoinedChart
              totalGroups={groupsData.length}
              myJoinedGroups={myJoinedGroups.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashOverview;
