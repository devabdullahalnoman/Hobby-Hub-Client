import React, { use } from "react";
import { GroupsContext } from "../Contexts/GroupsContext";
import { Link } from "react-router";

const GroupCard = ({ data }) => {
  const { formatDate } = use(GroupsContext);
  const formattedDate = formatDate(data.startDate);

  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={data.groupPhoto} className="max-h-80" alt="group banner" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{data.groupName}</h2>
        <p className="text-xl">{data.category}</p>
        <p className="text-lg text-gray-500">
          <span className="text-base mr-2 font-bold">Meeting Place: </span>
          {data.meetingLocation}
        </p>
        <p className="text-lg text-gray-500">
          <span className="text-base mr-2 font-bold">Maximum Members: </span>
          {data.maxMembers}
        </p>
        <p className="text-base font-bold">Start Date: </p>
        <p className="text-lg">{formattedDate}</p>
        <Link to={`/groupDetails/${data._id}`}>
          <button className="btn btn-primary w-full">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
