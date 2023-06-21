import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
  }

const CoinManagementLayout = ({ children }: Props) => {
  return (
   <main>{children}</main>
  )
}

export default CoinManagementLayout