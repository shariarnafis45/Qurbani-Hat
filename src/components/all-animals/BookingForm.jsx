"use client";
import GoogleSignIn from "@/components/auth/Google";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

import { useForm } from "react-hook-form";
import { RiShoppingCartFill } from "react-icons/ri";
import { toast } from "react-toastify";

const BookingForm = ({ animal }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const handleBookNow = async (data) => {
    toast.success(`${animal.name} Is Booked`, {
      position: "bottom-center",
      theme: "colored",
    });
    reset();
  };
  return (
    <div className="bg-white p-5 rounded-md ">
      <h2 className="text-xl font-semibold">Book {animal.name}</h2>
      <form onSubmit={handleSubmit(handleBookNow)} className="w-full">
        <fieldset className="fieldset  p-4">
          <label className="label font-semibold text-[#2A3D2D]">Name</label>
          <input
            type="text"
            className="input border-none bg-gray-200 focus:outline-none w-full"
            placeholder="Enter Your Name"
            {...register("name", { required: "Name is requred" })}
          />
          {errors.name && (
            <p className="font-semibold text-red-700">{errors.name.message}</p>
          )}
          <label className="label font-semibold text-[#2A3D2D]">Phone</label>
          <input
            type="text"
            className="input border-none bg-gray-200 focus:outline-none w-full"
            placeholder="Enter Your Phone Number"
            {...register("phone", { required: "Phone Number is requred" })}
          />
          {errors.phone && (
            <p className="font-semibold text-red-700">{errors.phone.message}</p>
          )}
          <label className="label font-semibold text-[#2A3D2D]">Email</label>
          <input
            type="email"
            className="input border-none bg-gray-200 focus:outline-none w-full"
            placeholder="Enter Your E-Mail"
            {...register("email", { required: "Email is requred" })}
          />
          {errors.email && (
            <p className="font-semibold text-red-700">{errors.email.message}</p>
          )}
          <label className="label font-semibold text-[#2A3D2D]">Address</label>
          <input
            type="text"
            className="input border-none bg-gray-200 focus:outline-none w-full"
            placeholder="Enter Your Address"
            {...register("address", { required: "Address is requred" })}
          />
          {errors.address && (
            <p className="font-semibold text-red-700">
              {errors.address.message}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-neutral mt-4 bg-[#2A3D2D] border-none rounded-full"
          >
            <RiShoppingCartFill /> Book Now
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
