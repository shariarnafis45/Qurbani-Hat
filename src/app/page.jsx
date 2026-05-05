import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";
import Tips from "@/components/homepage/Tips";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header>
        <Hero/>
      </header>
      <Featured/>
      <Tips/>
    </>
  );
};

export default HomePage;
