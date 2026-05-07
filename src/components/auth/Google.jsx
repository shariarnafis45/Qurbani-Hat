import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const GoogleSignIn = () => {
  const handleGoogle = async()=> {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  return (
    <button onClick={handleGoogle} className="btn border-[#2A3D2D] text-[#2A3D2D] w-full rounded-lg">
      <FaGoogle /> Continue With Google
    </button>
  );
};

export default GoogleSignIn;
