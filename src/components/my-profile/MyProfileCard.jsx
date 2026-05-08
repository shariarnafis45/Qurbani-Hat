"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PropagateLoader } from "react-spinners";
import Avater from "@/assets/user.png";
import { toast } from "react-toastify";

const MyProfileCard = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const { data: session } = await authClient.getSession();
      const user = session?.user;

      setUser(user);
    };
    getUser();
  }, []);

  // Update form
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const handleUpdateBtn = async (data) => {
    await authClient.updateUser({
      image: data.photo,
      name: data.name,
    });

    setUser((prev) => ({
      ...prev,
      name: data.name,
      image: data.photo,
    }));
    reset();
    document.getElementById("my_modal_1").close();
    toast.success("Information Succesfully Updated", {
      position: "bottom-center",
      theme: "colored",
    });
  };

  // validation check
  const isValidImageUrl = (url) => {
    return (
      typeof url === "string" &&
      (url.startsWith("http://") || url.startsWith("https://"))
    );
  };
  if (!user) {
    return (
      <div className=" min-h-[60vh] flex justify-center items-center">
        <PropagateLoader className="" color="#2A3D2D" />
      </div>
    );
  }
  return (
    <div className="p-7  shadow-lg rounded-md max-w-2xl mx-auto mt-7">
      <div className="flex flex-col items-center">
        <Image
          src={isValidImageUrl(user?.image) ? user?.image : Avater}
          width={130}
          height={100}
          alt={user?.name}
          className="rounded-full"
        />
        <h2 className="text-2xl font-bold mt-6">{user?.name}</h2>
        <p className="text-gray-700 text-[0.9rem]">{user?.email}</p>
      </div>
      <div className="pt-10 border-t border-[#2A3D2D]/10 mt-7">
        <div>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-[#2A3D2D]/10 text-xl text-[#2A3D2D]">
              <FaUser />
            </div>
            <div>
              <h3 className="font-semibold">Full Name </h3>
              <p className="text-[0.9rem]">{user?.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="p-2 rounded-full bg-[#2A3D2D]/10 text-xl text-[#2A3D2D]">
              <MdEmail />
            </div>
            <div>
              <h3 className="font-semibold">Email Address </h3>
              <p className="text-[0.9rem]">{user?.email}</p>
            </div>
          </div>
        </div>
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn btn-neutral mt-8 bg-[#2A3D2D] border-none w-full"
        >
          <FaEdit /> Update Information
        </button>

        {/* modal  */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box relative">
            <form
              onSubmit={handleSubmit(handleUpdateBtn)}
              className="w-full mt-7"
            >
              <fieldset className="fieldset   p-4">
                <label className="label font-semibold text-[#2A3D2D]">
                  Name
                </label>
                <input
                  type="text"
                  className="input border-none bg-gray-100 focus:outline-none w-full"
                  placeholder="Enter Your Name"
                  {...register("name", { required: "Name is requred" })}
                />
                {errors.name && (
                  <p className="font-semibold text-red-700">
                    {errors.name.message}
                  </p>
                )}
                <label className="label font-semibold text-[#2A3D2D]">
                  Photo URL
                </label>
                <input
                  type="text"
                  className="input border-none bg-gray-100 focus:outline-none w-full"
                  placeholder="Enter Your Photo URL"
                  {...register("photo", { required: "Photo URL is requred" })}
                />
                {errors.photo && (
                  <p className="font-semibold text-red-700">
                    {errors.photo.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-neutral mt-4 bg-[#2A3D2D] border-none"
                >
                  <FaEdit /> Update Information
                </button>
              </fieldset>
            </form>
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              className="text-4xl text-[#2A3D2D] absolute right-5 top-5 cursor-pointer"
            >
              <IoMdCloseCircle />
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyProfileCard;
