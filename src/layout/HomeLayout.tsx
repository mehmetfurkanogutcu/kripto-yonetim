import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default HomeLayout;
