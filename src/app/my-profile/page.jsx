"use client";

import MyProfileCard from "@/components/my-profile/MyProfileCard";
import { authClient } from "@/lib/auth-client";

const MyProfilePage =  () => {
  
  return (
    <div className="max-w-7xl mx-auto py-15 px-5">
      <h2 className={`text-center font-bold text-4xl`}>My Profile</h2>
      <p className="text-center mt-2 text-gray-700">
        View your account information and manage your profile
      </p>
      <div>
        <MyProfileCard/>
      </div>
    </div>
  );
};

export default MyProfilePage;
