import React from 'react'

interface ButtonProps{

    text:string;
    handleClick:()=>void
}
const Button = (props:ButtonProps) => {
  return (
    <button onClick={()=>props.handleClick()} >{props.text}</button>
  )
}

export default Button