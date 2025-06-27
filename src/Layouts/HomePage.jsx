import React from "react";
import Banner from "../Components/Banner";
import FeaturedGroups from "../Components/FeaturedGroups";
import HowItWorks from "../Components/HowItWorks";
import BlogSection from "../Components/Blog";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedGroups></FeaturedGroups>
      <HowItWorks></HowItWorks>
      <BlogSection></BlogSection>
    </div>
  );
};

export default HomePage;
