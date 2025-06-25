import React from "react";
import { Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <Slide>
      <div className="w-11/12 mx-auto space-y-6 my-8 bg-base-200 px-8 lg:px-18 pb-12 rounded-2xl">
        <h1 className="text-4xl text-center py-8">
          About Us – What is HobbyHub?
        </h1>
        <p className="text-xl">
          HobbyHub is a platform designed to bring together people with shared
          interests and passions. Whether you love painting, gaming, cooking, or
          hiking, our community helps you connect with like-minded individuals,
          form hobby groups, and engage in exciting activities.
        </p>

        <p className="text-xl">
          Our mission is to make it easy for hobby enthusiasts to meet,
          collaborate, and grow their skills while forming meaningful
          connections. With HobbyHub, you can explore existing groups, create
          your own, and participate in meetups—all in one place!
        </p>
      </div>
    </Slide>
  );
};

export default AboutUs;
