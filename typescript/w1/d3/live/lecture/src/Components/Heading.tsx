import React from 'react'
interface HeadingProps{
    children:React.ReactNode
}
const Heading = ({children}:HeadingProps) => {
  return (
    <div>{children}</div>
  )
}

export default Heading