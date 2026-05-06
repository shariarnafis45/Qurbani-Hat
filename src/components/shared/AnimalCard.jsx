import { montserrat, playfair } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWeight } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";

const AnimalCard = ({ animal }) => {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden  flex flex-col ">
      <div className=" relative w-full h-[200px] p-2">
        <Image
          src={animal.image}
          fill
          alt={animal.description}
          className="  object-cover "
        />
      </div>
      <div className="p-4  mt-4 bg-white space-y-2 flex-grow">
        <h2
          className={`text-xl  ${montserrat.className}  font-bold text-[#2A3D2D]`}
        >
          {animal.name}
        </h2>
        <p className="flex items-center gap-3 text-gray-500">
          {animal.type} <GoDotFill className="text-[0.5rem] text-gray-400" />{" "}
          {animal.breed}
        </p>
        {/* details */}
        <div className="grid grid-cols-3 gap-10  ">
          <div className="">
            <div>
              <h3 className="font-semibold text-[0.9rem]">
                {animal.weight} KG
              </h3>
              <p className="text-gray-500 text-[0.8rem]">Weight</p>
            </div>
          </div>
          <div className="">
            <div>
              <h3 className="font-semibold text-[0.9rem]">{animal.age} Year</h3>
              <p className="text-gray-500 text-[0.8rem]">Age</p>
            </div>
          </div>
          <div className="  ">
            <div>
              <h3 className="font-semibold text-[0.9rem]">{animal.location}</h3>
              <p className="text-gray-500 text-[0.8rem]">Location</p>
            </div>
          </div>
        </div>
        {/* price  */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold text-[#2A3D2D]">&#2547; {animal.price}</h2>
        </div>
        {/* description */}
        <p className="font-medium text-[#2A3D2D] text-[0.9rem] ">
          {animal.description}
        </p>
      </div>
      <div className="flex flex-col justify-center  gap-2 px-2 pb-4">
        <Link
          href={"/"}
          className="btn rounded-lg  transition bg-[#2A3D2D] text-white w-full"
        >
          <button className="flex items-center gap-2 cursor-pointer font-medium">
            <RiShoppingCartFill />
            Book Now
          </button>
        </Link>
        <Link
          href={`/all-animals/${animal.id}`}
          className="btn rounded-lg  transition text-[#2A3D2D] border border-[#2A3D2D] "
        >
          <button className="flex items-center gap-2 cursor-pointer font-medium">
            <FaEye />
            View Details
          </button>
        </Link>
      </div>
      <div className="py-1.5 bg-[#2A3D2D]/10 flex justify-center text-[0.8rem] font-medium mt-3">
        <p className="flex items-center text-[#2A3D2D]">
          <MdVerifiedUser />
          Verified Farm
        </p>
      </div>
    </div>
  );
};

export default AnimalCard;
