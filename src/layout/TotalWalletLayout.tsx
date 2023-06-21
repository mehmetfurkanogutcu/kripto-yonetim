import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TotalWalletLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default TotalWalletLayout;
