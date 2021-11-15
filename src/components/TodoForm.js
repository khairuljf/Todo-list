import React from "react";
import uuid from "react-uuid";


export default ({setInputText, inputText, todos, setTodos, setStatus })=>{

    const inputTextHandler= (e)=>{
        setInputText(e.target.value)

    }

    const submitTodoHandler =(e)=>{

        e.preventDefault()
        setTodos([
          ...todos, {text:inputText, completed:false, id:uuid()}
        ])
        setInputText("")
    }

    const statusHandler = (e) =>{
        console.log(e.target.value)
        setStatus(e.target.value)
    }



    return (
        <div className="todo-form">
            <form >
                <input
                    type="text"
                    className="todo-input list"
                    name="todo"
                    onChange={inputTextHandler}
                    value={inputText}
                />

                <button
                    className="todo-button"
                    type="submit"
                    onClick={submitTodoHandler}
                >

                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}
