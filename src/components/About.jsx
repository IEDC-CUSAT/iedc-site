"use client";

import Image from "next/image";
import tick from "../assets/check.png";
import React from "react";
import { Saira, Catamaran, Poppins } from "next/font/google";

const saira = Saira({ weight: "700", subsets: ["latin"] });
const catamaran = Catamaran({ weight: "600", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

function Check({ data }) {
  return (
    <div className="flex flex-row items-center space-x-3">
      <Image src={tick} alt="Check icon" className="w-5 h-5" />
      <p className={`${poppins.className} text-md`}>{data}</p>
    </div>
  );
}

function InfoText() {
  return (
    <div className="flex flex-col p-4 text-[#171A1F]">
      <div className="text-[40px] leading-[56px] antialiased">
        <h1 className={saira.className}>ABOUT US</h1>
      </div>
      <div className="w-full py-3 text-[16px] leading-[26px] antialiased">
        <p className={`${poppins.className} text-lg`}>
          IEDC CUSAT is a government-funded organization that aims to promote
          entrepreneurship among students and young professionals in India. We
          foster a culture of innovation and provide necessary resources to
          budding entrepreneurs.
        </p>
      </div>
      <div className="text-[22px] leading-[56px] antialiased">
        <h2 className={catamaran.className}>What We Offer</h2>
      </div>
      <div className="flex flex-col text-[16px] leading-[26px] antialiased">
        <Check data="Provides various training and resources for future entrepreneurs" />
        <Check data="Entrepreneurship-related workshops, seminars, and competitions" />
        <Check data="Offers incubation facilities for start-ups at CITTIC, CUSAT" />
        <Check data="Opportunities to connect with like-minded individuals" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="flex flex-col bg-[#E3FEF7] px-[10vw] py-[9vw] md:flex-col lg:h-screen lg:flex-row">
      <div className="w-full bg-[#E3FEF7] md:h-full md:shrink">
        <div className="flex mx-auto my-auto">
          <InfoText />
        </div>
      </div>
      <div className="flex bg-[#E3FEF7]">
        <Image
          width={1536}
          height={1536}
          src="/images/about.jpg"
          alt="IEDC CUSAT - About Us"
          className="rounded-b-3xl rounded-t-2xl border-2 md:w-[500px] lg:h-[500px] lg:w-[1000px]"
        />
      </div>
    </div>
  );
}
