import React from "react";
import Banner from "../Components/Banner";
import FeaturedGroups from "../Components/FeaturedGroups";
import HowItWorks from "../Components/HowItWorks";
import AboutUs from "../Components/AboutUs";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedGroups></FeaturedGroups>
      <HowItWorks></HowItWorks>
      <AboutUs></AboutUs>
    </div>
  );
};

export default HomePage;
