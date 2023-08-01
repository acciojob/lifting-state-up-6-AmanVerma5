import React from "react";
import Child from "./Child";
import { useState } from "react";

const Parent=()=>{

    let [todos,setTodos]=useState([
        {
            title:"Learn React"
        },
        {
            title:"Build a React App"
        },
        {
            title:"Deploy the React App"
        }
    ])
 
    function handleClick(index){

        let updatedmap=todos.map((todo,i)=>{
            if(i==index){
                return{
                    ...todo,
                    completed:true
                }
            }
            return todo;
        })

        setTodos(updatedmap)
    }



    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child todos={todos} handleClick={handleClick}/>
        </div>
    )
}

export default Parent