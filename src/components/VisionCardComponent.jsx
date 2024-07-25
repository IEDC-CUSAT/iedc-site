"use client";

import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({
  weight: ["700", "600", "400"],
  subsets: ["latin"],
  variable: "--saira-font",
});

const VisionCardComponent = ({ imageSrc, heading, comment }) => {
  return (
    <div
      className={`my-6 flex flex-col items-center rounded-2xl bg-[#ffffff] p-4
        text-[#111111] transition-transform transform hover:scale-105 ${saira.variable}
        sm:w-64 md:w-64 lg:w-80 xl:w-80`}
    >
      <Image src={imageSrc} alt={heading} className="mt-3" width={80} height={80} />
      <h3 className="mt-2 text-center text-xl font-bold text-[#001D23]">
        {heading}
      </h3>
      <p className="mt-2 text-center text-[#787878]">{comment}</p>
    </div>
  );
};

export default VisionCardComponent;
