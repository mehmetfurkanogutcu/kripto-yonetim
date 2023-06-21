import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const FuturesLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default FuturesLayout;
