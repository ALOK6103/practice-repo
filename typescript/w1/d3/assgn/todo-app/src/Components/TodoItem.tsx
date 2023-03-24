import React from 'react'
import { TodoType } from './Todo'
//import { useState } from 'react'

interface TodoItemProp{
    todo:TodoType,
    deleteTodo:(id:number)=>void
    toggleTodo:(id:number)=>void
}
const TodoItem = (props:TodoItemProp) => {
  //const [statusVal,setStatusVal]=useState<boolean>(false)
  return (
    <div>
        <h1>{props.todo.text}</h1>
        <button onClick={()=>props.toggleTodo(props.todo.id)}>{props.todo.status}</button>
        <button onClick={()=>props.deleteTodo(props.todo.id)} >Delete</button>
    </div>
  )
}

export default TodoItem