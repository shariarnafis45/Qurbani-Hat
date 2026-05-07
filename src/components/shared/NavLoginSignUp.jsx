"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import { BeatLoader, ClipLoader } from "react-spinners";
import Avater from "@/assets/user.png";

const NavLoginSignUp = () => {
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  return (
    <div className="">
      {isPending ? (
        <BeatLoader />
      ) : user ? (
        <div className="flex gap-3 items-center">
          <p> {user.name}</p>
          <Image
            src={user.image || Avater}
            height={40}
            width={40}
            alt="User Image"
            className="rounded-full"
          />
          <Link
            onClick={handleSignOut}
            href={"/"}
            className="btn hidden sm:flex bg-[#2A3D2D] text-white"
          >
            <button className="cursor-pointer">SignOut</button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href={"/signin"} className="btn bg-[#2A3D2D] text-white">
            <button className="cursor-pointer">Login</button>
          </Link>
          <Link href={"/signup"} className="btn bg-[#2A3D2D] text-white">
            <button className="cursor-pointer">SignUp</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavLoginSignUp;
