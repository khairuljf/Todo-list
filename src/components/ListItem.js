import React from 'react';


const ListItem = ({todo, todos, setTodos})=>{

    const deleteHandler = (e)=>{
        setTodos(todos.filter((el)=>el.id !== todo.id ))
    }

    const completeHandler = (e) =>{
            console.log(e)
    }

    return(
        <div className="todo">
            <li className="todo-item">{todo.text}</li>
            <button className="complete-btn"
                    onClick={completeHandler}

            ><i className="fas fa-check"></i></button>
            <button
                className="trash-btn"
                onClick={deleteHandler}
            ><i className="fas fa-trash"></i></button>
        </div>
    )
}

export  default ListItem;