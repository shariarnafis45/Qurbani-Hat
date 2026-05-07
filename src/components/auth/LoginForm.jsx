import Link from "next/link";
import React from "react";

const LoginForm = () => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <h2 className="sm:text-2xl font-semibold mb-3">Login your account</h2>
      <form className="w-xs">
        <fieldset className="fieldset  p-4">
          <label className="label font-semibold text-[#2A3D2D]">Email</label>
          <input
            type="email"
            className="input border-none bg-gray-100 focus:outline-none"
            placeholder="Enter Your E-Mail"
          />

          <label className="label font-semibold text-[#2A3D2D] mt-3">
            Password
          </label>
          <input
            type="password"
            className="input border-none bg-gray-100 focus:outline-none"
            placeholder="Enter Your Password"
          />

          <button type="submit" className="btn btn-neutral mt-4 bg-[#2A3D2D] border-none">Login</button>
        </fieldset>

      </form>
      <p className="text-[#929292] font-semibold text-xs mt-2 text-center">
          Don't Have An Account ?{" "}
          <Link href={"/signup"} className="text-[#F75B5F]  ml-1">
            Register
          </Link>
        </p>
    </div>
  );
};

export default LoginForm;
