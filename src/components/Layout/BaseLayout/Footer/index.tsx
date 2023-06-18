import React from "react";

const BaseLayoutFooter = () => {
  return (
    <div>
      <div className="bg-[#181A1F] mt-5 ">
        {/* <div className="bg-gradient-to-r from-[#D36320] to-[#F99111] h-[7rem] flex items-center">
          <div className="grid grid-cols-12 gap-4 container mx-auto">
            <div className="col-span-8 flex items-center">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-9 items-center">
                  <img src="/images/comment-icon.svg" alt="" />
                  <div className="w-4/5">
                    <p className="text-xl text-white font-bold">
                      Sign up now and start making crypto money transactions
                      safely!
                    </p>
                  </div>
                </div>
                <div>
                  <button className="text-black bg-white px-4 py-2 rounded-lg w-32">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div> */}
        <div className="px-5 grid grid-cols-12 gap-4 h-[350px] lg:h-auto text-main-primary">
          <div className="col-span-8 pt-4">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-6">
                <div className="flex gap-x-5">
                  <div>
                    <img src="/images/logo-ghost.svg" alt="" />
                  </div>
                  <div className="flex items-center ">
                    <span className="w-18 text-white text-xl mr-2">
                      Join Us
                    </span>
                    <img src="/images/tiger.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-12 my-4 w-full lg:col-span-6">
                <div className="flex items-center gap-14">
                  <div className="flex gap-10">
                    <div className="flex items-center gap-7">
                      <a
                        href="https://www.instagram.com/coinqocom/"
                        target="_blank"
                      >
                        <img src="/images/instagram.svg" alt="" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/coinqocom/"
                        target="_blank"
                      >
                        <img src="/images/in.svg" alt="" />
                      </a>
                      <a href="https://twitter.com/coinqocom" target="_blank">
                        <img src="/images/twet.svg" alt="" />
                      </a>
                      <a
                        href="https://www.youtube.com/@coinqocom"
                        target="_blank"
                      >
                        <img src="/images/youtube.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-span-3">
                <div className="flex flex-col gap-4">
                  <h6 className="text-white">Company</h6>
                  <ul>
                    <li className="text-sm text-[#A1A8B1]">About Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col gap-4">
                  <h6 className="text-white">Company</h6>
                  <ul>
                    <li className="text-sm text-[#A1A8B1]">About Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col gap-4">
                  <h6 className="text-white">Company</h6>
                  <ul>
                    <li className="text-sm text-[#A1A8B1]">About Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col gap-4">
                  <h6 className="text-white">Company</h6>
                  <ul>
                    <li className="text-sm text-[#A1A8B1]">About Us</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="/images/tiger.png"
              className="hidden w-80 absolute bottom-0"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-[#303239] py-5 flex justify-center bg-[#181A1F]">
        <div className="text-[#A1A8B1] text-xs ">
          © 2023 Coinqo. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default BaseLayoutFooter;
