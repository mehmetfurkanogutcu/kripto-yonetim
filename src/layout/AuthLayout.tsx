import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
     <main>{children}</main>
    </>
  )
}

export default AuthLayout