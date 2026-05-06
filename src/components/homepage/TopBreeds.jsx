import { montserrat } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong, FaEye, FaFire, FaUserGroup } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { MdVerifiedUser } from "react-icons/md";
import { RiShoppingCartFill } from "react-icons/ri";

const TopBreeds = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 pb-28 px-5" >
      <div className="text-center">
        <h2 className="text-4xl font-bold">Top Breeds</h2>
        <p className="text-[#2A3D2D] mt-3">
          Most popular and preferred breeds this season.
        </p>
      </div>
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {/* breed card */}
        <div className="rounded-xl shadow-lg overflow-hidden  flex flex-col ">
          <div className=" relative w-full h-[200px] p-2">
            <Image
              src={`https://i.ibb.co.com/rK8DYDtr/979994950b861bc79c53ef69c3dd35a2.jpg`}
              fill
              alt="animal Image"
              className="  object-cover "
            />
          </div>
          <div className="p-4 mt-4 bg-white space-y-2 flex-grow">
            <div className="badge bg-[#2A3D2D] rounded-md text-white "><FaFire /> Popular</div>
            <h2
              className={`text-xl  ${montserrat.className}  font-bold text-[#2A3D2D]`}
            >
              Local Deshi
            </h2>
            <p className="flex items-center gap-3 text-gray-500">
              <FaUserGroup /> 1245 + Animals
            </p>
            
            {/* price  */}
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-[#2A3D2D]">
                &#2547; 85,000 - 1,20,000
              </h2>
            </div>
            
          </div>
          <div className="flex flex-col justify-center  gap-2 p-4">
           
            <Link
              href={"/all-animals"}
              className="btn rounded-lg  transition text-[#2A3D2D] bg-[#2A3D2D]/10  "
            >
              <button className="flex items-center gap-2 cursor-pointer font-medium">
                View Animals <FaArrowRightLong />
              </button>
            </Link>
          </div>
          {/* <div className="py-1.5 bg-[#2A3D2D]/10 flex justify-center text-[0.8rem] font-medium mt-3">
            <p className="flex items-center text-[#2A3D2D]">
              <MdVerifiedUser />
              Verified Farm
            </p>
          </div> */}
        </div>
        <div className="rounded-xl shadow-lg overflow-hidden  flex flex-col ">
          <div className=" relative w-full h-[200px] p-2">
            <Image
              src={`https://i.ibb.co.com/zVDQDmxV/e821c1d06aebcbe1cd9a73d0083f286f.jpg`}
              fill
              alt="animal Image"
              className="  object-cover "
            />
          </div>
          <div className="p-4 mt-4 bg-white space-y-2 flex-grow">
            <div className="badge bg-[#2A3D2D] rounded-md text-white "><FaFire /> Popular</div>
            <h2
              className={`text-xl  ${montserrat.className}  font-bold text-[#2A3D2D]`}
            >
              Sahiwal
            </h2>
            <p className="flex items-center gap-3 text-gray-500">
              <FaUserGroup /> 892 + Animals
            </p>
            
            {/* price  */}
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-[#2A3D2D]">
                &#2547; 95,000 - 1,50,000
              </h2>
            </div>
            
          </div>
          <div className="flex flex-col justify-center  gap-2 p-4">
           
            <Link
              href={"/all-animals"}
              className="btn rounded-lg  transition text-[#2A3D2D] bg-[#2A3D2D]/10  "
            >
              <button className="flex items-center gap-2 cursor-pointer font-medium">
                View Animals <FaArrowRightLong />
              </button>
            </Link>
          </div>
          {/* <div className="py-1.5 bg-[#2A3D2D]/10 flex justify-center text-[0.8rem] font-medium mt-3">
            <p className="flex items-center text-[#2A3D2D]">
              <MdVerifiedUser />
              Verified Farm
            </p>
          </div> */}
        </div>
        <div className="rounded-xl shadow-lg overflow-hidden  flex flex-col ">
          <div className=" relative w-full h-[200px] p-2">
            <Image
              src={`https://i.ibb.co.com/nqNR2pcW/5b19fe16195347418e2d9a56b9f1b483.jpg`}
              fill
              alt="animal Image"
              className="  object-cover "
            />
          </div>
          <div className="p-4 mt-4 bg-white space-y-2 flex-grow">
            <div className="badge bg-[#2A3D2D] rounded-md text-white "><FaFire /> Popular</div>
            <h2
              className={`text-xl  ${montserrat.className}  font-bold text-[#2A3D2D]`}
            >
              Jamunapari
            </h2>
            <p className="flex items-center gap-3 text-gray-500">
              <FaUserGroup /> 1545 + Animals
            </p>
            
            {/* price  */}
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-[#2A3D2D]">
                &#2547; 30,000 - 60,000
              </h2>
            </div>
            
          </div>
          <div className="flex flex-col justify-center  gap-2 p-4">
           
            <Link
              href={"/all-animals"}
              className="btn rounded-lg  transition text-[#2A3D2D] bg-[#2A3D2D]/10  "
            >
              <button className="flex items-center gap-2 cursor-pointer font-medium">
                View Animals <FaArrowRightLong />
              </button>
            </Link>
          </div>
          {/* <div className="py-1.5 bg-[#2A3D2D]/10 flex justify-center text-[0.8rem] font-medium mt-3">
            <p className="flex items-center text-[#2A3D2D]">
              <MdVerifiedUser />
              Verified Farm
            </p>
          </div> */}
        </div>
        <div className="rounded-xl shadow-lg overflow-hidden  flex flex-col ">
          <div className=" relative w-full h-[200px] p-2">
            <Image
              src={`https://i.ibb.co.com/TqcDCKKy/f4dac0f25709489034b1da54f6eb2247.jpg`}
              fill
              alt="animal Image"
              className="  object-cover "
            />
          </div>
          <div className="p-4 mt-4 bg-white space-y-2 flex-grow">
            <div className="badge bg-[#2A3D2D] rounded-md text-white "><FaFire /> Popular</div>
            <h2
              className={`text-xl  ${montserrat.className}  font-bold text-[#2A3D2D]`}
            >
              Red Sindhi
            </h2>
            <p className="flex items-center gap-3 text-gray-500">
              <FaUserGroup /> 1045 + Animals
            </p>
            
            {/* price  */}
            <div className="mt-2">
              <h2 className="text-2xl font-semibold text-[#2A3D2D]">
                &#2547; 1,50,000 - 3,00,000
              </h2>
            </div>
            
          </div>
          <div className="flex flex-col justify-center  gap-2 p-4">
           
            <Link
              href={"/all-animals"}
              className="btn rounded-lg  transition text-[#2A3D2D] bg-[#2A3D2D]/10  "
            >
              <button className="flex items-center gap-2 cursor-pointer font-medium">
                View Animals <FaArrowRightLong />
              </button>
            </Link>
          </div>
          {/* <div className="py-1.5 bg-[#2A3D2D]/10 flex justify-center text-[0.8rem] font-medium mt-3">
            <p className="flex items-center text-[#2A3D2D]">
              <MdVerifiedUser />
              Verified Farm
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBreeds;
