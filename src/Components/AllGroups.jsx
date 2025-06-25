import React, { use } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import GroupCard from "./GroupCard";

const AllGroups = () => {
  const { groupsData } = use(GroupsContext);

  return (
    <div>
      <h1 className="text-4xl mt-10 text-center">All Groups</h1>
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 xl:grid-cols-3 gap-10 my-10 bg-base-200 p-4 lg:p-12 rounded-2xl">
        {groupsData.map((data) => (
          <GroupCard data={data} key={data._id}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
