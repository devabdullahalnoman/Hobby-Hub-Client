import React from "react";
import { Link } from "react-router";

const FeaturedGroupsCard = ({ group }) => {
  return (
    <div className="mr-8">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={group.groupPhoto}
            className="max-h-64 w-full"
            alt="group banner"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{group.groupName}</h2>
          <p>{group.description}</p>
          <Link to={`/groupDetails/${group._id}`}>
            <button className="btn btn-primary w-full">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGroupsCard;
