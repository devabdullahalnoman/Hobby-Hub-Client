import React from "react";
import notfound from "./../assets/notfound.png";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="grid lg:grid-cols-2 w-11/12 mx-auto mb-8">
      <img src={notfound} alt="" />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-6">Go back to Home</h1>
        <Link to="/">
          <button className="btn btn-xl btn-primary">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
