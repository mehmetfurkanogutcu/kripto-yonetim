import React from "react";
import BaseLayoutHeader from "./Header";
import BaseLayoutFooter from "./Footer";

const Baselayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-main-background min-h-screen">
      <BaseLayoutHeader />
      <div>{children}</div>
      <BaseLayoutFooter />
    </div>
  );
};

export default Baselayout;
