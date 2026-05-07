import Featured from "@/components/homepage/Featured";
import Hero from "@/components/homepage/Hero";
import Tips from "@/components/homepage/Tips";
import TopBreeds from "@/components/homepage/TopBreeds";
import { Toast } from "@heroui/react";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header>
        <Hero/>
      </header>
      <Featured/>
      <Tips/>
      <TopBreeds/>
      
    </>
  );
};

export default HomePage;
