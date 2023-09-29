import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./Context/productcontext";
//import { AppContext } from "./Context/productcontext";

const About = () => {
  const { myName } = /* useContext(AppContext) */ useProductContext();

  const data = {
    name: "Nick Ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
