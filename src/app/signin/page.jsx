"use client";
import GoogleSignIn from "@/components/auth/Google";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleLoginSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(`${error.message}`, {
        position: "bottom-center",
        theme: "colored",
      });
    }
    if (res) {
      toast.success("SignIn Succesfull", {
        position: "bottom-center",
        theme: "colored",
      });
    }
  };

  return (
    <div className="bg-slate-100 ">
      <div className="flex justify-center items-center max-w-7xl mx-auto py-15  px-5">
        <div className="bg-white sm:p-10 p-4 rounded-lg">
          <h2 className="sm:text-2xl font-semibold mb-3">Login your account</h2>
          <form onSubmit={handleSubmit(handleLoginSubmit)} className="sm:w-xs">
            <fieldset className="fieldset  p-4">
              <label className="label font-semibold text-[#2A3D2D]">
                Email
              </label>
              <input
                type="email"
                className="input border-none bg-gray-100 focus:outline-none w-full"
                placeholder="Enter Your E-Mail"
                {...register("email", { required: "Email is requred" })}
              />
              {errors.email && (
                <p className="font-semibold text-red-700">
                  {errors.email.message}
                </p>
              )}

              <label className="label font-semibold text-[#2A3D2D] mt-3">
                Password
              </label>
              <input
                type="password"
                className="input border-none bg-gray-100 focus:outline-none"
                placeholder="Enter Your Password"
                {...register("password", { required: "Password is requred" })}
              />
              {errors.password && (
                <p className="font-semibold text-red-700">
                  {errors.password.message}
                </p>
              )}

              <button
                type="submit"
                className="btn btn-neutral mt-4 bg-[#2A3D2D] border-none"
              >
                Login
              </button>
            </fieldset>
          </form>
          <p className="text-[#929292] font-semibold text-xs mt-2 text-center">
            Don't Have An Account ?{" "}
            <Link href={"/signup"} className="text-[#F75B5F]  ml-1">
              Register
            </Link>
          </p>
          <div className="space-y-4 mt-4">
            <GoogleSignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
