import React from "react";
import ListItem from "./ListItem";


export default ({todos, setTodos, filterTodos})=>{
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo)=>(
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
