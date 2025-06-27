import React from "react";
import Marquee from "react-fast-marquee";

const CategoriesMarquee = () => {
  return (
    <div className="w-full bg-base-200 py-6 mt-15">
      <h2 className="text-3xl font-bold text-center mb-3">
        Explore by Category
      </h2>
      <Marquee pauseOnHover={true} speed={50} gradient={false} className="py-5">
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Programming & Web Development
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Drawing & Painting
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Photography
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Video Gaming
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Fishing
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Running
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Cooking
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Reading
        </span>
        <span className="mx-6 px-4 py-2 bg-base-100 rounded-2xl text-2xl font-medium border border-primary text-primary shadow-md">
          Writing
        </span>
      </Marquee>
    </div>
  );
};

export default CategoriesMarquee;
