import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import NavLinks from "@/components/shared/NavLinks"

const NavBar = () => {
    const navLinks = [
        {path: '/', pathName : "Home"},
        {path: '/all-animals', pathName : "All Animals"},
    ]
  return (
    <div className="shadow-sm z-20">
      <div className="navbar max-w-7xl mx-auto items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              {navLinks.map((link, i)=> <NavLinks key={i} path={link.path}>{link.pathName}</NavLinks> )}
            </ul>
          </div>
          <Link href={"/"}>
            <Image src={Logo} height={100} width={150} alt="Qurbani-Hat-logo" />
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {navLinks.map((link, i)=> <NavLinks key={i} path={link.path}>{link.pathName}</NavLinks> )}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link href={"/signin"} className="btn bg-[#2A3D2D] text-white">
            <button >Login</button>
          </Link>
          <Link href={"/signup"} className="btn bg-[#2A3D2D] text-white">
            <button >SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
