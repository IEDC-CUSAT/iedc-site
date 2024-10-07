"use client";

import Image from "next/image";
import IEDCLogo from "../../public/images/iedc-logo.svg";

const Footer = () => {
  return (
    <footer id="contact" className="flex flex-col items-center bg-[#003C43]">
      <div className="flex w-full max-w-7xl flex-col gap-y-8 border-b-[1px] border-white px-6 py-6 md:flex-row md:py-16">
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="inline-block rounded-lg bg-white p-1">
            <Image src={IEDCLogo} alt="IEDC Logo" className="h-auto w-auto" />
          </div>
        </div>

        <div className="hidden flex-1 md:flex">
          <nav aria-labelledby="quick-links">
            <h2 id="quick-links" className="sr-only">
              Quick Links
            </h2>
            <div className="flex flex-col gap-y-3 md:mx-auto">
              <p className="font-playfair text-2xl font-normal text-white">
                Quick links
              </p>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Home Page"
              >
                Home
              </a>
              <a
                href="#about"
                className="font-raleway text-base font-normal text-white"
                aria-label="About Us"
              >
                About
              </a>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Events"
              >
                Event
              </a>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Team"
              >
                Team
              </a>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Join Us"
              >
                Join Us
              </a>
            </div>
          </nav>
        </div>
        <div className="hidden flex-1 md:flex">
          <nav aria-labelledby="events">
            <h2 id="events" className="sr-only">
              Events
            </h2>
            <div className="flex flex-col gap-y-3 md:mx-auto">
              <p className="font-playfair text-2xl font-normal text-white">
                Events
              </p>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Upcoming Events"
              >
                Upcoming
              </a>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Completed Events"
              >
                Completed
              </a>
            </div>
          </nav>
        </div>
        <div className="hidden flex-1 md:flex">
          <nav aria-labelledby="about">
            <h2 id="about" className="sr-only">
              About
            </h2>
            <div className="flex flex-col gap-y-3 md:mx-auto">
              <p className="font-playfair text-2xl font-normal text-white">
                About
              </p>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="About Us"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="News"
              >
                News
              </a>
              <a
                href="#"
                className="font-raleway text-base font-normal text-white"
                aria-label="Blog"
              >
                Blog
              </a>
            </div>
          </nav>
        </div>
        <div className="hidden flex-1 md:flex">
          <div className="mb-auto flex flex-col gap-y-3 rounded-full bg-[#D221FF] p-4 md:mx-auto">
            <p className="font-raleway text-center text-white">Get In Touch</p>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-6 py-4">
        <p className="font-raleway text-center text-xs font-normal capitalize text-white md:text-base">
          © 2024 — IEDC CUSAT All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
