import React from 'react'
import { TodoType } from './Todo'

import TodoItem from './TodoItem'

interface TodoListProp{
    data:(TodoType[])
    deleteTodo:(id:number)=>void
    toggleTodo:(id:number)=>void
}
const TodoList = (props:TodoListProp) => {
  return (
    <div>
        {props.data.map(todo=>
            <TodoItem key={todo.id} todo={todo} deleteTodo={props.deleteTodo} toggleTodo={props.toggleTodo} />
        )}
    </div>
  )
}

export default TodoList