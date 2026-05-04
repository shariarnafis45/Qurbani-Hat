"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({ children, path }) => {
  const pathName = usePathname();
  return (
    <li>
      <Link className={`${pathName === path && "border-b-2 borde-[#2A3D2D] text-[#2A3D2D]"} rounded-none`} href={path}>{children}</Link>
    </li>
  );
};

export default NavLinks;
