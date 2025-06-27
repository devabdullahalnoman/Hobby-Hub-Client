import React from "react";
import Banner from "../Components/Banner";
import FeaturedGroups from "../Components/FeaturedGroups";
import HowItWorks from "../Components/HowItWorks";
import BlogSection from "../Components/Blog";
import CategoriesMarquee from "../Components/CategoriesMarquee";
import NewsletterSection from "../Components/NewsLetterSection";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedGroups></FeaturedGroups>
      <HowItWorks></HowItWorks>
      <CategoriesMarquee></CategoriesMarquee>
      <BlogSection></BlogSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
};

export default HomePage;
