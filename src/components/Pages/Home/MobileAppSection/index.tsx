import React from "react";

const MobileAppSection = () => {
  return (
    <div className="relative bg-[#181A1F]  text-main-primary">
      <div className=" grid grid-cols-12 gap-4 h-full">
        <div className="col-span-12 flex flex-col justify-center">
          <div className="absolute -top-5">
            <h2 className="text-white font-bold text-2xl text-center">
              Trade anytime <br /> anywhere
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D36320] to-[#F99111] inline-block text-main-primary">
                instantly
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-medium text-[#A1A8B1]">
                Scan to download, trade anytime and anywhere
              </p>
            </div>
            <div className="flex gap-4">
              <img src="/images/app-store.svg" alt="" />
              <img src="/images/google-play.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-span-4 relative">
          <img src="/images/mobile-app.png" alt="" className=" " />
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
