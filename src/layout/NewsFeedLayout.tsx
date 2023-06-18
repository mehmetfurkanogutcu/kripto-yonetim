import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NewsFeedLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default NewsFeedLayout;
