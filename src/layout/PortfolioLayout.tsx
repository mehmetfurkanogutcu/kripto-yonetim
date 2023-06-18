import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PortfolioLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default PortfolioLayout;
