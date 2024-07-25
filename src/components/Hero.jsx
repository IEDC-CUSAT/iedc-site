"use client";

import Image from "next/image";
import IEDCLogo from "../../public/images/iedc-logo.svg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="bg-[#003C43] px-16 py-10 text-white">
        <div className="container flex flex-col items-center mx-auto my-12 md:my-24 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full p-8 lg:w-1/3">
            <h1 className="p-2 text-3xl bg-white border-2 tracking-loose rounded-xl md:text-5xl">
              <Image src={IEDCLogo} alt="IEDC Logo" />
            </h1>
            <h2 className="pt-5 mb-2 text-3xl leading-relaxed md:text-4xl md:leading-snug">
              Innovation and Entrepreneurship Development Cell, CUSAT
            </h2>
            <p className="mb-4 text-sm text-gray-50 md:text-base">
              Entrepreneurship is the bridge between the spark of innovation and
              the fire of commercialization.
            </p>
            <button className="rounded-full bg-[#D221FF] px-4 py-2 text-white hover:cursor-pointer hover:bg-[#cf52ee]">
              <Link href="#join-us">Join Us</Link>
            </button>
          </div>
          <div className="justify-center p-8 mt-12 mb-6 ml-0 md:mb-0 md:ml-12 md:mt-0 lg:w-2/3">
            <div className="flex flex-wrap content-center h-48 space-x-5">
              <div>
                <img
                  className="hidden rounded-t-full rounded-b-full mt-28 xl:block"
                  src="/images/businessidea.jpg"
                  alt="Business Idea"
                />
              </div>
              <div>
                <img
                  className="inline-block p-8 mt-24 rounded-t-full rounded-b-full md:mt-0 md:p-0"
                  src="/images/innovation.jpg"
                  alt="Innovation"
                />
              </div>
              <div>
                <img
                  className="hidden rounded-t-full rounded-b-full mt-28 lg:block"
                  src="/images/progress.jpg"
                  alt="Progress"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
