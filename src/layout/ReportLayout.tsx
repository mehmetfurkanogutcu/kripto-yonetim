import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ReportLayout = ({ children }: Props) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default ReportLayout;
