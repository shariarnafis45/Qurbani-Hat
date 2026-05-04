import Image from "next/image";
import HeroImg from "@/assets/hero.png";
import { playfair } from "@/app/layout";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-10 px-5 ">
      <div className="max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center gap-6">
        <div className="text-center space-y-6">
          <h2
            className={`text-5xl sm:text-6xl ${playfair.className} font-bold `}
          >
            Smart Way to Book Your <br />{" "}
            <span className="text-[#2A3D2D]">Qurbani Animal</span>
          </h2>
          <p className="text-[#2A3D2D]">
            Browse, compare, and book premium quality animals <br /> from
            verified sellers — fast, secure, and hassle-free.
          </p>
          <Link
            href={"/all-animals"}
            className="btn bg-[#2A3D2D] text-white hover:scale-[1.1] transition"
          >
            <button className="cursor-pointer flex items-center gap-3">
              Browse Animals <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <Image src={HeroImg} width={700} height={500} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
