import React from "react";

const Child=({todos,handleClick})=>{
    return (
        <div className="child">
            <h3>Child Component</h3>
                {
                    todos.map((todo,index)=>(
                        <li key={index}>
                            {todo.title}
                            {!todo.completed && <button onClick={()=>handleClick(index)}>Complete</button>}
                        </li>
                    ))
                }
        </div>
    )
}
export default Child