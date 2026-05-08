import { getAnimals } from "@/lib/data";
import React from "react";
import AnimalCard from "../shared/AnimalCard";

const Featured = async () => {
  const animalsData = await getAnimals();

  return (
    <div className="max-w-7xl mx-auto pb-20 px-5">
      <div className=" text-center space-y-3 animate__animated  animate__fadeInUp">
        <h2 className="text-4xl font-bold">Featured Livestock</h2>
        <p className="text-[#2A3D2D]">Handpicked animals from trusted farms — ready for your Qurbani.</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-10 animate__animated  animate__fadeInUp">
        {
            animalsData.slice(0,4).map(animal=> <AnimalCard key={animal.id} animal={animal}/>)
        }
      </div>
    </div>
  );
};

export default Featured;
