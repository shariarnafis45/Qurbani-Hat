"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Sort = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const handleSort = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    params.set("sort", value);

    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <div className="font-medium ">
      <select defaultValue="l-h" onChange={handleSort} className="select  min-w-[260px] bg-white btn">
        <option value="l-h">Sort by price : Low-High</option>
        <option value="h-l">Sort by price : High - Low</option>
      </select>
    </div>
  );
};

export default Sort;
