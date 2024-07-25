"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EventCard = ({
  heading,
  icon,
  date,
  index,
  description,
  venue,
  time,
  link,
  buttonText,
  showDetails,
}) => {
  useEffect(() => {
    // No need for GSAP animations, so this effect is empty
  }, [index]);

  return (
    <motion.article
      className="flex flex-col w-full gap-2 py-4 overflow-hidden cursor-pointer md:gap-4 md:py-6"
      key={index}
    >
      <div className="grid grid-cols-12">
        <Image
          id={`img-${index}`}
          src={icon}
          alt={`${heading} event icon`}
          className="w-full col-span-12 md:col-span-4 rounded-2xl"
          priority // Preloads the image for better SEO
        />
        <div
          id={`text-${index}`}
          className="flex flex-col justify-center col-span-12 gap-3 px-3 md:col-span-8 text-emerald-950"
        >
          <header className="flex flex-col gap-y-3">
            <h2 className="text-lg md:text-2xl">{heading}</h2>
            <p className="text-lg">{description}</p>
            {showDetails && (
              <>
                <p className="text-md md:text-base"><strong>Venue:</strong> {venue}</p>
                <p className="text-md md:text-base"><strong>Time:</strong> {time}</p>
                <p className="text-md md:text-base"><strong>Date:</strong> {date}</p>
              </>
            )}
          </header>
          <div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#cf52ee] text-black rounded-[78px] px-4 py-2 text-sm md:px-6 md:py-3 md:text-base"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default EventCard;
