import React from "react";

const InfoSection = () => {
  return (
    <div className="lg:container pt-32 pb-10 lg:pb-32">
      <div className="grid grid-cols-12  text-main-primary lg:gap-3">
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center">
          <div className="flex flex-col items-center gap-5 bg-[#181A1F] w-[9.688rem] h-[9.688rem] lg:h-auto lg:w-auto justify-center rounded lg:bg-main-background">
            <div className="flex justify-center">
              <img
                src="/images/info-1.svg"
                className="w-5/12 lg:w-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="font-semibold text-white text-sm lg:text-2xl">
                24/7 Support
              </div>
              <div className="hidden lg:block text-base text-[#A1A8B1] text-center">
                Find your answers instantly in Coinqo Support Center. Or reach
                us 24/7 on Live Chat, phone or by email.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center">
          <div className="flex flex-col items-center gap-5 bg-[#181A1F] w-[9.688rem] h-[9.688rem] lg:h-auto lg:w-auto justify-center rounded lg:bg-main-background">
            <div className="flex justify-center">
              <img
                src="/images/info-2.svg"
                className="w-5/12 lg:w-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="font-semibold text-white text-sm lg:text-2xl">
                24/7 Support
              </div>
              <div className="hidden lg:block text-base text-[#A1A8B1] text-center">
                Find your answers instantly in Coinqo Support Center. Or reach
                us 24/7 on Live Chat, phone or by email.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center">
          <div className="flex flex-col items-center gap-5 bg-[#181A1F] w-[9.688rem] h-[9.688rem] lg:h-auto lg:w-auto justify-center rounded lg:bg-main-background">
            <div className="flex justify-center">
              <img
                src="/images/info-3.svg"
                className="w-5/12 lg:w-auto"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <div className="font-semibold text-white text-sm lg:text-2xl">
                24/7 Support
              </div>
              <div className="hidden lg:block text-base text-[#A1A8B1] text-center">
                Find your answers instantly in Coinqo Support Center. Or reach
                us 24/7 on Live Chat, phone or by email.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
