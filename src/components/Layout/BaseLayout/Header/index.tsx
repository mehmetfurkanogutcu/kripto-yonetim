"use client";
import React, { useState } from "react";

const BaseLayoutHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="h-[3.5rem]  bg-[#181A1F] sm:bg-main-background px-5  flex items-center justify-between text-main-primary w-screen">
      <div className="flex gap-10 items-center">
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5">
            <li className="text-sm text-white hover:text-main-primary cursor-pointer">
              Market
            </li>
            <li className="text-sm text-white hover:text-main-primary cursor-pointer">
              Buy & Sell
            </li>
            <li className="text-sm text-white hover:text-main-primary cursor-pointer">
              Trade
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex items-center gap-3">
        <button className="hidden lg:block text-white px-4 py-2">
          Sign In
        </button>
        <button className="text-white text-sm bg-gradient-to-r from-[#D36320] to-[#F99111] px-2 py-1 rounded-[4px]">
          Get Started
        </button>
        <img className="lg:hidden" src="/images/hamburger.svg" alt="" />
      </div>
    </div>
  );
};

export default BaseLayoutHeader;
