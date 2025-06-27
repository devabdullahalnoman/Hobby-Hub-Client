import React from "react";
import notfound from "./../assets/notfound.png";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center text-center lg:grid grid-cols-2 w-10/12 mx-auto my-20">
      <div className="flex items-center justify-center">
        <img src={notfound} alt="" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl my-6">Go back to Home</h1>
        <Link to="/">
          <button className="btn btn-xl btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
