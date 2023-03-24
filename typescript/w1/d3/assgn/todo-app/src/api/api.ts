import axios,{AxiosResponse} from "axios";
//import React from "react";
import { TodoType } from "../Components/Todo";

export const getTodos=async()=>{
    let response:AxiosResponse<TodoType[]>=await axios.get("http://localhost:4000/todos")
    return response.data
}

export const postTodo=async(todo:TodoType)=>{

    let response:AxiosResponse<TodoType>=await axios.post("http://localhost:4000/todos",todo)
    return response.data
}

export const deleteTodos=async(id:number)=>{

    await axios.delete(`http://localhost:4000/todos/${id}`)
    //return response
}

