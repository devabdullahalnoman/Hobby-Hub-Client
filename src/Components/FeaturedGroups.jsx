import React, { use } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import GroupCard from "./GroupCard";
import LoadingSpinner from "./LoadingSpinner";

const FeaturedGroups = () => {
  const { groupsData, loading } = use(GroupsContext);
  const today = new Date();

  const featuredGroups = groupsData
    .filter((group) => new Date(group.startDate) >= today)
    .slice(0, 8);

  return (
    <div className="my-15 shadow-lg">
      <h1 className="text-center text-4xl mb-6 font-extrabold">
        Featured Groups
      </h1>
      <div className="bg-base-200 py-6 lg:py-0">
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 w-10/12 xl:grid-cols-4 gap-7 my-10 p-4 lg:py-12 rounded-2xl">
            {featuredGroups.map((data) => (
              <GroupCard key={data._id} data={data}></GroupCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedGroups;
