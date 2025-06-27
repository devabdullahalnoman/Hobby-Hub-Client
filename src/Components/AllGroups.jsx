import React, { useState, use } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import GroupCard from "./GroupCard";
import LoadingSpinner from "./LoadingSpinner";

const AllGroups = () => {
  const { groupsData, loading } = use(GroupsContext);

  const [sortOrder, setSortOrder] = useState("asc");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(groupsData.map((group) => group.category)),
  ];

  const filteredAndSortedGroups = groupsData
    .filter((group) =>
      category === "all" ? true : group.category === category
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.groupName?.localeCompare(b.groupName)
        : b.groupName?.localeCompare(a.groupName)
    );

  return (
    <div>
      <h1 className="text-4xl mt-10 text-center">All Groups</h1>
      <p className="text-2xl font-medium text-center">
        Discover Our listed groups here
      </p>
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row flex-wrap justify-between items-center gap-4 my-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          {categories.map((categories, index) => (
            <option key={index} value={categories}>
              {categories === "all" ? "All Categories" : categories}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="lg:w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 my-10 bg-base-200 p-4 lg:p-12 rounded-2xl">
          {filteredAndSortedGroups.map((data) => (
            <GroupCard data={data} key={data._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
