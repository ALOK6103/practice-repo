import React, { useEffect, useState } from 'react'
import { getTodos, postTodo } from '../api/api'
import TodoInput from './TodoInput'
//import TodoItem from './TodoItem'
import TodoList from './TodoList'
import { deleteTodos } from '../api/api'
import axios from 'axios'
//import TodoItem from './TodoItem'
export enum TodoStatus{
    PENDING="PENDING",
    DONE="DONE"
}

export interface TodoType{

    id:number,
    text:string,
    status:TodoStatus
}

const Todo = () => {
   
    const [todos,setTodos]=useState<TodoType[]>([])
    const [statusVal,setStatusVal]=useState<boolean>(false)

    useEffect(()=>{
        handleGetTodos()
    },[])

    const handleGetTodos=()=>{
        getTodos().then(res=>
            setTodos(res)
        )
        
    }

    const handleAdd=(text:string)=>{

        const todoItem:TodoType={

            id:Date.now(),
            text,
            status:TodoStatus.PENDING
        }

        //setTodos([...todos,todoItem])

        postTodo(todoItem)
        .then(res=>{
            handleGetTodos()
        })
    }

    const deleteTodo=(id:number):void=>{

        // let newTodos=todos.filter(todo=>todo.id!==id)
        // setTodos(newTodos)
       deleteTodos(id)
      
      .then(()=>handleGetTodos())
      
    }

    const toggleTodo=(id:number)=>{
        setStatusVal(!statusVal)  
    axios.patch(`http://localhost:4000/todos/${id}`,{
       
       status:statusVal===true?TodoStatus.DONE:TodoStatus.PENDING
       

    }).then(()=>handleGetTodos())
       
    }


  return (
    <div>
        <TodoInput handleAdd={handleAdd}/>
        <TodoList data={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  )
}

export default Todo