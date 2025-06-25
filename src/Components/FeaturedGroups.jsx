import React, { use } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import FeaturedGroupsCard from "./FeaturedGroupsCard";
import Marquee from "react-fast-marquee";

const FeaturedGroups = () => {
  const { groupsData, loading } = use(GroupsContext);
  const today = new Date();

  const featuredGroups = groupsData
    .filter((group) => new Date(group.startDate) >= today)
    .slice(0, 6);

  return (
    <div className="w-11/12 mx-auto my-16">
      <h1 className="text-center text-4xl mb-4">Featured Groups</h1>
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      ) : (
        <Marquee
          pauseOnHover
          gradient
          gradientColor="#555555a1"
          className="rounded-2xl"
          gradientWidth={40}
        >
          {featuredGroups.map((group) => (
            <FeaturedGroupsCard
              key={group._id}
              group={group}
            ></FeaturedGroupsCard>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default FeaturedGroups;
