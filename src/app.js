import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'react-uuid';

// Import component
import Header from "./components/Heaer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './styles/styles.scss';

const App = ()=>{

    //All states
const [inputText, setInputText] = useState("");
const [todos,setTodos] = useState([]);
const [status,setStatus] = useState('all');
const [error, setError] = useState(false);
const [filterTodos,setFilterTodo] = useState([]);

// Use Effect




    useEffect(() => {
        getLocalTodos();
    },[]);


    useEffect(()=>{
        filterHandler();
        saveLocalTodos();
    }, [status, todos ])

    const filterHandler = () =>{
        switch (status){
            case 'completed':
                setFilterTodo(todos.filter((todo)=>todo.completed===true))
                break;
            case 'uncompleted':
                setFilterTodo(todos.filter((todo)=>todo.completed===false))
                break;
            default:
                setFilterTodo(todos)
                break;
        }
    }


    const saveLocalTodos = () =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const getLocalTodos = ()=>{
            if(localStorage.getItem('todos')==null){
                localStorage.setItem('todos', JSON.stringify([]))
            }else{
                let localTodos =  JSON.parse(localStorage.getItem('todos'))
                setTodos(localTodos)
            }
    }

    return(
        <div className="app-wrapper">
            <Header />
            <TodoForm
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setStatus={setStatus}
                setError={setError}
                error={error}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filterTodos={filterTodos}
            />
        </div>
    )
}


ReactDOM.render( <App />, document.getElementById('app'))
