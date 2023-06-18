import Image from "next/image";
import React from "react";
import HeroSectionCarousel from "./Carousel";

const HeroSection = () => {
  return (
    <div className=" relative text-main-primary flex flex-col justify-center items-center mb-10 w-screen">
      <div className="">
        <img src="/images/hero-banner.png" className="w-screen" alt="" />
        <div className="absolute -bottom-32 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2 flex flex-col lg:items-start  justify-center gap-5 min-w-[75%]">
          <h1 className="text-white text-[32px] lg:text-[52px] text-center lg:text-left font-bold">
            Feel The Power
            <br />
            Run to
            <span className="text-main-primary"> Win</span>
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-3 w-full">
            <button className="text-white bg-[#2C3138] px-5 py-3 rounded-lg w-full lg:hidden">
              Sign In
            </button>
            <button className="text-white bg-gradient-to-r from-[#D36320] to-[#F99111] px-5 py-3 rounded-lg w-full lg:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute -bottom-16 w-full">
        <HeroSectionCarousel />
      </div> */}
    </div>
  );
};

export default HeroSection;
