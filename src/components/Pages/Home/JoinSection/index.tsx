import React from "react";

const JoinSection = () => {
  return (
    <div className="bg-main-background px-5 container">
      <div className=" grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center mt-5 order-last lg:order-first">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <h5 className=" font-semibold text-white lg:text-2xl">
                Create a Coinqo Account
              </h5>
              <p className="text-[#A1A8B1]">
                Choose the right account type and verify your identity.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className=" font-semibold text-white lg:text-2xl">
                Fund Your Account
              </h5>
              <p className="text-[#A1A8B1]">
                Use your debit or credit card or a range of global bank deposit
                methods.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-semibold text-white lg:text-2xl">Trade</h5>
              <p className="text-[#A1A8B1]">
                Buy, sell and transfer leading cryptocurrencies.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className=" font-semibold text-white lg:text-2xl">
                Create Account
              </h5>
              <p className="text-[#A1A8B1]">
                Let's Start Your Crypto Journey Now!
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
          <img src="/images/join-image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
