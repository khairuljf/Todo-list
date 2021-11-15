import React from "react";
import uuid from "react-uuid";
import isEmpty from "validator/es/lib/isEmpty";


export default ({setInputText, inputText, todos, setTodos, setStatus, setError, error })=>{
    console.log(inputText)

    const inputTextHandler= (e)=>{
        setInputText(e.target.value)

    }

    const submitTodoHandler =(e)=>{
        e.preventDefault()
        if(!inputText){
            setError(true)
        }
        else{
            setTodos([
                ...todos, {text:inputText, completed:false, id:uuid()}
            ])
            setError(false)
            setInputText("")
        }
    }

    const statusHandler = (e) =>{
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
                    placeholder="Enter list name"
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
            {error && <p className="error-message">Fill the form please.</p>}
        </div>
    )
}
