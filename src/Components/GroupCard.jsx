import { Link } from "react-router";

const GroupCard = ({ data }) => {
  return (
    <div className="card card-xs bg-base-100 shadow-sm">
      <figure>
        <img src={data.groupPhoto} className="max-h-60" alt="group banner" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl m-3">{data.groupName}</h2>
        <p className="text-xl m-5">
          {data.description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <Link to={`/groupDetails/${data._id}`}>
          <button className="btn btn-primary w-full">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
