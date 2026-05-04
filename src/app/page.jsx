import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header>
        <Hero/>
      </header>
      <Featured/>
    </>
  );
};

export default HomePage;
