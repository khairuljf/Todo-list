import React from "react";
import ListItem from "./ListItem";


export default ({todos, setTodos})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo)=>(
                    <ListItem
                        todo={todo}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}

                    />
                ))}
            </ul>
        </div>
    )
}
