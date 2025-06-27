import React from "react";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";

const HowItWorks = () => {
  return (
    <Slide direction="right" triggerOnce>
      <div className="lg:w-10/12 lg:mx-auto my-10 bg-base-200 mx-2 px-4 md:px-8 lg:px-18 pb-12 rounded-2xl">
        <h1 className="text-4xl text-center py-8 font-bold">
          How It Works – Steps to Get Started
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          <div className="text-xl card bg-base-100 p-8 gap-3">
            <div className="flex items-center gap-3">
              <BsArrowRightSquareFill />
              <p className="font-bold">Sign Up & Set Up Your Profile:</p>
            </div>
            <p>
              Start your journey by creating an account and personalizing your
              profile with your interests.
            </p>
          </div>
          <div className="text-xl card bg-base-100 p-8 gap-3">
            <div className="flex items-center gap-3">
              <BsArrowRightSquareFill />
              <p className="font-bold">Discover Hobby Groups:</p>
            </div>
            <p>
              Browse through different categories and find groups that match
              your passion.
            </p>
          </div>
          <div className="text-xl card bg-base-100 p-8 gap-3">
            <div className="flex items-center gap-3">
              <BsArrowRightSquareFill />
              <p className="font-bold">Join or Create a Group:</p>
            </div>
            <p>
              Become a member of existing groups or start your own with a few
              simple steps.
            </p>
          </div>
          <div className="text-xl card bg-base-100 p-8 gap-3">
            <div className="flex items-center gap-3">
              <BsArrowRightSquareFill />
              <p className="font-bold">Participate & Engage:</p>
            </div>
            <p>
              Attend meetups, share experiences, and make lasting connections
              with hobby enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default HowItWorks;
