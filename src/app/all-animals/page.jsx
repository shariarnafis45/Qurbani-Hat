import React from "react";
import { FaAngleRight } from "react-icons/fa6";

import { getAnimals } from "@/lib/data";
import AnimalCard from "@/components/shared/AnimalCard";

export const metadata = {
  title: "QurbaniHat | All Animals",
};
const AllAnimalsPage = async () => {
  const animalsData = await getAnimals();

  return (
    <div className="bg-[#FAF9F8]">
      <div className="max-w-7xl mx-auto py-15 px-5">
        {/* heading */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h2 className={`text-4xl font-bold  text-[#2A3D2D]`}>
              All Animals
            </h2>
            <p className="flex items-center text-gray-600 mt-2 text-[0.9rem] gap-1">
              Home <FaAngleRight /> All Animals
            </p>
          </div>
          <div className="font-medium">
            <select defaultValue="l-h" className="select">
              <option value="l-h">Sort By Price: Low To High</option>
              <option value="h-l">Sort By Price: High to Low</option>
            </select>
          </div>
        </div>
        {/* animals cards section*/}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-10">
          {animalsData.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllAnimalsPage;
