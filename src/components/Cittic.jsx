"use client";

import Image from "next/image";
import { Poppins, Saira } from "next/font/google";

const saira = Saira({ weight: "700", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function InfoText() {
  return (
    <div className="flex flex-col space-x-2 text-[#FFFFFF]">
      <h1 className={`antialiased text-[40px] leading-[56px] ${saira.className}`}>
        CITTIC Logo
      </h1>
      <p className={`antialiased text-[16px] leading-[26px] ${poppins.className}`}>
        CITTIC CUSAT provides a springboard to budding entrepreneurs who wish to
        enter the world of technology-based business careers. Here, bright ideas
        can be developed into products or services using advanced technology
        solutions. Our innovation center supports all aspects of making business
        ventures successful.
      </p>
    </div>
  );
}

export default function Cittic() {
  return (
    <div className="flex flex-col space-y-1 bg-[#003C43] px-[10vw] py-[8vw] lg:h-screen lg:flex-row">
      <div className="flex bg-[#003C43] md:w-1/2 md:items-center md:justify-center">
        <InfoText />
      </div>
      <div className="flex w-full bg-[#003C43]">
        <Image
          width={1500}
          height={1500}
          src="/images/citticlogo.svg"
          className="bg-[#003C43]"
          alt="CITTIC CUSAT Logo"
        />
      </div>
    </div>
  );
}
