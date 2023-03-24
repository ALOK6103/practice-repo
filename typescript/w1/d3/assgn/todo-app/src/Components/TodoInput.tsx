import React, { useState } from 'react'


interface InputProp{
    handleAdd:(text:string)=>void
}

const TodoInput = (props:InputProp) => {

    const [text,setText]=useState("")

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
          setText(e.target.value)
    }

    const handleClick=()=>{

        props.handleAdd(text)
         
        setText("")
        
    }
    
  return (
    <div>
        <input placeholder='Type Something' value={text} onChange={handleChange} />
        <button onClick={handleClick} >Add</button>
    </div>
  )
}

export default TodoInput