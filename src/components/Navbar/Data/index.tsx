import React from 'react'

interface NavbarProps {
  dataUser: { businessUnit: string; accountName: string; uniqueIdentifier: string }
}

export const Data: React.FC<NavbarProps> = ({ dataUser }) => {
  return (
    <div>
      <div>{dataUser.businessUnit}</div>
      <div>{dataUser.accountName}</div>
      <div>{dataUser.uniqueIdentifier}</div>
    </div>
  )
}
