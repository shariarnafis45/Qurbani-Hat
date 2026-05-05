import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { GiCow } from "react-icons/gi";
import { MdOutlineVerifiedUser } from "react-icons/md";

const Tips = () => {
  return (
    <div className="py-20 px-5 bg-[#FCF9F2]">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Qurbani Tips</h2>
          <p className="text-[#2A3D2D] mt-3">
            Important things to keep in mind before you buy your Qurbani animal.
          </p>
        </div>
        {/* tips card container */}
        <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* tips card  */}
          <div className="min-h-[300px] rounded-lg flex flex-col justify-center items-center text-center py-10 px-5 bg-white shadow-md">
            <div className="p-3 bg-[#2A3D2D]/10 rounded-full text-6xl text-[#2A3D2D] mb-3">
              <GiCow />
            </div>
            <div className="p-2  bg-[#2A3D2D]/10 rounded-full  text-[#2A3D2D] mb-3">
              <h2 className="font-semibold">01</h2>
            </div>
            <h2 className="text-xl font-semibold mb-2">Healthy Animal</h2>
            <p className="text-[#2A3D2D]/80 text-[0.9rem]">Check the animal's eyes, skin, teeth and movement. A healthy animal is a better choice.</p>
          </div>
          <div className="min-h-[300px] rounded-lg flex flex-col justify-center items-center text-center py-10 px-5 bg-white shadow-md">
            <div className="p-3 bg-[#2A3D2D]/10 rounded-full text-6xl text-[#2A3D2D] mb-3">
              <FaCalculator />

            </div>
            <div className="p-2  bg-[#2A3D2D]/10 rounded-full  text-[#2A3D2D] mb-3">
              <h2 className="font-semibold">02</h2>
            </div>
            <h2 className="text-xl font-semibold mb-2">Proper Age</h2>
            <p className="text-[#2A3D2D]/80 text-[0.9rem]">Ensure the animal meets the Islamic age requirement for Qurbani.</p>
          </div>
          <div className="min-h-[300px] rounded-lg flex flex-col justify-center items-center text-center py-10 px-5 bg-white shadow-md">
            <div className="p-3 bg-[#2A3D2D]/10 rounded-full text-6xl text-[#2A3D2D] mb-3">
              <FaBalanceScale />
            </div>
            <div className="p-2  bg-[#2A3D2D]/10 rounded-full  text-[#2A3D2D] mb-3">
              <h2 className="font-semibold">03</h2>
            </div>
            <h2 className="text-xl font-semibold mb-2">Correct Weight</h2>
            <p className="text-[#2A3D2D]/80 text-[0.9rem]">Choose the right weight according to your Qurbani share and need.</p>
          </div>
          <div className="min-h-[300px] rounded-lg flex flex-col justify-center items-center text-center py-10 px-5 bg-white shadow-md">
            <div className="p-3 bg-[#2A3D2D]/10 rounded-full text-6xl text-[#2A3D2D] mb-3">
              <MdOutlineVerifiedUser />
            </div>
            <div className="p-2  bg-[#2A3D2D]/10 rounded-full  text-[#2A3D2D] mb-3">
              <h2 className="font-semibold">04</h2>
            </div>
            <h2 className="text-xl font-semibold mb-2">Trusted Seller</h2>
            <p className="text-[#2A3D2D]/80 text-[0.9rem]">Buy only from verified farms and trusted sellers for a safe and blessed Qurbani.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
