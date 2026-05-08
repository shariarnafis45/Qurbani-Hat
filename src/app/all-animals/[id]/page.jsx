import BookingForm from "@/components/all-animals/BookingForm";
import { getAnimalDetails } from "@/lib/data";
import Image from "next/image";

import { GoDotFill } from "react-icons/go";
export const generateMetadata = async ({params}) => {
  const {id} = await params;
  const animal = await getAnimalDetails(id);
  return {
    title: `QurbaniHat | ${animal.name}`,
    
  };
};



const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animal = await getAnimalDetails(id);

  return (
    <div className="max-w-7xl mx-auto my-15 px-5">
      <div className="flex w-11/12 gap-10 items-center justify-center flex-col lg:flex-row">
        <div>
          <Image
            className="rounded-lg"
            src={animal.image}
            width={900}
            height={500}
            alt={animal.name}
          />
        </div>
        <div className="w-full bg-slate-100">
          <div className="p-10  mt-4  space-y-2 ">
            <h2 className={`text-xl   font-bold text-[#2A3D2D]`}>
              {animal.name}
            </h2>
            <p className="flex items-center gap-3 text-gray-500">
              {animal.type}{" "}
              <GoDotFill className="text-[0.5rem] text-gray-400" />{" "}
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
                  <h3 className="font-semibold text-[0.9rem]">
                    {animal.age} Year
                  </h3>
                  <p className="text-gray-500 text-[0.8rem]">Age</p>
                </div>
              </div>
              <div className="  ">
                <div>
                  <h3 className="font-semibold text-[0.9rem]">
                    {animal.location}
                  </h3>
                  <p className="text-gray-500 text-[0.8rem]">Location</p>
                </div>
              </div>
            </div>
            {/* price  */}
            <div className="mt-2">
              <h2 className="text-2xl font-bold text-[#2A3D2D]">
                &#2547; {animal.price}
              </h2>
            </div>
            {/* description */}
            <p className="font-medium text-[#2A3D2D] text-[0.9rem] ">
              {animal.description}
            </p>
           
            {/* Booking Form */}
          </div>
            <div className="p-5" id="book">
              <BookingForm animal={animal}/>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
