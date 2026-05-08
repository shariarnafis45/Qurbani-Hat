"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { BeatLoader, ClipLoader } from "react-spinners";
import Avater from "@/assets/user.png";
import { redirect } from "next/navigation";

const NavLoginSignUp = () => {
  const [userImgSrc, setUserImgSrc] = useState(Avater);

  const handleSignOut = async () => {
    await authClient.signOut();
    redirect('/')
  };
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  useEffect(() => {
    if (user?.image) {
      setUserImgSrc(user.image);
    }
  }, [user]);

  // validation check of image url
  const isValidImageUrl = (url) => {
    return (
      typeof url === "string" &&
      (url.startsWith("http://") || url.startsWith("https://"))
    );
  };

  return (
    <div className="">
      {isPending ? (
        <BeatLoader />
      ) : user ? (
        <div className="flex gap-3 items-center">
          <Link
            href={"/my-profile"}
            className="flex gap-3 items-center"
            title="My Profile"
          >
            <p className="hidden sm:flex"> {user.name}</p>
            <Image
              src={isValidImageUrl(userImgSrc) ? userImgSrc : Avater}
              height={40}
              width={40}
              alt="User Image"
              className="rounded-full"
              onError={() => {
                e.currentTarget.onerror = null;
                setUserImgSrc(Avater);
              }}
            />
          </Link>

          <Link
            onClick={handleSignOut}
            href={"/"}
            className="btn  bg-[#2A3D2D] text-white"
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
